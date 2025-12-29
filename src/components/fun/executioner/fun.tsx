import Paragraph from "@/components/elements/text";
import { useEffect, useMemo, useRef, useState } from "react";

type Crime = {
    label: string,
    eaten: boolean,
    disgust?: boolean,
}

const REAL_CRIMES: Crime[] = [
    {
        label: 'Murder or manslaughter',
        eaten: true,
    },
    {
        label: 'Treason',
        eaten: true,
    },
    {
        label: 'Rebellion or insurrection',
        eaten: true,
    },
    {
        label: 'Arson',
        eaten: true,
    },
    {
        label: 'Witchcraft or sorcery',
        eaten: true,
    },
    {
        label: 'Regicide',
        eaten: true,
    },
    {
        label: 'Robbery or burglary',
        eaten: true,
    },
]

const FUN_CRIMES: Crime[] = [
    {
        label: "Posting vore in general",
        eaten: true,
    },
    {
        label: "Being French",
        eaten: true,
    },
    {
        label: "Unmasked in public",
        eaten: true,
    },
    {
        label: "Being a furry",
        eaten: false,
        disgust: true,
    },
    {
        label: "Cat Calling the Executioner",
        eaten: false,
    }
]

const CRIMES = [...REAL_CRIMES, ...FUN_CRIMES].sort((a, b) => a.label.localeCompare(b.label))
const DEFAULT_SENTENCE: string = "Death by the Axe"
const HUNGER_SENTENCE: string = "Death by Digestion"

const EATEN_COMMENTS: string[] = [
    "You're going in my stomach for sure.",
    "My belly awaits your arrival.",
    "My waistline will regret this, but I certainly will not.",
    "I've eaten people for lesser crimes.",
    "How lucky! For me, at least.",
    "Beats Greggs, I suppose.",
    "What? You think I got to this size without eating people?",
    "Say hello to the last guy, if he's still in there."
]

const NO_EATING_COMMENTS: string[] = [
    "I'm using I'm axe for this one.",
    "I can't eat someone who's into it.",
    "Such a waste of a filling meal.",
    "You don't deserve to be eaten.",
]

const DISGUST_COMMENTS: string[] = [
    "Of all the crimes, you chose that one?",
    "I feel bad for my axe...",
    "Executing you would be my pleasure!",
]

const LOADING_MESSAGES: string[] = [
    "Assessing criminal history",
    "Evaluating how tasty you look",
    "Considering standard sentencing",
    "Checking axe sharpness",
    "Calculating your digestion time",
    "Reading through paperwork",
    "Asking for the Dungeon Keeper's Opinion",
    "Measuring hunger levels",
    "Checking integrity of clothes",
    "Massaging belly to assess stomach space",
]

const randMs = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const pickFive = (src: string[]) => {
    const copy = [...src];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(5, copy.length));
};


const choice = (src: string[]) => {
    if (src.length === 0) return null;
    const i = Math.floor(Math.random() * src.length);
    return src[i];
};


const getExecutionerMessage = (crime: Crime | null): string => {
    if (!crime) return "I've never heard of this crime";

    if (crime.disgust) return choice(DISGUST_COMMENTS) ?? DISGUST_COMMENTS[0];
    if (crime.eaten) return choice(EATEN_COMMENTS) ?? EATEN_COMMENTS[0];
    return choice(NO_EATING_COMMENTS) ?? NO_EATING_COMMENTS[0];
}

const getSentencing = (crime: Crime | null) => {
    return crime?.eaten ? HUNGER_SENTENCE : DEFAULT_SENTENCE
}


