import { useState, useEffect, useRef, useCallback, useMemo } from "react"

interface Level {
    range: [number, number];
    title: string;
    endgame: string[];
    multiplier: number;
}

const LEVELS: readonly Level[] = [
    {
        range: [0, 20],
        title: "Protein Source",
        endgame: [
            "You may only serve as a dish ready to be eaten.",
            "You'll become Sparta's greatest warrior; or his muscles, at least.",
            "Weakness is not tolerated in Ajax's army, but it is in his stomach.",
        ],
        multiplier: 0.1,
    },
    {
        range: [20, 40],
        title: "Trainee",
        endgame: [
            "You've got potential, but you'll be using the plastic dory for now.",
            "It might be time to consider cheerleading instead of fighting.",
            "You'll need to do a lot better to win Ajax's approval.",
        ],
        multiplier: 0.2,
    },
    {
        range: [40, 60],
        title: "Hoplite",
        endgame: [
            "The fire of Sparta burns within you! Keep up the good work, soldier",
            "Sparta depends on you; wield your dory with valour!",
            "You will live as a worthy Spartan",
        ],
        multiplier: 0.45,
    },
    {
        range: [60, 80],
        title: "Enomotarch",
        endgame: [
            "Glory awaits you as a fierce leader; lead them well.",
            "Truly an impressive feat, Spartan!",
            "Your skill would bring your enemies to their knees.",
        ],
        multiplier: 0.6,
    },
    {
        range: [80, 100],
        title: "Lochagos",
        endgame: [
            "You're a natural Spartan! Many would be honoured to fight for you.",
            "Ajax is impressed.",
            "You would make a legendary Spartan leader!",
        ],
        multiplier: 1,
    },
    {
        range: [100, 1000],
        title: "Ajax-like",
        endgame: [
            "Sparta bows to your glory!",
            "Your might rivals that of Ajax; he's jealous.",
            "History books will never forget your glory!",
        ],
        multiplier: 2,
    },
] as const;

const DURATION_MS = 15_000;
const INTERVAL_MS = 50;
const TOTAL_CLICKS = 120;
const MAX_CLICKS = 125;
const COOLDOWN_MS = 2_000;

const getLevel = (score: number): Level => {
    const scale = TOTAL_CLICKS / 100;
    for (const lvl of [...LEVELS].reverse()) {
        const [min, max] = lvl.range;
        if (score >= min * scale && score <= max * scale) return lvl;
    }
    return LEVELS[0];
};

const getMultiplier = (score: number) => getLevel(score).multiplier;

const SpamTest = () => {
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startRef = useRef<number>(0);
    const clicksRef = useRef<number>(0);
    const endedRef = useRef<boolean>(false);

    const [clicks, setClicks] = useState(0);
    const [timeLeft, setTimeLeft] = useState(DURATION_MS);
    const [active, setActive] = useState(false);
    const [finalMsg, setFinalMsg] = useState<string | null>(null);
    const [cooldown, setCooldown] = useState(false);

    const startGame = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);

        startRef.current = Date.now();
        clicksRef.current = 0;
        endedRef.current = false;

        setClicks(0);
        setTimeLeft(DURATION_MS);
        setFinalMsg(null);
        setActive(true);
    }, []);

    const endGame = useCallback(() => {
        if (endedRef.current) return;
        endedRef.current = true;

        const finalClicks = clicksRef.current;
        const level = getLevel(finalClicks);
        const msg = level.endgame[Math.floor(Math.random() * level.endgame.length)];

        setFinalMsg(msg);
        setActive(false);
        setCooldown(true);

        setTimeout(() => setCooldown(false), COOLDOWN_MS);
    }, []);

    const handleClick = useCallback(() => {
        if (cooldown) return;

        if (!active) {
            startGame();
            return;
        }

        if (timeLeft <= 0) return;

        setClicks(prev => {
            const next = Math.min(prev + 1, MAX_CLICKS);
            clicksRef.current = next;
            return next;
        });
    }, [active, cooldown, startGame, timeLeft]);

    useEffect(() => {
        if (!active) return;

        startRef.current = Date.now();

        timerRef.current = setInterval(() => {
            const elapsed = Date.now() - startRef.current;
            const remaining = Math.max(DURATION_MS - elapsed, 0);
            setTimeLeft(remaining);

            setClicks(prev => {
                const decayed = Math.max(0, prev - getMultiplier(prev));
                clicksRef.current = decayed;
                return decayed;
            });

            if (remaining === 0) {
                clearInterval(timerRef.current!);
                endGame();
            }
        }, INTERVAL_MS);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [active, endGame]);

    const progressPercent = useMemo(() => Math.min((clicks / TOTAL_CLICKS) * 100, 100), [clicks]);
    const currentLevel = useMemo(() => getLevel(clicks), [clicks]);
    const longestMsg = useMemo(() => LEVELS.flatMap(l => l.endgame)
        .reduce((a, b) => (b.length > a.length ? b : a), ""), []);

    return (
        <div className="py-4 w-full max-w-md mx-auto">
            <p className="w-full text-center uppercase rank-title text-xl">
                {finalMsg || active ? currentLevel.title : "BEGIN YOUR TRIAL"}
            </p>
            <div className="flex flex-row items-center">
                <button onClick={handleClick} style={{ zIndex: 2 }} disabled={cooldown}>
                    <img
                        className={`w-16 h-16 ${cooldown ? "filter saturate-0" : ""}`}
                        src="/tiles/ajax-plate.png"
                        alt="Spam Button"
                    />
                </button>
                <div className="-ml-2 flex-1 relative">
                    <ProgressBar progressPercent={progressPercent} />
                    <p className="text-sm text-gray-600 absolute right-0">
                        {((active ? timeLeft : finalMsg ? 0 : DURATION_MS) / 1000).toFixed(1)}s left
                    </p>
                </div>
            </div>
            <div className="text-center mt-2 relative">
                <p className="invisible">{longestMsg}</p>
                <p className="absolute top-0 left-0 right-0 mt-0">
                    {finalMsg ?? "Click on Ajax's aspis (shield) as much as you can before the time runs out."}
                </p>
            </div>
        </div>
    );
};

const ProgressBar = ({ progressPercent }: { progressPercent: number }) => {
    const labelCount = LEVELS.length - 1;
    const labelPositions = useMemo(
        () => Array.from({ length: labelCount }, (_, i) => (i + 1) * (100 / labelCount)),
        [labelCount]
    );

    const scale = Math.min(Math.max(progressPercent, 0), 100) / 100;

    return (
        <div className="relative h-8 rounded overflow-hidden" style={{ backgroundColor: "#c9c7c1" }}>
            <div
                className="h-full origin-left transition-transform duration-100"
                style={{ transform: `scaleX(${scale})`, backgroundColor: "#CE063E", width: "100%" }}
            />
            {labelPositions.map((pos, i) => (
                <div
                    key={i}
                    className="absolute top-0 h-full border-l border-black opacity-50"
                    style={{ left: `${pos}%` }}
                />
            ))}
        </div>
    );
};

export default SpamTest;

