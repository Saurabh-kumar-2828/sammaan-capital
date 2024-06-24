import {useContext} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {contentDataLatest, getData} from '~/backend/contentData.server';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('csrPolicy');

    const pageIds = contentDataLatest.csrPolicy;

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
                        <CsrPolicyPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function CsrPolicyPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},

                    {contentId: 'CSR Policy', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <CsrPolicy />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function CsrPolicy() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'a95b4de7-6d8e-406f-b921-82b7f030c64f',
                    )}
                </div>

                <VerticalSpacer className="tw-h-3 lg:tw-h-4" />

                <div className="sc-text-title1 tw-text-secondary-600 tw-text-center">
                    {contentData.getContent(
                        '4aff118d-28aa-4074-9976-8e51202a7530',
                    )}
                </div>
                <VerticalSpacer className="tw-h-5 lg:tw-h-8" />

                <Link
                    to={contentData.getContent(
                        '38afe56a-680c-4d35-97f4-6d2c2f2e8969',
                    )}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-grid tw-grid-cols-2 tw-bg-secondary-200 tw-border-[0.727px] tw-border-secondary-100 sc-medium-shadow tw-p-3 tw-rounded-lg tw-items-center tw-gap-2 tw-max-w-[560px] tw-mx-auto">
                    <div className="sc-text-caption">
                        {contentData.getContent(
                            '67147dc7-16fb-4548-b7ee-0428c4f70ac7',
                        )}
                    </div>
                    <div className="tw-bg-[#FF8D28] tw-w-12 tw-h-16 tw-justify-self-end tw-rounded-lg"></div>
                </Link>
            </div>
        </div>
    );
}
