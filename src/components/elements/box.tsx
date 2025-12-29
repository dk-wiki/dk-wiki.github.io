import { useEffect, useRef, useState, type ReactNode } from "react";

type BoxProps = {
    children: ReactNode;
    float?: "right" | "left" | "center";
    tileRound?: boolean;
    tileSize?: number;
};

const roundToNextMultiple = (num: number, mod: number) =>
    Math.ceil(num / mod) * mod;

export default function Box({
    children,
    float = "right",
    tileRound = false,
    tileSize = 20,
}: BoxProps) {
    const measureRef = useRef<HTMLDivElement | null>(null);
    const [boxSize, setBoxSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const el = measureRef.current;
        if (!el) return;

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            const roundedWidth = roundToNextMultiple(width, tileSize);
            const roundedHeight = roundToNextMultiple(height, tileSize);

            setBoxSize(prev =>
                prev.width !== roundedWidth || prev.height !== roundedHeight
                    ? { width: roundedWidth, height: roundedHeight }
                    : prev
            );
        });

        ro.observe(el);
        return () => ro.disconnect();
    }, [tileSize]);

    const wrapperStyle =
        tileRound && boxSize.width && boxSize.height
            ? {
                width: `${boxSize.width + 2 * tileSize}px`,
                height: `${boxSize.height + 2 * tileSize}px`,
            }
            : undefined;

    const floatClass = float === "center" ? "mx-auto" : `float-${float}`;

    return (
        <div className="relative block">
            <div className="box-shadow" />
            <div className={`box ${floatClass}`} style={wrapperStyle}>
                <div className="box-tl" />
                <div className="box-tr" />

                <div
                    ref={measureRef}
                    className="text-center [&>*]:mx-auto"
                    style={{ display: tileRound ? "inline-block" : "block" }}
                >
                    {children}
                </div>

                <div className="box-bl-corner" />
                <div className="box-br-corner" />
                <div className="box-bl" />
                <div className="box-bc" />
                <div className="box-br" />
            </div>
        </div>
    );
}
