import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Formation",
        id: "formation"
    },
    {
        title: "Notable Fights",
        id: "notable-fights"
    }
]

const AtlasAndGoliath = () => {
    return (
        <div>
            <EntryTitle>Atlas and Goliath (Gladiator Duo)</EntryTitle>
            <EntryIntroduction>
                <b>Atlas and Goliath</b> is a gladiator duo known for their unorthodox fighting style, often to the death of their opponents. Both are Gluttonites, with Goliath doing the consuming for most of the duo's fights.
                Atlas is the smaller half of the duo, known for his speed and agility, while Goliath is the larger half, known for his size and strength. The two formed the duo after Atlas approached Goliath for training, offering
                to sneak him food from his family's butcher shop. The two have since become a crowd favorite in the arena, with their fights often being the most anticipated.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="formation">Formation</EntrySubTitle>
            <EntryParagraph>
                <EA href="#/entries/Atlas">Atlas</EA> worked in his family butcher shop in Rome, however, he always dreamed of becoming a gladiator. He would often attend the games, however, he never had the opportunity to train in an official school.
                After one particular game, Atlas became fascinated with a gladiator named <EA href="#/entries/Goliath">Goliath</EA>, who was known for his size and strength. Atlas approached Goliath after a match, offering to sneak him food from his family's
                butcher shop in return for training. Goliath, hesitant at first, agreed to train Atlas in secret. The two would spend their evenings practicing in a secluded location, with Atlas learning quickly and developing his skills.
            </EntryParagraph>
            <EntryParagraph>
                Goliath would consume a lot of meat, and after a few months of training, Atlas suggested for him to consume his opponents. During Goliath's next match, after knocking his opponent down, he consumed him whole. The move quickly became
                a crowd favourite, and the two soon formed the duo "Atlas and Goliath". The two would fight in execution matches, or against other gladiators to the death. Atlas would weaken opponents with his speed and agility, while Goliath would
                finish them off by mercilessly devouring them.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="notable-fights">Notable Fights</EntrySubTitle>
            <EntryParagraph>
                One of the most notable fights the duo had involved two gladiators with a similar dynamic. One was larger, like Goliath, the other faster, like Atlas. These fighters had trained to take the duo down. The smaller of the opponents
                managed to get Goliath into a headlock. Powerless, Atlas was soon consumed by the larger of the opponents. Goliath, having grown an incredibly close rapport to atlas, was enraged by this and managed to break free. Goliath charged towards the
                larger opponent, punching him in the lower belly, forcing him to regurgitate Atlas before the digestion process could begin. The two then worked together and, after a challenging fight, managed to defeat the opponents. Both of the duo
                consumed their counterpart, digesting them in a bathhouse after the fight, together.
            </EntryParagraph>
        </div>
    );
}

export default AtlasAndGoliath;