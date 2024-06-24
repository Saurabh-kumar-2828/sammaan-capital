import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {
    contentData,
    contentDataLatest,
    getData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('roiRange');
    const pageIds = contentDataLatest.roiRange;

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
                        <RoiRangePage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function RoiRangePage() {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Resources', link: '#'},
                    {contentId: 'ROI Range', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <RoiRangeTable />

            <div className="lg:tw-h-20 tw-h-10" />

            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="sc-text-headline tw-text-center">
                        {contentData.getContent(
                            '13f1e738-247d-4af2-973e-d98a184dfd98',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                    <ReactMarkdown
                        components={reactMarkdownComponents}
                        className="tw-text-title-2 tw-text-secondary-600">
                        {contentData.getContent(
                            '6c2a293e-9e23-43bb-b14f-ae427926aa73',
                        )}
                    </ReactMarkdown>
                </div>
            </div>

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function RoiRangeTable() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-grid tw-gap-6 lg:tw-gap-8 sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '6dccffd8-a883-43d6-bae8-2ff20a6847a3',
                    )}
                </div>
                <div className="sc-small-shadow tw-rounded-[10px] tw-max-w-[41rem] tw-w-full tw-mx-auto tw-overflow-hidden">
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-1 tw-py-[10px] tw-bg-secondary-100 tw-px-5">
                        <div></div>
                        <div className="sc-footer-text tw-font-medium">
                            {contentData.getContent(
                                'fab90640-287e-4386-a3fe-63bfab0e3662',
                            )}
                        </div>
                        <div className="sc-footer-text tw-font-medium">
                            {contentData.getContent(
                                '833eeb4d-f9c0-4182-8e63-d7ae0f319e80',
                            )}
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-3 tw-px-5 tw-gap-x-2">
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'ad7ad3e9-3556-4299-b9da-b617ede4070c',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                '54f37973-848d-4f5c-a250-f46b81959902',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'e2cd4318-d8a2-4bc6-8642-84afbc3af1da',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'af8335da-4128-46fb-b496-f86f3c3f1e6a',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'b9af7fe3-8460-4cb0-8f42-56f492d78c06',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'a902f2f2-5665-4b43-9c57-6df0086b3147',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                '97a6f9b1-e80e-4af8-a7e7-22c71af19e6c',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                '1cb95e28-0f39-49ae-b280-57853fb49bfb',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-py-[15px]">
                            {contentData.getContent(
                                'd22b9e15-a77f-4f4b-a8f9-001edf4ba79f',
                            )}
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-2 tw-px-5 tw-bg-secondary-400 tw-py-[15px]">
                        <div className="sc-text-title2 tw-text-secondary-600 tw-font-bold">
                            {contentData.getContent(
                                'd759d722-ec40-49e1-9c13-76461adb6f7f',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-font-bold">
                            {contentData.getContent(
                                '1fd49280-73b3-42e7-aae1-f49ddc5add2a',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600 tw-font-bold">
                            {contentData.getContent(
                                '3afecd67-2af7-413c-abad-2b69bbba66d1',
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
