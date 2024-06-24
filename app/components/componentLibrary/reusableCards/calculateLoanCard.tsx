import {Link} from "@remix-run/react";
import {ChevronRight} from "react-bootstrap-icons";

export function CalculateLoanCard({
    icon,
    title,
    text,
    linkText,
    linkUrl,
}: {
    icon?: string;
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
}) {
    return (
        <div className="tw-p-6 tw-grid tw-grid-cols-[auto_minmax(0,1fr)] lg:tw-grid-cols-1 tw-gap-4 tw-bg-secondary-400 sc-xsmall-shadow tw-rounded-lg tw-items-center">
            <div className="tw-col-start-1 tw-row-start-1 tw-bg-primary-500 tw-opacity-[30%] tw-h-10 tw-w-10">
                <img src={icon} alt="" />
            </div>
            <div className="tw-col-start-2 tw-row-start-1 lg:tw-col-start-1 lg:tw-row-start-2 sc-text-title1 tw-text-secondary-800">{title}</div>
            <div className="tw-row-start-2 tw-col-start-1 tw-col-span-2 lg:tw-row-start-3 sc-text-body tw-text-secondary-600">{text}</div>
            <Link to={linkUrl} className="tw-row-start-3 lg:tw-row-start-4 tw-col-start-1 tw-col-span-2 tw-text-primary-500 sc-text-body tw-flex tw-gap-1 tw-items-center">
                {linkText}   <ChevronRight className="tw-h-4 tw-w-4" />
            </Link>
        </div>
    );
}
