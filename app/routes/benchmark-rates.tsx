import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('benchmarkRates');

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
                        <BenchmarkRatesPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function BenchmarkRatesPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Benckmark Rates', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <BenchmarkRates />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function BenchmarkRates() {
    const contentData = useContext(ContentProviderContext);
    const tableData = [
        {
            name: contentData.getContent(
                '6b36f79e-41be-423f-8137-457122d259e8',
            ),
            text: contentData.getContent(
                'c5552c84-6b8b-4599-b72c-faa997a436a5',
            ),
        },
        {
            name: contentData.getContent(
                'a06c1487-6444-430a-a7a4-601816d0772c',
            ),
            text: contentData.getContent(
                'e2b2247a-4a9a-4c0d-b3d4-2a576d600520',
            ),
        },
        {
            name: contentData.getContent(
                'fb66d4ba-0f7c-4338-aae0-9d6514e0b1e3',
            ),
            text: contentData.getContent(
                '42b5a5c7-e938-4095-ba6e-98dd842bdd7f',
            ),
        },
        {
            name: contentData.getContent(
                'db5f58fd-cfc4-4e3b-ad6e-c649f5c46477',
            ),
            text: contentData.getContent(
                'f9c3099f-1142-4720-9c3c-ca5bee79b377',
            ),
        },
        {
            name: contentData.getContent(
                'd3e4c64c-71dd-4a6d-b144-40353b418ab3',
            ),
            text: contentData.getContent(
                'da585100-a61d-4226-8e61-c06b320086c6',
            ),
        },
        {
            name: contentData.getContent(
                '7307441f-4bad-4f52-a3a2-d13253881130',
            ),
            text: contentData.getContent(
                '77aa5f8b-ac72-4525-be92-8351a0a33624',
            ),
        },
        {
            name: contentData.getContent(
                '9621cf76-4f11-40fa-bd4b-9a7e38ef4cea',
            ),
            text: contentData.getContent(
                '297c3749-845f-4a86-9cd7-0e1cac179440',
            ),
        },
        {
            name: contentData.getContent(
                'e20f749c-53a8-47d1-a9a2-28332a8fc814',
            ),
            text: contentData.getContent(
                '1cd47544-667f-4c94-b450-3b811a9b30ea',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'f4d9131f-4951-4c41-a5d7-a4daebd89e4c',
                    )}
                </div>
                <div>
                    <div className="tw-grid tw-grid-cols-[1fr_2fr] tw-bg-secondary-800">
                        <div></div>
                        <div className="sc-text-title1 tw-text-secondary-200 tw-p-3 lg:tw-p-6">
                            {contentData.getContent(
                                'eb240538-d5b9-4bdc-811b-e19e3c48d6ef',
                            )}
                        </div>
                    </div>

                    <ItemBuilder
                        items={tableData}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-grid tw-grid-cols-[1fr_2fr] tw-border-b tw-border-b-secondary-600',
                                        itemIndex % 2 != 0
                                            ? 'tw-bg-secondary-100'
                                            : 'tw-bg-secondary-200',
                                    )}>
                                    <div className="sc-text-title2 tw-text-secondary-600 tw-p-3 lg:tw-p-6">
                                        {item.name}
                                    </div>
                                    <div className="sc-text-title2 tw-text-secondary-600 tw-p-3 lg:tw-p-6">
                                        {item.text}
                                    </div>
                                </div>
                            );
                        }}
                    />
                </div>
                <div>
                    <div className="tw-text-[14px]">
                        {contentData.getContent(
                            'cf25da3f-4d62-479b-9dcc-8bb2fbc4a263',
                        )}
                    </div>
                    <div className="tw-text-[14px] tw-text-secondary-600">
                        {contentData.getContent(
                            '140f7856-39e6-4b5a-9b54-8dde2b473929',
                        )}
                    </div>
                    <div className="tw-text-[14px] tw-text-secondary-600">
                        {contentData.getContent(
                            '64c400b7-883f-4401-8fab-2cdc8eda8f5e',
                        )}
                    </div>
                    <div className="tw-text-[14px] tw-text-secondary-600">
                        {contentData.getContent(
                            '8b006d9b-8c8f-4dd2-9d66-dece72008d19',
                        )}
                    </div>
                    <div className="tw-text-[14px] tw-text-secondary-600">
                        {contentData.getContent(
                            'd8dc60ca-0edf-4823-9d6d-118c02d691d7',
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
