import { TitleSection } from "@/components/elements/title";
import { useState, useRef } from "react";

const KujinFun = () => {
    return (
        <div>
            <TitleSection>
                Miscellaneous Content
            </TitleSection>
            <div className="kujin-fun flex flex-col md:flex-row gap-8 w-full max-w-screen-lg mx-auto mt-6">
                <div className="flex-1">
                    <p className="text-justify relative">
                        <img
                            src="/media/kujin-stomp.gif"
                            alt="Kujin performing sumo stomp"
                            className="w-24 h-24 float-right object-contain"
                            style={{
                                shapeOutside: "circle()",
                                shapeMargin: "1rem",
                                float: "right",
                            }}
                        />
                        Kujin provides locals a box to leave prayers in. At the end of each day, he empties and swallows the contents of the box for the kami to read and grant.
                        Locals also believe that providing an offering will increase the chances of the prayer coming true, but it's suspected Kujin made this up in order to get more food.
                    </p>
                </div>
                <OmikujiActivity />
            </div>
        </div>
    );
};


const OmikujiActivity = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [fadeBackIn, setFadeBackIn] = useState(false);
    const inputRef = useRef(null);

    const handleSubmit = () => {
        if (inputValue.trim() === "") return;

        setIsSubmitting(true);
        setShowInput(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setInputValue("");
            setShowInput(false);
            setFadeBackIn(false);
            setTimeout(() => {
                setShowInput(true);
                setFadeBackIn(true);
                setTimeout(() => setFadeBackIn(false), 700);
            }, 100);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !isSubmitting && inputValue.trim() !== "") {
            handleSubmit();
        }
    };

    return (
        <div className="omikujin-box flex flex-col items-center gap-4 flex-1 min-w-0 w-full max-w-md mx-auto">
            <div className="relative h-12 w-full flex justify-center overflow-visible">
                {showInput && (
                    <input
                        ref={inputRef}
                        type="text"
                        className={`paper-input transition-all duration-700 w-full ${
                            isSubmitting ? "animate-slide-into-box" : ""
                        } ${fadeBackIn ? "animate-fade-back-in" : ""}`}
                        placeholder="Write your prayer"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isSubmitting}
                    />
                )}
            </div>
            <div className="w-full relative flex justify-center">
                <div className="relative w-20 h-20 flex justify-center items-center mx-auto">
                    <img src="/media/omikuji-bako.png" className="absolute top-0 left-0 w-20 h-20" />
                </div>
            </div>
            <button
                className="submit-btn w-full"
                onClick={handleSubmit}
                disabled={isSubmitting || inputValue === ""}
            >
                Offer to Kujin
            </button>
        </div>
    );
};

export default KujinFun;