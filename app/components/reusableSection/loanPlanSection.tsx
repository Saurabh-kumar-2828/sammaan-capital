import {Link} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function LoanPlanSection({
    image,
    heading,
    item,
    text,
    buttonText,
    buttonLink,
    imageClassName,
    className,
}: {
    image?: string;
    heading: string;
    text: string;
    item: Array<any>;
    buttonText: string;
    buttonLink: string;
    imageClassName?: string;
    className?: string;
}) {
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge',
                className,
            )}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-rows-2 tw-grid-cols-1 lg:tw-grid-cols-2 lg:tw-grid-rows-1 lg:tw-gap-8 tw-gap-4">
                <div
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-bg-secondary-400 tw-w-full tw-rounded-lg',
                        imageClassName,
                    )}>
                    <img src={image} alt="" />
                </div>
                <div className="tw-grid">
                    <div className="sc-text-headline tw-text-secondary-800">
                        {heading}
                    </div>
                    <VerticalSpacer className="tw-h-2" />
                    <div className="tw-flex tw-flex-wrap tw-gap-2">
                        <ItemBuilder
                            items={item}
                            itemBuilder={(item, itemIndex) => (
                                <div
                                    className="tw-p-2 tw-text-primary-400 tw-bg-secondary-400 sc-text-title2 tw-rounded-lg"
                                    key={itemIndex}>
                                    {item}
                                </div>
                            )}
                        />
                    </div>
                    <VerticalSpacer className="tw-h-4" />
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {text}
                    </div>
                    <VerticalSpacer className="tw-h-4" />
                    <Link
                        to={buttonLink}
                        className="sc-cta-button tw-text-center tw-grid lg:tw-justify-self-start tw-w-full lg:tw-px-0 lg:tw-w-[20rem]">
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
