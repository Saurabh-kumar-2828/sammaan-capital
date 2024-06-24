import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {contentData, contentDataLatest, getData, getVernacularFromBackend} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('lapPrepaymentCharges');
    const pageIds = contentDataLatest.lapPrePaymentCharges;
    const vernacularData = await getData(pageIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData} = useLoaderData() as LoaderData;
    return (
        <>
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <PrepaymentPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function PrepaymentPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {
                        contentId: 'Loan Against Property',
                        link: '/product/loan-against-property',
                    },
                    {contentId: 'Prepayment Charges', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <LoanType />

            <div className="lg:tw-h-16 tw-h-10" />

            <PaymentCharges />

            <div className="lg:tw-h-16 tw-h-10" />

            <FaqSection />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function LoanType() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-grid tw-gap-6 lg:tw-gap-8">
            <div className="sc-text-headline tw-text-center sc-px-screen-edge">
                {contentData.getContent('cb16a51c-b1e6-4012-87dd-c0567c55af18')}
            </div>

            <div className="tw-flex tw-gap-2 tw-justify-center tw-border tw-border-secondary-100 tw-py-4">
                <Link
                    to="/home-loan-prepayment-charges"
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer tw-bg-secondary-400 tw-text-secondary-800',
                    )}>
                    {contentData.getContent('7bd62704-64b0-47ab-aea4-491f2ebfbf39')}
                </Link>
                <Link
                    to="#"
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer sc-tab-button',
                    )}>
                    {contentData.getContent(
                        '60a9a7f7-9b8b-48af-84db-eda184fe4072',
                    )}
                </Link>
            </div>

            <div className="sc-px-screen-edge">
                <div className="sc-text-title2 tw-text-secondary-600 tw-max-w-7xl tw-w-full tw-mx-auto">
                    {contentData.getContent(
                        '7bf7293d-83ef-44d1-af85-529b878e464f',
                    )}
                </div>
            </div>
        </div>
    );
}

function PaymentCharges() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-bg-secondary-400">
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                    <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-py-10 lg:tw-py-20">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent('da459aec-7ac6-4969-ac9c-8a791882bf4d')}
                        </div>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('b0ca3271-3233-4a82-aafe-bf5127fa4745')}
                        </ReactMarkdown>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('bbd51cdc-84e6-4dbb-9f0c-07e8fe07ba86')}
                        </ReactMarkdown>
                    </div>

                    <div className="tw-grid tw-gap-4 lg:tw-gap-8">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent('5a1bbe91-cd72-42c0-851c-457ca15444b4')}
                        </div>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('272e1aa0-92c8-4b62-8770-dad616cd90f3')}
                        </ReactMarkdown>
                    </div>

                    <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-py-10 lg:tw-py-20">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent('54c812f1-0550-42d9-a8c5-a163960cec52')}
                        </div>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('4c3e77f1-2432-4979-aaf8-62ee0b6e8b24')}
                        </ReactMarkdown>
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
                'aef49efe-7398-49d9-83ca-980884b22d36',
            ),
            answer: contentData.getContent(
                '98d9fd8e-1e99-47c3-9237-fd6d52700701',
            ),
        },
        {
            question: contentData.getContent(
                '556f4f5c-b26b-406d-a668-8f4ee65f4e68',
            ),
            answer: contentData.getContent(
                'fcc9b895-b294-4a40-8667-6101e4c3582e',
            ),
        },
        {
            question: contentData.getContent(
                '2ee6a9f4-3b5f-48ac-b649-2b651e7020d0',
            ),
            answer: contentData.getContent(
                'afc17513-310c-4857-9c55-0e5cf051b3c9',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
