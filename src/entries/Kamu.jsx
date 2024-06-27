import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life and Purpose",
        id: "early-life-and-purpose"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    },
    {
        title: "Spirituality",
        id: "spirituality"
    }
]

const infoData = [
    { label: "Height", value: "279 cm (9 ft 2 in)" },
    { label: "Average Weight", value: "362 kg (798 lbs)" },
];

const Kamu = () => {
    return (
        <div>
            <EntryTitle>Kamu</EntryTitle>
            <EntryIntroduction imgSrc="Kamu.png" imgDesc="A depiction of Kamu." infoTableData={infoData}>
                <b>Kamu</b> is the  <EA href="#/entries/Gluttonite">Gluttonites</EA> emissary of nature. Situated on the island of Niue, he is a reprobate and custodian who devours all who disrespect the natural world. Kamu hails from a remote Polynesian island,
                rich with dense jungles, towering volcanoes, and pristine beaches. The island, shrouded in mystery, is largely untouched by modern civilization, preserving its ancient traditions and natural beauty.
                <EBr />
                Standing at an imposing height with a robust, muscular build and massive stomach, Kamu is intimidating. His skin is tanned, adorned with intricate tribal tattoos following the left side of his body from his pec to his back and down his arm.
                His mask follows a tiki design with an aggressive and hog like appearance. Kamu's attire consists of arm bands around his biceps and wrists, a loincloth and a belt made of straw. He does not wear more as his body continuously
                grows from all he consumes.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life-and-purpose">Early Life and Purpose</EntrySubTitle>
            <EntryParagraph>
                Kamu's early life remains shrouded in mystery, with little to no information being known about him. His ties to the island of <EA href="https://en.wikipedia.org/wiki/Niue">Niue</EA> suggest that he was born and raised there,
                growing up in the dense jungles and learning to survive in the untamed wilderness. He is nonverbal, communicating predominantly through grunts and gestures. He roams the island, protecting it from outsiders and those who seek to exploit its resources,
                pollute its waters, or harm its inhabitants. Kamu's purpose is to maintain the balance of nature, ensuring that the island remains untouched and unspoiled by human hands.
            </EntryParagraph>
            <EntryParagraph>
                Kamu's name is a carefully chosen tribute to the legendary superhuman, <EA href="https://en.wikipedia.org/wiki/Kamapua%CA%BBa">Kamapua'a</EA>, a prominent figure in Hawaiian mythology. Kamapua'a, known as the pig god, is revered for his ability
                to shape-shift and his insatiable hunger. He is a complex deity associated with fertility, agriculture, and, importantly, the protection of nature. In addition to his, he is also described as a glutton and a loner, much like Kamu. His
                relation to nature and his role as a protector make for a worthy namesake for the Gluttonite emissary of nature. 
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Kamu is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>. While he can handle a lot of food and requires an incredible amount of energy, Kamu will never take more than he needs from his island. His size is due to his role as a protector
                of the island, where he consumes those who threaten the island's balance. Because of the colonisation of his island, Kamu feasts on many men, which all contributes to his observed size and strength.
            </EntryParagraph>
            <EntryParagraph>
                His abilities are standard in the area of digestion, where is can completely dissovle an average male within an hour. His weight gain is, however, incredibly rapid, growing fatter and fatter as he consumes more. Because of this,
                he is the heaviest known gluttonite with the highest body fat percentage. His stomach capacity can hold an extreme volume, able to handle incredible amounts of people. He is also able to consume non-organic materials, including litter, equipment left by
                tourists and even vehicles.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="spirituality">Spirituality</EntrySubTitle>
            <EntryParagraph>
                Kamu roams Niue, maintaining the delicate balance of the island's ecosystem. He follows the teachings of a revered spiritual figure from Polynesian history, a wise <EA href="https://en.wikipedia.org/wiki/Kahuna">kahuna</EA> known
                as <EA href="https://en.wikipedia.org/wiki/K%C5%AB">Kūka'ilimoku</EA>. Kūka'ilimoku is the Hawaiian god of war, known for his fierce protection of the islands and their people. Kamu embodies this spirit, protecting Niue from those who would
                seek to exploit it for their own gain. He is a guardian of the island, a protector of its people, and a symbol of the power of nature.
            </EntryParagraph>
            <EntryParagraph>
            Kamu's worldview is deeply rooted in the Polynesian understanding of the interconnectedness of all life. Central to his philosophy is the belief that nature is not merely a backdrop for human existence but a living, breathing entity deserving of
            reverence and protection. This belief is encapsulated in the concept of the <EA href="https://en.wikipedia.org/wiki/Aloha_%CA%BB%C4%80ina">Aloha 'Āina</EA> profound love and respect for the land and its ecosystems. When Kānehoa takes extreme actions
            against those who threaten the natural order, he does so with the conviction that his actions are necessary for the greater good.
            </EntryParagraph>
        </div>
    );
}

export default Kamu;