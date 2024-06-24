import {Link} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CalculatorTab({selectedTab}: {selectedTab: number}) {
    const typeOfCalc = [
        {
            name: 'EMI Calculator',
            url: '/emi-calculator',
        },
        {
            name: 'Eligibility Calculator',
            url: '/eligibility-calculator',
        },
        {
            name: 'PMAY Subsidy ',
            url: '/pmay-calculator',
        },
        {
            name: 'Affordability Calculator',
            url: '/affordability-calculator',
        },
        {
            name: 'Stamp Duty',
            url: '#',
        },
        {
            name: 'Tax Benefits',
            url: '#',
        },
    ];
    return (
        <div className="tw-grid tw-grid-flow-col tw-overflow-x-auto sc-xsmall-shadow lg:tw-border-b lg:tw-border-secondary-800">
            <ItemBuilder
                items={typeOfCalc}
                itemBuilder={(item, itemIndex) => {
                    return (
                        <Link
                            to={item.url}
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-whitespace-nowrap tw-text-center tw-py-4 tw-px-6 sc-text-button tw-cursor-pointer',
                                itemIndex == selectedTab
                                    ? 'tw-bg-secondary-400 tw-border-b tw-border-primary-500'
                                    : '',
                            )}>
                            {item.name}
                        </Link>
                    );
                }}
            />
        </div>
    );
}
