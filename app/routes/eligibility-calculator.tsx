import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {CalculatorDropDown} from '~/components/componentLibrary/calculator/calculatorDropDown';
import {CalculatorTab} from '~/components/componentLibrary/calculator/calculatorTab';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {PageScaffold2} from '~/components/pageScaffold2';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {EligibilityCalculatorComponent} from '~/components/reusableComponents/eligibilityCalculatorComponent';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'Eligibility Calculator'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('eligibilityCalculator');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
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
                    <PageScaffold2>
                        <EligibilityCalculator />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function EligibilityCalculator() {
    const contentData = useContext(ContentProviderContext);
    const loanOptions = [
        'Home Loan',
        'MSME Loans & LAP',
        'Home Loan Balance Transfer',
        "Home Loan for NRI's",
        'Home Renovation Loan',
        'Home Extension Loan',
        'Rural Home Loan',
    ];
    return (
        <>
            <CalculatorTab selectedTab={1} />
            <div className="lg:tw-bg-secondary-200">
                <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

                <Breadcrumbs
                    breadcrumbs={[
                        {contentId: 'Home', link: '/'},
                        {contentId: 'Eligibility Calculator', link: '#'},
                    ]}
                />

                <VerticalSpacer className="tw-h-4 lg:tw-hidden" />

                <VerticalSpacer className="lg:tw-h-16 tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <CalculatorDropDown
                        loanOptions={loanOptions}
                        title={contentData.getContent(
                            '08a93f82-ca7e-4d27-bc1e-8a32f24dea3f',
                        )}
                        text={contentData.getContent(
                            'dca9c1bf-32e9-4ad7-897d-976ff34cedb1',
                        )}
                    />
                </div>

                <VerticalSpacer className="tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <EligibilityCalculatorComponent />
                </div>

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

                <AboutEmi className="sc-px-screen-edge" />

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

                <FaqSection />

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
            </div>
        </>
    );
}

function AboutEmi({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-14">
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-headline tw-text-center">
                        {contentData.getContent('ae404997-2c38-4918-acc6-6d58431f7fdc')}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent('1485efe2-6992-4b7b-bd23-9ced2f49bd79')}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent('6b0e82e1-490a-498e-bd2f-80d7a4e01a02')}
                    </div>
                </div>
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-title-bold">
                        {contentData.getContent('1f362712-9b15-47e2-8bfc-cdc72ad12581')}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent('7470b126-05cc-41c6-9e5f-5bcd73295a00')}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FaqSection() {
    // const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: 'What are the stages involved while taking loan?',
            answer: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            question: 'Who can apply for a home loan?',
            answer: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            question: 'When can you apply for a loan?',
            answer: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            question: 'What are the loan tenure options?',
            answer: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
        {
            question: 'When can you apply for a loan?',
            answer: 'Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions',
        },
    ];

    return (
        <div className="">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
