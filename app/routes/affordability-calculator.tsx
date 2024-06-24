import {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {CalculatorDropDown} from '~/components/componentLibrary/calculator/calculatorDropDown';
import {CalculatorTab} from '~/components/componentLibrary/calculator/calculatorTab';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {AffordabilityCalculatorCard} from '~/components/reusableComponents/affordabilityCalculatorCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'Affordability Calculator'},
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

    const vernacularData = getVernacularFromBackend('affordabilityCalculator');

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
                        <AffordabilityCalculator />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function AffordabilityCalculator() {
    const contentData = useContext(ContentProviderContext);
    const loanOptions = [
        'Home Loan',
        "Home Loan for NRI's",
        'Home Renovation Loan',
        'Home Extension Loan',
        'Rural Home Loan',
    ];
    return (
        <>
            <CalculatorTab selectedTab={3} />
            <div className="lg:tw-bg-secondary-200">
                <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

                <Breadcrumbs
                    breadcrumbs={[
                        {contentId: 'Home', link: '/'},
                        {contentId: 'Calculator', link: '#'},
                        {contentId: 'Affoedability Calculator', link: '#'},
                    ]}
                />

                <VerticalSpacer className="tw-h-4 lg:tw-hidden" />

                <VerticalSpacer className="tw-h-16 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <CalculatorDropDown
                        title={contentData.getContent(
                            '7e446436-1a18-4fe6-9c77-108543b48915',
                        )}
                        text={contentData.getContent(
                            '8d06ff4e-c6f8-407a-96cf-e6ef7151d822',
                        )}
                        loanOptions={loanOptions}
                    />
                </div>

                <VerticalSpacer className="tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <AffordabilityCalculatorCard />
                </div>

                <VerticalSpacer className="tw-h-10 tw-bg-secondary-200" />

                <VerticalSpacer className="tw-h-10 " />

                <AboutAffordability className="sc-px-screen-edge" />

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
            </div>
            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <FaqSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </>
    );
}

function AboutAffordability({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-10">
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-headline tw-text-center">
                        {contentData.getContent(
                            'eb3aef17-197c-4758-b3d3-5756a6053a65',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            'e1864e65-5d48-41a4-80ce-e9d855eff6e8',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            'f7917477-7e7b-4855-9bab-5047e128f600',
                        )}
                    </div>
                    <ul className="tw-list-disc sc-text-title2 tw-text-secondary-600 tw-pl-8">
                        <li>
                            {contentData.getContent(
                                '8603875d-5569-4603-8f01-1bdc60e43bc3',
                            )}
                        </li>
                        <li>
                            {contentData.getContent(
                                '12398dae-ca41-401f-8753-2aaa0694db92',
                            )}
                        </li>
                    </ul>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '4136a99d-72d8-4953-8990-fbf95bc334c5',
                        )}
                    </div>
                    <ul className="tw-list-disc sc-text-title2 tw-text-secondary-600 tw-pl-8">
                        <li>
                            {contentData.getContent(
                                'db2c74b3-bcff-41ab-a38f-de64d2b05124',
                            )}
                        </li>
                        <li>
                            {contentData.getContent(
                                '04c78f15-48b4-4c1c-bdb7-d2a327eeda40',
                            )}
                        </li>
                        <li>
                            {contentData.getContent(
                                '75251548-d302-4f0f-aa2f-7ab14f4e7ef6',
                            )}
                        </li>
                        <li>
                            {contentData.getContent(
                                '9f62b8bb-7b3e-4d04-937c-00c50941e313',
                            )}
                        </li>
                        <li>
                            {contentData.getContent(
                                '489c5527-f783-4ea9-a878-dd0eede9a26d',
                            )}
                        </li>
                    </ul>
                </div>
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-title-bold">
                        {contentData.getContent(
                            '301d4f90-86bd-42d8-b914-4e914dd54ad7',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '7198748e-0f3a-4ff6-b3e7-46e4e4c7ed9c',
                        )}
                    </div>
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
                '574151f2-940e-42cb-8f82-2743654391e8',
            ),
            answer: contentData.getContent(
                '6dab8937-d1ce-4572-a538-4d8c18228627',
            ),
        },
        {
            question: contentData.getContent(
                'a5f507dc-135f-4e5f-a2be-80490c05380a',
            ),
            answer: contentData.getContent(
                '6dab8937-d1ce-4572-a538-4d8c18228627',
            ),
        },
        {
            question: contentData.getContent(
                'bffc199a-391e-4fa5-85d0-c0dc593403fd',
            ),
            answer: contentData.getContent(
                '6dab8937-d1ce-4572-a538-4d8c18228627',
            ),
        },
        {
            question: contentData.getContent(
                '3b3d878f-f2a7-4bec-b5bc-9e3dba4f06b2',
            ),
            answer: contentData.getContent(
                '6dab8937-d1ce-4572-a538-4d8c18228627',
            ),
        },
        {
            question: contentData.getContent(
                '65d51a46-53cf-4983-ab4d-e62361a17ebe',
            ),
            answer: contentData.getContent(
                '6dab8937-d1ce-4572-a538-4d8c18228627',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
