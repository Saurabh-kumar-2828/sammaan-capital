import {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {
    contentData,
    contentDataLatest,
    getData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {PdfDownloadCard} from '~/components/componentLibrary/reusableCards/pdfDownloadCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';

export const meta: MetaFunction = () => {
    return [
        {title: 'New Remix App'},
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

    const pageIds = contentDataLatest.grp;

    const vernacularData = await getData(pageIds);

    // const vernacularData = getVernacularFromBackend('grievanceRedressalPolicy');

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
                    <PageScaffold>
                        <GrievanceRedressalPolicy />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function GrievanceRedressalPolicy() {
    return (
        <>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: 'Grievance Redressal Policy',
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="tw-h-10 lg:tw-h-16" />

            <Policy />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function Policy() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-justify-self-center">
                <div className="sc-text-headline tw-text-secondary-800 tw-text-center">
                    {contentData.getContent(
                        '370e8699-c80e-41db-b437-3da9b4d44650',
                    )}
                </div>
                <VerticalSpacer className="tw-h-4" />
                <div className="sc-text-title1 tw-text-secondary-600 tw-text-center">
                    {contentData.getContent(
                        '84b43b79-0b50-4e15-aba4-a710100d08ba',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <PdfDownloadCard
                    text={contentData.getContent(
                        '124260ee-16f9-4998-9120-323626824ead',
                    )}
                    link={contentData.getContent(
                        'fdb0a88e-efde-4e17-b189-8f13216595e0',
                    )}
                />
            </div>
        </div>
    );
}
