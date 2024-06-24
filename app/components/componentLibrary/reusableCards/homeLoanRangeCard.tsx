
import {Link} from '@remix-run/react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function HomeLoanRangeCard({
    text,
    boldText,
    buttonText,
    buttonLink,
    className,
}: {
    text: string;
    boldText: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'lg:tw-col-start-2 lg:tw-w-[30rem] lg:tw-h-[fit-content] tw-grid lg:tw-bg-secondary-200 lg:sc-medium-shadow lg:tw-px-6 lg:tw-pt-12 lg:tw-pb-6 lg:tw-text-center tw-text-left lg:tw-rounded-lg',
                className,
            )}>
            <div className="sc-text-caption tw-text-secondary-800">
                {text}
            </div>
            <div className="tw-h-2" />
            <div className="lg:sc-text-title1 sc-text-headline tw-text-secondary-800">
                {boldText}
            </div>
            <div className="lg:tw-h-6" />
            <Link
                to={buttonLink}
                className="tw-hidden lg:tw-block sc-cta-button tw-justify-self-center tw-px-0 tw-py-[0.6rem] tw-w-[14.5rem]">
                {buttonText}
            </Link>
        </div>
    );
}
