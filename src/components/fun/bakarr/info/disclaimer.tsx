import type { ReactNode } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type DisclaimerProps = {
    children: ReactNode;
};

export default function Disclaimer({ children }: DisclaimerProps) {
    return (
        <div className="flex items-star disclaimer rounded-lg p-3 gap-3 disclaimer-text">
            <ExclamationTriangleIcon className="flex-shrink-0 mt-0.5 disclaimer-icon" width={24} height={24} />
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}