import { Horizontal } from "@/components/elements/decorators";
import QuickFactsCard from "@/components/elements/quickfacts";
import Paragraph, { LI, UL } from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection, TitleSubsection } from "@/components/elements/title";
import AjaxFun from "@/components/fun/ajax/fun";
import { Link } from "@/components/elements/text";

const AjaxPage = () => {
    return (
        <div>
            <TitleMain>
                Ajax
            </TitleMain>
            <Horizontal />
            <QuickFactsCard
                imageSrc={"/icons/ajax-icon.png"}
                caption="A depiction of Ajax"
                heightCm={242}
                weightKg={330}
                nationality={"Greece (Sparta)"}
                tileRound
                effects={{
                    bulgeAmount: 0.2
                }}
                meta={
                    [
                        { label: "Rank", value: "Lochagos" },
                    ]
                }
            />
            <Paragraph>
                Ajax of Kastorio is a <Link to="https://en.wikipedia.org/wiki/Sparta">Spartan</Link> warrior and <Link to="/article/gluttonite">Gluttonite</Link>. He was born to a shepherding family in Kastorio,
                and was sponsored in his youth to join the Spartan <Link to="https://en.wikipedia.org/wiki/Agoge">agoge</Link> despite not being a true-born Spartiate. He later rose to prominence within the
                Spartan army as a <Link to="https://en.wikipedia.org/wiki/lochagos">lochagos</Link>. Ajax is regarded as one of the most famous examples of the Gluttonite subspecies, even though his existence was
                a closely guarded state secret.
            </Paragraph>
            <Paragraph indent>
                Ajax wears a bronze helmet polished to a golden sheen. His crest was red during his early military career, but now carries a black base with white stripes alongside the red. Beneath his
                leather <Link to="https://en.wikipedia.org/wiki/Pteruges">pteruges</Link> is a tight, red cloth containing his crotch, matching his cape. Ajax takes great pride in himself and physique, often wearing
                little clothing to cover up his enormous body and muscles. He has polished bracers on both arms and leather krepides (sandals) laced up to his calves. His aspis (shield) is slightly larger
                than that of a regular hoplite, while his dory (spear) was significantly heavier than the average, weighing around 10kg and measuring 3m in length.
            </Paragraph>
            <TableOfContents />
            <TitleSection>
                Early life
            </TitleSection>
            <Paragraph>
                Ajax was born in Kastorio, a Greek village north of Sparta. He was born into a shepherding family and grew up tending to goats and sheep, shearing wool and working on the hills. His father
                was an enomotarchos for a short period during his <Link to="https://en.wikipedia.org/wiki/Perioeci">perioeci</Link> military service, where he led Kastorio's unit before returning to civilian
                life and starting a family.
            </Paragraph>
            <Paragraph indent>
                Ajax's life changed when a Spartiate officer, temporarily garrisoned in Kastorio during a war scare with <Link to="https://en.wikipedia.org/wiki/Arcadia_(region)">Arcadia</Link>, inspected his
                family's land and witnessed him fending off a pack of wolves. Though small for his age, Ajax's bravery impressed the officer, who arranged with his parents for the rare opportunity to sponsor him
                into the Spartan agoge, even though he would join later than usual. Ajax trained alongside true-born Spartans, enduring ridicule for his origins but ultimately completing the system successfully.
                Despite the initial isolation, Ajax developed a sense of purpose serving Sparta.
            </Paragraph>
            <TitleSubsection>
                Integration into Sparta
            </TitleSubsection>
            <Paragraph>
                By the time he began his military career, he had started showing symptoms of transforming into a Gluttonite. He would frequently steal food outside of the rations to satiate his growing hunger
                and would often be seen wearing his helmet when not in combat.
                Before long, he was towering over his peers and showing remarkable feats of strength, such as crushing shields with ease. His lean physique and abilities caught the attention of
                the <Link to="https://en.wikipedia.org/wiki/Gerousia">Gerousia</Link>, who, after deliberation, considered Ajax's presence a divine omen and a Heraklean throwback. They proposed granting
                Ajax citizenship, which was later ratified by the <Link to="https://en.wikipedia.org/wiki/Ecclesia_(Sparta)">apella</Link>.
            </Paragraph>
            <Horizontal />
            <TitleSection>
                Military career
            </TitleSection>
            <Paragraph>
                Ajax's military career began strongly, showing promise even before the Gluttonite transformation was complete. His increasing size carried immense strength as well as an insatiable appetite.
                During a brief skirmish, Ajax lost control and devoured a soldier whole. Though his Heraklean nature was well known by this point, this act was shocking to those who witnessed it. Before his
                superiors were informed, the ingested soldier had already lost shape and been digested, leaving nothing more than a small belly. Ajax's natural digestion rate is the fastest of any known
                Gluttonite, allowing him to completely absorb a grown male within five to ten minutes, depending on his activity.
            </Paragraph>
            <Paragraph indent>
                Ajax's ability to swallow soldiers with ease provides him with an edge in combat, using his stomach as a lethal weapon. His size and strength grant him full mobility with even three undigested
                soldiers contained in his gut, and rarely exceeding five while in battle. After battle, whether it is captured enemies or dishonoured soldiers, Ajax is known to dispose of large quantities
                of soldiers, with some accounts claiming his maximum capacity can exceed thirty soldiers. His abilities are treated as a state secret, though rumours among enemies describe an insatiable beast devouring men.
            </Paragraph>
            <Paragraph indent>
                Once his practice of consuming foes was reluctantly tolerated by his men, Ajax was quickly recognised as an asset by the Gerousia and <Link to="https://en.wikipedia.org/wiki/Ephor">Ephors</Link>, who
                permitted him to continue feasting on opposing soldiers. Although granted immunity for these actions, social stigma lingered for some time. Ajax continued rising the ranks in the Spartan
                army, first becoming an enomotarchos like his father, then a pentekonter, and finally a lochagos.
            </Paragraph>
            <TitleSubsection>
                Role as a trainer
            </TitleSubsection>
            <Paragraph>
                As a lochagos, Ajax trains and maintains his own <Link to="https://en.wikipedia.org/wiki/Lochos">lochos</Link>. He is not involved in the agoge, but focuses on perfecting his unit, which has
                developed a reputation for toughness and prestige. Many warriors seek transfer from ordinary units into Ajax's, which comes to be seen as an elite posting.
            </Paragraph>
            <Paragraph indent>
                Service under Ajax is regarded as both an honour and a risk. Once in his lochos, the only exits are death in battle, retirement, or being consumed by him. Some soldiers who judge themselves unfit for
                service voluntarily offer themselves to Ajax in ritual consumption, believing their sacrifice strengthens Sparta as opposed to continuing to use resources. The Ephors and Gerousia do not officially
                endorse this practice, but they choose not to interfere because of the formidable results of his unit.
            </Paragraph>
            <Horizontal />
            <TitleSection>
                Social and family life
            </TitleSection>
            <TitleSubsection>
                Friends and comrades
            </TitleSubsection>
            <Paragraph>
                Like many Gluttonites, Ajax faced ostracism from his peers in his early years. He was accused of tainting the purity of the Spartan army, and his size and refusal to remove his helmet were considered a threat to the conformity
                of Spartan life. Despite this, Ajax was inducted into a <Link to="https://en.wikipedia.org/wiki/Syssitia">syssition</Link> under pressure from the Gerousia and Ephors, who had an interest in
                cultivating him as a Heraklean figure. His mess, aware of his reputation and background as a perioecus, initially feared his inclusion but eventually accepted him after witnessing his Spartan pride. His hunger was far greater than that of
                the rest of his mess, so they gave up portions of their meals to keep him satisfied. At first, this was done out of fear of being eaten, but in time it became a recognition that feeding Ajax strengthened Sparta
                itself.
            </Paragraph>
            <Paragraph indent>
                Gluttonites are known for powerful libido, and Ajax is especially driven. His experiences in battle and in training often provide him with arousal that he
                struggles to control. He takes many opportunities to bond with the men in his lochos through sexual intercourse, which helps boost camaraderie and relieve Ajax from all the pent-up hormones. Due to his
                increased size and his desire for dominance, many of these encounters often result in injury or even death.
            </Paragraph>
            <Paragraph indent>
                Beyond meals with his mess and bonding with his unit, Ajax is seen as solitary. His size and status as a Heraklean figure sets him apart from others, and he often trains in private to avoid public attention.
                Ajax shares a deep connection to the mountains he has spent his early years living in, and often explores and trains entirely nude.
            </Paragraph>
            <TitleSubsection>
                Family
            </TitleSubsection>
            <Paragraph>
                Ever since Ajax entered the agoge, communication with his parents ceased. It wasn't until he attained rank of lochagos, where he gained access to the <Link to="https://en.wikipedia.org/wiki/Agora">agora</Link> and finally had a chance to reach them.
                A travelling Perioecus merchant selling wool and goat cheese revealed he was from Kastorio, which delighted Ajax. The merchant later informed Ajax's parents of their son's status, and they travelled to Sparta under the guise of
                selling their wool and goat cheese.
            </Paragraph>
            <Paragraph indent>
                When his parents finally saw him, however, they were struck with shame and fear at the towering figure before them, a muscular creature far removed from the son they remembered. They left Sparta shortly after to return to
                Kastorio, resentful at what the state had made him. Ajax quietly purchased some goat cheese from the merchant before returning to his mess to share it, although he could not bring himself to eat any.
            </Paragraph>
            <Horizontal />
            <TitleSection>
                Trivia
            </TitleSection>
            <UL>
                <LI>Ajax is quick to anger, particularly if anybody points out the body fat he develops after devouring an entire army. He always has room to accommodate people who mock his size.</LI>
                <LI>Despite not being able to take a joke, he is often seen as a jokester. He enjoys pranks and irritating his superiors, much to the amusement of his mess.</LI>
                <LI>He is fiercely loyal to Sparta, to the point of obsession.</LI>
                <LI>Showing deeper emotions is foreign to him, and he often comes across as self-assured and overly confident, even if that doesn't reflect his true feelings.</LI>
                <LI>His belches have been mistaken for wild animals by people from kilometres away.</LI>
            </UL>
            <Horizontal />
            <AjaxFun />
        </div>
    );
}

export default AjaxPage;