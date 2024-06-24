import {MetaFunction, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {LoaderFunction} from 'react-router-dom';
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

    const vernacularData = getVernacularFromBackend(
        'loanAgainstPropertyInerestRate',
    );

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
                        contentId: 'Loan Against Property',
                        link: '#',
                    },
                    {
                        contentId: 'Interest Rate',
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
        <div className="tw-grid lg:tw-grid-rows-[minmax(0,1fr)_auto_2.5rem_auto_minmax(0,1fr)] tw-grid-rows-[3.2rem_auto_minmax(0,1fr)_auto_2.6rem] tw-grid-cols-1">
            <div className="tw-bg-secondary-500 tw-h-[23.75rem] tw-w-full tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full"></div>
            <div
                className="tw-row-start-2 tw-col-start-1 sc-px-screen-edge sc-text-banner tw-text-center lg:tw-text-start"
                dangerouslySetInnerHTML={{
                    __html: contentData.getContent(
                        'a46cb332-c3e6-4b7b-9b37-0c7188cf85df',
                    ),
                }}
            />
            <div className="lg:sc-px-screen-edge tw-px-[2.6rem] tw-row-start-4 tw-col-start-1 tw-grid lg:tw-justify-self-start">
                <button className="sc-cta-button">
                    {contentData.getContent(
                        'a1aba6ae-88f1-45a2-9441-3c69ee3107db',
                    )}
                </button>
            </div>
        </div>
    );
}

function LoanInterest() {
    const contentData = useContext(ContentProviderContext);
    const loanTab = [
        '01ab2a7e-b471-494f-bd89-1c4e734bebc0',
        '55131612-91b7-4f2a-888a-3ac80b3a4f86',
    ];
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className="">
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('51060446-1dcd-4a07-b00f-19ba4dbbffa3')}
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
                                    '/home-loan/home-loan-interest-rate')
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
                            '8e3354a8-bf1d-41f7-872d-316c031c6b1f',
                        )}
                    </div>
                    <InterestRangCard
                        title={contentData.getContent(
                            '73106e16-f566-4ab4-b099-88016457c8ed',
                        )}
                        numberString={contentData.getContent(
                            '7161e519-86d7-4284-92b0-adfe981d6732',
                        )}
                        text1={contentData.getContent(
                            'c3048c71-41eb-4d6f-abbd-56ac48f407b3',
                        )}
                        text2={contentData.getContent(
                            'b43caaf6-288c-408a-bd7b-833aff7f0dea',
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
            title: '2736292c-b7dc-4082-85b3-519ed637ab01',
            description: '6863c8d3-00ad-4931-865c-599035b1ea46',
            pointer: [
                {
                    subtitle: '7ef17be4-c01e-47b2-bcde-2de3814ddf68',
                    subtitleText: [
                        {
                            text: 'f2ea0215-104a-4abf-8ac9-4dc4dffa1c35',
                        },
                        {
                            text: '60333ea5-a2bf-4831-9176-153474838256',
                        },
                    ],
                },
                {
                    subtitle: '1ee34d94-26ef-4228-86d2-a1aa612b6593',
                    subtitleText: [
                        {
                            text: '1303413a-1c0e-4c94-8857-588d8f4c48f7',
                        },
                        {
                            text: 'baef5fc4-3d57-4c35-83ac-5fa6a2c74bc9',
                        },
                    ],
                },
            ],
        },
        {
            title: '64c71900-75c4-40c6-9143-831be50dbd7f',
            description: '84f288d0-3eea-433b-a63a-bba49f4e44bd',
            pointer: [
                {
                    subtitle: '0989b9ac-c037-47a7-8340-d5bf85eb2482',
                    subtitleText: [
                        {
                            text: '18287158-69da-4a81-aaa8-04a78ec9b77e',
                        },
                        {
                            text: '0d6fa7a6-46d3-4da3-abc6-66eb8bafd512',
                        },
                    ],
                },
                {
                    subtitle: '7656526a-c1a8-4ec5-b0fd-beb0fff5dd75',
                    subtitleText: [
                        {
                            text: 'ce8b067d-65ff-464b-936e-8dcea3cc67f1',
                        },
                        {
                            text: '24111b3c-2965-4149-b2ea-f18acada2f43',
                        },
                        {
                            text: '8bd0a0df-7929-4366-a7bc-655e3fb0943f',
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
                        '233549e2-f4a5-4ee6-81fc-38d7d0625848',
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
                '87161405-e2dc-4f4d-b0bb-e54a47bc7e9c',
            ),
            answer: contentData.getContent(
                'a8926ab7-80ec-4888-a8b5-626aea12d013',
            ),
        },
        {
            question: contentData.getContent(
                '870b26c2-0387-487c-a311-e3e4d9cfbd49',
            ),
            answer: contentData.getContent(
                '00f3fe15-3ac3-40a4-99cc-def867de6820',
            ),
        },
        {
            question: contentData.getContent(
                '9a6e0df4-1f3e-47a3-8e93-6da0ee881af8',
            ),
            answer: contentData.getContent(
                'ecdb052a-74ed-4338-b6e2-e9adbdb1727f',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
