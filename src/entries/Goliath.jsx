import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life",
        id: "early-life"
    },
    {
        title: "Solo Career",
        id: "solo-career"
    },
    {
        title: "Discovery as Gluttonite",
        id: "discovery-as-gluttonite"
    },
    {
        title: "Role in \"Atlas and Golith\"",
        id: "role-in-atlas-and-goliath"
    }
]

const infoData = [
    { label: "Height", value: "270 cm (8 ft 10 in)" },
    { label: "Average Weight", value: "301 kg (664 lbs)" },
];

const Goliath = () => {
    return (
        <div>
            <EntryTitle>Goliath</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Goliath">Goliath</EntryNTBC>
            <EntryIntroduction infoTableData={infoData} imgSrc="Goliath.png" imgDesc="A depiction of Goliath.">
                <b>Goliath</b> is a gladiator best known for his role in the duo "Atlas and Goliath". He is the bigger half of the duo, and is known for his size and strength. Goliath is a known Gluttonite, and is the primary consumer of their opponents during
                matches. Goliath was trained in a gladiator school in Rome, where he excelled in combat techniques and weaponry. He later paired with Atlas, a smaller gladiator who he trained in secret. The two formed the duo "Atlas and Goliath", where they
                generally fight in execution matches, or against other gladiators to the death.
                <EBr />
                Goliath is extremely large, with a high body fat percentage and a large, soft stomach. He wears a golden Thraex helmet, bent to account for his neck fat. He wears a gray kilt and a black belt with a golden buckle. From his belt, he wears
                black leather pteruges, and golden greaves and shoes. He occasionally wears a belt around his chest and back to keep his stomach in place. He is also covered in a thick layer of body hair over his entire body. He has two golden nipple piercings
                
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Goliath was born in the city of <EA href="https://en.wikipedia.org/wiki/Carthage">Carthage</EA> and was the son of a legionary. He grew up near a Roman military camp, surrounded by soliders and combat training. During a local skirmis, he was
                captured and sold into slavery, where a <EA href="https://en.wikipedia.org/wiki/Gladiator#Schools_and_training">lanista</EA> purchased him and sent him to train in a gladiatorial school in Rome. Goliath recieved a formal training as
                a <EA href="https://en.wikipedia.org/wiki/Secutor">secutor</EA> and was known for his skill with the <EA href="https://en.wikipedia.org/wiki/Scutum_(shield)">scutum</EA> and <EA href="https://en.wikipedia.org/wiki/Gladius">gladius</EA>.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="solo-career">Solo Career</EntrySubTitle>
            <EntryParagraph>
                Goliath made a name for himself in his first <EA href="https://en.wikipedia.org/wiki/Gladiator">gladiator</EA> appearance in the <EA href="https://en.wikipedia.org/wiki/Colosseum">Colosseum</EA>, where he used his extremely high body fat percentage and size to his advantage. At the time, most gladiators were
                lean and muscular, and a larger fighter like Goliath would have been met with ridicule. Most of his fellow gladiators treated him poorly because of it, however, when they came face to face with him in the arena, they realised that such
                ridicule was not going to save them from his unrelenting strength. Goliath quickly became a crowd favorite and revolutionized the way people viewed the gladiatorial games. At this time, he was not yet a known <EA href="#/entries/Gluttonite">Gluttonite</EA>.
                and had no interest in consuming his opponents.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="discovery-as-gluttonite">Discovery as Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Goliath's fame had earned in many fans, one of which was <EA href="#/entries/Atlas">Atlas</EA>, the son of a butcher. Atlas offered to sneak Goliath food from his family's butcher shop in return for training. Goliath was hesitant at first, but
                after seeing Atlas's determination, he agreed to train him in secret. Goliath consumed an unnaturally large amount of food during their training sessions, and Atlas was fascinated by his ability to consume so much. It wasn't until Atlas
                witnessed suggested that Goliath consume a fallen opponent before a match that Goliath revealed his <EA href="#/entries/Gluttonite">Gluttonite</EA> abilities. After knocking out his opponent, Goliath consumed him whole, much to the shock of the
                crowd. Goliath, after this event, simply let out a deep belch and a chuckle, before lugging his belly back to the holding area. Goliath's digestive abilities were quite impressive, as by the time Atlas had reached the holding area, the
                ingested gladiator had been churned almost entirely.
            </EntryParagraph>
            <EntryParagraph>
                Goliath is able to hold a large amount of fighters in his stomach, and can digest them in a matter of minutes. During several sponsored events, Goliath could contain over a dozen fighters in his stomach, and would often require Atlas to help
                carry him back to the holding area. Goliath is naturally heavyset, and would often struggle to move quickly, especially after consuming several fighters. However, his fighting abilities is not be hindered by this unless he had gorged on
                too many fighters. 
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="role-in-atlas-and-goliath">Role in "Atlas and Goliath"</EntrySubTitle>
            <EntryParagraph>
                Goliath is the larger half of the <EA href="https://en.wikipedia.org/wiki/Gladiator">gladiator</EA> duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>. Goliath is the stronger of the two, and is usually the one to finish off their opponents.
                He will often crush or consume them, depending on the situation. Goliath's role as Atlas' mentor makes him incredibly protective of his partner, and will often prioritise the safety of Atlas over his own. After forming the duo, Goliath
                abandoned his solo career.
            </EntryParagraph>
        </div>
    );
}

export default Goliath;