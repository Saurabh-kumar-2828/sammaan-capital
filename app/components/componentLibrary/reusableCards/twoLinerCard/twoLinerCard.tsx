import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function TwoLinerCard({
    image,
    title,
    text,
    className,
    imageClassName,
    titleClassName,
    textClassName,
    background
}: {
    image?: string;
    title: string;
    text: string;
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    textClassName?: string;
    background?: boolean
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-auto-rows-max sc-medium-shadow tw-p-6 tw-gap-2 tw-rounded-lg tw-border tw-border-secondary-100-light tw-h-full',
                className, background ? "tw-bg-primary-100" : "tw-bg-secondary-200-light"
            )}>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-h-[3rem] tw-w-[3rem] tw-rounded-full tw-bg-[#001CA8] tw-justify-self-center sm:tw-justify-self-start tw-overflow-hidden',
                    imageClassName,
                )}>
                {image? <img src={image} alt='iconRounded'/> : ""}
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'sc-text-title1 tw-text-center sm:tw-text-start tw-text-secondary-800',
                    titleClassName,
                )}>
                {title}
            </div>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'sc-text-body tw-text-center sm:tw-text-start tw-text-secondary-600',
                    textClassName,
                )}>
                {text}
            </div>
        </div>
    );
}
