import {Link} from '@remix-run/react';
import {ChevronRight} from 'react-bootstrap-icons';

export function LeaderCard({
    title,
    text,
    linkText,
    linkUrl,
    image,
}: {
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
    image?: string;
}) {
    return (
        <div className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-grid-rows-1 sc-medium-shadow tw-bg-secondary-200 tw-border tw-border-secondary-100 tw-p-4 tw-gap-2 tw-rounded-lg tw-h-full">
            <div className="tw-bg-primary-500 tw-min-h-[7rem] tw-w-[7.5rem] tw-rounded-lg tw-col-start-1 tw-row-start-1">
                {/* <img src={image} /> */}
            </div>
            <div className="tw-row-start-1 tw-col-start-2 tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-gap-2">
                <div className="">
                    <div className="sc-text-title1 tw-text-secondary-800 ">{title}</div>
                    <div className="sc-text-caption tw-text-secondary-700">{text}</div>
                </div>
                <Link
                    to={linkUrl}
                    className="sc-text-button tw-text-primary-500 tw-flex tw-gap-1 tw-items-end">
                    {linkText}
                    <ChevronRight className="tw-h-4 tw-w-4" />
                </Link>
            </div>
        </div>
    );
}
