import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {Link, Links, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {BlogsCard5} from '~/components/componentLibrary/blog/blogsCard5';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {LeaderCard} from '~/components/componentLibrary/reusableCards/leaderCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {PageScaffold2} from '~/components/pageScaffold2';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import useIsScreenSizeBelow from '~/hooks/useIsScreenSizeBelow';
export const meta: MetaFunction = () => {
    return [
        {title: 'About Us - BOD'},
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

    const vernacularData = getVernacularFromBackend('boardOfDirectors');

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
                        <BoardOfDirectors />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function BoardOfDirectors() {
    return (
        <>
            <HeroSection
                imgId=""
                bannerHeadingId="3c4f7eed-c5f6-4df5-8e44-eb3c99fac0a7"
            />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'About us', link: '/about-us/overview'},
                    {contentId: 'Board of Directors', link: '#'},
                ]}
            />
            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <DirectorSection className="sc-px-screen-edge" />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <BoardCommittes className="sc-px-screen-edge tw-bg-secondary-200 tw-py-10 lg:tw-py-20" />

            <SammaanInsights className="sc-px-screen-edge" />
        </>
    );
}

function DirectorSection({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const isScreenSizeBelow = useIsScreenSizeBelow(1024);
    const [isSeeMore, setIsSeeMore] = useState(false);

    const directors = [
        {
            image: '',
            title: contentData.getContent(
                '0907c495-2eac-4ad2-badf-223bff04f62d',
            ),
            text: contentData.getContent(
                'ea09a3f9-16f1-49c9-a921-10e6cade6b23',
            ),
            linkText: contentData.getContent(
                '0791f5f3-ec97-4804-a9df-b521cecdb22c',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'bc85f7c4-4778-4d00-b02a-b75700f0949a',
            ),
            text: contentData.getContent(
                '24c54426-45a5-4d8c-9fab-f11fd302855f',
            ),
            linkText: contentData.getContent(
                '7cf16ccd-eaa4-470b-9498-035bffcc815d',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'c4fd5bbc-8de0-40e0-99bc-3dde1bd2d541',
            ),
            text: contentData.getContent(
                '7b24db8f-9149-4ddd-b4e3-ea4dc6936a7c',
            ),
            linkText: contentData.getContent(
                'b08a3981-a719-42a1-b14c-bb8211812875',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'b68811d9-60f9-4976-a6f4-33fb8dd12684',
            ),
            text: contentData.getContent(
                '12080a61-aef8-4145-916e-6d0df23c22a9',
            ),
            linkText: contentData.getContent(
                '752d58eb-98e4-47f2-9258-f0809d8574b4',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'f95da581-5df4-4fe1-99ae-a7faa0a833ea',
            ),
            text: contentData.getContent(
                '75dfa4ed-592c-4677-915c-5e7bcba91099',
            ),
            linkText: contentData.getContent(
                '2d7f74df-abf9-42fd-8316-1fd3775963d3',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'ead9577b-e210-43b5-951c-c79342f220b1',
            ),
            text: contentData.getContent(
                'ac6432ef-ef62-4776-9492-c1e9b7160e87',
            ),
            linkText: contentData.getContent(
                '35b6317c-0d70-41ce-8487-427d51129770',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                '64a3f65c-439a-40b7-a450-778ea9619fbc',
            ),
            text: contentData.getContent(
                '05c5e899-0c01-440a-9ec4-362d29dbe83e',
            ),
            linkText: contentData.getContent(
                'cb3c62fc-2058-420f-a096-3b4d550d4017',
            ),
            linkUrl: '#',
        },

        {
            image: '',
            title: contentData.getContent(
                'bc536bbc-2b88-40bf-ac59-7eb5f3b1acc8',
            ),
            text: contentData.getContent(
                '3ae76901-d37c-4a97-911c-5d31abd8f4db',
            ),
            linkText: contentData.getContent(
                '44c628a1-3174-4413-9131-1a1039fcf147',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'f95da581-5df4-4fe1-99ae-a7faa0a833ea',
            ),
            text: contentData.getContent(
                '75dfa4ed-592c-4677-915c-5e7bcba91099',
            ),
            linkText: contentData.getContent(
                '2d7f74df-abf9-42fd-8316-1fd3775963d3',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                'ead9577b-e210-43b5-951c-c79342f220b1',
            ),
            text: contentData.getContent(
                'ac6432ef-ef62-4776-9492-c1e9b7160e87',
            ),
            linkText: contentData.getContent(
                '35b6317c-0d70-41ce-8487-427d51129770',
            ),
            linkUrl: '#',
        },
        {
            image: '',
            title: contentData.getContent(
                '64a3f65c-439a-40b7-a450-778ea9619fbc',
            ),
            text: contentData.getContent(
                '05c5e899-0c01-440a-9ec4-362d29dbe83e',
            ),
            linkText: contentData.getContent(
                'cb3c62fc-2058-420f-a096-3b4d550d4017',
            ),
            linkUrl: '#',
        },

        {
            image: '',
            title: contentData.getContent(
                'bc536bbc-2b88-40bf-ac59-7eb5f3b1acc8',
            ),
            text: contentData.getContent(
                '3ae76901-d37c-4a97-911c-5d31abd8f4db',
            ),
            linkText: contentData.getContent(
                '44c628a1-3174-4413-9131-1a1039fcf147',
            ),
            linkUrl: '#',
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '8f44116f-6489-414c-92bb-693b097fb7e7',
                    )}
                </div>
                <div className="tw-h-6 lg:tw-h-4" />
                <div className="sc-text-title2 tw-text-secondary-600 lg:tw-text-center">
                    {contentData.getContent(
                        '42ceb936-e532-44d2-8058-9170ab5595bd',
                    )}
                </div>
                <div className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-h-full tw-gap-4 lg:tw-gap-6">
                    {isScreenSizeBelow && !isSeeMore ? (
                        <ItemBuilder
                            items={directors.slice(0, 4)}
                            itemBuilder={(item, itemIndex) => (
                                <LeaderCard
                                    title={item.title}
                                    text={item.text}
                                    linkText={item.linkText}
                                    linkUrl={item.linkUrl}
                                    key={itemIndex}
                                />
                            )}
                        />
                    ) : (
                        <ItemBuilder
                            items={directors}
                            itemBuilder={(item, itemIndex) => (
                                <LeaderCard
                                    title={item.title}
                                    text={item.text}
                                    linkText={item.linkText}
                                    linkUrl={item.linkUrl}
                                    key={itemIndex}
                                />
                            )}
                        />
                    )}
                </div>
                <VerticalSpacer className="lg:tw-hidden tw-h-6" />
                <button
                    className="lg:tw-hidden sc-cta-outline-button tw-grid md:tw-justify-self-center md:tw-px-0 md:tw-w-[19.5rem] tw-w-full"
                    onClick={() => setIsSeeMore(!isSeeMore)}>
                    {!isSeeMore ? 'See More' : 'Less More'}
                </button>
            </div>
        </div>
    );
}

