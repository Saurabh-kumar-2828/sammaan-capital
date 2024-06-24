import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function NumberCard({
    img,
    text,
    number,
    className,
}: {
    img?: string;
    text: string;
    number: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid lg:tw-p-6 tw-p-4 tw-rounded-lg tw-bg-secondary-400 sc-xsmall-shadow tw-gap-2 lg:tw-gap-4 tw-border tw-border-secondary-100',
                className,
            )}>
            <div className="sc-footer-headline tw-text-secondary-800 tw-text-center">
                {number}
            </div>
            <div className="tw-font-bold sc-text-title2 tw-text-secondary-600 tw-text-center">
                {text}
            </div>
        </div>
    );
}
