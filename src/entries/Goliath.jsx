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
        title: "Discovery as a Gluttonite",
        id: "discovery-as-a-gluttonite"
    },
    {
        title: "Role in \"Atlas and Golith\"",
        id: "role-in-atlas-and-goliath"
    }
]

const infoData = [
    { label: "Height", value: "270 cm (8 ft 10 in)" },
    { label: "Average Weight", value: "301 kg (664 lbs)" },
    { label: "Nationality", value: "Rome", flagSrc: "https://flagcdn.com/w320/it.png" },
];

const Goliath = () => {
    return (
        <div>
            <EntryTitle>Goliath</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Goliath">Goliath</EntryNTBC>
            <EntryIntroduction infoTableData={infoData} imgSrc="Goliath.png" imgDesc="A depiction of Goliath.">
                <b>Goliath</b> is a Roman gladiator best known for his role in the duo "Atlas and Goliath." As the larger half of the duo, he is renowned for his immense size and strength. Goliath is a known Gluttonite and serves as the primary consumer of
                their opponents during matches. Trained in a prestigious gladiator school in Rome, he excelled in combat techniques and weaponry. He later paired with Atlas, a smaller gladiator whom he trained in secret. Together, they formed the duo
                "Atlas and Goliath," participating in execution matches and deadly combat against other gladiators.
                <EBr />
                Goliath is immensely large, with a high body fat percentage and a large, soft stomach. He dons a golden Thraex helmet, custom-bent to accommodate his neck fat. His attire includes a gray kilt, a black belt with a golden buckle, black leather
                pteruges, and golden greaves and shoes. Occasionally, he wears a belt around his chest and back to keep his stomach in place. His body is covered in a thick layer of hair, and he sports two golden ring nipple piercings.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Goliath was born in the city of <EA href="https://en.wikipedia.org/wiki/Carthage">Carthage</EA> as the son of a legionary. Growing up near a Roman military camp, he was surrounded by soldiers and combat training. During a local skirmish,
                he was captured and sold into slavery. A <EA href="https://en.wikipedia.org/wiki/Gladiator#Schools_and_training">lanista</EA> purchased him and sent him to train in a gladiatorial school in Rome. Goliath received formal training as
                a <EA href="https://en.wikipedia.org/wiki/Secutor">secutor</EA> and became renowned for his prowess with the <EA href="https://en.wikipedia.org/wiki/Scutum_(shield)">scutum</EA> and <EA href="https://en.wikipedia.org/wiki/Gladius">gladius</EA>.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="solo-career">Solo Career</EntrySubTitle>
            <EntryParagraph>
                Goliath made a name for himself in his first gladiator appearance in the <EA href="https://en.wikipedia.org/wiki/Colosseum">Colosseum</EA>, where he used his immense body fat and size to his advantage. At the time, most gladiators were lean
                and muscular, and a larger fighter like Goliath would have been met with ridicule. His fellow gladiators treated him poorly because of his size. However, when they faced him in the arena, they quickly realized that ridicule would not save
                them from his unrelenting strength. Goliath swiftly became a crowd favorite, revolutionizing the perception of gladiatorial combat. At this time, he was not yet known as a <EA href="#/entries/Gluttonite">Gluttonite</EA> and had no interest
                in consuming his opponents.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="discovery-as-a-gluttonite">Discovery as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Goliath's fame earned him many fans, one of whom was <EA href="#/entries/Atlas">Atlas</EA>, the son of a butcher. Atlas offered to sneak Goliath food from his family's butcher shop in return for training. Goliath was hesitant at first, but
                after seeing a familiar feeling in Atlas, he agreed to train him in secret. Goliath had known he was a Gluttonite for a while before meeting Atlas, but it was something he felt shame towards. He'd eat incredible amounts of food given by
                his fans as praise, but no matter how much he ate, he was never satiated. During their training sessions, Goliath consumed an unnaturally large amount of food, and Atlas was fascinated by his capacity. It wasn't until Atlas It wasn't until
                Atlas confided in him about his condition that Goliath also revealed he had a similar thing occur. Atlas would eventually suggest that Goliath consume opponents that the duo began to form.
            </EntryParagraph>
            <EntryParagraph>
                In the heat of a battle, Goliath knocked out his opponent and, without warning beyond some hesitation, swallowed him whole, much to the shock of the crowd. After this astonishing display, Goliath let out a deep belch which echoed through the
                Colosseum. The move instantly became a crowd favourite, sparking him to think of Atlas as he lugged his massive belly back to the holding area.
                His digestive prowess was remarkable, as by the time Atlas reached the holding area to congratulate him, the ingested gladiator had been almost entirely churned. From that moment on, the two new they were destined to be a duo.
            </EntryParagraph>
            <EntryParagraph>
                Goliath can hold a large number of fighters in his stomach, digesting them in a matter of minutes. During several sponsored events, he has been known to contain over a dozen fighters at once, often requiring Atlas to help carry him back to
                the holding area, occasionally with a wagon. Naturally heavyset, Goliath struggles to move quickly, especially after consuming several fighters. However, his fighting abilities remain unhindered unless he has gorged on too many opponents.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="role-in-atlas-and-goliath">Role in "Atlas and Goliath"</EntrySubTitle>
            <EntryParagraph>
                Goliath is the larger half of the gladiator duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>. Renowned for his immense strength, Goliath is usually the one to finish off their opponents, either crushing or consuming them
                depending on the situation. As Atlas's mentor, Goliath is fiercely protective of his partner, often prioritizing Atlas's safety over his own. After forming the duo, Goliath abandoned his solo career, dedicating himself entirely to their
                partnership.
            </EntryParagraph>
        </div>
    );
}

export default Goliath;