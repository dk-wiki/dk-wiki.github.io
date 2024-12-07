import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, Eul, EA, EBr, EntryQuote, EHr, TableOfContents, ETable, EntryImage, Eli } from "./EntryObjects";
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
        title: "Identification and Safety Procedures",
        id: "identification-and-safety-procedures"
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
                <b>Gluttonites</b>, formally known as <i>Anthropophagorum Voracitas</i>, are a predatory human subspecies or humanoid species with the ability to swallow large quantities whole,
                including live creatures. These entities are characterized by their insatiable appetite and extraordinary digestive capabilities, enabling them to rapidly dissolve and assimilate their ingestee.
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
                The typical height of a fully grown Gluttonites ranges from 2 meters to 3.5 meters, with resting weights generally within the range of 150 kg to 300 kg. Given their substantial protein intake, Gluttonites
                tend to be quite muscular; however, it is also common for them to have a significantly high body fat percentage. The true appearance of a Gluttonite's head is not well-documented, as they are always seen wearing
                helmets, masks or some other facial covering. However, they are rumored to be pitch black underneath, leaving the exact topology of their heads unknown. 
            </EntryParagraph>
            <EntryParagraph>
                Gluttonites tend to suffer from a condition known as <EA href="https://en.wikipedia.org/wiki/Polyphagia">Polyphagia</EA>. While this condition is usually a symptom of a larger problem in other species,
                it is a defining characteristic of Gluttonites.
            </EntryParagraph>
            <EntryParagraph>
                Gluttonites are human born. It is, however, unknown what occurs during the gestation period that converts the human into a Gluttonite. During early adulthood, the dormant Gluttonite genes are activated, and the
                individual will begin to exhibit Gluttonite traits. The process is irreversible, and the individual will transform gradually over a few days. Early signs include an insatiable hunger and a rapid increase in muscle mass and height.
                The individual may also begin to develop a black film over their face, which will eventually cover their entire head. Their personality will also change, and they will seemingly become an entirely different person.
                Often, due to fears surrounding the condition, the individual will wear a mask or helmet to hide their face in an attempt to limit fears and discrimination.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="consumption-and-digestion">Consumption and Digestion</EntrySubTitle>
            <EntryParagraph>
            <EntryImage 
                src="media/digestive_system.svg"
                alt="Gluttonite Digestive System"
                description="The standard form of a Gluttonite's digestive system."
            />
                Most Gluttonites remain masked or helmeted unless they are consuming <b>ingestees</b>, at which point their helmet or mask reveals an opening. It is believed that they possess an incredibly wide maw, capable of
                accommodating even the broadest frames. It is also speculated that they may employ other methods or orifices for consumption. With full exposure of their face, a mutated set of human tongues will latch onto any
                nearby meal, pulling them down into the dark abyss to their demise, further warranting the use of a mask or helmet.
            </EntryParagraph>
            <EntryParagraph>
                In anticipation of their next meal, an audible growling sound can be heard emanating from their gut, a sign that their stomach is preparing to receive its next occupant. This growling sound is often mistaken
                for hunger, but it is actually the sound of the stomach acid filling up the available volume. 
            </EntryParagraph>
            <EntryParagraph>
                The black film that covers their face acts as a sedative, giving the ingestee an immediate pleasurable feeling. The ingestee will continue to struggle as they remain aware of what is going on, but the physical sensation
                will be dulled. This feeling remains once they have entered the stomach, which lessens the pain, as they plunge into the acid.
            </EntryParagraph>
            <EntryParagraph>
                The stomach of a Gluttonite maintains a hyper-acidic environment with a pH ranging from 0.5 to 1.0, significantly more acidic than the human stomach, which has a pH of 1.5 to 3.5. This extreme acidity is achieved
                through the secretion of a specialized acid, a potent mixture of hydrochloric acid (HCl) and unique organic acids. This acid rapidly breaks down organic matter and can also dissolve various other substances,
                such as metals and plastics. The acids are produced to nearly fill the entire volume of the stomach until all ingestees are almost fully coated.
            </EntryParagraph>
            <EntryParagraph>
                Gluttonites with larger bellies typically have an enlarged stomach containing a some amount of acid at all times. The digestion process for an entire average-sized individual can take anywhere from a few minutes
                to a few hours. During this process, the individual is enveloped by warm acid and broken down into a chyme-like substance. This substance is then absorbed into the Gluttonite's body through the stomach walls, where
                it is converted into fat and muscle. The process is entirely efficient, producing no waste.
            </EntryParagraph>
            <EntryParagraph>
                A Gluttonite also possesses the ability to expedite the digestion process by applying pressure, often through a physical punch or squeeze, to their stomach. This technique helps to weaken the ingestee and circulate
                the acid around the occupant's body, thereby accelerating digestion. This method is frequently employed in combat situations, enabling the Gluttonite to consume more ingestees in a shorter amount of time. Alternatively,
                applying heat to the stomach can also speed up the digestion process, as the acid becomes more active at higher temperatures.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="identification-and-safety-procedures">Identification and Safety Procedures</EntrySubTitle>
            <EntryParagraph>
                Gluttonites have some defining features that can help identify them. Physical attributes include:
                <Eul>
                    <li>being male with a substantial size (above 150kg in weight and 2m tall);</li>
                    <li>having a muscular build with large reproductive organs;</li>
                    <li>being constantly hungry, unsatisfied after substantial amounts of food, and able to process foods incredibly quickly;</li>
                    <li>producing no waste;</li>
                    <li>having an extremely active libido;</li>
                    <li>having an abnormally high body temperature.</li>
                </Eul>

                Gluttonites also have a particular demeanour, often learned through life experiences, with attributes such as:
                <Eul>
                    <li>being dominant and territorial;</li>
                    <li>having a predatory nature;</li>
                    <li>inclined towards combat or using their appetite with purpose;</li>
                    <li>weary of attention and introverted.</li>
                </Eul>

                While many Gluttonites have greedy and gluttonous tendencies, not all display these traits. The desire for them to eat is a deep, physical craving that can be extremely difficult to resist. The intensity of such hunger
                reduces humans to mere meals, which is why it is crucial to maintain precautions when interacting with Gluttonites. If you believe you have encounted a Gluttonite, consider the following safety procedures:

                <Eul>
                    <li><b>Remain calm.</b> While they are capable of great harm, they still think like humans, and will respond to reasoning under normal circumstances.</li>
                    <li><b>Do not challenge their loyalties.</b> Gluttonites often find great contentment and passion towards their roles, and provoking them in this way will result in your most certain consumption.</li>
                    <li>In the event that a Gluttonite intends to swallow you, consider offering any alternative food you can. Even promises of food may help ease their hunger.</li>
                    <li>Contact DK immediately.</li>
                </Eul>
                Failure to adhere to these precautions may result in death. Always prioritize safety and seek professional assistance when dealing with Gluttonites.
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
