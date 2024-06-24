import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {BlogsCard3} from '~/components/componentLibrary/blog/blogsCard3';
import {BlogsCard4} from '~/components/componentLibrary/blog/blogsCard4';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {PageScaffold2} from '~/components/pageScaffold2';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
export const meta: MetaFunction = () => {
    return [
        {title: 'About Us - Management Team'},
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

    const vernacularData = getVernacularFromBackend('managementTeam');

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
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <ManagementTeam />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function ManagementTeam() {
    return (
        <>
            <HeroSection
                imgId=""
                bannerHeadingId="fc7996cd-ff1e-41dc-af3d-90628607e4af"
            />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'About us', link: '/about-us/overview'},
                    {contentId: 'Management Team', link: '#'},
                ]}
            />
            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <ManagementSection className="sc-px-screen-edge tw-pb-10 lg:tw-pb-20" />

            <OurAchievements />

            <NewsCorner />

            <BlogSection />
        </>
    );
}

function ManagementSection({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);

    // const [isViewMore, setIsViewMore] = useState(false);
    const teams = [
        {
            image: '',
            title: contentData.getContent(
                '20b9c554-047f-403f-a1db-84d8ee9e27e8',
            ),
            text: contentData.getContent(
                'a1202ea5-5810-43a8-a2aa-7bb956af87c0',
            ),
            linkText: contentData.getContent(
                'f7dbe9c7-287c-43fd-8b29-8cb523a55979',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '2041c086-0a0d-4d6d-84c3-e3394a121517',
            ),
            text: contentData.getContent(
                'ec1f3bf7-6522-45e9-93cb-c5db1fe6a1bf',
            ),
            linkText: contentData.getContent(
                'ada65c6b-5ec2-467b-8bcd-d5d6e448db02',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '34811225-7b8b-4b0e-ad42-35cc713398b4',
            ),
            text: contentData.getContent(
                '8630ebfa-827c-4111-9d56-e7902be4a189',
            ),
            linkText: contentData.getContent(
                '796858b2-6d32-4d1c-9088-e082d00fbdff',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '3070e4ec-2e0f-4d3d-88f3-f741664c4479',
            ),
            text: contentData.getContent(
                '434300e4-f18c-45bc-bae9-1f8a947b6d69',
            ),
            linkText: contentData.getContent(
                '2501e226-e178-457b-873c-7c328ff9b86c',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '20b9c554-047f-403f-a1db-84d8ee9e27e8',
            ),
            text: contentData.getContent(
                'a1202ea5-5810-43a8-a2aa-7bb956af87c0',
            ),
            linkText: contentData.getContent(
                'f7dbe9c7-287c-43fd-8b29-8cb523a55979',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '2041c086-0a0d-4d6d-84c3-e3394a121517',
            ),
            text: contentData.getContent(
                'ec1f3bf7-6522-45e9-93cb-c5db1fe6a1bf',
            ),
            linkText: contentData.getContent(
                'ada65c6b-5ec2-467b-8bcd-d5d6e448db02',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '34811225-7b8b-4b0e-ad42-35cc713398b4',
            ),
            text: contentData.getContent(
                '8630ebfa-827c-4111-9d56-e7902be4a189',
            ),
            linkText: contentData.getContent(
                '796858b2-6d32-4d1c-9088-e082d00fbdff',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '3070e4ec-2e0f-4d3d-88f3-f741664c4479',
            ),
            text: contentData.getContent(
                '434300e4-f18c-45bc-bae9-1f8a947b6d69',
            ),
            linkText: contentData.getContent(
                '2501e226-e178-457b-873c-7c328ff9b86c',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '20b9c554-047f-403f-a1db-84d8ee9e27e8',
            ),
            text: contentData.getContent(
                'a1202ea5-5810-43a8-a2aa-7bb956af87c0',
            ),
            linkText: contentData.getContent(
                'f7dbe9c7-287c-43fd-8b29-8cb523a55979',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '2041c086-0a0d-4d6d-84c3-e3394a121517',
            ),
            text: contentData.getContent(
                'ec1f3bf7-6522-45e9-93cb-c5db1fe6a1bf',
            ),
            linkText: contentData.getContent(
                'ada65c6b-5ec2-467b-8bcd-d5d6e448db02',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '34811225-7b8b-4b0e-ad42-35cc713398b4',
            ),
            text: contentData.getContent(
                '8630ebfa-827c-4111-9d56-e7902be4a189',
            ),
            linkText: contentData.getContent(
                '796858b2-6d32-4d1c-9088-e082d00fbdff',
            ),
            linkUrl: contentData.getContent('/'),
        },
        {
            image: '',
            title: contentData.getContent(
                '3070e4ec-2e0f-4d3d-88f3-f741664c4479',
            ),
            text: contentData.getContent(
                '434300e4-f18c-45bc-bae9-1f8a947b6d69',
            ),
            linkText: contentData.getContent(
                '2501e226-e178-457b-873c-7c328ff9b86c',
            ),
            linkUrl: contentData.getContent('/'),
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '9fa8f6e4-b625-4d93-90d7-c821a4aa16d3',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-4" />
                <div className="sc-text-title2 tw-text-secondary-600">
                    {contentData.getContent(
                        '609b262b-b287-4c79-a312-bdbcd419e038',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 lg:tw-gap-6 tw-gap-x-2 tw-gap-y-4">
                    <ItemBuilder
                        items={teams}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard3
                                linkText={item.linkText}
                                linkUrl={item.linkUrl}
                                text={item.text}
                                title={item.title}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function OurAchievements() {
    const contentData = useContext(ContentProviderContext);

    const achievements = [
        {
            image: 'e5c6705b-aff6-42b6-b95c-e68cda6a8a78',
            title: '9dbbcda1-10a8-43ca-add1-ffffb3b70e26',
            text: '662ff2b6-45d0-4124-84ad-a3c399097b4e',
            date: '990546d0-7849-4690-91a1-78935843bcf3',
        },

        {
            image: 'be386cb2-ef3a-456a-a3b7-578b46f01c15',
            title: 'da34e3ca-60de-40a5-bafd-2c67930d1214',
            text: 'c2523d05-7b91-42df-a96f-62df8527a304',
            date: '1fc3a69c-aa4f-4b78-a9c4-3c09c5695592',
        },

        {
            image: 'ef9f7188-771c-491f-bbed-b03cd5da214c',
            title: 'b6f54719-1f71-42c1-a634-b742c7a374e5',
            text: '1306d3d8-7ea7-44d0-a406-dc819123dae3',
            date: 'e4bc0003-5d69-41aa-a1a9-dd0ad6b40d1d',
        },

        {
            image: '7824bf2e-8906-4a5d-ae12-c0a8b68ae6c6',
            title: '8f013786-8810-4168-9ec1-ec7f4de2c7d2',
            text: '426fc25c-9633-4d4e-aae3-bb4895859da7',
            date: 'fbe6b74b-9234-4e25-b973-06b9b23f9132',
        },
    ];
    return (
        <div className="sc-px-screen-edge tw-py-10 lg:tw-py-20">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '45d3132b-ca16-4237-bc61-d0cfd8011681',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-2">
                    <ItemBuilder
                        items={achievements}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard4
                                date={contentData.getContent(item.date)}
                                title={contentData.getContent(item.title)}
                                text={contentData.getContent(item.text)}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
                <Link
                    to="/about-us/awards-and-accolades"
                    className="sc-cta-outline-button tw-grid tw-text-center tw-py-3 lg:-px-0 lg:tw-justify-self-center lg:tw-w-[19.5rem]">
                    {contentData.getContent(
                        '206112ca-c43f-4329-8e8b-00a0039a3d55',
                    )}
                </Link>
            </div>
        </div>
    );
}

function NewsCorner() {
    const contentData = useContext(ContentProviderContext);

    const news = [
        {
            image: contentData.getContent(
                'eadd29fb-d053-4612-8e2c-4507d9fcdeb9',
            ),
            date: contentData.getContent(
                '3daffe7e-cec0-483b-91a6-9d893be94d12',
            ),
            title: contentData.getContent(
                '2cf711fe-bc38-42e5-afcb-934a69f58ec5',
            ),
            text: contentData.getContent(
                '67294b4b-7bce-47e0-b4bc-04bc89e33bc3',
            ),
            // linkText: contentData.getContent(
            //     'dbe31c50-0a32-4f36-a340-077a565eeb8b',
            // ),
            // linkUrl: contentData.getContent(
            //     'cf11f6a1-146e-46d4-a741-9bacef0be83a',
            // ),
        },
        {
            image: contentData.getContent(
                'c7c42795-7b3b-48fe-b030-b35d17a85dac',
            ),
            date: contentData.getContent(
                'e7a319cb-b781-4fa7-9d1a-63d9b93a00ca',
            ),
            title: contentData.getContent(
                'a60b8aed-3022-4b6d-907d-bb3c9acda72d',
            ),
            text: contentData.getContent(
                'e253e097-c807-4454-aa2c-221a1621bfe4',
            ),
            // linkText: contentData.getContent(
            //     'b9ab939c-31bf-4cff-8212-0ca5ae1bea10',
            // ),
            // linkUrl: contentData.getContent(
            //     'b159d3e0-b938-47a3-b334-3bbcd13f88f3',
            // ),
        },
        {
            image: contentData.getContent(
                'ce0edfc9-5f0a-4f5a-a046-1488de075f0c',
            ),
            date: contentData.getContent(
                '929b3055-4830-4bd6-96e5-a1933003b266',
            ),
            title: contentData.getContent(
                'b2d251f4-e767-4c49-ae8c-d972305f9558',
            ),
            text: contentData.getContent(
                'fc62ef07-911e-4b86-9c4d-87115d556af4',
            ),
            // linkText: contentData.getContent(
            //     'a1eb8fc4-b93c-4f2b-982e-fa89a27059b9',
            // ),
            // linkUrl: contentData.getContent(
            //     '5c3d3912-3284-4503-bd05-229c0ea7854a',
            // ),
        },
        {
            image: contentData.getContent(
                'eadd29fb-d053-4612-8e2c-4507d9fcdeb9',
            ),
            date: contentData.getContent(
                '3daffe7e-cec0-483b-91a6-9d893be94d12',
            ),
            title: contentData.getContent(
                '2cf711fe-bc38-42e5-afcb-934a69f58ec5',
            ),
            text: contentData.getContent(
                '67294b4b-7bce-47e0-b4bc-04bc89e33bc3',
            ),
            // linkText: contentData.getContent(
            //     'dbe31c50-0a32-4f36-a340-077a565eeb8b',
            // ),
            // linkUrl: contentData.getContent(
            //     'cf11f6a1-146e-46d4-a741-9bacef0be83a',
            // ),
        },
        {
            image: contentData.getContent(
                'c7c42795-7b3b-48fe-b030-b35d17a85dac',
            ),
            date: contentData.getContent(
                'e7a319cb-b781-4fa7-9d1a-63d9b93a00ca',
            ),
            title: contentData.getContent(
                'a60b8aed-3022-4b6d-907d-bb3c9acda72d',
            ),
            text: contentData.getContent(
                'e253e097-c807-4454-aa2c-221a1621bfe4',
            ),
            // linkText: contentData.getContent(
            //     'b9ab939c-31bf-4cff-8212-0ca5ae1bea10',
            // ),
            // linkUrl: contentData.getContent(
            //     'b159d3e0-b938-47a3-b334-3bbcd13f88f3',
            // ),
        },
        {
            image: contentData.getContent(
                'ce0edfc9-5f0a-4f5a-a046-1488de075f0c',
            ),
            date: contentData.getContent(
                '929b3055-4830-4bd6-96e5-a1933003b266',
            ),
            title: contentData.getContent(
                'b2d251f4-e767-4c49-ae8c-d972305f9558',
            ),
            text: contentData.getContent(
                'fc62ef07-911e-4b86-9c4d-87115d556af4',
            ),
            // linkText: contentData.getContent(
            //     'a1eb8fc4-b93c-4f2b-982e-fa89a27059b9',
            // ),
            // linkUrl: contentData.getContent(
            //     '5c3d3912-3284-4503-bd05-229c0ea7854a',
            // ),
        },
    ];
    return (
        <NewsCornerSection
            heading={contentData.getContent(
                'ef33a785-b6bd-4a67-b609-a25a089935ce',
            )}
            news={news}
            buttonText={contentData.getContent(
                '71154b9d-db73-458a-987a-799ced7a3f18',
            )}
        />
    );
}

function BlogSection() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            image: '',
            title: contentData.getContent(
                '8c0a61b7-8903-4b45-8e33-60fdeb160857',
            ),
            date: contentData.getContent(
                '37c1c4e6-da1e-44c5-a651-60ed1cfa3915',
            ),
            text: contentData.getContent(
                '8ec93e86-8e43-4778-8344-472de69a5895',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                'd5055eb4-07cd-4d19-8e31-90122deddb77',
            ),
            date: contentData.getContent(
                '37c1c4e6-da1e-44c5-a651-60ed1cfa3915',
            ),
            text: contentData.getContent(
                '78d44525-3ddd-4f6f-9540-e0c4bced43ae',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                'dc631236-aa2a-4bf9-8db9-185ada39681f',
            ),
            date: contentData.getContent(
                '37c1c4e6-da1e-44c5-a651-60ed1cfa3915',
            ),
            text: contentData.getContent(
                '942f7db0-6c7e-4e38-afec-fa69108968b4',
            ),
        },
    ];
    return (
        <OurBlogSection
            heading={contentData.getContent(
                '1ac09f90-d192-44c5-bf17-2ca24ea82419',
            )}
            items={blogs}
            buttonText={contentData.getContent(
                'ff678b17-9d73-48d5-b864-90778cb5961a',
            )}
        />
    );
}