function BoardCommittes({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);

    const boardCommittes = [
        {
            imageRelativeUrl: contentData.getContent(
                'd6113370-c323-442f-b989-29a4a6c0175d',
            ),
            name: contentData.getContent(
                '8de1cd0e-d964-4094-abe5-cfb22d5536cd',
            ),
            position: contentData.getContent(
                'fb3ee1bc-6f50-4a62-ac47-d216411dea0b',
            ),
            buttonText: contentData.getContent(
                '10728d59-07a0-49f9-94ba-7142b505599e',
            ),
            buttonLink: contentData.getContent(
                '634a9e46-05a9-4709-a225-7ba2519612d0',
            ),
            type: contentData.getContent(
                '8a52909a-ecef-44ad-8343-4a4c9c38d95e',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'd6113370-c323-442f-b989-29a4a6c0175d',
            ),
            name: contentData.getContent(
                '8de1cd0e-d964-4094-abe5-cfb22d5536cd',
            ),
            position: contentData.getContent(
                'fb3ee1bc-6f50-4a62-ac47-d216411dea0b',
            ),
            buttonText: contentData.getContent(
                '10728d59-07a0-49f9-94ba-7142b505599e',
            ),
            buttonLink: contentData.getContent(
                '634a9e46-05a9-4709-a225-7ba2519612d0',
            ),
            type: contentData.getContent(
                '8a52909a-ecef-44ad-8343-4a4c9c38d95e',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'd6113370-c323-442f-b989-29a4a6c0175d',
            ),
            name: contentData.getContent(
                '8de1cd0e-d964-4094-abe5-cfb22d5536cd',
            ),
            position: contentData.getContent(
                'fb3ee1bc-6f50-4a62-ac47-d216411dea0b',
            ),
            buttonText: contentData.getContent(
                '10728d59-07a0-49f9-94ba-7142b505599e',
            ),
            buttonLink: contentData.getContent(
                '634a9e46-05a9-4709-a225-7ba2519612d0',
            ),
            type: contentData.getContent(
                '8a52909a-ecef-44ad-8343-4a4c9c38d95e',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'd6113370-c323-442f-b989-29a4a6c0175d',
            ),
            name: contentData.getContent(
                '8de1cd0e-d964-4094-abe5-cfb22d5536cd',
            ),
            position: contentData.getContent(
                'fb3ee1bc-6f50-4a62-ac47-d216411dea0b',
            ),
            buttonText: contentData.getContent(
                '10728d59-07a0-49f9-94ba-7142b505599e',
            ),
            buttonLink: contentData.getContent(
                '634a9e46-05a9-4709-a225-7ba2519612d0',
            ),
            type: contentData.getContent(
                '8a52909a-ecef-44ad-8343-4a4c9c38d95e',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                '2d73ca06-e656-4ce2-9ec9-0e0e5b2ab4bb',
            ),
            name: contentData.getContent(
                '25f15ed7-55db-43c3-aad1-eacee853c5b9',
            ),
            position: contentData.getContent(
                '64765716-dcd3-4494-97b6-d308006755e2',
            ),
            buttonText: contentData.getContent(
                '2f2ed7fc-ffa8-4239-8719-dba3092c8f7a',
            ),
            buttonLink: contentData.getContent(
                '78a5eaad-348f-436b-8f5b-d80066496763',
            ),
            type: contentData.getContent(
                'fec6eb0e-6e01-4b73-822b-8d9ef7a1e7a5 ',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                '2d73ca06-e656-4ce2-9ec9-0e0e5b2ab4bb',
            ),
            name: contentData.getContent(
                '25f15ed7-55db-43c3-aad1-eacee853c5b9',
            ),
            position: contentData.getContent(
                '64765716-dcd3-4494-97b6-d308006755e2',
            ),
            buttonText: contentData.getContent(
                '2f2ed7fc-ffa8-4239-8719-dba3092c8f7a',
            ),
            buttonLink: contentData.getContent(
                '78a5eaad-348f-436b-8f5b-d80066496763',
            ),
            type: contentData.getContent(
                'fec6eb0e-6e01-4b73-822b-8d9ef7a1e7a5 ',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                '2d73ca06-e656-4ce2-9ec9-0e0e5b2ab4bb',
            ),
            name: contentData.getContent(
                '25f15ed7-55db-43c3-aad1-eacee853c5b9',
            ),
            position: contentData.getContent(
                '64765716-dcd3-4494-97b6-d308006755e2',
            ),
            buttonText: contentData.getContent(
                '2f2ed7fc-ffa8-4239-8719-dba3092c8f7a',
            ),
            buttonLink: contentData.getContent(
                '78a5eaad-348f-436b-8f5b-d80066496763',
            ),
            type: contentData.getContent(
                'fec6eb0e-6e01-4b73-822b-8d9ef7a1e7a5 ',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                'c9ac85d2-06b6-4d7f-bb7a-6ad2607f48eb',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                'c9ac85d2-06b6-4d7f-bb7a-6ad2607f48eb',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '662c9e73-5cee-432b-a8a4-381b2d6a600f',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '662c9e73-5cee-432b-a8a4-381b2d6a600f',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '715bbbb1-221f-431b-b64e-270583da4cc1',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '95cc360c-d1db-4b94-b7e8-3423e432c108',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '8e802f31-1bf6-46d9-bfb1-2a7762679eee',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                'a5b006b4-491a-4487-a237-70ed20d32bbd',
            ),
        },
        {
            imageRelativeUrl: contentData.getContent(
                'dae3ce4c-ab4f-4c2f-9c9b-a6a64bf77600',
            ),
            name: contentData.getContent(
                '90a64c33-5c59-4366-b10f-b23602f02820',
            ),
            position: contentData.getContent(
                'b4999f58-069b-44c7-acbc-dd42286c06b0',
            ),
            buttonText: contentData.getContent(
                '01a9d6ff-dc32-4719-86bc-949f2bd3152a',
            ),
            buttonLink: contentData.getContent(
                'cfc1fc44-163f-40e5-8482-68b1b929d855',
            ),
            type: contentData.getContent(
                '0388ba4f-394f-4d93-9a32-55060a221be6',
            ),
        },
    ];

    const uniqueTypes = [...new Set(boardCommittes.map(item => item.type))];

    const committeesItems = uniqueTypes.map((type, index) => ({
        type,
        index,
    }));

    const [selectedCommittess, setselectedCommittess] = useState<string | null>(
        committeesItems.length > 0 ? committeesItems[0].type : null,
    );

    const committes = selectedCommittess
        ? boardCommittes.filter(item => item.type === selectedCommittess)
        : boardCommittes.filter(item => item.type === committeesItems[0].type);
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 lg:tw-grid-rows-[auto_1rem_auto_2rem_minmax(0,1fr)] tw-grid-rows-[auto_1.5rem_auto_1.5rem_auto_1.5rem_minmax(0,1fr)]">
                <div className="tw-text-center sc-text-headline lg:tw-col-start-2 tw-row-start-1">
                    {contentData.getContent(
                        '830d4952-3528-461f-a396-f491d9599b12',
                    )}
                </div>
                <div className="sc-text-title2 tw-text-secondary-600 tw-text-center lg:tw-col-start-2 tw-row-start-3">
                    {contentData.getContent(
                        '76ebf1f0-9f0b-437b-82be-2b9ce3f9c7f9',
                    )}
                </div>
                <div className="tw-row-start-5 lg:tw-col-start-3 lg:tw-row-start-1 tw-w-full">
                    <SelectComponent
                        items={committeesItems.map((item, index) =>
                            item ? item.type : `${index}`,
                        )}
                        itemBuilder={item => (item !== null ? item : 'Index')}
                        value={selectedCommittess}
                        setValue={item =>
                            item !== null
                                ? setselectedCommittess(item)
                                : setselectedCommittess(null)
                        }
                        className="tw-w-full"
                        buttonClassName="tw-border tw-border-secondary-800 tw-bg-secondary-200 tw-h-full tw-p-4"
                    />
                </div>
                <div className="tw-row-start-7 lg:tw-row-start-5 tw-col-start-1 tw-col-span-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-6">
                    <ItemBuilder
                        items={committes}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <LeaderCard
                                    title={item.name}
                                    text={item.position}
                                    linkText={item.buttonText}
                                    linkUrl={item.buttonLink}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function SammaanInsights({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);

    const blogs = [
        {
            image: contentData.getContent(
                '476748f6-fc58-4f93-bde9-ec5b9637e232',
            ),
            title: contentData.getContent(
                'c047bf0c-43fc-4ef4-bdef-b4483d426b45',
            ),
            date: contentData.getContent(
                '1dd7ffa4-e7c1-4d2f-ad2e-662cf0019477',
            ),
            text: contentData.getContent(
                '8754b58e-633e-4886-bca4-a7d998436a3f',
            ),
        },
        {
            image: contentData.getContent(
                '476748f6-fc58-4f93-bde9-ec5b9637e232',
            ),
            title: contentData.getContent(
                'c047bf0c-43fc-4ef4-bdef-b4483d426b45',
            ),
            date: contentData.getContent(
                '1dd7ffa4-e7c1-4d2f-ad2e-662cf0019477',
            ),
            text: contentData.getContent(
                '8754b58e-633e-4886-bca4-a7d998436a3f',
            ),
        },
        {
            image: contentData.getContent(
                '476748f6-fc58-4f93-bde9-ec5b9637e232',
            ),
            title: contentData.getContent(
                'c047bf0c-43fc-4ef4-bdef-b4483d426b45',
            ),
            date: contentData.getContent(
                '1dd7ffa4-e7c1-4d2f-ad2e-662cf0019477',
            ),
            text: contentData.getContent(
                '8754b58e-633e-4886-bca4-a7d998436a3f',
            ),
        },
    ];

    return (
        <>
            <OurBlogSection
                heading={contentData.getContent(
                    'c3c38b56-81f9-4e5e-af8a-eb3d696dea22',
                )}
                items={blogs}
                buttonText={contentData.getContent(
                    '45b75721-aac8-4aee-ac1a-c4ecd769ad38',
                )}
            />
        </>
    );
}
