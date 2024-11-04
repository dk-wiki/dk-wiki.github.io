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
    { label: "Nationality", value: "Rome", flagSrc: "https://flagcdn.com/w320/it.png" },
];

const Atlas = () => {
    return (
        <div>
            <EntryTitle>Atlas</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Atlas_(mythology)">Atlas (Mythology)</EntryNTBC>
            <EntryIntroduction infoTableData={infoData} imgSrc="Atlas.png" imgDesc="A depiction of Atlas preparing for a game.">
                <b>Atlas</b> is a gladiator best known for his role in the duo "Atlas and Goliath." As the smaller half of the duo, he is celebrated for his exceptional speed and agility. Atlas is a
                known Gluttonite, though he rarely consumes his opponents. Despite lacking formal gladiator training, he was taken under the wing of the gladiator Goliath and trained in secret. Together,
                they formed the duo "Atlas and Goliath," specializing in execution matches and deadly combat against other gladiators.
                <EBr />
                Atlas boasts a naturally muscular physique with a low body fat percentage. He wears a silver helmet adorned with a metal crest on top and eye holes, along with various ornamentations.
                A shoulder guard protects his left shoulder, with straps that wrap around his chest, complemented by two leather straps around his biceps. His attire includes a light gray kilt with a
                brown belt and golden buckle, silver greaves on his shins, and sandals on his feet. A slight amount of body hair covers his forearms, pecs, abdomen, and legs.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Atlas was born in the village of <EA href="https://en.wikipedia.org/wiki/Vetera">Vetera</EA>. From a young age, he aspired to be a gladiator, developing a muscular physique from the heavy lifting he did
                in his family's butcher shop. However, his lack of formal training made it difficult for him to gain acceptance into any gladiator schools. After his family moved
                to <EA href="https://en.wikipedia.org/wiki/Ancient_Rome">Rome</EA>, he frequently attended the games, developing a keen interest in a particular gladiator named <EA href="#/entries/Goliath">Goliath</EA>.
                Captivated by Goliath's immense size, Atlas approached him after a match to request training. It wasn't until Atlas offered to sneak Goliath food from his family's butcher shop that Goliath agreed to train him.
                Though not trained in an official system, Atlas worked diligently and learned swiftly, spending his evenings practicing with Goliath in a secluded location. Eventually, the two formed the
                duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>, with Atlas taking on the role of the smaller, agile fighter.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Atlas is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>, though he rarely consumes his opponents. He trained to be agile and quick, and having a full stomach would hinder his speed. Most of the
                consumption is handled by his partner, Goliath. However, Atlas occasionally consumes his opponents when Goliath is unable to. Although his stomach capacity is not as vast as Goliath's, he can still swallow
                several fighters. This feat is not natural for him, often leaving him incapacitated until the stretching in his stomach subsides and the fighters are partially digested.
            </EntryParagraph>
            <EntryParagraph>
                Digestion for Atlas averages around ten minutes for an average-sized fighter and up to thirty minutes for a larger opponent. He is quite susceptible to gaining weight quickly, so he trains rigorously to
                maintain his agility. While Goliath encourages him to hone his Gluttonite abilities more frequently, Atlas prefers to stay in peak physical condition and only consume when absolutely necessary.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="role-in-atlas-and-goliath">Role in "Atlas and Goliath"</EntrySubTitle>
            <EntryParagraph>
                Atlas is the smaller half of the gladiator duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>. Known for his remarkable speed, Atlas is usually the first to strike, swiftly subduing his
                opponents and weakening them for Goliath to crush or consume. Younger and smaller than Goliath, Atlas is often underestimated by their adversaries, particularly those aware of his lack of formal training.
            </EntryParagraph>
            <EntryParagraph>
                While Goliath handles most of the consumption, he often encourages Atlas to practice his Gluttonite abilities. Occasionally, Atlas finds himself in situations where he must eat an opponent, making it
                essential for him to be capable, even if it is not his preferred method of combat.
            </EntryParagraph>
        </div>
    );
}

export default Atlas;