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
];

const Ajax = () => {
    return (
        <div>
            <EntryTitle>Ajax</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Ajax_the_Great">Ajax the Great</EntryNTBC>
            <EntryIntroduction imgSrc="Ajax.png" imgDesc="A depiction of Ajax." infoTableData={infoData}>
                <b>Ajax of Amyclae</b> is a distinguished Spartan military commander known for his strength and strategic prowess. Ajax is one of the known <EA href="#/entries/Gluttonite">Gluttonites</EA> with
                some of the most discinct qualities in containment and natural digestion.
                <EBr />
                Ajax was appointed as a lochagos, or company commander, where his unconventional methods led to a significant Spartan victory. He was later then trusted with training new members of the Spartan army, and disposing
                of those who were deemed too weak or unworthy. His methods earned him the nickname "The Little Meatball" among his peers.
                <EBr />
                Ajax has a naturally muscular physique, proudly sporting his muscles and rarely wearing clothes to cover them. Ajax's helmet is a golden Spartan helmet with a red crest, with white stripes and a black base. His helmet
                is able to warp to display his expression, and can open up to a desired width to allow for prey to enter.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Ajax was born in the village of <EA href="https://en.wikipedia.org/wiki/Amyclae">Amyclae</EA> (former <EA href="https://en.wikipedia.org/wiki/Amykles">Amykles</EA>). His family, while not part of the royal line,
                held significant local influence. His father was a respected landowner and a former warrior who had earned the privilege of moving the family to <EA href="https://en.wikipedia.org/wiki/Sparta">Sparta</EA>. At a young age, Ajax
                and his family relocated to Sparta, where he began his formal training in the <EA href="https://en.wikipedia.org/wiki/Agoge">agoge</EA> system. He was mentored by experienced soldiers and participated in
                the <EA href="https://en.wikipedia.org/wiki/Crypteia">krypteia</EA>, a secret service meant to train young Spartans in survival, stealth, and combat.
            </EntryParagraph>
            <EntryParagraph>
                Ajax went on to lead a glorious military career, leading his men to victory in many battles and devoured all those who stood in his way. Countless armies and soliders met their fates in Ajax's stomach, earning his name as one of the most feared
                commanders in Sparta.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Ajax is one of the known <EA href="#/entries/Gluttonite">Gluttonites</EA>. It is currently unknown how he discovered his ability. As a Gluttonite, Ajax devours his opponents in a glorious display of strength. Due to his impressive size, he can consume
                two to three average sized soldiers without impeding his fighting. While he can hold more inside him, he often refrains from doing so to avoid impacting his mobility, at least until the current occupants are fully digested.
                His stomach acids are some of the most powerful naturally occuring, and are able to digest an entire solider, including armour, within a matter of minutes.
            </EntryParagraph>
            <EntryParagraph>
                Ajax consumes prey through his helmet, which opens up to a desired width to allow for prey to enter. Swallowing a solider takes a matter of seconds, often before the solider realised what was happening. Once inside his stomach, the prey is
                tightly compressed and coated in stomach acid before being dissolved. Ajax generally has a muscular physique, which means any contained prey won't jostle around during combat until they're fully digested and converted into fat and muscle. 
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="training">Training</EntrySubTitle>
            <EntryParagraph>
                The conditions to fight in Ajax's army are strict. Soliders are required to be in peak physical condition, and are often assessed and closely observed by Ajax himself. Those who are deemed too weak or unworthy are consumed by Ajax, as converting them
                into his mass would be more beneficial to his army than to waste further resources on them. Most of the time, Ajax will consume the solider in front of the rest of the army, as a reminder of the consequences of failure. Training will then continue as normal while
                the rest of the army listens to the ambient gurgling of their former comrade being digested.
            </EntryParagraph>
            <EntryParagraph>
                Ajax's training focuses on both strength and cardio, which is often quite intense and rigorous beyond average abilities. Soldiers aren't be held to the same standards as Ajax, but they are expected to be able to keep up with him in combat. Ajax is extremely
                patriotic and loyal to Sparta, which is often his motivation to continue his training and fighting in the army. If he needs to consume one of his own men, he would do it in the name of Sparta.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="promiscuity">Promiscuity</EntrySubTitle>
            <EntryParagraph>
                Ajax frequently has sexual encounters with his soldiers, and is also known for having a non-zero mortality rate in intercourse due to the size of his cock. Battling along side his fellow Spartan often develops a high amount of testosterone and a strong
                camaraderie, which often leads to him having sex with many of his strongest men in an act of uncontrollable lust. 
            </EntryParagraph>
        </div>
    );
}

export default Ajax;