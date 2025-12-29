import { useEffect, useRef, useMemo } from "react";
import { loadScript } from "@/lib";

/**
 * All glfx.js effects that this component can apply.
 * Only the parameters you supply will be invoked – leave values `undefined` to skip an effect.
 * Coordinate‑based effects accept the raw numbers glfx.js expects.
 */
export type Effects = {
  // original demo effects
  bulgeAmount?: number; // amount −1 … +1
  vignette?: [size: number, amount: number]; // 0…1, 0…1
  // colour / tone
  brightnessContrast?: [brightness: number, contrast: number]; // −1…+1, −1…+1
  hueSaturation?: [hue: number, sat: number]; // −1…+1, −1…+1
  sepia?: number; // 0…1
  curves?: [channel: "r" | "g" | "b" | "rgb", ...points: number[]];
  // noise / sharpness
  noise?: number; // 0…1
  denoise?: number; // 0…50
  unsharpMask?: [radius: number, strength: number]; // px, 0…5
  // stylise
  ink?: number; // 0…1
  triangleBlur?: number; // radius px
  // motion / zoom
  zoomBlur?: [cx: number, cy: number, strength: number] | [strength: number];
  swirl?: [cx: number, cy: number, radius: number, angle: number];
  // lens / depth
  lensBlur?: [radius: number, brightness: number, angle: number];
  tiltShift?: [x0: number, y0: number, x1: number, y1: number, blurRad: number, gradRad: number];
  // pixelation / halftone
  hexagonalPixelate?: [cx: number, cy: number, size: number];
  dotScreen?: [cx: number, cy: number, angle: number, size: number];
  colorHalftone?: [cx: number, cy: number, angle: number, size: number];
  // geometry
  perspective?: [[number, number][], [number, number][]]; // before, after quads
};

type GlfxImageProps = {
  src: string;
  alt?: string;
  effects?: Effects;
};

/**
 * <GlfxImage> – draws an image through glfx.js, with graceful degradation.
 *
 * ‣ Shows the raw <img> immediately.
 * ‣ Once WebGL & glfx.js are ready and the image is decoded, swaps in a GPU‑driven canvas.
 * ‣ Only runs the effects you actually pass in – nothing wasted.
 *
 * The component keeps itself tidy on unmount.
 */
export function GlfxImage({ src, alt = "Image", effects = {} }: GlfxImageProps) {
  // Always ensure bulge/vignette have safe defaults; everything else stays undefined unless supplied.
  const mergedEffects = useMemo<Required<Pick<Effects, "bulgeAmount" | "vignette">> & Effects>(
    () => ({
      bulgeAmount: effects.bulgeAmount ?? 0,
      vignette: effects.vignette ?? [0, 0],
      ...effects,
    }),
    [effects]
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const fallbackCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rafId: number | undefined;
    let glCanvas: any; // fx.canvas instance
    let disposed = false;

    const abort = () => {
      disposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      glCanvas?.remove();
    };

    const run = async () => {
      await loadScript("https://evanw.github.io/glfx.js/glfx.js");
      if (disposed) return;

      const img = imgRef.current;
      const wrapper = wrapperRef.current;
      const fallback = fallbackCanvasRef.current;
      if (!img || !wrapper || !fallback) return;

      // Ensure we have actual dimensions – wait for decode() where supported.
      if (!img.complete || img.naturalWidth === 0) {
        try {
          await img.decode();
        } catch {
          /* ignore – decode isn’t critical */
        }
      }

      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        console.warn("glfx: image has no size – falling back to raw image");
        return; // leave <img> visible, nothing else to do
      }

      const w = img.naturalWidth;
      const h = img.naturalHeight;

      // Prepare fallback 2‑D canvas in case WebGL fails later
      fallback.width = w;
      fallback.height = h;
      fallback.getContext("2d")?.drawImage(img, 0, 0, w, h);

      // @ts-ignore – glfx attaches to window
      const fxCanvas = window.fx?.canvas?.();
      if (!fxCanvas) {
        console.warn("glfx: WebGL not available – sticking with 2‑D canvas");
        img.style.display = "none"; // already drawn to fallback canvas
        fallback.style.display = "block";
        return;
      }
      glCanvas = fxCanvas;
      glCanvas.classList.add("fx-canvas");
      glCanvas.getContext("webgl")?.getExtension("WEBGL_color_buffer_float");

      const texture = glCanvas.texture(img);
      // Swap in GPU canvas
      fallback.replaceWith(glCanvas);
      img.style.display = "none";

      const draw = () => {
        if (disposed) return;
        let chain: any = glCanvas.draw(texture);

        // ==== CONDITIONALLY APPLY EFFECTS ====
        const e = mergedEffects;
        // order roughly: tone → blur / distort → stylise → finish
        if (e.brightnessContrast) chain = chain.brightnessContrast(...e.brightnessContrast);
        if (e.hueSaturation) chain = chain.hueSaturation(...e.hueSaturation);
        if (typeof e.sepia === "number") chain = chain.sepia(e.sepia);
        if (typeof e.curves !== "undefined") chain = chain.curves(...e.curves);

        if (typeof e.denoise === "number") chain = chain.denoise(e.denoise);
        if (typeof e.triangleBlur === "number") chain = chain.triangleBlur(e.triangleBlur);
        if (e.lensBlur) chain = chain.lensBlur(...e.lensBlur);
        if (e.tiltShift) chain = chain.tiltShift(...e.tiltShift);
        if (e.unsharpMask) chain = chain.unsharpMask(...e.unsharpMask);

        // geometric distortions / fun stuff
        if (typeof e.bulgeAmount === "number" && e.bulgeAmount !== 0) chain = chain.bulgePinch(w / 4, h / 4, w * 0.75, e.bulgeAmount);
        if (e.zoomBlur) {
          const params = e.zoomBlur.length === 1 ? [w / 2, h / 2, e.zoomBlur[0]] : e.zoomBlur;
          chain = chain.zoomBlur(...params);
        }
        if (e.swirl) chain = chain.swirl(...e.swirl);
        if (e.perspective) chain = chain.perspective(...e.perspective);

        // pixelation / halftone
        if (e.hexagonalPixelate) chain = chain.hexagonalPixelate(...e.hexagonalPixelate);
        if (e.dotScreen) chain = chain.dotScreen(...e.dotScreen);
        if (e.colorHalftone) chain = chain.colorHalftone(...e.colorHalftone);

        // texture / stylise
        if (typeof e.noise === "number") chain = chain.noise(e.noise);
        if (typeof e.ink === "number") chain = chain.ink(e.ink);

        // finishing vignette
        if (e.vignette && (e.vignette[0] !== 0 || e.vignette[1] !== 0)) chain = chain.vignette(e.vignette[0], e.vignette[1]);

        chain.update();
        rafId = requestAnimationFrame(draw);
      };

      draw();
    };

    run();
    return abort;
  }, [src, mergedEffects]);

  return (
    <div
      ref={wrapperRef}
      className="qf-image-inner image-wrapper js-image"
      style={{ "--img-url": `url(${src})` } as React.CSSProperties}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="image"
        crossOrigin="anonymous"
        style={{ display: "block" }}
      />
      <canvas ref={fallbackCanvasRef} style={{ display: "none" }} />
    </div>
  );
}
