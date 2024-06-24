import {type LoaderFunction, type MetaFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {ChevronRight} from 'react-bootstrap-icons';
import {
    contentDataLatest,
    getData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {PageScaffold2} from '~/components/pageScaffold2';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'Customer Support'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.customerSupport;
    // const vernacularData = getVernacularFromBackend('customerSupport');
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
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <CustomerSupport />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function CustomerSupport() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Contact Us', link: '#'},
                    {contentId: 'Customer Support', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="sc-text-headline lg:tw-text-center">
                        {contentData.getContent(
                            'b87279fe-8c08-44f7-a4cf-d7748a2fb67e',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-2 lg:tw-h-4" />

                    <div className="sc-text-title1 lg:tw-text-center tw-text-secondary-600">
                        {contentData.getContent(
                            '0012f856-da17-455c-a355-0f07d943f91d',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                    <div className="tw-grid tw-gap-4">
                        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-4">
                            <Link
                                to="/customer-support/feedback-query-form"
                                className="tw-flex tw-justify-between tw-items-center tw-bg-secondary-400 tw-px-4 tw-py-3 lg:tw-py-4 lg:tw-px-8 tw-rounded-lg">
                                <div className="sc-text-button">
                                    {contentData.getContent(
                                        '6ea620cc-2b1d-4628-a04f-c06f4c0884e9',
                                    )}
                                </div>
                                <ChevronRight />
                            </Link>

                            <Link
                                to="/customer-support/grievance-form"
                                className="tw-flex tw-justify-between tw-items-center tw-bg-secondary-400 tw-px-4 tw-py-3 lg:tw-py-4 lg:tw-px-8 tw-rounded-lg">
                                <div className="sc-text-button">
                                    {contentData.getContent(
                                        '70a6f62c-8dc4-4608-a266-ec5ce6f2dcbe',
                                    )}
                                </div>
                                <ChevronRight />
                            </Link>
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                            <div className="tw-p-6 lg:tw-p-8 tw-grid tw-gap-2 md:tw-gap-4 tw-bg-secondary-400 tw-rounded-lg">
                                <div>
                                    <div className="tw-bg-[#001CA8] tw-w-12 tw-aspect-square tw-rounded-full"></div>

                                    <VerticalSpacer className="tw-h-4" />

                                    <div className="sc-text-title1 tw-font-bold">
                                        {contentData.getContent(
                                            '107c9e9c-7eb1-4466-9d0a-16a318929911',
                                        )}
                                    </div>
                                </div>

                                <div className="tw-border-b tw-pb-2 lg:tw-pb-4">
                                    <div className="sc-text-caption">
                                        {contentData.getContent(
                                            '14b7fb4c-de1d-432a-bd52-c414ff0e33a5',
                                        )}
                                    </div>
                                    <div className="sc-text-button tw-text-primary-500">
                                        {contentData.getContent(
                                            'a1bd487f-090c-40c4-b7d5-01e71b73cf0d',
                                        )}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="sc-text-caption">
                                        {contentData.getContent(
                                            'bee6b51e-26c7-4fb0-a77e-8fb875b08160',
                                        )}
                                    </div>
                                    <div className="sc-text-button tw-text-primary-500">
                                        {contentData.getContent(
                                            'a6a98fad-c63c-4347-b9ba-0fc9c39e9b0f',
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="tel:18005727777"
                                className="tw-p-6 lg:tw-p-8 tw-bg-secondary-400 tw-rounded-lg">
                                <div className="tw-flex tw-justify-between tw-items-center">
                                    <div className="tw-bg-[#001CA8] tw-w-12 tw-aspect-square tw-rounded-full"></div>
                                    <ChevronRight />
                                </div>
                                <VerticalSpacer className="tw-h-4" />
                                <div className="tw-grid tw-gap-2 md:tw-gap-4">
                                    <div className="sc-text-title1">
                                        {contentData.getContent(
                                            '7c2e9353-46b5-4ced-8e90-e7c2578ada68',
                                        )}
                                    </div>
                                    <div className="sc-text-headline">
                                        {contentData.getContent(
                                            '937e4c0a-2d2b-49fe-9f60-08ef88716cf7',
                                        )}
                                    </div>
                                    <div className="sc-text-caption tw-text-secondary-600">
                                        {contentData.getContent(
                                            'c58d33c5-f6e5-4c82-a524-35fad9377bd2',
                                        )}
                                    </div>
                                    <div className="sc-text-caption tw-text-secondary-600">
                                        {contentData.getContent(
                                            '0983d602-e6e2-4a1e-a746-88c5e1eec7bb',
                                        )}
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to="/contact-us/locate-us"
                                className="tw-p-6 lg:tw-p-8 tw-bg-secondary-400 tw-rounded-lg">
                                <div className="tw-flex tw-justify-between tw-items-center">
                                    <div className="tw-bg-[#001CA8] tw-w-12 tw-aspect-square tw-rounded-full"></div>
                                    <ChevronRight />
                                </div>
                                <VerticalSpacer className="tw-h-4" />
                                <div className="tw-grid tw-gap-2 md:tw-gap-4">
                                    <div className="sc-text-title1 tw-font-bold">
                                        {contentData.getContent(
                                            'f130e4f6-0ed3-4a4e-af6b-c41d5bbed225',
                                        )}
                                    </div>
                                    <div className="sc-text-caption">
                                        {contentData.getContent(
                                            '295fbe5c-b426-41de-a69e-894c3afec9f4',
                                        )}
                                    </div>
                                </div>
                            </Link>
                            <div className="tw-p-6 lg:tw-p-8 tw-bg-secondary-100 tw-rounded-lg">
                                <div className="">
                                    <div className="tw-bg-[#001CA8] tw-w-12 tw-aspect-square tw-rounded-full"></div>
                                </div>
                                <VerticalSpacer className="tw-h-4" />
                                <div className="tw-grid tw-gap-2 md:tw-gap-4">
                                    <div className="sc-text-title1 tw-font-bold">
                                        {contentData.getContent(
                                            'eb9622ba-9ed1-47da-9faa-8f3936c84bb6',
                                        )}
                                    </div>
                                    <div className="sc-text-caption">
                                        {contentData.getContent(
                                            '32026100-49ed-4a1a-a5cc-81d6b78e7301',
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </div>
    );
}
