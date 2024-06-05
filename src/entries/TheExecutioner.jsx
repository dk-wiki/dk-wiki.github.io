import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const infoData = [
    { label: "Height", value: "286cm (9 ft 6 in)" },
    { label: "Average Weight", value: "342 kg (754 lbs)" },
];

const contents = [
    {
        title: "Role as an Executioner",
        id: "role-as-an-executioner"
    },
    {
        title: "Features as a Gluttonite",
        id: "discovery-as-gluttonite"
    }
]

const TheExecutioner = () => {
    return (
        <div>
            <EntryTitle>The Executioner</EntryTitle>
            <EntryIntroduction imgSrc="TheExecutioner.png" imgDesc="The Executioner, depicted in his natural size and state." infoTableData={infoData}>
                <b>The Executioner</b> is a Gluttonite known for his role as an official executioner with the chosen method being consuming and digesting the condemned. While most know of him as a ruthless and merciless
                figure, he sepnds most of his time in solitude. The Executioner is a very private individual, with few knowing his true identity or his past. His loyalty to his kingdom is unwavering, with him dedicating
                his life to his obligations, even if it cost him a social life and personal relationships.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="role-as-an-executioner">Role as an Executioner</EntrySubTitle>
            <EntryParagraph>
                The Executioner's early life is shrouded in mystery, with few knowing his true origins. Usually, executioners would be able to treat their
                personal life and work life completely separately in order to remain anonymous. However, The Executioner's methods make it impossible for him to, as each criminal he eats makes him grow bigger and bigger.
                He was forced into solitude, and is now never able to take his mask off in public. His identity has shifted to his role, and he has found solace in his work executing those who betray his kingdom.
            </EntryParagraph>
            <EntryParagraph>
                Most of the people he consumes are criminals condemned to death. Occasionally, he takes part in vigilante justice for offenders he catches himself. While his motives to become an executioner are unknown,
                it's believe that it isn't due to a desire to uphold the law, nor is it due to a need for justice. Most speculate he is hiding from a past life he wishes to escape from by sacrificing his identity.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="discovery-as-gluttonite">Features as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                The Executioner is a known <EA href="#/entries/Gluttonite">Gluttonite</EA>. While his digestive abilities are not as impressive as other Gluttonites, his stomach capacity is unrivaled, especially with his ability to remain
                mobile even while digesting over ten people at a time. This, however, does not reflect his sheer capacity, as he has been known to consume over twenty people in a single sitting without any signs of discomfort. Digestion
                for the Executioner can take between one and two hours for a person, depending on the size and weight of the individual.
            </EntryParagraph>
            <EntryParagraph>
                Criminals will often be kept in a holding cell until a dungeon keeper would come to retrieve them. The condemned will then be brought to the Executioner's chamber, where they will be read their crimes and the sentence.
                The executioner would then englut the criminal, settling them into his stomach before summoning the next. Often his stomach will grow so large that he requires support to keep in him a comfortable position for digestion.
            </EntryParagraph>
            <EntryParagraph>
                Waiting to be executed is often quite terrifying, as the condemned will be able to hear the insatiable growling and gurgling of the Executioner's gut echoing through the chamber. Muffled pleading would give way to a silence
                as the criminals are swallowed whole, sealing their fate with a deep belch. By the end of the day, all the consumed would be completely melted, leaving a stomach filled with chyme that audibly sloshes around as he moved.
                By the next day, all remains would have been completely absorbed and converted into fat and muscle.
            </EntryParagraph>
            <EntryParagraph>
                While the Executioner focused on his job, he is known to occasionally take liberty in punishments for those who have committed particularly heinous crimes. One case involved a group of four criminals convicted of attempted regicide.
                The ring leader was forced to consume and digest his accomplices in a cruel punishment before being consumed himself.
            </EntryParagraph>
        </div>
    );
}

export default TheExecutioner;