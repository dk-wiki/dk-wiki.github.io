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
                <b>Gluttonites</b>, formally known as <i>Anthropophagorum Voracitas</i>, are a predatory human subspecies or humanoid species with the ability to swallow large quantities whole, including live creatures.
                These entities are characterized by their insatiable appetite and extraordinary digestive capabilities, enabling them to rapidly dissolve and assimilate their prey. While it is currently unknown
                how such a being is biologically defined, they generally physically appear as human or humanoid with human level intelligence.
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
                Typical majority of Gluttonite heights range from 1.8 meters to 3.5 meters, with resting weights of generally within the range of 80 kg to 300 kg. Gluttonites tend to be quite muscular
                considering the amount of protein they consume, however, it is very common for their physiques to also contain a substantially high body fat percentage. It is unknown what the face of a Gluttonite looks like.
                as typically they are depicted with a form of face covering, like a mask or a helmet.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="consumption-and-digestion">Consumption and Digestion</EntrySubTitle>
            <EntryParagraph>
                Most Gluttonites remain masked or helmeted unless they are consuming prey, where their helmet/mask will reveal an opening. It is also believed they possess an incredibly wide maw, capable of fitting even the widest frames.
                It is certainly possible that other methods or orifices were used.
            </EntryParagraph>
            <EntryParagraph>
                While the methods of consumption is still up for debate, there is ample documentation of their digestive process. The stomachs of Gluttonites maintain a hyper-acidic environment with a pH ranging from 0.5 to 1.0,
                significantly more acidic than the human stomach (pH 1.5 to 3.5). This extreme acidity is achieved through the secretion of a specialized acid, which is a potent mixture of hydrochloric acid (HCl) and unique organic acids.
                This acid not only breaks down organic matter rapidly but also various other substances, like metals and plastics.  
            </EntryParagraph>
            <EntryParagraph>
                Gluttonites with a larger belly tend to contain an enlarged stomach with a substantial amount of acid inside, however, some stomachs can be quite small and compact with a high acid concentration. The digestion process for
                an entire average sized invidual can take anywhere from a few minutes to a few hours, where the individual is surrounded by a warm acid before being broken down into a chyme-like substance. This substance is then absorbed
                into the Gluttonite's body, where it is converted into fat and muscle. This process is completely efficient, with no waste being produced.
            </EntryParagraph>
            <EntryParagraph>
                A Gluttonite also holds the ability to help break down their prey by adding pressure, often though a physical punch or squeeze, onto their stomach. This can help speed up the digestion process, and can help weaken the prey
                and move the acid around the occupant's body. This process is often used in combat situations to allow for the Gluttonite to consume more prey in a shorter amount of time.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="list-of-known-gluttonites">List of Known Gluttonites</EntrySubTitle>
            <EntryParagraph>
                Below is a list of known Gluttonites, including their date of discovery and a brief description of their abilities. This list is currently incomplete and will be updated as more information is gathered.
            </EntryParagraph>
            <ETable data={knownGluts} />
        </div>
    );
}

export default Gluttonite;