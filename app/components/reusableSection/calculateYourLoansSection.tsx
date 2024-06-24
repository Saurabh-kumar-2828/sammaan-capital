import {Link} from '@remix-run/react';
import {CalculateLoanCard} from '~/components/componentLibrary/reusableCards/calculateLoanCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

export function CalculateYourLoansSection({
    items,
    heading,
    buttonText,
    buttonUrl,
    cardLinks,
}: {
    items: Array<{
        imgLink?: string;
        title: string;
        text: string;
        subText: string;
    }>;
    heading: string;
    buttonText: string;
    buttonUrl: string;
    cardLinks?: Array<string>;
}) {
    const links = cardLinks ? cardLinks : ['#', '#', '#'];
    const updatedItems = items.map((item, itemIndex) => {
        return {...item, linkUrl: links[itemIndex]};
    });

    return (
        <div className="sc-px-screen-edge lg:tw-py-20 tw-py-10">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid">
                <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                    {heading}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-gap-4 tw-grid-cols-1 lg:tw-grid-cols-3">
                    <ItemBuilder
                        items={updatedItems}
                        itemBuilder={(item, itemIndex) => (
                            <CalculateLoanCard
                                key={itemIndex}
                                title={item.title}
                                text={item.text}
                                linkText={item.subText}
                                linkUrl={item.linkUrl}
                            />
                        )}
                    />
                </div>
                <VerticalSpacer className="tw-h-6" />
                <Link
                    to={buttonUrl}
                    className="sc-cta-outline-button tw-justify-self-center tw-px-0 lg:tw-w-[19.5rem] tw-w-full tw-text-center sc-small-shadow">
                    {buttonText}
                </Link>
            </div>
        </div>
    );
}
