import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {
    contentDataLatest,
    getData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.homeLoanPrepaymentCharges;
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
                    {contentId: 'Home Loan', link: '/product/home-loan'},
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
                    to="#"
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer sc-tab-button',
                    )}>
                    {contentData.getContent(
                        '7bd62704-64b0-47ab-aea4-491f2ebfbf39',
                    )}
                </Link>
                <Link
                    to="/lap-prepayment-charges"
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer tw-bg-secondary-400 tw-text-secondary-800',
                    )}>
                    {contentData.getContent(
                        '60a9a7f7-9b8b-48af-84db-eda184fe4072',
                    )}
                </Link>
            </div>

            <div className="sc-px-screen-edge">
                <div className="sc-text-title2 tw-text-secondary-600  tw-max-w-7xl tw-w-full tw-mx-auto">
                    {contentData.getContent(
                        'e92619bd-850b-45b5-9c29-5ecfa8dd684f',
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
                            {contentData.getContent(
                                'da459aec-7ac6-4969-ac9c-8a791882bf4d',
                            )}
                        </div>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('260399e1-c299-4d72-b5e7-cccf17c33f36')}
                        </ReactMarkdown>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('795f7ef1-d41e-4fc0-adbf-1a3cd41d7232')}
                        </ReactMarkdown>
                    </div>

                    <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-pb-10 lg:tw-pb-20">
                        <div className="sc-text-headline tw-text-center">
                            {contentData.getContent(
                                'da459aec-7ac6-4969-ac9c-8a791882bf4d',
                            )}
                        </div>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('df431e0b-f4f2-40ba-82d5-b19d8dab14c2')}
                        </ReactMarkdown>

                        <ReactMarkdown
                            components={reactMarkdownComponents}
                            className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-p-6">
                            {contentData.getContent('36f85c14-9da0-4bec-b71c-d47e475a3b9b')}
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
                '498344b5-8b2e-4f2b-bf79-264155c71ea8',
            ),
            answer: contentData.getContent(
                '425f970a-3649-443b-9cfd-91c0312f1ce0',
            ),
        },
        {
            question: contentData.getContent(
                'a565a3e1-30ac-4f65-b009-929c9f351c07',
            ),
            answer: contentData.getContent(
                '58a9b9a9-3e98-43e9-9cc7-04bc128d916a',
            ),
        },
        {
            question: contentData.getContent(
                '0277bd12-ffae-447a-8511-a4868644aece',
            ),
            answer: contentData.getContent(
                '0eb794ab-b394-40b2-ac9f-b531e3519008',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
