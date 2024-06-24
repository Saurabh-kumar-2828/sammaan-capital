import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {useContext, useState} from 'react';
import type {LoaderFunction} from 'react-router-dom';
import {
    contentData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {InterestRangCard} from '~/components/componentLibrary/reusableCards/interestRangCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export const meta: MetaFunction = () => {
    return [
        {title: 'New Remix App'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const userPreferences =
    //     await getUserPreferencesFromCookiesAndUrlSearchParameters(request);
    // if (userPreferences instanceof Error) {
    //     throw userPreferences;
    // }

    const vernacularData = getVernacularFromBackend('homeLoanInterestRate');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        // redirectTo: getRedirectToUrlFromRequest(request),
        // pageUrl: getUrlFromRequest(request),
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData} = useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <InterestRate />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function InterestRate() {

    return (
        <>
            <HeroSection />

            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: 'Home Loan',
                        link: '#',
                    },
                    {
                        contentId: 'Home Loan Interest Rate',
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <LoanInterest />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <InterestRateCard />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <FaqSection />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-grid lg:tw-grid-rows-[minmax(0,1fr)_auto_2.5rem_auto_minmax(0,1fr)] tw-grid-rows-[3.2rem_auto_minmax(0,1fr)_auto_2.6rem]  tw-grid-cols-1">
            <div className="tw-bg-secondary-500 tw-h-[23.75rem] tw-w-full tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full"></div>
            <div
                className="tw-row-start-2 tw-col-start-1 sc-px-screen-edge sc-text-banner tw-text-center lg:tw-text-start"
                dangerouslySetInnerHTML={{
                    __html: contentData.getContent(
                        '888a5093-f9ce-45fe-9960-78a06e6bb984',
                    ),
                }}
            />
            <div className="lg:sc-px-screen-edge tw-px-[2.6rem] tw-row-start-4 tw-col-start-1 tw-grid lg:tw-justify-self-start">
                <button className="sc-cta-button">
                    {contentData.getContent(
                        'bcac5576-eac4-436c-8322-3ac7fc978013',
                    )}
                </button>
            </div>
        </div>
    );
}

function LoanInterest() {
    const contentData = useContext(ContentProviderContext);
    const loanTab = [
        'c764ccc5-cf20-47da-8220-9ffc20f14779',
        '43d47da9-04ec-4892-9217-96cf5c1b6213',
    ];
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className="">
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('29a9228d-3d9e-459c-ad2b-432d94ac47bb')}
            </div>
            <VerticalSpacer className="tw-h-6 lg:tw-h-4" />
            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 tw-justify-center tw-py-2 lg:tw-py-4">
                {loanTab.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-p-[0.63rem] tw-rounded-lg sc-text-button tw-h-full ${
                                selectedTab === itemIndex
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() =>
                                (window.location.href =
                                    '/home-loan/loan-against-property-interest-rate')
                            }>
                            {contentData.getContent(item)}
                        </button>
                    </div>
                ))}
            </div>
            <VerticalSpacer className="tw-h-8" />
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-12 tw-gap-4">
                    <div className="sc-text-tiltl2 tw-text-secondary-600">
                        {contentData.getContent(
                            '942a7a59-23ef-4f24-a373-6c41dda0b2d0',
                        )}
                    </div>
                    <InterestRangCard
                        title={contentData.getContent(
                            '21b49233-b428-4513-bb57-a63728b41446',
                        )}
                        numberString={contentData.getContent(
                            'a2bcdb63-9a8a-49c0-9aaf-367a02b0155c',
                        )}
                        text1={contentData.getContent(
                            '33f1a23d-5d3a-462a-ad87-2afc104e14c8',
                        )}
                        text2={contentData.getContent(
                            '366c9ab9-aebe-457e-8be1-da6fe80d609c',
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

type interestCard = {
    subtitle: string;
    subtitleText: Array<{text: string}>;
};

type interestType = {
    title: string;
    description: string;
    pointer: Array<interestCard>;
};

function InterestRateCard() {
    const contentData = useContext(ContentProviderContext);
    const cardsInterestRates: Array<interestType> = [
        {
            title: '562201a2-98fd-4069-9400-dcfaddad0223',
            description: '2fcda56a-41a4-41e7-8a1d-bd5c5529271c',
            pointer: [
                {
                    subtitle: '7c3ea4d1-722f-4109-a29e-42a257db7ae0',
                    subtitleText: [
                        {
                            text: 'cceb5935-8069-470d-9b6b-0f0e4bf1cde2',
                        },
                        {
                            text: '9c878331-b6ae-431d-ac98-bebaccde2fed',
                        },
                    ],
                },
                {
                    subtitle: '04b1eb88-7bf8-4ca1-8830-94db4a853948',
                    subtitleText: [
                        {
                            text: '84d6017a-3a65-4676-96dc-67b2bae76a2d',
                        },
                        {
                            text: 'a70c77ef-6a6d-46e8-860c-7023eb1ed2bb',
                        },
                    ],
                },
            ],
        },
        {
            title: '53b8b993-80c1-445a-b107-1f01f4d543d6',
            description: 'd91c62f4-e3b3-42c8-af99-69f2e333a3fe',
            pointer: [
                {
                    subtitle: 'dcbb596b-1a80-4437-bed5-3f2cb55c2dac',
                    subtitleText: [
                        {
                            text: 'c0e87687-9d6a-4d8b-b606-e8a88faf6108',
                        },
                        {
                            text: '591aa5e3-ed0c-4be7-8427-eb7e63c0c1a7',
                        },
                    ],
                },
                {
                    subtitle: '29430ef5-4275-4ca7-8086-324af6231f1d',
                    subtitleText: [
                        {
                            text: '0cad48e5-2da6-4cf3-859c-fa8a3ad88eb7',
                        },
                        {
                            text: '151568ac-eddf-4c52-a185-4eda5d011151',
                        },
                        {
                            text: 'a8e95bb2-e18e-48cd-b243-5141156cffcc',
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20 sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-8">
                <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                    {contentData.getContent(
                        '7326189d-1aee-4cf3-9d31-466ea9b0e3a3',
                    )}
                </div>
                <div className="  tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-8">
                    <ItemBuilder
                        items={cardsInterestRates}
                        itemBuilder={(item, itemIndex) => (
                            <div
                                className="tw-bg-secondary-200 tw-rounded-lg tw-py-6"
                                key={itemIndex}>
                                <div className="sc-text-title1 tw-px-6">
                                    {contentData.getContent(item.title)}
                                </div>
                                <VerticalSpacer className="tw-h-2 tw-px-6" />
                                <div className="sc-text-title2 tw-text-secondary-600 tw-px-6">
                                    {contentData.getContent(item.description)}
                                </div>
                                <VerticalSpacer className="tw-h-8 tw-px-6" />
                                <div className="tw-grid tw-gap-8">
                                    <ItemBuilder
                                        items={item.pointer}
                                        itemBuilder={(item, itemIndex) => (
                                            <div
                                                className="tw-grid tw-gap-2"
                                                key={itemIndex}>
                                                <div
                                                    className={concatenateNonNullStringsWithSpaces(
                                                        'sc-text-title2 tw-text-secondary-800 tw-px-6 tw-border-l-4',
                                                        itemIndex === 0
                                                            ? 'tw-border-new-foreground-600'
                                                            : 'tw-border-new-foreground-700',
                                                    )}>
                                                    {contentData.getContent(
                                                        item.subtitle,
                                                    )}
                                                </div>
                                                <ul className="tw-list-disc tw-pl-14 tw-pr-6">
                                                    <ItemBuilder
                                                        items={
                                                            item.subtitleText
                                                        }
                                                        itemBuilder={(
                                                            item,
                                                            itemIndex,
                                                        ) => (
                                                            <li
                                                                className="sc-text-title2 tw-text-secondary-600"
                                                                key={itemIndex}>
                                                                {contentData.getContent(
                                                                    item.text,
                                                                )}
                                                            </li>
                                                        )}
                                                    />
                                                </ul>
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                'd555a872-ab28-4959-b596-58be8438b5d3',
            ),
            answer: contentData.getContent(
                '8659afd9-831f-4a34-92bc-2d02558f1432',
            ),
        },
        {
            question: contentData.getContent(
                'd38335dc-4a17-4023-82aa-82c3801e232b',
            ),
            answer: contentData.getContent(
                'af69181b-9001-450b-89bc-a8383b436a2f',
            ),
        },
        {
            question: contentData.getContent(
                'c9c6d43b-d4b4-44c2-b854-a780f773dda1',
            ),
            answer: contentData.getContent(
                '07464e6a-0f7e-4685-972a-0097054d877b',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
