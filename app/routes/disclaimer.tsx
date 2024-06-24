import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {contentDataLatest, getData, getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.disclaimer;
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
                        <DisclaimerPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function DisclaimerPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Disclaimer', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <Disclaimer />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function Disclaimer() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-banner tw-text-center lg:tw-pb-4">
                    {contentData.getContent(
                        '025ae533-9031-4c50-8fc1-6956f66c149e',
                    )}
                </div>

                <ReactMarkdown components={reactMarkdownComponents}>
                    {contentData.getContent("7404ab91-02b5-4c0a-baca-272f2a90bb6d")}
                </ReactMarkdown>

                {/* <div className="tw-grid tw-gap-3 lg:tw-gap-4">
                    <div className="sc-text-title1 tw-font-bold">
                        {contentData.getContent(
                            'adf3734c-0d19-4887-adbf-e94ec40bd9c9',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '419ead7b-678a-4d02-9ffd-d67daf462cf4',
                        )}
                    </div>
                </div>
                <div className="tw-grid tw-gap-3 lg:tw-gap-4">
                    <div className="sc-text-title1 tw-font-bold">
                        {contentData.getContent(
                            '8f405751-d59e-4041-9fe7-9d7d118b37f7',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '3b2fd718-7dee-4b2d-bd99-c3844d15b7c7',
                        )}
                    </div>
                </div>
                <div className="tw-grid tw-gap-3 lg:tw-gap-4">
                    <div className="sc-text-title1 tw-font-bold">
                        {contentData.getContent(
                            '28c6f903-9b02-47a0-8d0b-5be61e4ed119',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            'e646d042-00de-420a-84b3-0f2da31a513e',
                        )}
                    </div>
                </div>
                <div className="tw-grid tw-gap-3 lg:tw-gap-4">
                    <div className="sc-text-title1 tw-font-bold">
                        {contentData.getContent(
                            'a3bb6ab3-d9fd-4726-a18c-48366e4758a7',
                        )}
                    </div>
                    <div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '017fd3c7-6b01-4e2c-8b30-88a89fee7ccd',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                '955c88f7-a451-4c89-89f6-66450db5882f',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                'a833c9d2-4106-41e0-8718-05ee3cb5fa2c',
                            )}
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-600">
                            {contentData.getContent(
                                'b1e8893f-62dd-4cc3-8cd6-d3ea0ea43951',
                            )}
                        </div>
                    </div>
                </div>
                <div className="tw-grid tw-gap-3 lg:tw-gap-4">
                    <div className="sc-text-title1 tw-font-bold">
                        {contentData.getContent(
                            '7df4dff5-1bc3-4db7-8550-ec4fd10bbabe',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '1e453705-8e7d-4421-bf70-d2272495a370',
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
