import { Horizontal } from "@/components/elements/decorators";
import Paragraph, { Link } from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection } from "@/components/elements/title";

const AegisPage = () => {
    return (
        <div>
            <TitleMain>
                Aegis (Military and Security)
            </TitleMain>
            <Paragraph>
                Aegis is a purported American humanitarian logistics contractor and security organisation. Some reports allege that it also operates covertly as a protection and combat support entity. The
                organisation's facilities and activities have not been publicly documented.
            </Paragraph>
                     <Horizontal />
            <TableOfContents />
            <TitleSection>
                Funding
            </TitleSection>
            <Paragraph>
                The organisation's funding sources are unclear. Analysts have speculated that it may rely on intermediary organisations, with humanitarian contracting and military support allegedly routed
                through <Link to="https://en.wikipedia.org/wiki/Front_organization">front entities</Link> such as charities, logistics firms, or consultancies. Some commentators have suggested possible links
                to unacknowledged defence budgets, such as those associated with <Link to="https://en.wikipedia.org/wiki/Skunk_Works">Skunk Works</Link> or <Link to="https://en.wikipedia.org/wiki/CIA_black_sites">CIA black sites</Link>, though no evidence has been provided.
            </Paragraph>
            <TitleSection>
                Facilities and Supply
            </TitleSection>
            <Paragraph>
                The exact location of Aegis headquarters and facilities is unknown. Unverified accounts place the organisation in the <Link to="https://en.wikipedia.org/wiki/United_States">United States</Link>,
                with alleged ties to foreign militaries.
            </Paragraph>
            <Paragraph indent>
                The organisation is rumoured to operate a fleet of aircraft, possibly acquired through defence export waivers. These have been speculated to be stored at private contractor hangars in FAA restricted
                zones, and registered under charter services. None of these claims have been substantiated.
            </Paragraph>
            <Paragraph indent>
                Unconfirmed reports also describe a research division allegedly focused on the biology of <Link to="/article/gluttonite">gluttonites</Link>, linked to the training and deployment of the scout
                operative <Link to="/article/fenris-bakarr">Fenris Bakarr</Link>.
            </Paragraph>
        </div>
    )
}

export default AegisPage;