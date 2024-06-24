import {Link} from "@remix-run/react";
import {ChevronRight} from "react-bootstrap-icons";
import {VerticalSpacer} from "~/components/reusableComponents/verticalSpacer";
import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function ApprovedProjectsCard({className, projectName, typeOfFlat, price, buttonText, buttonLink}: {className?: string; projectName: string; typeOfFlat: string; price: string; buttonText: string; buttonLink: string}) {
    return (
        <div className={concatenateNonNullStringsWithSpaces("tw-rounded-lg sc-medium-shadow tw-overflow-hidden", className? className : "")}>
            <div className="tw-w-full tw-h-[152px] tw-bg-primary-500"></div>
            <div className="tw-p-4">
                <div className="sc-text-title2">{projectName}</div>
                <div className="sc-footer-text tw-text-secondary-600">{typeOfFlat}</div>
                <div>{price}</div>
                <VerticalSpacer className="tw-h-2" />
                <Link to={buttonLink} className="tw-w-fit tw-flex tw-gap-3 tw-items-center">
                    <div className="tw-text-primary-500">{buttonText}</div>
                    <ChevronRight className="tw-text-primary-500"/>
                </Link>
            </div>
        </div>
    );
}