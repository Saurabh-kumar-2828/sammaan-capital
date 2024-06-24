import {Link} from '@remix-run/react';
import {ChevronRight} from 'react-bootstrap-icons';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function BlogsCard2({
    image,
    date,
    title,
    text,
    linkText,
    linkUrl,
    className,
}: {
    image?: string;
    date: string;
    title: string;
    text: string;
    linkText: string;
    linkUrl: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-grid-rows-[auto_minmax(0,1fr)] tw-h-full tw-w-full',
                className,
            )}>
            <div className="tw-row-start-1 tw-rounded-t-lg tw-overflow-hidden tw-h-[13rem] tw-bg-secondary-400">
                {image ? <img src={image} alt='newsImg'/>: ""}
            </div>
            <div className="tw-row-start-2 tw-bg-secondary-200 sc-medium-shadow tw-px-3 tw-pb-5 tw-py-2 tw-rounded-b-lg tw-grid tw-grid-rows-[auto_auto_minmax(0,1fr)_auto] tw-gap-2">
                <div className="sc-text-caption">{date}</div>
                <div className="sc-text-title1">{title}</div>
                <div className="sc-text-title2 tw-text-secondary-600">{text}</div>
                <Link
                    to={linkUrl}
                    className="sc-text-button tw-flex tw-items-end tw-gap-1 tw-text-primary-500">
                    {linkText}
                    <ChevronRight className="tw-h-4 tw-w-4" />
                </Link>
            </div>
        </div>
    );
}
