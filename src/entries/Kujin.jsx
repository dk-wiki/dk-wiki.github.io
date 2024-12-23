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
        title: "Blacksmithing",
        id: "blacksmithing"
    },
    {
        title: "Sumo",
        id: "sumo"
    },
];

const infoData = [
    { label: "Height", value: "265 cm (8 ft 3 in)" },
    { label: "Average Weight", value: "310 kg (683 lbs)" },
    { label: "Nationality", value: "Japan", flagSrc: "https://flagcdn.com/w320/jp.png" },
];

const Kujin = () => {
    return (
        <div>
            <EntryTitle>Kujin</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Battle_of_Kujin">the Battle of Kujin</EntryNTBC>
            <EntryIntroduction infoTableData={infoData} imgSrc="Kujin.png" imgDesc="A depiction of Kujin.">
                <b>Kujin</b> is a Japanese blacksmith and sumo fighter from <EA href="https://en.wikipedia.org/wiki/Kagoshima">Kagoshima, Japan</EA>. He is a known Gluttonite who uses his abilities in the combat of sumo for ritualistic purposes.
                His name, derived from <i>神餉</i> (/kuː.dʑin/ with Romanization <i>Koo-jin</i>), signifies “Offering Devourer for the Gods,” a role he takes great pride in when fighting. Outside of the sumo arena, Kujin forges exceptional metalwork as his main profession.
                His craftsmanship is highly regarded, with his role as a sumo fighter allowing him to channel divinity into his products.
                <EBr />
                Kujin is instantly recognizable by his massive body, with bulging muscles and a prominent round stomach. He wears leather armor designed for practicality and comfort, with protectors around his legs and lower belly, fastened
                by ropes and silver rings. His torso is wrapped in a dark blue cloth that straps over his shoulders and down his back, meeting a polished silver ring at the center of his back. A ring of sacred temple rope, reminiscent of{" "}
                <EA href="https://en.wikipedia.org/wiki/Shinto">Shinto</EA> rituals, adorns his thick neck like a necklace. His forearms are covered with gray sleeves underneath leather bracers. Kujin's samurai-style helmet has a navy blue metal base,
                with golden horns and intricate ornamentation. His footwear consists of simple yet sturdy leather slippers. He has little to no body hair.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Kujin was born in a quiet fishing village on the coast of <EA href="https://en.wikipedia.org/wiki/Kagoshima">Kagoshima</EA>. His family thrived as skilled artisans, crafting delicate pottery and intricate wooden carvings. Kujin himself assisted in shaping clay and carving wood,
                helping him refine his fine motor skills and abilities with handcrafts. Despite the tranquility of his upbringing, Kujin never felt fulfilled in what he did. After Kujin celebrated
                his <EA href="https://en.wikipedia.org/wiki/Coming_of_Age_Day">Genpuku</EA>, he went to find a more involved craft that brought him closer to his true passion of blacksmithing. After training as an apprentice at a local
                blacksmithing forge, he developed his skills and soon began to prove himself a worthy craftsman.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="discovery-as-a-gluttonite">Discovery as a Gluttonite</EntrySubTitle>
            <EntryParagraph>
                Kujin began the transformation into a Gluttonite shortly after achieving independence in his profession, which caused him to lose his way and forget who he was. He looked to local temples for help, to which they told him
                a spirit was trapped inside his stomach. This spirit needed to be fed constantly, and with whatever he could eat. Regular food was not enough to satiate his hunger, but he had no choice; he had to keep eating anything he could. After he grew quite large from
                the inhuman amount of consumption, he was led to <EA href="https://en.wikipedia.org/wiki/Sumo">sumo</EA>. At this time, sumo was a practice that featured fatalities. The exceptional size of sumo
                wrestlers proved enticing to Kujin, as surely those massive fighters would be able to satiate his hunger and please the spirit trapped inside him.
            </EntryParagraph>
            <EntryParagraph>
                Digestion for Kujin is quite fast, especially considering the people he swallows are much larger than the average person. It would often take between 10 and 30 minutes to completely dissolve and absorb an average opponent after consumption.
                For a regular person, it may take between 8 to 15 minutes; however, him consuming people outside of the arena is relatively rare. His spiritual connections often lead to many offerings of food being gifted to him by locals, allowing him to
                keep his massive size without having to swallow people as often as other Gluttonites.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="blacksmithing">Blacksmithing</EntrySubTitle>
            <EntryParagraph>
                Kujin is an expert in blacksmithing, with a specialty in weapon creation, including <EA href="https://en.wikipedia.org/wiki/Katana">katana</EA>, <EA href="https://en.wikipedia.org/wiki/Wakizashi">wakizashi</EA>,{" "}
                <EA href="https://en.wikipedia.org/wiki/Naginata">naginata</EA>, <EA href="https://en.wikipedia.org/wiki/Yari">yari</EA>, and other weapons tailored specifically to the commissioner's specifications. These weapons are highly sought
                after by <EA href="https://en.wikipedia.org/wiki/Samurai">samurai</EA> and traveling warriors. Kujin also develops armor and practical tools for farming and carpentry. While most of his business comes from Samurai clans commissioning
                weapons, Kujin also runs a shop out the front of his <EA href="https://en.wikipedia.org/wiki/Foundry">foundry</EA>, where he sells to the locals and takes orders. He finds his services 
                to his local community important to not only them, but to help him feel accepted and respected, even given his condition as a Gluttonite. His body is too large to fit in the shop comfortably, so he often invites people into his foundry for conversation.
                On occasion, he fulfills orders from <EA href="https://en.wikipedia.org/wiki/Buddhist_temple">Buddhist temples</EA>, creating ceremonial blades and decorative metalwork for shrines.
            </EntryParagraph>
            <EntryParagraph>
                He predominantly works with steel, obtained through local suppliers and personal reclamation. The latter involves repurposing the weapons and armor of people he ingests. Kujin's proximity to contested territories made his forge a focal
                point for samurai defending the region. In return for his exceptional weapons and tools, samurai often brought him the armor and weapons of defeated raiders or rival clans. On rare occasions, Kujin himself intervened in these skirmishes,
                using his Gluttonite abilities to defeat enemies and reclaim their equipment for repurposing.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="sumo">Sumo</EntrySubTitle>
            <EntryParagraph>
                Kujin's belief that an insatiable spirit is behind his hunger, and his size from his appetite, led him towards the ritual of <EA href="https://en.wikipedia.org/wiki/Sumo">sumo</EA>. Matches were often to the death, which
                featured <EA href="https://en.wikipedia.org/wiki/Jujutsu">kumiuchi</EA> as a combat style. Kujin's enormous size makes him nearly impossible to move even slightly for a normal fighter. After he lets his opponent attempt to subdue him,
                often with them bouncing off his mountainous frame, he'd pin them down under his gut or legs. He often finds this amusing, letting out deep chuckles at the futile efforts of escape. After he's dominated the unfortunate wrestler, he then pulls them out from
                underneath him and swallows them whole with a satisfying gulp.
                Often, his opponents continue to fight while inside his stomach, letting out growls and continuing to writhe around until they're no longer able to. However, once they're inside him, the match is as good as won. Kujin
                sports his stomach proudly, belching out the air inside his stomach to signify his victory.
            </EntryParagraph>
            <EntryParagraph>
                After he leaves the ring, for the remainder of the ceremony, he digests his opponent without a second thought. He stands as though the excess weight of an entire sumo wrestler hanging from his belly isn't there. As his
                stomach softens and his <EA href="https://en.wikipedia.org/wiki/Mawashi">mawashi</EA> becomes engulfed by the weight gained from the fight, covered by his belly hanging over it. Each movement sways his gut around with deep
                glugging sounds coming from within. His new size often gets in the way of his craft as a blacksmith, making it too difficult for him to reach his anvil without his belly getting in the way. It can take several days before he's able to
                return to his profession, so he often spends the time in a local <EA href="https://en.wikipedia.org/wiki/Onsen">onsen</EA> to speed up the process of returning to normal.
            </EntryParagraph>
        </div>
    );
}

export default Kujin;
