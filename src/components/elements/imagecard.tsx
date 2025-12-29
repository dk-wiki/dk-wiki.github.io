import { GlfxImage, type Effects } from "@/components/elements/image";

type Props = {
    src: string;
    alt: string;
    position?: "left" | "right" | "center";
    width?: string;
    caption?: string;
    effects?: Effects;
};

export default function ImageCard({
    src,
    alt,
    position = "right",
    width = "300px",
    caption,
    effects
}: Props) {
    return (
        <div className={`box-wrapper float-${position}`}>
            <div className="box-shadow"></div>
            <div className={`box block float-${position}`} style={{ maxWidth: width }}>
                <div className="image-wrapper">
                    <GlfxImage src={src} alt={alt} effects={effects} />
                </div>
                {caption && <div className="caption">{caption}</div>}
            </div>
        </div>
    );
}
