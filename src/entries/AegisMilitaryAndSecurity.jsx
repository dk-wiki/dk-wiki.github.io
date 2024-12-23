import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, TableOfContents, EHr, EA, EBr, Eul, Eli, EntryImage, EntryQuote, EWarning } from "./EntryObjects";

const contents = [
    {
        title: "Origins and Mission",
        id: "origins-and-mission"
    },
    {
        title: "Operative Roster",
        id: "operative-roster"
    },
    {
        title: "Locations",
        id: "locations"
    }
];

const AegisMilitarySecurity = () => {
    return (
        <div>
            <EntryTitle>Aegis Military and Security</EntryTitle>
            <EWarning>
                <b>Disclaimer</b>
                <p>
                    The information provided here is based on speculative accounts and unverified reports. Aegis Military and Security remains a classified entity, and details about its operations and personnel are largely unknown.
                </p>
            </EWarning>
            <EntryIntroduction imgSrc="media/AMSLogo.svg" imgDesc="A recreation of the AMS logo from leaked photos of envelopes and external items.">
                <b>Aegis Military and Security (AMS)</b> is a highly classified and privately owned paramilitary organization. They are contracted by various entities, including governments and corporations,
                to undertake sensitive and complex missions that require specialized operatives and advanced technologies. Details of their exact operations are classified, with only general and vague
                formal information available to the public.
                <EBr />
                From leaked documents and reports, as well as second-hand accounts from former opponents, AMS is known to employ technology that is years ahead of current military standards. Their operatives are
                highly trained, recruited from various military and intelligence backgrounds. Along with these operatives, AMS is known to employ the enhanced abilities of a Gluttonite known as <EA href="#/entries/SOAS_Bakarr">SOAS Bakarr</EA>.
            </EntryIntroduction>
            <TableOfContents items={contents} />
            <EntrySubTitle jid="origins-and-mission">Origins and Mission</EntrySubTitle>
            <EntryParagraph>
                The origins of AMS are obscure, with limited information on its founders or funding sources. Speculation suggests that the organization was established to serve as a counterbalance
                to traditional military forces, addressing operations deemed too unconventional for national armies. The mission of Aegis is to preserve stability, protect vulnerable communities, and address complex challenges
                that fall outside the purview of conventional military and intelligence agencies. These include:
            </EntryParagraph>
            <EntryParagraph>
                <Eul>
                    <li><b>Humanitarian Protection</b>: safeguarding human rights, protecting vulnerable populations, and offering disaster response and recovery services;</li>
                    <li><b>Counterterrorism</b>: neutralizing and dismantling radical and extremist groups;</li>
                    <li><b>Ethical Leadership</b>: fighting against corruption and instability at all levels of power;</li>
                </Eul>
            </EntryParagraph>
            <EntryParagraph>
                Ethical considerations are a cornerstone of Aegis' mission, with objectives being accepted after thorough review and approval. While sponsorships are a potential source of funding, the organization is known to operate
                strictly independently, ensuring its autonomy and integrity. Governments may also employ AMS for general military operations, with funds being reallocated to all departments and goals of the organization.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="operative-roster">Operative Roster</EntrySubTitle>
            <EntryImage
                src="media/AMSEnvelope.jpg"
                alt="AMS Envelope"
                description="A sighted example of an AMS envelope, believed to be used for recruitment and communication."
            />
            <EntryParagraph>
                Aegis' operatives are drawn from elite military and intelligence backgrounds. It is believed that recruitment is conducted through invitation only, with sightings of AMS envelopes in circulation. Operatives involved in
                AMS are not publicly disclosed; however, leaked information has revealed a program where individuals with enhanced and unnatural abilities are recruited. One such individual
                is <EA href="#/entries/SOAS_Bakarr">SOAS Bakarr</EA>, a <EA href="#/entries/Gluttonite">Gluttonite</EA>.
            </EntryParagraph>
            <EntryParagraph>
                This program focuses on enhancing these "super-humans" with chemical and physical modifications, where their abilities are specialized and tailored to the needs of the organization. In return, these individuals are provided with
                quarters and facilities that cater to their unique needs.
            </EntryParagraph>
            <EntryParagraph>
                All recruitment is voluntary, with candidates given the chance to opt out at any time. The recruitment process is intense and rigorous; however, it comes with little risk of death or injury. The organization is dictated by
                a strict code of conduct.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="locations">Locations</EntrySubTitle>
            <EntryParagraph>
                Aegis' headquarters and operational bases are unknown to the public. Mailing addresses link to a "Gateway Facility" run by an entity that only postal services have access to. From there, the gateway facility forwards
                the mail to the appropriate location, either digitally or physically depending on the contents. The return address is listed as follows:
            </EntryParagraph>
            <EntryQuote>
                <u>Return to Sender if Undeliverable</u>
                <p>Mail Processing Center, Aegis Military and</p>
                <p>Security, PO Box 477, Gateway Facility, USA.</p>
            </EntryQuote>
            <EntryParagraph>
                It is unclear exactly how the process works; however, it is evident that there are several layers of security and secrecy in place to protect the organization's interests.
            </EntryParagraph>
            <EHr />
        </div>
    );
};

export default AegisMilitarySecurity;
