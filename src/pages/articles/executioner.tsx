import { RoundedHorizontal } from "@/components/elements/decorators";
import QuickFactsCard from "@/components/elements/quickfacts";
import Paragraph from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection, TitleSubsection } from "@/components/elements/title";
import ExecutionerFun from "@/components/fun/executioner/fun";

const ExecutionerPage = () => {
    return (
        <div className="py-10">
            <TitleMain>
                The Executioner
            </TitleMain>
            <QuickFactsCard
                imageSrc={"/icons/executioner-icon.png"}
                caption="A depiction of The Executioner"
                heightCm={0}
                weightKg={0}
                nationality={"England"}
                tileRound
                meta={
                    [
                        { label: "executioner", value: "fat" },
                        { label: "executioner", value: "fatter" }
                    ]
                }
                effects={
                    {
                        sepia: 0.5
                    }
                }
            />
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lectus sit amet tristique mollis. Proin tempor, risus rutrum maximus consequat, mauris mi euismod arcu, a suscipit ante quam sit amet tortor. Phasellus auctor, lorem sit amet egestas tincidunt, turpis tortor luctus elit, et porttitor lectus dolor et erat. Suspendisse venenatis est ut iaculis dapibus. Sed tincidunt convallis elit vehicula cursus. Ut finibus odio sit amet odio vehicula vehicula. Ut imperdiet quis mauris non molestie. Mauris purus purus, faucibus at aliquet at, molestie ac dui. Sed ex orci, pharetra sed feugiat et, consequat ut leo. Duis sagittis posuere tempor. Nunc et urna dolor. Donec pulvinar dui massa, ut facilisis neque commodo ut. Ut rhoncus tristique dolor.
            </Paragraph>
            <TableOfContents />
            <TitleSection>
                Diet
            </TitleSection>
            <Paragraph>
                LOADS of food. What else were you expecting?
            </Paragraph>
            <RoundedHorizontal tileRound tileSize={30} trimEnds />
            <TitleSection>
                Something Cool
            </TitleSection>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lectus sit amet tristique mollis. Proin tempor, risus rutrum maximus consequat, mauris mi euismod arcu, a suscipit ante quam sit amet tortor. Phasellus auctor, lorem sit amet egestas tincidunt, turpis tortor luctus elit, et porttitor lectus dolor et erat. Suspendisse venenatis est ut iaculis dapibus. Sed tincidunt convallis elit vehicula cursus. Ut finibus odio sit amet odio vehicula vehicula. Ut imperdiet quis mauris non molestie. Mauris purus purus, faucibus at aliquet at, molestie ac dui. Sed ex orci, pharetra sed feugiat et, consequat ut leo. Duis sagittis posuere tempor. Nunc et urna dolor. Donec pulvinar dui massa, ut facilisis neque commodo ut. Ut rhoncus tristique dolor.
            </Paragraph>
            <TitleSubsection>
                Subsections are cool
            </TitleSubsection>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lectus sit amet tristique mollis. Proin tempor, risus rutrum maximus consequat, mauris mi euismod arcu, a suscipit ante quam sit amet tortor. Phasellus auctor, lorem sit amet egestas tincidunt, turpis tortor luctus elit, et porttitor lectus dolor et erat. Suspendisse venenatis est ut iaculis dapibus. Sed tincidunt convallis elit vehicula cursus. Ut finibus odio sit amet odio vehicula vehicula. Ut imperdiet quis mauris non molestie. Mauris purus purus, faucibus at aliquet at, molestie ac dui. Sed ex orci, pharetra sed feugiat et, consequat ut leo. Duis sagittis posuere tempor. Nunc et urna dolor. Donec pulvinar dui massa, ut facilisis neque commodo ut. Ut rhoncus tristique dolor.
            </Paragraph>
            <TitleSubsection>
                Another cool subsection
            </TitleSubsection>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque lectus sit amet tristique mollis. Proin tempor, risus rutrum maximus consequat, mauris mi euismod arcu, a suscipit ante quam sit amet tortor. Phasellus auctor, lorem sit amet egestas tincidunt, turpis tortor luctus elit, et porttitor lectus dolor et erat. Suspendisse venenatis est ut iaculis dapibus. Sed tincidunt convallis elit vehicula cursus. Ut finibus odio sit amet odio vehicula vehicula. Ut imperdiet quis mauris non molestie. Mauris purus purus, faucibus at aliquet at, molestie ac dui. Sed ex orci, pharetra sed feugiat et, consequat ut leo. Duis sagittis posuere tempor. Nunc et urna dolor. Donec pulvinar dui massa, ut facilisis neque commodo ut. Ut rhoncus tristique dolor.
            </Paragraph>
            <RoundedHorizontal tileRound tileSize={30} trimEnds />
            <ExecutionerFun />
        </div>
    );
}

export default ExecutionerPage;