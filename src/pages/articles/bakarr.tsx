import { Horizontal } from "@/components/elements/decorators";
import QuickFactsCard from "@/components/elements/quickfacts";
import Paragraph from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection, TitleSubsection } from "@/components/elements/title";
import NetworkInfoComponent from "@/components/fun/bakarr/info/networkinfocomponent";
import ComputerInfoComponent from "@/components/fun/bakarr/info/computerinfocomponent";
import BrowserInfoComponent from "@/components/fun/bakarr/info/browserinfocomponent";
import Disclaimer from "@/components/fun/bakarr/info/disclaimer";
import BakarrFun from "@/components/fun/bakarr/fun";

const BakarrPage = () => {
    return (
        <div className="page flex flex-col h-full">
            <NetworkInfoComponent />
            <div className="flex-1">
                <TitleMain>
                    Fenris Bakarr
                </TitleMain>
                <QuickFactsCard
                    imageSrc="/icons/bakarr-icon.png"
                    caption="A Depiction of Fenris Bakarr"
                    heightCm={270}
                    weightKg={481}
                    nationality="USA (Undisclosed)"
                    effects={{
                        bulgeAmount: 0.15,
                        vignette: [0, 0.25]
                    }}
                    meta={[
                        { label: "Likes", value: "Cats" },
                        { label: "Dislikes", value: "Wet sand" }
                    ]}
                />
                <Horizontal />
                <Paragraph>
                    Fenris Bakarr is a super soldier gluttonite who's like, literally the best. I know A LOT of people wanna fuck this man, and I can't blame them at all. I mean, a single one of his pecs is probably heavier than an entire person!
                </Paragraph>
                <TableOfContents />
                <TitleSection>
                    Origins and Early Life
                </TitleSection>
                <Paragraph>
                    Bakarr is a little fatty. Tummy boi. Big belly blob hehe.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus velit sit amet lorem gravida sagittis. Integer porttitor lacinia justo, id malesuada nisi imperdiet eget. Suspendisse sollicitudin lacus nibh, sed auctor nisi pellentesque non. Curabitur quis orci non neque dictum consequat a at sem. Vivamus vel dolor venenatis tellus pretium ultricies et tempor erat. Nullam non felis tellus. Curabitur vitae tristique orci. Vestibulum auctor efficitur tincidunt. Donec vel tellus non nisl venenatis pulvinar. Praesent ipsum neque, tristique sed quam sit amet, faucibus luctus erat. Nunc egestas consectetur mollis. Vivamus leo enim, imperdiet ac ex non, varius dapibus lectus. Fusce sit amet dolor justo. Donec est erat, tempus at lectus ac, volutpat hendrerit augue. Praesent interdum ex ac dui suscipit, ut mollis ex commodo. Aliquam volutpat finibus lorem, at iaculis lacus sagittis dignissim.
                </Paragraph>
                <Paragraph indent>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a risus in nisi cursus sollicitudin vel nec orci. Aenean laoreet ullamcorper ligula non vestibulum. Vestibulum sit amet ipsum placerat, viverra tellus in, viverra velit. Donec vitae varius dui, id vestibulum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu odio lacus. Nulla ultrices metus tortor, at dignissim ipsum laoreet ac. Quisque mollis faucibus varius. Aliquam nec magna id diam sodales ultricies vel a massa. Vestibulum porttitor ex sed ante convallis aliquet. Sed finibus, velit non tempor congue, justo nulla sagittis tortor, at elementum est est eu ipsum.
                </Paragraph>
                <TitleSection>
                    Gluttonite Features
                </TitleSection>
                <Paragraph>
                    Donec non ultrices mi. Curabitur sollicitudin commodo aliquam. In in dignissim enim, nec cursus eros. Suspendisse fringilla rhoncus tortor eget laoreet. Integer eu ultricies sem. Praesent tempus arcu eu velit dictum, ut dictum nunc aliquam. Fusce mattis placerat urna, at porta ex tempor eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa et risus vulputate, at scelerisque odio vulputate. Donec sit amet volutpat tortor, non tincidunt libero. Vestibulum quam orci, pretium id ante cursus, sollicitudin tempor sem. Cras est felis, blandit eget libero sit amet, feugiat vehicula ante. Donec fermentum dignissim libero ut scelerisque. Quisque feugiat aliquam ornare. Suspendisse aliquet, lorem nec accumsan ultrices, metus nisl malesuada eros, eu convallis nunc ante non est.
                </Paragraph>
                <TitleSubsection>
                    Digestion Features
                </TitleSubsection>
                <Paragraph>
                    Nam hendrerit pretium justo, id fermentum velit vulputate ac. Praesent posuere eros vel justo posuere ultricies. Sed convallis, nisl nec vulputate aliquam, ipsum ipsum suscipit libero, at dictum tellus purus non augue. Vivamus imperdiet ornare velit, tempus bibendum elit tristique et. Nullam nec ipsum non leo pretium tempus. Aenean imperdiet ipsum eget enim sodales euismod. Phasellus et interdum risus. Suspendisse tempus massa a pellentesque placerat. Fusce vel rutrum massa. Sed non sapien erat. Aenean velit magna, efficitur vitae mattis id, pulvinar non tellus. Vestibulum ultricies arcu eget velit aliquam euismod eget at elit. Donec semper erat ut ante pellentesque, vitae tempor nunc imperdiet.
                </Paragraph>
                <TitleSubsection>
                    Other Stuff
                </TitleSubsection>
                <Paragraph>
                    Maecenas molestie, elit vel interdum ultricies, nisi est ornare quam, a eleifend lorem erat quis tortor. Phasellus augue ligula, mattis vel lacus ut, efficitur egestas leo. Ut commodo mollis libero, at laoreet lacus facilisis vitae. Cras mollis commodo odio ac efficitur. Pellentesque hendrerit, mauris eget aliquet feugiat, quam dolor ornare justo, ac mollis velit arcu nec urna. Maecenas id rhoncus lorem. Sed gravida blandit justo, sed tristique velit. Nulla ultrices dignissim enim sed volutpat. Ut eleifend varius orci sit amet pulvinar. Suspendisse eget egestas orci, at euismod diam. Mauris non elit id felis elementum cursus tempus eget justo. Sed ac enim et velit dapibus viverra. Donec iaculis, purus ut aliquam luctus, nulla mi egestas orci, id congue magna sapien non orci. Donec mattis malesuada fermentum. Maecenas a lacus eu lectus tristique congue vel vel sapien.
                </Paragraph>
            </div>
            <div>
                <Horizontal />
                <BakarrFun />
                <Horizontal />
                <Disclaimer>
                    WARNING: The content on this site is classified proprietary intelligence belonging to an undisclosed private military contractor. While publicly accessible through this platform, access does not imply authorization to redistribute, archive, or disclose any material.

                    All user activity is monitored. Data collected—including behavioral patterns, device fingerprints, and session metadata—is analyzed for operational security and counterintelligence purposes. Unauthorized use or disclosure will be considered a breach of contract and may result in blacklisting, legal action, or active field response.

                    By proceeding, you acknowledge that the material presented is sensitive, access is conditional, and violations will be treated as hostile actions under internal Aegis protocols.
                </Disclaimer>
                <ComputerInfoComponent />
                <br />
                <BrowserInfoComponent />
                <div className="text-xs mt-4 disclaimer-text">
                    All information displayed on this site is not stored or actually tracked. All information is publically obtainable (without permission) whenever you enter a website.
                </div>
            </div>
        </div >
    );
};

export default BakarrPage;
