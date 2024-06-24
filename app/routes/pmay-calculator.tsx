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
import {PmayCalculatorCard} from '~/components/reusableComponents/pmayCalculatorCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

export const meta: MetaFunction = () => {
    return [
        {title: 'Pmay Calculator'},
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

    const vernacularData = getVernacularFromBackend('pmayCalculator');

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
                        <PmayCalculator />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function PmayCalculator() {
    const contentData = useContext(ContentProviderContext);
    const loanOptions = ["Home Loan","Home Loan for NRI's","Rural Home Loan"];
    return (
        <>
            <CalculatorTab selectedTab={2} />

            <div className="tw-bg-secondary-200">
                <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

                <Breadcrumbs
                    breadcrumbs={[
                        {contentId: 'Home', link: '/'},
                        {contentId: 'Calculator', link: '#'},
                        {contentId: 'PMAY Subsidy Calculator', link: '#'},
                    ]}
                />

                <VerticalSpacer className="tw-h-4 lg:tw-hidden" />

                <VerticalSpacer className="lg:tw-h-16 tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge">
                    <CalculatorDropDown
                        title={contentData.getContent(
                            'afb226b4-e18a-4414-9e88-c2bdcc3d436e',
                        )}
                        text={contentData.getContent(
                            'e88ca43d-cd2c-4df2-b5b1-194d3eb420b7',
                        )}
                        loanOptions={loanOptions}
                    />
                </div>

                <VerticalSpacer className="tw-h-6" />

                <div className="sc-px-screen-edge">
                    <PmayCalculatorCard />
                </div>

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

                <AboutPmay className="sc-px-screen-edge" />

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
            </div>

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <FaqSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </>
    );
}

function AboutPmay({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);

    const eligibilityCriteria = [
        'b4057290-0825-4350-a05e-382b9c18bd35',
        '851b2f53-ddd2-458f-b249-4e981015e5ce',
        'ef52c7db-36fd-49f6-944e-724ced07487e',
        'd7625687-e528-4321-a758-5d7604f0d3bc',
    ];

    const toRegister = [
        '79b198f6-ae9b-4ca5-8023-bd22c4a0830a',
        '1507b0c4-bba2-4d60-961a-487e066a9808',
        '88c8aea4-5a43-467d-a571-657f74532d24',
        '674676f7-d444-4dfa-96ed-77e49bd02357',
        'feb6a8c3-e2db-4058-b632-2637542af00b',
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-10">
                <div>
                    <div className="sc-text-headline tw-text-center">
                        {contentData.getContent(
                            '1363e73d-a4a8-4560-be2c-fcb009cd9018',
                        )}
                    </div>
                    <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '7f6c0f09-85ed-4432-95b3-fea3ba8f1c50',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-4" />

                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '77beb267-d51c-48f1-af9d-7e14752b22e3',
                        )}
                    </div>
                </div>
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-title-bold">
                        {contentData.getContent(
                            '7596d84c-8a74-4b0e-ab44-faa449acc45d',
                        )}
                    </div>
                    <ul className="tw-list-disc sc-text-title2 tw-text-secondary-600 tw-pl-6">
                        <ItemBuilder
                            items={eligibilityCriteria}
                            itemBuilder={(item, itemIndex) => (
                                <li key={itemIndex}>
                                    {contentData.getContent(item)}
                                </li>
                            )}
                        />
                    </ul>
                </div>
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-title-bold">
                        {contentData.getContent(
                            'e77107dd-3865-4de9-8078-a6905bc8f098',
                        )}
                    </div>
                    <ol className="tw-list-decimal sc-text-title2 tw-text-secondary-600 tw-pl-6">
                        <ItemBuilder
                            items={toRegister}
                            itemBuilder={(item, itemIndex) => (
                                <li key={itemIndex}>
                                    {contentData.getContent(item)}
                                </li>
                            )}
                        />
                    </ol>
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
                '4fb6686e-fdc0-45b7-bfdc-609da64b9c90',
            ),
            answer: contentData.getContent(
                '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            ),
        },
        {
            question: contentData.getContent(
                '53341898-0e61-4698-b0f4-ce3ecd05b67d',
            ),
            answer: contentData.getContent(
                '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            ),
        },
        {
            question: contentData.getContent(
                '863c38ad-68ac-49f7-a794-84d71bf24de1',
            ),
            answer: contentData.getContent(
                '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            ),
        },
        {
            question: contentData.getContent(
                'd5b1a212-cafc-48f8-9951-416829193484',
            ),
            answer: contentData.getContent(
                '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            ),
        },
        {
            question: contentData.getContent(
                'f89966f9-a822-40c8-b499-38fd50c1d33e',
            ),
            answer: contentData.getContent(
                '3d747edc-c3fe-42ed-b1eb-eef7dc2179db',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
