import { GlfxImage, type Effects } from "@/components/elements/image";
import Box from "@/components/elements/box";

type Metadata = {
    label: string;
    value: string;
};

type Props = {
    position?: "left" | "right" | "center";
    imageSrc: string;
    caption?: string;
    heightCm: number;
    weightKg: number;
    nationality: string;
    effects?: Effects;
    meta?: Metadata[];
    tileRound?: boolean;
};

function cmToFeetInches(cm: number) {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}′${inches}″`;
}

function kgToLbs(kg: number) {
    return `${Math.round(kg * 2.20462)} lbs`;
}

const countryToCode: Record<string, string> = {
    Japan: "JP",
    "United States": "US",
    USA: "US",
    "United Kingdom": "GB",
    England: "GB",
    Italy: "IT",
    Rome: "IT",
    Greece: "GR",
    Niue: "NU",
};

function getFlagEmoji(nationality: string) {
    const match = Object.entries(countryToCode).find(([name]) =>
        nationality.toLowerCase().includes(name.toLowerCase())
    );

    if (!match) return "🌐";
    const code = match[1];
    return code.replace(/./g, char =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export default function QuickFactsCard({
    position = "right",
    imageSrc,
    caption,
    heightCm,
    weightKg,
    nationality,
    effects,
    tileRound = false,
    meta = []
}: Props) {

    return (
        <Box float={position} tileRound={tileRound}>
            <div className={`overflow-hidden quick-facts-card`}>
                <div className="block qf-image-wrapper">
                        <GlfxImage src={imageSrc} alt={caption} effects={effects} />
                </div>
                {caption && <div className="caption">{caption}</div>}
                <table className="w-full border-collapse quick-facts-table">
                    <tbody>
                        <tr>
                            <th>Height</th>
                            <td>{heightCm} cm ({cmToFeetInches(heightCm)})</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{weightKg} kg ({kgToLbs(weightKg)})</td>
                        </tr>
                        <tr>
                            <th>Nationality</th>
                            <td>
                                <span className="flag">{getFlagEmoji(nationality)}</span> {nationality}
                            </td>
                        </tr>
                        {meta.map((item, i) => (
                            <tr key={i}>
                                <th>{item.label}</th>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Box>
    );
}
