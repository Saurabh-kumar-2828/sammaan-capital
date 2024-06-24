import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import ReactMarkdown from 'react-markdown';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('roiSwitchPolicy');

    const pageIds = contentDataLatest.roiSwitchPolicy;

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
                        <RoiSwitchPolicyPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function RoiSwitchPolicyPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'ROI Switch Policy', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <RoiSwitchPolicy />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function RoiSwitchPolicy() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-max-w-7xl tw-w-full tw-mx-auto sc-text-title2 tw-text-secondary-600">
                <div className="sc-text-banner tw-text-center tw-text-secondary-800 tw-bg-secondary-200">
                    {contentData.getContent(
                        '2eb400b9-5895-4fd8-b785-8f59d823c6f3',
                    )}
                </div>

                <ReactMarkdown components={reactMarkdownComponents}>
                    {contentData.getContent(
                        'e42231c9-1e23-4fa5-a929-9a17ed4a85e6',
                    )}
                </ReactMarkdown>
            </div>
        </div>
    );
}
