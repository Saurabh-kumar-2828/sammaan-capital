import {Link} from '@remix-run/react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function PdfDownloadCard({
    text,
    link,
    className,
}: {
    text: string;
    link: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-bg-secondary-200 tw-rounded-lg tw-px-4 lg:tw-py-3 tw-py-2 sc-medium-shadow tw-h-full lg:tw-justify-self-center',
                className,
            )}>
            <Link
                to={link}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-gap-6 tw-items-center">
                <span className="tw-text-secondary-800 sc-text-caption tw-min-w-[8.375rem] lg:tw-min-w-[28.25rem]">{text}</span>
                <span className="tw-bg-primary-500 tw-h-9 tw-w-9 lg:tw-h-12 lg:tw-w-12"></span>
            </Link>
        </div>
    );
}
