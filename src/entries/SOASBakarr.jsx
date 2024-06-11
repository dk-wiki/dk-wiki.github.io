import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";
import Entry from "./Entry";

const contents = [
    {
        title: "Early Life and Training",
        id: "early-life-and-training"
    },
    {
        title: "Official Role and Operations",
        id: "official-role-and-operations"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    }
]

const infoData = [
    { label: "Height", value: "270 cm (8 ft 10 in)" },
    { label: "Average Weight", value: "194 kg (428 lbs)" },
];

const SOASBakarr = () => {
    return (
        <div>
            <EntryTitle>SOAS Bakarr</EntryTitle>
            <EntryIntroduction imgSrc="SOASBakarr.png" imgDesc="A depiction of Bakarr." infoTableData={infoData}>
                <b>Special Operations Advance Scout Bakarr</b>, also known as Fenris Bakarr, is a highly classified operative and a key asset in a covert super soldier program. Designed for deployment in high-risk environments, Bakarr's
                mission is to neutralize enemy forces ahead of conventional troops. As a Gluttonite with enhanced abilities chemically introduced to maximize his effectiveness, Bakarr's prowess in breaking down and absorbing enemies is
                unparalleled, making him the fastest and most efficient of all known Gluttonites. Due to the sensitive nature of his missions, details about his existence and operations remain shrouded in secrecy, with no official
                acknowledgment from any government.
                <EBr />
                Bakarr possesses an immense amount of muscle mass, with a fair covering of hair on his belly, chest, forearms, legs, and lower back. He sports a tight pair of dark gray combat pants with black knee pads, a black belt, and sturdy black boots.
                His attire is completed with fingerless gloves and, on occasion, a harness strapped around his chest. His black helmet, equipped with a striking red visor, adds to his formidable appearance.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life-and-training">Early Life and Training</EntrySubTitle>
            <EntryParagraph>
                Little is known about Bakarr's early life or the specifics of his recruitment. It is speculated that he was selected after being identified as a potential <EA href="#/entries/Gluttonite">Gluttonite</EA> and subsequently subjected to a series
                of experiments to enhance his abilities. This process likely involved chemical conditioning and genetic manipulation to create maximally corrosive bile and acids. His rigorous training is believed to include advanced close-quarters combat,
                tactical reconnaissance, and survival skills, enabling him to operate independently in hostile territories. The chemical treatments he underwent significantly boosted his energy levels, allowing for remarkable muscle development in a short period.
            </EntryParagraph>
            <EntryParagraph>
                Training his <EA href="#/entries/Gluttonite">Gluttonite</EA> abilities is an arduous task, given the illegality of unauthorized executions. Instead, substitutes are used to replicate the intense writhing of a human being. During his training,
                Bakarr is often filled to incredible capacities and subjected to high-stress situations to ensure his mobility while processing the contained mass. This rigorous regimen ensures that he remains an unstoppable force, even under the most extreme
                conditions.
            </EntryParagraph>
            <EntryParagraph>
            Bakarr's true identity remains shrouded in mystery, as his current moniker, Ferris Bakarr, serves as a mere codename bestowed upon him upon initiation into the clandestine super soldier program. The epithet
            "<EA href="https://en.wikipedia.org/wiki/Fenrir">Fenris</EA>" pays homage to the mythical wolf of Norse legend, embodying his ferocious and relentless nature on the battlefield. The surname Bakarr is believed to be a fusion of two legendary
            figures: "<EA href="https://en.wikipedia.org/wiki/Bakasura">Bakasura</EA>", a demon from Hindu mythology renowned for his insatiable hunger, and the infamous "<EA href="https://en.wikipedia.org/wiki/Tarrare">Tarrare</EA>", a French showman
            and soldier famed for his extreme eating prowess.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="official-role-and-operations">Official Role and Operations</EntrySubTitle>
            <EntryParagraph>
                Bakarr's primary role is that of an "advance neutralization operative," a position that involves covert deployments into enemy territory ahead of the main forces. His objectives typically include the elimination of key targets and the creation
                of strategic entry points for the following troops. Often tasked with neutralizing high-value targets such as enemy commanders, scientists, and other significant threats, Bakarr is a master of precision strikes. While his primary role focuses on
                these specialized eliminations, he is occasionally assigned solo missions with broader objectives, including rescues and other critical operations.
            </EntryParagraph>
            <EntryParagraph>
                Beyond this, not much more is known about the operative. The secrecy surrounding Bakarr's operations and existence is meticulously maintained through a combination of disinformation, strict operational security, and non-disclosure agreements for
                the select few privy to his missions. Rumors of his exploits often surface as unconfirmed reports of ghost-like figures performing extraordinary feats on the battlefield, further shrouding his legend in mystery.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Bakarr is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>, and due to his treatment, he stands as an exceptionally powerful example of the species. Enemies are consumed whole in a swift motion, with barely any resistance. To escape
                his grasp is considered impossible, as one soldier after another disappears into his abyssal and dark gullet. Once consumed, the prey remains alive for only a brief period before being dissolved into a chyme-like substance within seconds,
                leaving the unfortunate victim's armor and weaponry floating in the liquefied remains until they too are bubbled away. This feature of non-instant digestion is crucial for handling certain targets. As Bakarr continues his mission, the grunts
                of the consumed can be heard from within his gurgling dome, sloshing around as the contents rearrange themselves.
            </EntryParagraph>
            <EntryParagraph>
            In terms of capacity, Bakarr possesses an astonishing ability to consume a remarkable number of soldiers, with the current known record standing at a platoon of 30 soldiers, including their equipment. Though immobilized by such a massive intake,
            Bakarr swiftly processes the contents in a matter of minutes before resuming his mission. His stomach, designed primarily for disposing of opponents rather than efficiently returning mass to his body, results in less optimized size gain compared
            to the rest of his formidable physique, though growth still occurs nonetheless.
            </EntryParagraph>
        </div>
    );
}

export default SOASBakarr;