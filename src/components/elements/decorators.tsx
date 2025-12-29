export function Horizontal() {
    return (
        <hr className="divider" />
    );
}

import { useLayoutEffect, useRef, useState } from "react";

interface HorizontalProps {
    tileRound?: boolean;
    tileSize?: number;
    className?: string;
    trimEnds?: boolean;
}

export function RoundedHorizontal({ tileRound = false, tileSize = 1, className = "", trimEnds = false }: HorizontalProps) {
    const ref = useRef<HTMLHRElement>(null);
    const [width, setWidth] = useState<string | number>("auto");

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el || !el.parentElement) return;

        const calc = () => {
            const parent = el.parentElement;
            if (!parent) return;

            const floatEls = Array.from(parent.children).filter(
                child =>
                    child !== el &&
                    window.getComputedStyle(child).float !== "none"
            );

            let floatWidth = 0;
            for (const floatEl of floatEls) {
                const rect = floatEl.getBoundingClientRect();
                floatWidth += rect.width;
            }

            const parentWidth = parent.clientWidth;
            const availableWidth = parentWidth - floatWidth;

            const adjust = trimEnds ? 2 : 0;
            const snapped = tileRound && tileSize > 0
                ? (Math.round(availableWidth / (2*tileSize))*2 - adjust - 1) * tileSize
                : availableWidth;

            setWidth(snapped);
        };

        const observer = new ResizeObserver(calc);
        observer.observe(el.parentElement);
        calc();

        return () => observer.disconnect();
    }, [tileRound, tileSize]);

    return (
        <div className="flex justify-center" style={{ overflow: "hidden" }}>
            <hr
                ref={ref}
                className={`divider ${className}`}
                style={{ width }}
            />
        </div>
    );
}

type StableImageProps = {
    src: string,
    alt?: string,
    className?: string
}

export function StableImage({ src, alt = "An image", className = "" }: StableImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
        />
    );
}