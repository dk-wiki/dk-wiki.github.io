import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, Eul, EA, EBr, EntryQuote, EHr, TableOfContents, ETable } from "./EntryObjects";
import { CHARACTERS } from "./../Data";
import KaTeX from 'react-katex';
import 'katex/dist/katex.min.css';

const contents = [
    {
        title: "Classification",
        id: "classification"
    },
    {
        title: "Consumption and Digestion",
        id: "consumption-and-digestion"
    },
    {
        title: "List of Known Gluttonites",
        id: "list-of-known-gluttonites"
    }
]

const noArticleGluts = [
/*     {
        Name: "Goliath",
        Description: "A fierce gladiator renowned for his abilities to englut his opponents. The larger half of the gladiator duo \"Atlas and Goliath\".",
        Discovered: "May 8, 2021",
    } */
];

const Gluttonite = () => {
    const knownGluts = CHARACTERS.reduce((acc, curr) => {
        if (curr.category === "Gluttonite") {
            acc.push({
                Name: curr.name,
                Description: curr.description,
                Discovered: curr.posted,
                Link: curr.link
            });
        }
        return acc;
    }, []).concat(noArticleGluts);

    knownGluts.sort((a, b) => new Date(a.Discovered) - new Date(b.Discovered));

    return (
        <div>
            <EntryTitle>Gluttonite</EntryTitle>
            <EntryIntroduction>
                <b>Gluttonites</b>, formally known as <i>Anthropophagorum Voracitas</i>, are a predatory human subspecies or humanoid species with the remarkable ability to swallow large quantities whole,
                including live creatures. These entities are characterized by their insatiable appetite and extraordinary digestive capabilities, enabling them to rapidly dissolve and assimilate their prey.
                While the precise biological definition of such beings remains a mystery, they generally possess a human or humanoid appearance and exhibit human-level intelligence.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="classification">Classification</EntrySubTitle>
            <EntryParagraph>
                Gluttonites belong to the following <EA href="https://en.wikipedia.org/wiki/Taxonomic_rank">taxonomical hierarchy</EA>:
                <Eul>
                    <li><b>Kingdom Animalia:</b> <EA href="https://en.wikipedia.org/wiki/Animal">Animalia</EA></li>
                    <li><b>Phylum:</b> <EA href="https://en.wikipedia.org/wiki/Chordate">Chordata</EA></li>
                    <li><b>Class:</b> <EA href="https://en.wikipedia.org/wiki/Mammal">Mammalia</EA></li>
                    <li><b>Order:</b> <EA href="https://en.wikipedia.org/wiki/Carnivora">Carnivora</EA></li>
                    <li><b>Family:</b> Voracidae</li>
                    <li><b>Genus:</b> Anthropophagorum</li>
                    <li><b>Order:</b> Voracitas</li>
                </Eul>
                The typical height of Gluttonites ranges from 1.8 meters to 3.5 meters, with resting weights generally within the range of 80 kg to 300 kg. Given their substantial protein intake, Gluttonites
                tend to be quite muscular; however, it is also common for them to have a significantly high body fat percentage. The true appearance of a Gluttonite's face remains unknown, as they are typically
                depicted with some form of face covering, such as a mask or helmet.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="consumption-and-digestion">Consumption and Digestion</EntrySubTitle>
            <EntryParagraph>
                Most Gluttonites remain masked or helmeted unless they are consuming prey, at which point their helmet or mask reveals an opening. It is believed that they possess an incredibly wide maw, capable of
                accommodating even the broadest frames. It is also speculated that they may employ other methods or orifices for consumption.
            </EntryParagraph>
            <EntryParagraph>
                While the methods of consumption remain a topic of debate, there is ample documentation of their digestive process. The stomachs of Gluttonites maintain a hyper-acidic environment with a pH ranging from
                0.5 to 1.0, significantly more acidic than the human stomach, which has a pH of 1.5 to 3.5. This extreme acidity is achieved through the secretion of a specialized acid, a potent mixture of hydrochloric acid
                (HCl) and unique organic acids. This acid rapidly breaks down organic matter and can also dissolve various other substances, such as metals and plastics.
            </EntryParagraph>
            <EntryParagraph>
                Gluttonites with larger bellies typically have an enlarged stomach containing a substantial amount of acid, whereas some have small, compact stomachs with highly concentrated acid. The digestion process for
                an entire average-sized individual can take anywhere from a few minutes to a few hours. During this process, the individual is enveloped by warm acid and broken down into a chyme-like substance. This
                substance is then absorbed into the Gluttonite's body, where it is converted into fat and muscle. The process is entirely efficient, producing no waste.
            </EntryParagraph>
            <EntryParagraph>
                A Gluttonite also possesses the ability to expedite the digestion process by applying pressure, often through a physical punch or squeeze, to their stomach. This technique helps to weaken the prey and circulate
                the acid around the occupant's body, thereby accelerating digestion. This method is frequently employed in combat situations, enabling the Gluttonite to consume more prey in a shorter amount of time.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="list-of-known-gluttonites">List of Known Gluttonites</EntrySubTitle>
            <EntryParagraph>
                Below is a list of known Gluttonites, including their date of discovery and a brief description of their abilities. This list is currently incomplete and will be updated as more information becomes available.
            </EntryParagraph>
            <ETable data={knownGluts} />
        </div>
    );
}

export default Gluttonite;