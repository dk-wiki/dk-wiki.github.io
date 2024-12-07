import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life",
        id: "early-life"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    },
    {
        title: "Training",
        id: "discovery-as-gluttonite"
    },
    {
        title: "Promiscuity",
        id: "promiscuity"
    }
];

const infoData = [
    { label: "Height", value: "242 cm (7 ft 11 in)" },
    { label: "Average Weight", value: "187 kg (412 lbs)" },
    { label: "Nationality", value: "Sparta", flagSrc: "https://flagcdn.com/w320/gr.png" },
];

const Ajax = () => {
    return (
        <div>
            <EntryTitle>Ajax</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Ajax_the_Great">Ajax the Great</EntryNTBC>
            <EntryIntroduction imgSrc="Ajax.png" imgDesc="A depiction of Ajax." infoTableData={infoData}>
                <b>Ajax of Amyclae</b> is a Spartan military commander, renowned for his immense strength and unmatched strategic acumen. As a
                recognized <EA href="#/entries/Gluttonite">Gluttonite</EA>, Ajax wields extraordinary abilities of containment and digestion. His name instills fear
                in his enemies and inspires unwavering courage in his allies.
                <EBr />
                In Spartan history, Ajax rose to the rank of lochagos, a company commander known for unconventional tactics that secured decisive
                victories for Sparta. His valor and skill earned him the honor of training future Spartan warriors. Those who failed his rigorous
                standards faced dire consequences, as Ajax eliminated the weak without hesitation. His penchant for consuming soldiers during battles
                earned him the moniker "The Little Meatball," a name evoking both respect and fear among his peers.
                <EBr />
                Ajax boasts a muscular physique, proudly displaying his strength and rarely wearing clothing to conceal it. His golden Spartan helmet,
                adorned with a red crest, white stripes, and a black base, can adapt to show his expressions and opens wide enough to allow prey entry.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Ajax was born in the village of <EA href="https://en.wikipedia.org/wiki/Amyclae">Amyclae</EA> (formerly <EA href="https://en.wikipedia.org/wiki/Amykles">Amykles</EA>).
                Although not of royal lineage, his family held significant local influence.
                His father, a respected landowner and former warrior, earned the privilege of relocating the family
                to <EA href="https://en.wikipedia.org/wiki/Sparta">Sparta</EA>. From a young age, Ajax underwent formal training in
                the <EA href="https://en.wikipedia.org/wiki/Agoge">agoge</EA> system, mentored by seasoned soldiers. He participated in
                the <EA href="https://en.wikipedia.org/wiki/Crypteia">krypteia</EA>, a secretive program emphasizing survival, stealth, and combat skills. By the time
                he reached adulthood, Ajax's potential was evident, even before his Gluttonite abilities manifested.
            </EntryParagraph>
            <EntryParagraph>
                He leads a distinguished military career, guiding his men to victory and eliminating opponents with his unnatural abilities. Countless soldiers and their
                armies meet their fates in Ajax's stomach, with legends of his feats spreading far and wide.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                As a <EA href="#/entries/Gluttonite">Gluttonite</EA>, Ajax developed his abilities during adulthood, when his sudden hunger becomes
                apparent. Sparring partners and livestock were used to satisfy his appetite, often vanishing without a trace. His helmet became a permanent fixture due to the condition,
                and he grew to an imposing size, towering over his peers. He consumes adversaries as a form of combat, able to ingest two or three average-sized soldiers
                without losing mobility. Although capable of holding more, he limits himself to maintain agility until digestion is complete. His stomach
                acids, among the most potent naturally occuring known, dissolve soldiers and armor within minutes.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="training">Training</EntrySubTitle>
            <EntryParagraph>
                Soldiers in Ajax's unit must meet strict physical standards. He personally assesses their abilities, eliminating those he deems unworthy
                by consuming them. He believes this process strengthens the army, converting the weak into sustenance rather than wasting resources. Often,
                he consumes a soldier publicly to remind others of the consequences of failure. Training resumes as the army listens to the ominous sounds
                of digestion. Despite these risks, the prestige of serving in Ajax's unit attracts many due to its high success rate and the elevated status
                it provides.
            </EntryParagraph>
            <EntryParagraph>
                Training emphasizes strength and endurance, pushing soldiers to exceed their limits. Although not held to Ajax's extraordinary standards,
                they are expected to match his intensity in battle. His unwavering loyalty to Sparta drives his relentless pursuit of excellence. If he
                consumes a soldier, he does so with the conviction that it serves Sparta's greater good.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="promiscuity">Promiscuity</EntrySubTitle>
            <EntryParagraph>
                Ajax often engages in sexual relationships with his soldiers, sometimes resulting in fatalities due to his size. The camaraderie and
                heightened testosterone from fighting alongside his men frequently lead to acts of passion. In these encounters, Ajax assumes a dominant
                role, using his strength to assert control.
            </EntryParagraph>
        </div>
    );
};

export default Ajax;
