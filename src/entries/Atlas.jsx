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
        title: "Role in \"Atlas and Golith\"",
        id: "role-in-atlas-and-goliath"
    }
]

const infoData = [
    { label: "Height", value: "255 cm (8 ft 4 in)" },
    { label: "Average Weight", value: "191 kg (421 lbs)" },
];

const Atlas = () => {
    return (
        <div>
            <EntryTitle>Atlas</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Atlas_(mythology)">Atlas (Mythology)</EntryNTBC>
            <EntryIntroduction infoTableData={infoData} imgSrc="Atlas.png" imgDesc="A depiction of Atlas preparing for a game.">
                <b>Atlas</b> is a gladiator best known for his role in the duo "Atlas and Goliath". He is the smaller half of the duo, and is known for his speed and agility. Atlas is a known Gluttonite, though he rarely consumes his opponents.
                Atlas was never formally trained as a gladiator, however, he was taken under the wing of the gladiator Goliath and trained in secret. The two formed the duo "Atlas and Goliath", where they generally fight in execution matches,
                or against other gladiators to the death.
                <EBr />
                Atlas has a naturally muscular physique with a low body fat percentage. He wears a silver helmet, which has a metal crest on top and two holes for his eyes, along with other ornamentation. He wears a shoulder guard on his left shoulder, with straps that
                wrap around his chest. He wears two leather straps around his biceps. He wears a light gray kilt with a brown belt with a golden buckle. He wears silver greaves on his shins and sandals on his feet. He has a slight amount of body hair on his forearms, pecs,
                abdomen, and legs.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Atlas was born in the village of <EA href="https://en.wikipedia.org/wiki/Vetera">Vetera</EA>. From a young age, he always wanted to be a gladiator, building quite a muscular physique from the
                heavy lifting he did in his family's butcher shop. However, his lack of official training made it difficult for him to be accepted into any of the gladiator schools. After his family moved to <EA href="https://en.wikipedia.org/wiki/Ancient_Rome">Rome</EA>,
                he regularly attended the games, and would develop quite an interest
                towards a specific gladiator named <EA href="#/entries/Goliath">Goliath</EA>. Atlas was fascinated by Goliath's size, and soon approached in after a match to ask for training. It wasn't until Atlas offered to sneak Goliath food from his family's
                butcher shop before Goliath agreed to train him. While not trained in an official system, Atlas worked hard and learned quickly, spending his evenings after work practicing with Goliath in a secluded location. Later, the two formed the
                duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>, where Atlas played the smaller fighter.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Atlas is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>, though he rarely consumes his opponents. He trained to be agile and quick, and having a full stomach would slow him down. Most of the consumption is handled by
                his partner, Goliath. However, Atlas has been known to consume his opponents on occasion, usually when Goliath is unable to. His stomach capacity is not as impressive as Goliath's, but he can certain swallow several fighters.
                This feeling is not natural for him, and he often becomes incapacitated until the stretching in his stomach subsides and the fighters are partially digested.
            </EntryParagraph>
            <EntryParagraph>
                Digestion for Atlas averages around ten minutes for an average sized fighter, and up to thirty minutes for a larger opponent. He is quite susceptible to gaining weight quickly, so he often trains to keep his weight down to maintain his agility.
                While Goliath is keen to have him train his Gluttonite abilities more often, Atlas prefers to keep in shape and only consume when necessary.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="role-in-atlas-and-goliath">Role in "Atlas and Goliath"</EntrySubTitle>
            <EntryParagraph>
                Atlas is the smaller half of the <EA href="https://en.wikipedia.org/wiki/Gladiator">gladiator</EA> duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>. Atlas is the quicker of the two, and is usually the first of the two to make a move. He will quickly subdue his opponents, and weaken them to allow
                for Goliath to crush or consume them. Atlas is younger and smaller than Goliath, and is often underestimated by their opponents, especially if they know about his lack of official training.
            </EntryParagraph>
            <EntryParagraph>
                While Goliath handles most of the consumption, Goliath will often encourage him to practise his Gluttonite abilities. Occasionally, he would find himself in a situation where he would need to eat an opponent, so it was important for him to
                be able to, even if it was not his preferred method of combat. 
            </EntryParagraph>
        </div>
    );
}

export default Atlas;