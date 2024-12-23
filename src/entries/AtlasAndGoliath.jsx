import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Formation",
        id: "formation"
    },
    {
        title: "Fighting Style",
        id: "fighting-style"
    },
    {
        title: "Relationships and Intimacy",
        id: "relationships-and-intimacy"
    }/* ,
    {
        title: "Notable Fights",
        id: "notable-fights"
    } */
];

const AtlasAndGoliath = () => {
    return (
        <div>
            <EntryTitle>Atlas and Goliath (Gladiator Duo)</EntryTitle>
            <EntryIntroduction>
                <b>Atlas and Goliath</b> are a gladiator duo renowned for their unorthodox fighting style, often resulting in the death of their opponents. Both are Gluttonites, with Goliath handling the consuming in most of their fights. Atlas, the
                smaller half of the duo, is celebrated for his speed and agility, while Goliath, the larger half, is known for his immense size and strength. Their partnership began when Atlas approached Goliath for training, offering to sneak
                him food from his family's butcher shop. Since then, they have become a crowd favorite in the arena, with their matches often being the most anticipated events.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="formation">Formation</EntrySubTitle>
            <EntryParagraph>
                <EA href="#/entries/Atlas">Atlas</EA> worked in his family's butcher shop in Rome, yet he always dreamed of becoming a gladiator. He frequently attended the games but never had the opportunity to train in an official school. After one
                particular game, Atlas became captivated by a gladiator named <EA href="#/entries/Goliath">Goliath</EA>, renowned for his immense size and strength. Driven by determination, Atlas approached Goliath after a match, offering to sneak him
                food from his family's butcher shop in exchange for training. Initially hesitant, Goliath eventually agreed to train Atlas in secret. They spent their evenings practicing in a secluded location, with Atlas learning quickly and honing
                his skills.
            </EntryParagraph>
            <EntryParagraph>
                Goliath consumed a great deal of meat, and after a few months of training together, they both opened up about their state of being <EA href="#/entries/Gluttonite">Gluttonites</EA>. Atlas promptly suggested he consume his opponents. Goliath
                knew he could handle the weight of the fighters, but he had never attempted such a feat. During Goliath's next match, after knocking his opponent down, he decided to swallow him whole to test the technique. Nothing had satisfied
                his intense hunger as much as this before, and after the crowd processed what happened, it nearly instantly became a crowd favorite. The fame pushed the two to form the duo "Atlas and Goliath." They fight in execution matches and
                against other gladiators to the death. Atlas, with his speed and agility, weakens their opponents, while Goliath finishes them off by mercilessly devouring them.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="fighting-style">Fighting Style</EntrySubTitle>
            <EntryParagraph>
                Their fighting style combines speed and strength in a lethal synergy. Atlas uses his agility to weaken opponents with rapid, precise strikes, exploiting openings with his swift movements. Goliath, leveraging his immense size and power,
                delivers crushing blows and consumes the incapacitated foes. The two depend on each other's strengths in order to overcome their adversaries, as individually, they would be vulnerable to counterattacks.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="relationships-and-intimacy">Relationships and Intimacy</EntrySubTitle>
            <EntryParagraph>
                Although not confirmed whether they are romantically involved, it's clear that Atlas and Goliath share a deep bond that goes beyond mere partnership. Two Gluttonites meeting in the same time and place is an extremely rare occurrence, and
                considering their inhuman abilities, allows them to find solace in each other in ways that others cannot. They had also both saved each other's lives on multiple occasions during their matches. After a fight, there would also be
                significant physical contact between the two. Goliath's full stomach would require easing, and if no servants were available, Atlas would assist in the process, massaging Goliath's belly to help with digestion. The two would also
                bathe together, often to allow the heat to help with digestion. While it's not confirmed whether they have engaged in sexual activities, the intimacy they share is undeniable and part of their strength as a duo.
            </EntryParagraph>
            {/*            <EHr />
             <EntrySubTitle jid="notable-fights">Notable Fights</EntrySubTitle>
            <EntryParagraph>
                One of the most notable fights the duo had involved two gladiators with a similar dynamic. One was larger, like Goliath, and the other faster, like Atlas. These fighters had trained specifically to take the duo down. In the heat of battle,
                the smaller opponent managed to get Goliath into a headlock. Meanwhile, the larger opponent overpowered and consumed Atlas. Enraged by the loss of his partner, Goliath summoned his immense strength and broke free. He charged toward the
                larger opponent and delivered a powerful punch to his lower belly, forcing him to regurgitate Atlas before the digestion process could begin. Reunited, Atlas and Goliath fought with renewed vigor, eventually overcoming their formidable
                opponents. After the victory, they consumed their counterparts, digesting them together in a bathhouse.
            </EntryParagraph> */}
        </div>
    );
};

export default AtlasAndGoliath;