const ExecutionerFun = () => {
    const [selectedCrime, setSelectedCrime] = useState<Crime | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
    const [execMessage, setExecMessage] = useState<string>("Don't keep me waiting.")
    const [sentencing, setSentencing] = useState<string | null>(null)

    const timerRef = useRef<number | null>(null);
    const idxRef = useRef(0);

    const cycleSet = useMemo(() => (loading ? pickFive(LOADING_MESSAGES) : []), [loading]);

    useEffect(() => {
        return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
    }, []);

    useEffect(() => {
        if (!loading) return;

        if (cycleSet.length === 0) {
            setLoading(false);
            setLoadingMessage("Sentencing complete");
            setSentencing(getSentencing(selectedCrime));
            setDisabled(false);
            return;
        }

        idxRef.current = 0;
        setLoadingMessage(cycleSet[0]);

        const tick = () => {
            const next = idxRef.current + 1;

            if (next >= cycleSet.length) {
                setLoading(false);
                setLoadingMessage("Sentencing complete");
                setDisabled(false);
                setExecMessage(getExecutionerMessage(selectedCrime))
                setSentencing(getSentencing(selectedCrime))
                return;
            }

            idxRef.current = next;
            setLoadingMessage(cycleSet[next]);
            timerRef.current = window.setTimeout(tick, randMs(500, 2000));
        };

        timerRef.current = window.setTimeout(tick, randMs(500, 2000));

        return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
    }, [loading, cycleSet]);

    const onSubmit = () => {
        if (!selectedCrime) return;
        setDisabled(true);
        setLoading(true);
        setLoadingMessage(null);
        setExecMessage("...")
    };

    return (
        <div>
            <Paragraph>
                While not directly responsible for sentencing, he is often given freedom
                to punish how he deems fit. Select a crime below to see what he would do
                to you.
            </Paragraph>

            <div className="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-8 justify-center items-center md:items-start">
                <div className="w-full md:w-32 flex-shrink-0 flex flex-col items-center justify-end">
                    <div className="w-full relative rounded-xl bg-white px-3 py-1 text-sm mb-2 text-center">
                        {execMessage}
                        <img
                            src="tiles/speech_bubble_wisp.svg"
                            className="h-6 absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0"
                        />
                    </div>
                    <img
                        src="/media/executioner-sitting.gif"
                        className="max-w-[8rem] md:max-w-[10rem] h-auto object-contain mx-auto"
                    />
                </div>

                <div className="w-full flex flex-col items-center text-center md:text-left flex-1">
                    <div className="fun w-full p-4 md:p-10">
                        <span className="title text-2xl md:text-4xl">
                            {sentencing || "Sentence Pending..."}
                        </span>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 items-center">
                            <span>Crime:</span>
                            <CrimeSelector onChange={setSelectedCrime} disabled={disabled} />
                            <div
                                role="button"
                                aria-disabled={disabled}
                                tabIndex={disabled ? -1 : 0}
                                onClick={() => !disabled && onSubmit()}
                                className={`px-3 py-1 rounded bg-black text-white ${disabled
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-neutral-800 cursor-pointer"
                                    }`}
                            >
                                Sentence
                            </div>
                        </div>

                        {loading ? (
                            <div className="mt-4 flex items-center gap-2">
                                <Spinner colorClass="text-yellow-950" />
                                <span className="text-sm">{loadingMessage}</span>
                            </div>
                        ) : loadingMessage ? (
                            <div className="mt-4 text-sm w-full text-left">{loadingMessage}</div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );

};

const CrimeSelector = ({ onChange, disabled }: { onChange: (e: Crime | null) => void, disabled: boolean }) => {
    const optionClass = `text-sm ${disabled ? "opacity-50" : ""}`
    return (
        <select
            onChange={(e) => onChange(CRIMES.find((c) => c.label === e.target.value) ?? null)}
            className={`bg-white rounded px-2 h-full w-full ${disabled ? "opacity-50" : ""}`}
            disabled={disabled}
            defaultValue={""}
        >
            <option value="" disabled hidden className={optionClass}>
                Select an option...
            </option>
            {CRIMES.map((e, i) =>
                <option
                    value={e.label}
                    key={i}
                    className={optionClass}
                >
                    {e.label}
                </option>
            )}
        </select>
    )
}

type SpinnerProps = {
    size?: number | string;
    thickness?: number;
    colorClass?: string;
    className?: string;
};

function Spinner({
    size = 24,
    thickness = 3,
    colorClass = "text-sky-500",
    className,
}: SpinnerProps) {
    const s = typeof size === "number" ? `${size}px` : size;

    return (
        <span
            role="status"
            aria-label="Loading"
            className={`inline-block animate-spin rounded-full border-transparent border-solid ${colorClass} ${className ?? ""}`}
            style={{
                width: s,
                height: s,
                borderWidth: thickness,
                borderTopColor: "currentColor",
                borderRightColor: "currentColor",
            }}
        />
    );
}

export default ExecutionerFun;