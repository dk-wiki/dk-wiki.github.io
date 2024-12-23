import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life",
        id: "early-life"
    },
    {
        title: "Discovery as a Gluttonite",
        id: "discovery-as-a-gluttonite"
    },
    {
        title: "Role in \"Atlas and Goliath\"",
        id: "role-in-atlas-and-goliath"
    }
];

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
                <b>Atlas</b> is a Roman gladiator best known for his role in the duo "Atlas and Goliath." As the smaller half of the duo, he is celebrated for his exceptional speed and agility. Atlas is a
                known Gluttonite, though he rarely consumes his opponents. Despite lacking formal gladiator training, he was taken under the wing of the gladiator Goliath and trained in secret. Together,
                they formed the iconic duo, specializing in execution matches and deadly combat against other gladiators.
                <EBr />
                Atlas boasts a naturally muscular physique with a low body fat percentage. He wears a silver helmet adorned with a metal crest on top and eye holes, along with various ornamentations.
                A shoulder guard protects his left shoulder, with straps that wrap around his chest, complemented by two leather straps around his biceps. His attire includes a light gray kilt with a
                brown belt and golden buckle, silver greaves on his shins, and sandals on his feet. A slight amount of body hair covers his forearms, pecs, abdomen, and legs.
            </EntryIntroduction>
            <TableOfContents items={contents} />
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
            <EntrySubTitle jid="discovery-as-a-gluttonite">Discovery as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Atlas is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>, though he rarely consumes his opponents. His abilities were discovered prior to his training with Goliath, but he
                initially limited himself to consuming meat from his family's butcher shop. Confused about his condition, he confided in Goliath, who revealed a similar experience. This strengthened
                their bond and trust, as Goliath had also struggled with his Gluttonite abilities before embracing them. 
                Atlas prioritizes speed and agility, making a full stomach a hindrance. Most of the consumption is handled by his partner, Goliath. However, Atlas occasionally consumes opponents when necessary, particularly if Goliath is incapacitated. Though his stomach capacity is smaller, he can still swallow multiple fighters, a feat that often leaves him temporarily incapacitated until his stomach adjusts and begins digestion.
            </EntryParagraph>
            <EntryParagraph>
                Digestion for Atlas averages about ten minutes for an average-sized fighter and up to thirty minutes for larger opponents. To maintain his agility, he trains rigorously and limits his use of Gluttonite abilities. While Goliath encourages him to embrace these abilities more often, Atlas remains focused on staying in peak physical condition, consuming opponents only when the situation demands it. The duo's success is rooted in their complementary skills: Atlas's speed and Goliath's strength.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="role-in-atlas-and-goliath">Role in "Atlas and Goliath"</EntrySubTitle>
            <EntryParagraph>
                Atlas is the smaller half of the gladiator duo <EA href="#/entries/Atlas_and_Goliath">Atlas and Goliath</EA>. Due to his speed, Atlas usually strikes first, swiftly subduing his opponents and weakening them for Goliath to finish. Younger and smaller than Goliath, Atlas is often underestimated by adversaries, especially those aware of his lack of formal training. By the time his opponents realize their mistake, Atlas has already gained the upper hand.
            </EntryParagraph>
            <EntryParagraph>
                While Goliath handles most of the consumption, he frequently encourages Atlas to practice his Gluttonite abilities. Occasionally, Atlas is forced to consume an opponent, making it essential for him to maintain this skill, even if it is not his preferred method of combat.
            </EntryParagraph>
        </div>
    );
};

export default Atlas;
