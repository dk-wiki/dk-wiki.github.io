import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const infoData = [
    { label: "Height", value: "286 cm (9 ft 6 in)" },
    { label: "Average Weight", value: "342 kg (754 lbs)" },
    { label: "Nationality", value: "England", flagSrc: "https://flagcdn.com/w320/gb-eng.png" },
];

const contents = [
    {
        title: "Origin and Role as an Executioner",
        id: "origin-and-role-as-an-executioner"
    },
    {
        title: "Features as a Gluttonite",
        id: "features-as-a-gluttonite"
    }
];

const TheExecutioner = () => {
    return (
        <div>
            <EntryTitle>The Executioner</EntryTitle>
            <EntryIntroduction imgSrc="TheExecutioner.png" imgDesc="The Executioner, depicted in his natural size and state." infoTableData={infoData}>
                <b>The Executioner</b> is a medieval executioner who uses his Gluttonite abilities of consumption and digestion to carry out the sentencing of the condemned. His looming height and merciless demeanor strike fear
                into all who stand before him. His unwavering loyalty to his kingdom drives him to dedicate his life to his duties, even at the cost of personal relationships and his own identity.
                <EBr />
                The Executioner stands as a towering figure, his large, pudgy belly ever growling when empty and churning ominously when full. He is always seen wearing a tight, dark mask that conceals his entire face, which is
                chiseled and angular with a strong jawline and high cheekbones. His piercing red eyes glow menacingly in the dark. Clad in a gray kilt and a black belt with a golden buckle, he wears black gloves adorned with iconic metal
                plates and rings around the wrist area, along with black boots. Though he rarely uses it, he carries a formidable double-edged axe. The Executioner boasts immense muscle mass, and his body is covered in thick
                hair. During official events, he dons black shoulder pads and a black cape.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="origin-and-role-as-an-executioner">Origin and Role as an Executioner</EntrySubTitle>
            <EntryParagraph>
                The Executioner's early life is shrouded in mystery, with few knowing his true origins. Legends of his past have spread throughout his kingdom, claiming that after he discovered his Gluttonite abilities, he repressed all urges until, in 
                an act of uncontrollable hunger, he swallowed the love of his life to satisfy himself. According to the legend, this led him to
                leave his home and remain in voluntary exile. After wandering aimlessly for years, feasting on fugitives and rogues outside of his kingdom to survive, he decided that to atone for his actions, he must take up the mantle of the kingdom's
                executioner. Whether these rumors hold any truth remains unknown, as The Executioner remains silent about his past.
            </EntryParagraph>
            <EntryParagraph>
                Typically, executioners manage to separate their personal and professional lives to maintain anonymity. However, The Executioner's methods render this impossible, as each criminal he consumes causes him to grow heavier, making him
                too recognizable as a figure in the kingdom. Most of those he consumes are criminals condemned to death, but occasionally, he partakes in vigilante justice, dealing with offenders he apprehends himself.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="features-as-a-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                The Executioner is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>. While his digestive abilities may not be as fast as other Gluttonites, his natural stomach capacity is unrivaled, allowing him to maintain mobility
                even while digesting over ten criminals simultaneously. This remarkable ability does not reflect his maximum capacity, as he has been known to consume over twenty people in a single sitting without any signs of discomfort.
                For him, digestion can take between one and two hours per person, depending on the individual's size and weight.
            </EntryParagraph>
            <EntryParagraph>
                Criminals are often held in a cell until the dungeon keeper retrieves them. The condemned are then brought to the Executioner's chamber, where their crimes and sentences are read aloud. The Executioner then engluts the criminal,
                settling them into his immense stomach before summoning the next. Often, his belly grows so large that he requires support to maintain a comfortable position for digestion. Furniture is said to break often under his weight, even
                when specially reinforced to handle his needs.
            </EntryParagraph>
            <EntryParagraph>
                Waiting to be executed is a terrifying ordeal, as the condemned can hear the insatiable growling and gurgling of the Executioner's gut echoing through the halls. Muffled pleas give way to silence as the criminals are swallowed whole,
                their fate sealed with a resounding belch. By the end of the day, most of the consumed are completely dissolved, save for the last few, leaving his stomach filled with sloshing acidic chyme and bile that audibly swishes as he moves.
                By the next day, all remains of the condemned are entirely absorbed and converted into fat and muscle, further enhancing his massive physique.
            </EntryParagraph>
            <EntryParagraph>
                While the Executioner adheres to the rules and practices of his work, he is known to occasionally take liberties in punishing those who have committed particularly heinous crimes. In one notable case, involving a group of four criminals
                convicted of attempted regicide, the Executioner meted out a particularly cruel punishment. The ringleader was forced to consume and digest his accomplices before being consumed himself, a grim testament to the Executioner's merciless nature.
            </EntryParagraph>
        </div>
    );
}

export default TheExecutioner;
