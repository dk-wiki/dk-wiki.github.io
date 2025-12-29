import { Horizontal } from "@/components/elements/decorators";
import ImageCard from "@/components/elements/imagecard";
import Page from "@/components/elements/page";
import QuickFactsCard from "@/components/elements/quickfacts";
import CustomTable from "@/components/elements/table";
import Paragraph from "@/components/elements/text";
import TableOfContents, { TitleMain, TitleSection, TitleSubsection } from "@/components/elements/title";
import { useTitle } from "@/lib";


const AboutPage = () => {
    useTitle("About");

    const columns = ["Name", "Age", "Occupation"];
    const entries = [
        ["Alice", 28, "Engineer"],
        ["Bob", 34, "Designer"],
        ["Charlie", 25, "Musician"],
    ];

    return (
        <Page>
            <div>
                <TitleMain>Cool Document</TitleMain>
                <QuickFactsCard
                    imageSrc="/icons/bakarr-icon.png"
                    caption="Dr. Ada Lovelace"
                    heightCm={170}
                    weightKg={60}
                    nationality="Greece (Sparta)"
                    meta={[
                        { label: "Born", value: "1815" },
                        { label: "Known for", value: "First computer algorithm" }
                    ]}
                />
                <TitleSection>Intro</TitleSection>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
                <Horizontal />
                <TableOfContents />
                <TitleSection>More Stuff</TitleSection>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
                <Paragraph indent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
                <Horizontal />
                <TitleSection>Details</TitleSection>
                <ImageCard
                    src="https://picsum.photos/300/400"
                    alt="Placeholder"
                    position="left"
                    caption="Placeholder from picsum.photos"
                />
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
                <Paragraph indent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
                <TitleSubsection>Deep Dive</TitleSubsection>
                <Paragraph>
                    Here's a really cool table:
                </Paragraph>
                <CustomTable columns={columns} entries={entries} />
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit risus vel vehicula. Vivamus suscipit tortor ac nisl pulvinar eleifend. Nullam pellentesque dolor sed orci venenatis fringilla at vel sapien. Pellentesque eros enim, vehicula vel accumsan nec, viverra vitae justo. Sed quis nibh diam. Nam maximus mi in nisi gravida, eget lobortis nisi dictum. Curabitur lorem purus, venenatis eu luctus non, accumsan sit amet magna. In hac habitasse platea dictumst. Phasellus diam lorem, congue id elit ac, commodo tincidunt elit. In ante orci, tincidunt lobortis massa fringilla, lacinia vehicula odio. Nullam maximus ipsum semper lacus iaculis, at rhoncus magna vehicula. Aenean tristique sed orci sed tempus. Praesent in porttitor orci, nec iaculis dolor. Vivamus iaculis lectus tortor, id rutrum lacus gravida sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Paragraph>
            </div>
        </Page>
    );
}

export default AboutPage;