import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function PdfDownloadWithDateCard({
    date,
    year,
    month,
    text,
    link,
    className,
}: {
    date: string;
    year: string;
    month: string;
    text: string;
    link: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-bg-secondary-200 tw-rounded-lg lg:tw-px-4 lg:tw-py-3 tw-py-2 tw-px-3 sc-medium-shadow tw-h-full tw-border tw-border-secondary-100 tw-grid lg:tw-grid-cols-[auto_minmax(0,1fr)_auto] lg:tw-grid-rows-1 tw-grid-cols-1 tw-grid-rows-[auto_minmax(0,1fr)] tw-gap-x-6 tw-items-center',
                className,
            )}>
            <div className="tw-col-start-1 tw-row-start-1 tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-gap-1 tw-items-center">
                <div className="sc-text-banner lg:sc-text-headline tw-text-secondary-800">
                    {date}
                </div>
                <div className="">
                    <div className="sc-footer-text tw-font-bold tw-text-secondary-800">
                        {month}
                    </div>
                    <div className="sc-footer-text tw-text-secondary-800">
                        {year}
                    </div>
                </div>
            </div>

            <div className="tw-text-secondary-800 sc-text-caption tw-col-start-1 tw-col-span-2 tw-row-start-2 lg:tw-row-span-1 lg:tw-row-start-1 lg:tw-col-start-2 lg:tw-col-span-1">
                {text}
            </div>
            <a
                href={link}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="tw-col-start-2 lg:tw-col-start-3 tw-row-start-1">
                <div className="tw-bg-primary-500 tw-h-6 tw-w-6 lg:tw-h-12 lg:tw-w-12"></div>
            </a>
        </div>
    );
}
