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
import {EmiCalculator} from '~/components/reusableComponents/emiCalculatorCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'Emi Calculator'},
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

    const vernacularData = getVernacularFromBackend('emiCalculator');

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
                    <PageScaffold2>
                        <EmiCalculatorPage />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function EmiCalculatorPage() {
    const contentData = useContext(ContentProviderContext);
    const loanOptions = [
        contentData.getContent('8cb74703-266e-4e87-a8f1-ec5c9fd926db'),
        contentData.getContent('f0bfa779-c71e-4e59-911a-3e9ca4f3f85a'),
        contentData.getContent('9613227d-ae78-411b-9e5a-5823c8eff4b9'),
        contentData.getContent('2cb425c1-6d75-47d2-affe-d7291ff7cfc5'),
        contentData.getContent('fc061170-25dc-4909-9a82-6d812f753da1'),
        contentData.getContent('9be7a5a5-9050-4b4d-9b81-68fa659d7b97'),
        contentData.getContent('119a8fdd-96e8-4e4e-a232-1d09d63dde4c'),
    ];
    return (
        <>
            <CalculatorTab selectedTab={0} />
            <div className="lg:tw-bg-secondary-200">
                <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

                <Breadcrumbs
                    breadcrumbs={[
                        {contentId: 'Home', link: '/'},
                        {contentId: 'EMI Calculator', link: '#'},
                    ]}
                />

                <VerticalSpacer className="tw-h-4 lg:tw-hidden" />

                <VerticalSpacer className="lg:tw-h-16 tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <CalculatorDropDown
                        loanOptions={loanOptions}
                        title={contentData.getContent(
                            'de5b2cfa-ea54-4076-ad51-48556ddf531d',
                        )}
                        text={contentData.getContent(
                            'fb686677-d0b7-44ae-9d03-2c94807ed4eb',
                        )}
                    />
                </div>

                <VerticalSpacer className="tw-h-6 tw-bg-secondary-200" />

                <div className="sc-px-screen-edge tw-bg-secondary-200">
                    <EmiCalculator className="" schedule={true} />
                </div>

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

                <AboutEmi className="sc-px-screen-edge" />

                <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
            </div>

            <FaqSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
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
                        {contentData.getContent(
                            '7b037d54-9e22-48b6-904b-2fa6f8e64791',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            'debc1f07-679f-44a9-b08a-a51f9648dd6c',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '05d77b20-35d7-4e83-bae0-2591c9d107a9',
                        )}
                    </div>
                </div>
                <div className="tw-grid tw-gap-4">
                    <div className="sc-text-title-bold">
                        {contentData.getContent(
                            '7e3682e8-d0c9-430c-82dc-ae4bbdeebde6',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '05f10222-1d67-4733-a31d-fea80d79cfad',
                        )}
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
            question: "What are the stages involved while taking loan?",
            answer: "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions",
        },
        {
            question: "Who can apply for a home loan?",
            answer: "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions",
        },
        {
            question: "When can you apply for a loan?",
            answer: "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions",
        },
        {
            question: "What are the loan tenure options?",
            answer: "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions",
        },
        {
            question: "When can you apply for a loan?",
            answer: "Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions",
        },
    ];

    return (
        <div className="">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
