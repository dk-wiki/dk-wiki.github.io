import React, { useEffect, useState } from 'react';

type Units = 'metric' | 'imperial';

interface FormData {
    units: Units;
    height: string;
    weight: string;
    armor: boolean;
}

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        units: 'metric',
        height: '',
        weight: '',
        armor: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const toggleUnits = () => {
        setFormData(prev => ({
            ...prev,
            units: prev.units === 'metric' ? 'imperial' : 'metric',
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { height, weight, armor } = formData;
        let h = Number(height);
        let w = Number(weight);

        if (isNaN(h) || isNaN(w) || !height || !weight) {
            setErrors('Please enter valid numeric values for height and weight.');
            setSubmitted(false);
            return;
        }

        setErrors(null);
        setSubmitted(true);

        if (formData.units === 'imperial') {
            w /= 2.20462;
            h *= 2.54;
        }

        let time = 106.44 * Math.log(h * w * 0.00005172 + 1); // (kg,cm) => (0,0) = 0, (80, 183) = 60, (500, 330) = 240
        if (armor) time += 10;
        time = Math.ceil(time);

        setTotalTime(time);
        setCountdown(time);
        setPercentage(0);
    };

    useEffect(() => {
        if (!submitted || countdown <= 0) return;

        const interval = setInterval(() => {
            setCountdown(prev => {
                const next = prev - 1;
                setPercentage(((next) / totalTime) * 100);
                if (next <= 0) clearInterval(interval);
                return next;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [submitted, countdown, totalTime]);

    return (
        <div className="flex flex-col md:flex-row w-full gap-6">
            <form onSubmit={handleSubmit} className="fun-form w-full md:basis-1/2 md:px-2">
                <label>
                    Units:
                    <div className="form-input-container">
                        {formData.units === 'metric' ? 'Metric' : 'Imperial'}
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={formData.units === 'imperial'}
                            onChange={toggleUnits}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Height:
                    <div className="form-input-container">
                        <input
                            type="text"
                            name="height"
                            className="form-text-input"
                            value={formData.height}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <span>{formData.units === 'metric' ? 'cm' : 'in'}</span>
                    </div>
                </label>
                <br />
                <label>
                    Weight:
                    <div className="form-input-container">
                        <input
                            type="text"
                            name="weight"
                            className="form-text-input"
                            value={formData.weight}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <span>{formData.units === 'metric' ? 'kg' : 'lb'}</span>
                    </div>
                </label>
                <br />
                <label>
                    Armor Used:
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        name="armor"
                        checked={formData.armor}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {errors && <div className="disclaimer-text">{errors}</div>}
                <button type="submit" className="form-button">Submit</button>
            </form>

            <div className="w-full md:basis-1/2 md:px-2">
                <h1 className="title">
                    Results
                </h1>
                {(submitted && !errors) || 1 ? (
                    <div className="flex flex-col gap-4">
                        <table className="min-w-full text-left">
                            <tbody>
                                <tr>
                                    <th className="pr-4 py-1">Units</th>
                                    <td>
                                        {formData.units === 'metric'
                                            ? `${(Number(formData.height) / 100).toFixed(2)} m, ${formData.weight} kg`
                                            : (() => {
                                                const totalInches = Number(formData.height);
                                                const feet = Math.floor(totalInches / 12);
                                                const inches = Math.round(totalInches % 12);
                                                return `${feet}'${inches}" , ${formData.weight} lbs`;
                                            })()
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th className="pr-4 py-1">Countdown</th>
                                    <td>
                                        {Math.floor(countdown / 60)}m {countdown % 60}s
                                        {" / "}
                                        {Math.floor(totalTime / 60)}m {totalTime % 60}s
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex flex-row gap-4 items-center h-20">
                            <div className="w-32 h-full flex items-center justify-center">
                                <img
                                    src={`/media/bakarr-${percentage > 0 ? "digestion" : "idle"}.gif`}
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center flex-grow h-full overflow-hidden">
                                <div className="flex flex-row items-center gap-2 h-1/2 overflow-hidden form-results">
                                    <span>Status:</span>
                                    {percentage > 0 ? <DigestionTag /> : <span> Awaiting Meal</span>}
                                </div>
                                <div className="h-1/2 flex items-center">
                                    <ProgressBar progress={percentage} />
                                </div>
                            </div>
                        </div>
                        <div style={{fontSize: "0.75rem"}}>
                            Bakarr is capable of digesting a 6ft (183cm), 176lb (80kg) man without armor in approximately 60 seconds.
                        </div>
                    </div>
                ) : (
                    <div>
                        Hello
                    </div>
                )}
            </div>
        </div>
    );
};

interface ProgressBarProps {
    progress: number;
    height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = '20px' }) => (
    <div
        className="w-full relative card progress-bar"
        style={{
            height,
            imageRendering: 'pixelated',
        }}
    >
        <div
            className="progress-bar-internal"
            style={{
                width: `${Math.max(0, Math.min(progress, 100))}%`,
                height: '100%',
                background: '#01FA00',
                borderRight: progress > 0 ? '4px solid #fff' : 'none',
                transition: 'width 0.3s ease-out',
                imageRendering: 'pixelated',
            }}
        />
    </div>
);

const DigestionTag = () => {
    return <div className="flex items-center justify-center gap-2 h-10">
        <img src="/media/digestion-bubbles.gif" alt="bubbles" className="w-6 h-6" />
        <span>Digesting</span>
        <img src="/media/digestion-bubbles.gif" alt="bubbles" className="w-6 h-6" style={{ transform: "scaleX(-1)" }} />
    </div>
}

export default FormComponent;
