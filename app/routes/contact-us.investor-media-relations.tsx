import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {QueriesCard} from '~/components/componentLibrary/reusableCards/queriesCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

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
    // const vernacularData = getVernacularFromBackend('investorMediaRelations');
    const pageIds = contentDataLatest.investorAndMediaRelations;
    const vernacularData =  await getData(pageIds);

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
                    <PageScaffold>
                        <InvestorMediaRelations />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function InvestorMediaRelations() {
    return (
        <div className="px-screen-edge">
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Contact Us', link: '#'},
                    {contentId: ' Investor & Media Relations', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <Queries />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </div>
    );
}

function Queries() {
    const contentData = useContext(ContentProviderContext);
    const queriesList = [
        {
            image: contentData.getContent(
                '9aa8b8a8-c073-44ac-9ec1-849690119a63',
            ),
            title: contentData.getContent(
                '7abca889-5bee-407d-a716-99f0c664fd5f',
            ),
            location: contentData.getContent(
                'ac39f713-73c9-40de-8639-e0032c19ec17',
            ),
            contact: contentData.getContent(
                'd096e2be-a098-4bf4-bf74-673ad18f0e02',
            ),
            email: contentData.getContent(
                '5b08d2f4-ded5-4752-b8d0-2fab4c416ae7',
            ),
        },
        {
            image: contentData.getContent(
                '3c2f4b57-4215-4faa-a15e-eb75077fbe46',
            ),
            title: contentData.getContent(
                '13bbb4e6-03e9-4c7e-aec4-367fcb3b24a7',
            ),
            location: contentData.getContent(
                'e16dfc84-c112-43c3-bf44-06a3d55dab80',
            ),
            contact: contentData.getContent(
                '8d2d87b6-6210-426d-8e92-bc3ef6e16d5c',
            ),
            email: contentData.getContent(
                'a145d2c7-5747-4489-b83d-97c8aca83375',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-gap-8 tw-gap-6">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'ade5e1c6-523e-429c-916b-72ad9a499a43',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-8 ">
                    <ItemBuilder
                        items={queriesList}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <>
                                    <QueriesCard
                                        key={itemIndex}
                                        title={item.title}
                                        location={item.location}
                                        contact={item.contact}
                                        email={item.email}
                                        image={item.image}
                                    />
                                </>
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
