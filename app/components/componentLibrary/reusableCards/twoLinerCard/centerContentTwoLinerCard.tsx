import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CenterContentTwoLinerCard({
    img,
    title,
    text,
    className,
    titleClass,
    textClass,
}: {
    img?: string;
    title: string;
    text: string;
    className?: string;
    titleClass?: string;
    textClass?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid sc-medium-shadow tw-p-4 lg:tw-p-6 tw-gap-2 tw-rounded-lg tw-bg-secondary-200 tw-border tw-border-secondary-100',
                className,
            )}>
            <div className="tw-h-[4rem] tw-w-[4rem] tw-rounded-full tw-bg-[#001CA8] tw-justify-self-center">
                {/* <img url="" /> */}
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'sc-text-title1 tw-text-center tw-text-secondary-800',
                    titleClass,
                )}>
                {title}
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'sc-text-title2 tw-text-center tw-text-secondary-600',
                    textClass,
                )}>
                {text}
            </div>
        </div>
    );
}
