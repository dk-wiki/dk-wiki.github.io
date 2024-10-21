import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life and Purpose",
        id: "early-life-and-purpose"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    },
    {
        title: "Spirituality",
        id: "spirituality"
    }
]

const infoData = [
    { label: "Height", value: "279 cm (9 ft 2 in)" },
    { label: "Average Weight", value: "362 kg (798 lbs)" },
];

const Kujin = () => {
    return (
        <div>
            <EntryTitle>Kujin</EntryTitle>
            <EntryIntroduction>
                <b>Kujin</b> is coming soon.
            </EntryIntroduction>
        </div>
    );
}

export default Kujin;