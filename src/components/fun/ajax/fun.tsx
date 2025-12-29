import type { ReactNode } from "react";
import SpamTest from "./spamtest";

const AjaxFun = () => {
    return (
        <div className="w-full">
            <PillarBox>
                <div className="text-sm">
                    Ajax is always looking for soldiers. Test your resiliance to see what role you'd have in Ajax's army.
                    You will have 15 seconds from when you first press his aspis. Good luck!
                </div>
                <SpamTest />
            </PillarBox>
        </div>
    );
}

type PillarBoxProps = {
    children?: ReactNode;
}

const PillarBox = ({ children }: PillarBoxProps) => {
    return (
        <div className="pillar-box relative h-full">
            <div className="pillar-top"></div>
            <div>
                <div className="pillar-left"></div>
                <div className="pillar-internal">
                    {children}
                </div>
                <div className="pillar-right"></div>
            </div>
            <div className="pillar-bottom"></div>
            <img className="ajax-sitting" src="/media/ajax-sitting.gif" />
        </div>
    )
}

export default AjaxFun;