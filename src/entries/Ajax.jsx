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
]

const infoData = [
    { label: "Height", value: "242 cm (7 ft 11 in)" },
    { label: "Average Weight", value: "187 kg (412 lbs)" },
    { label: "Nationality", value: "Ancient Sparta", flagSrc: "https://flagcdn.com/w320/gr.png" },
];

const Ajax = () => {
    return (
        <div>
            <EntryTitle>Ajax</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Ajax_the_Great">Ajax the Great</EntryNTBC>
            <EntryIntroduction imgSrc="Ajax.png" imgDesc="A depiction of Ajax." infoTableData={infoData}>
                <b>Ajax of Amyclae</b> stands as a legendary Spartan military commander, famed for his prodigious strength and unparalleled strategic prowess. As one of the illustrious <EA href="#/entries/Gluttonite">Gluttonites</EA>,
                Ajax wields extraordinary powers of containment and natural digestion, setting him apart as a figure of awe and reverence. The mere mention of his name sent shivers through the ranks of his enemies and ignited a fire
                of unyielding courage in the hearts of his comrades.
                <EBr />
                In the annals of Spartan history, Ajax rose to the rank of lochagos, a company commander whose unorthodox tactics delivered a resounding victory for Sparta. Such was his valor and skill that he was entrusted with
                the sacred duty of training the next generation of Spartan warriors. Those who fail to meet his rigorous standards face a grim fate, for Ajax is also charged with the elimination of the weak and unworthy.
                His fearsome reputation and indomitable spirit earned him the nickname "The Little Meatball," a name spoken with a mix of respect and trepidation by his peers.
                <EBr />
                Ajax has a naturally muscular physique, proudly sporting his muscles and rarely wearing clothes to cover them. Ajax's helmet is a golden Spartan helmet with a red crest, with white stripes and a black base. His helmet
                is able to warp to display his expression, and can open up to a desired width to allow for prey to enter.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Ajax was born in the village of <EA href="https://en.wikipedia.org/wiki/Amyclae">Amyclae</EA> (formerly <EA href="https://en.wikipedia.org/wiki/Amykles">Amykles</EA>). His family, while not part of the royal line, held
                significant local influence. His father was a respected landowner and a former warrior who had earned the privilege of moving the family to <EA href="https://en.wikipedia.org/wiki/Sparta">Sparta</EA>. At a young age,
                Ajax and his family relocated to Sparta, where he began his formal training in the <EA href="https://en.wikipedia.org/wiki/Agoge">agoge</EA> system. He was mentored by experienced soldiers and participated in
                the <EA href="https://en.wikipedia.org/wiki/Crypteia">krypteia</EA>, a secret service designed to train young Spartans in survival, stealth, and combat.
            </EntryParagraph>
            <EntryParagraph>
                Ajax leads a glorious military career, guiding his men to victory in numerous battles and devouring all those who dare stand in his way. Countless armies and soldiers meet their fates in Ajax's stomach,
                solidifying his name as one of the greatest commanders in Sparta.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Ajax is one of the renowned <EA href="#/entries/Gluttonite">Gluttonites</EA>. His discovery of his ability remains a mystery. As a Gluttonite, Ajax devours his opponents in a magnificent display of strength.
                With his impressive size, he can consume two to three average-sized soldiers without hindering his combat prowess. While capable of holding more, he often refrains to maintain his agility, at least until the current
                occupants are fully digested. His stomach acids, among the most potent naturally occurring, can digest an entire soldier, including armor, within mere minutes.
            </EntryParagraph>
            <EntryParagraph>
                Ajax consumes his prey through his helmet, which opens to a desired width to allow them to enter. Swallowing a soldier takes mere seconds, often before the victim realizes what is happening. Once inside his stomach,
                the prey is tightly compressed and coated in stomach acid before being dissolved. Ajax maintains a muscular physique, ensuring that any contained prey remains still during combat until they are fully digested and transformed into his strength and power.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="training">Training</EntrySubTitle>
            <EntryParagraph>
                The conditions to fight in Ajax's army are strict. Soldiers must be in peak physical condition and are often assessed and closely observed by Ajax himself. Those deemed too weak or unworthy are consumed by Ajax, as converting them into his mass is
                more beneficial to his army than wasting further resources on them. Often, Ajax will consume the soldier in front of the rest of the army, serving as a powerful reminder of the consequences of failure. Training will then continue as normal while
                the rest of the army listens to the ambient gurgling of their former comrade being digested.
            </EntryParagraph>
            <EntryParagraph>
                Ajax's training focuses on both strength and cardio, pushing beyond the limits of average abilities. While soldiers are not held to the same standards as Ajax, they are expected to keep up with him in combat. Ajax's extreme patriotism and unwavering
                loyalty to Sparta fuel his relentless training and fighting spirit. If he must consume one of his own men, he does so in the name of Sparta.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="promiscuity">Promiscuity</EntrySubTitle>
            <EntryParagraph>
                Ajax frequently has sexual encounters with his soldiers, and is also known for having a non-zero mortality rate in intercourse due to the size of his phallus. Battling along side his fellow Spartan often develops a high amount of testosterone and a strong
                feeling of camaraderie, which often leads to him having sex with many of his strongest men in an act of uncontrollable lust. During these encounters, Ajax would take on a dominating role, often using his strength to pin his partner down and force them to submit to him.
            </EntryParagraph>
        </div>
    );
}

export default Ajax;