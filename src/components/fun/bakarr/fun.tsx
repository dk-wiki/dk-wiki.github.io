import Paragraph from "@/components/elements/text";
import FormComponent from "./userstatsform";
import { TitleSection } from "@/components/elements/title";

const BakarrFun = () => {
    return (
        <div className="">
            <TitleSection>
                Miscellaneous Content
            </TitleSection>
            <Paragraph>
                If you are interested in seeing how long it would take Bakarr to digest you entirely, fill out the following form and press submit.
            </Paragraph>
            <FormComponent />
        </div>
    );
};

export default BakarrFun;
