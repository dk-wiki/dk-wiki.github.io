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
        title: "Station Conditions and Partners",
        id: "station-conditions-and-partners"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    }
]

const infoData = [
    { label: "Height", value: "270 cm (8 ft 10 in)" },
    { label: "Average Weight", value: "194 kg (428 lbs)" },
    { label: "Nationality", value: "United States", flagSrc: "https://flagcdn.com/w320/us.png" },
];

const SOASBakarr = () => {
    return (
        <div>
            <EntryTitle>SOAS Bakarr</EntryTitle>
            <EntryIntroduction imgSrc="SOASBakarr.png" imgDesc="A depiction of Bakarr." infoTableData={infoData}>
                <b>Special Operations Advance Scout Bakarr</b>, also known as Fenris Bakarr, is a highly classified operative and a key asset for a private military company (PMC), Aegis Military and Security. Designed for deployment in
                high-risk environments, Bakarr's purpose is to neutralize enemy forces ahead of conventional troops. As a Gluttonite with enhanced abilities chemically introduced to maximize his effectiveness, Bakarr's abilities in breaking
                down and absorbing enemies is unparalleled, making him the fastest and most efficient of all known Gluttonites. Due to the sensitive nature of his missions, details about his existence and operations remain shrouded in secrecy,
                with no official acknowledgment from any government or company.
                <EBr />
                Bakarr possesses an immense amount of muscle mass, with a fair covering of hair on his belly, chest, forearms, legs, and lower back. He sports a tight pair of dark gray combat pants with black knee pads, a black belt, and sturdy brown boots.
                His attire is completed with fingerless gloves and, on occasion, a harness strapped around his chest. His black helmet, equipped with a striking dark red visor, adds to his iconic appearance and representation of Aegis.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="early-life-and-training">Early Life and Training</EntrySubTitle>
            <EntryParagraph>
                Little is known about Bakarr's early life or the specifics of his recruitment. It is speculated that he was selected after being identified as a potential <EA href="#/entries/Gluttonite">Gluttonite</EA> and subsequently subjected to a series
                of experiments to enhance his abilities. This process likely involved chemical conditioning and genetic manipulation to create maximally corrosive bile and acids. His rigorous training is believed to include advanced close-quarters combat,
                tactical reconnaissance, and survival skills, enabling him to operate independently in hostile territories if needed. The chemical treatments he underwent significantly boosted his energy levels, allowing for remarkable muscle development in a short period.
            </EntryParagraph>
            <EntryParagraph>
                Training his <EA href="#/entries/Gluttonite">Gluttonite</EA> abilities is an arduous task, given the illegality of unauthorized executions. Instead, substitutes are used to replicate the intense writhing of a human being. During his training,
                Bakarr is often filled to incredible capacities and subjected to high-stress situations and ensure his mobility while processing the contained mass. This rigorous regimen ensures that he remains an unstoppable force, even under the most extreme
                conditions.
            </EntryParagraph>
            <EntryParagraph>
                Bakarr's true identity remains classified, as his current moniker, Fenris Bakarr, serves as a mere codename bestowed upon him upon initiation into the clandestine super soldier program. The epithet
                "<EA href="https://en.wikipedia.org/wiki/Fenrir">Fenris</EA>" pays homage to the mythical wolf of Norse legend, embodying his ferocious and relentless nature on the battlefield. The surname Bakarr is believed to be a version of the
                figure "<EA href="https://en.wikipedia.org/wiki/Bakasura">Bakasura</EA>", a demon from Hindu mythology with an insatiable hunger.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="official-role-and-operations">Official Role and Operations</EntrySubTitle>
            <EntryParagraph>
                Bakarr's primary role is that of an "advance neutralization operative," a position that involves covert deployments into enemy territory ahead of the main forces. His objectives typically include the elimination of key targets and the creation
                of strategic entry points for the following troops. Often tasked with neutralizing high-value targets such as enemy commanders, scientists, and other significant threats, Bakarr is a master of precision strikes. While his primary role focuses on
                these specialized eliminations, he is occasionally assigned solo missions with broader objectives, including rescues and other critical operations, and is a trained sniper.
            </EntryParagraph>
            <EntryParagraph>
                Beyond this, not much more is known about the operative. The secrecy surrounding Bakarr's operations and existence is meticulously maintained through a combination of disinformation, strict operational security, and non-disclosure agreements for
                the select few privy to his missions. Bakarr, even as a Gluttonite, has the same rights as any other soldier, and is reachable given the right connections.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="station-conditions-and-partners">Station Conditions and Partners</EntrySubTitle>
            <EntryParagraph>
                Due to his Gluttonite features, Bakarr is stationed in a specialized containment facility when not on active duty. This facility is equipped with a high-security containment chamber designed to accommodate his unique physiology and dietary requirements.
                Bakarr voluntarily stays his chamber, and if he chooses to venture outside, a full security detail must be conducted. However, access to his quarters is restricted to his team and this superiors. Other than communicating with his team in communal areas, Bakarr spends most of
                his time in isolation with access to vast amounts of food, entertainment, and exercise equipment. He fears that his abilities may harm civilians if he were to lose control, and thus, he remains in his chamber to prevent any accidents.
            </EntryParagraph>
            <EntryParagraph>
                His partner, Toby Mercer, who is responsible for his coordination and keeping him company, is also a close friend and confidant, providing Bakarr with the emotional support he needs in
                his isolation. The two share a unique bond, with Mercer acting as Bakarr's eyes and ears on the battlefield, ensuring that his partner is safe as he digests his enemies. While Mercer was initially assigned to Bakarr as a handler,
                the two have since developed a deep rapport that extends beyond their professional relationship. Even though Mercer is Bakarr's superior, the two operate as equals, with Mercer often deferring to Bakarr's judgment in the field. If Bakarr
                does choose to leave his chamber, Mercer is always by his side, ensuring that Bakarr remains in control and that his abilities are used responsibly.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Bakarr is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>, and due to his treatment, he stands as an exceptionally powerful example of the species. Enemies are consumed whole in a swift motion, with barely any resistance. To escape
                his grasp is considered impossible, as one soldier after another disappears into his abyssal and dark gullet, never to return. Once consumed, the ingestee remains alive for only a brief period before being dissolved into a chyme-like substance within seconds,
                leaving the unfortunate victim's armor and weaponry floating in the liquefied remains until they too are absorbed. This feature of non-instant digestion is crucial for handling certain targets. As Bakarr continues his mission, the grunts
                of the consumed can be heard from within his gurgling dome, sloshing around as the contents rearrange themselves.
            </EntryParagraph>
            <EntryParagraph>
                In terms of capacity, Bakarr possesses an astonishing ability to consume a remarkable number of soldiers, with the current known record standing at a platoon of 30 soldiers, including their equipment. Though immobilized by such a massive intake,
                Bakarr swiftly processes the contents in a matter of minutes before resuming his mission. His stomach, designed primarily for disposing of opponents rather than efficiently returning mass to his body, results in less optimized size gain compared
                to the rest of his species, though growth still occurs nonetheless.
            </EntryParagraph>
        </div>
    );
}

export default SOASBakarr;
