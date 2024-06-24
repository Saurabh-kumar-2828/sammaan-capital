import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {
    Link, useLoaderData
} from '@remix-run/react';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('videoCenter');

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
                        <VideoCenterPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function VideoCenterPage() {
    return (
        <>
            <HeroSection />

            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Video Gallery', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <VideoCenter />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);

    return (
        <div className="tw-h-[380px] tw-w-full tw-grid">
            {/* <img src="" alt/> */}
            <div className="tw-bg-[#001CA8] tw-h-full tw-w-full tw-row-start-1 tw-col-start-1">
                {/* <img src="" alt=""/> */}
            </div>

            <div className="tw-row-start-1 tw-col-start-1 tw-w-fit tw-h-fit tw-self-center tw-justify-self-center lg:tw-justify-self-start sc-px-screen-edge">
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentData.getContent(
                            '94c14336-ed58-4a44-ad0e-992068ab4f88',
                        ),
                    }}
                    className="sc-text-banner tw-text-center lg:tw-text-left"
                />
            </div>
        </div>
    );
}

function VideoCenter() {
    const contentData = useContext(ContentProviderContext);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const videos = [
        [
            {
                title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                text: contentData.getContent("d0d141a7-9e77-46db-8156-2131634c7ccf"),
                videoLink: contentData.getContent("cb961410-8a4e-4af5-8d61-19c1a0f01ccd"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },

                ]
            },
            {
                title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                text: contentData.getContent("cb45c8b1-61dc-492d-a161-01243c238694"),
                videoLink: contentData.getContent("731f6dbc-dcb8-475a-a6c9-ec78126cd74b"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },

                ]
            },
            {
                title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                text: contentData.getContent("3387ea2a-cdb4-4e51-809f-c666bf1591b4"),
                videoLink: contentData.getContent("6d9b7ce3-b0e5-4de6-939d-e098d1c44fa4"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },

                ]
            },
            {
                title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                text: contentData.getContent("f21b2f82-ee73-43c6-b04b-c22640eb6ebf"),
                videoLink: contentData.getContent("b6000aaf-e0e0-4d40-b3c3-6be1ba5ce56f"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },

                ]
            },
        ],
        [
            {
                title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                text: contentData.getContent("3387ea2a-cdb4-4e51-809f-c666bf1591b4"),
                videoLink: contentData.getContent("6d9b7ce3-b0e5-4de6-939d-e098d1c44fa4"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },

                ]
            },
            {
                title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                text: contentData.getContent("cb45c8b1-61dc-492d-a161-01243c238694"),
                videoLink: contentData.getContent("731f6dbc-dcb8-475a-a6c9-ec78126cd74b"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },

                ]
            },
            {
                title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                text: contentData.getContent("f21b2f82-ee73-43c6-b04b-c22640eb6ebf"),
                videoLink: contentData.getContent("b6000aaf-e0e0-4d40-b3c3-6be1ba5ce56f"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },
                    {
                        title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                        imageId: contentData.getContent("2a96abb0-5af4-4ae6-8d07-0d6be7623d70")
                    },

                ]
            },
            {
                title: contentData.getContent("622fd952-d73c-4dba-840a-aeb591f25caa"),
                text: contentData.getContent("d0d141a7-9e77-46db-8156-2131634c7ccf"),
                videoLink: contentData.getContent("cb961410-8a4e-4af5-8d61-19c1a0f01ccd"),
                recommendedVideos: [
                    {
                        title: contentData.getContent("58534ad8-0837-48e0-8576-3ea46590cbfb"),
                        imageId: contentData.getContent("e9fcd31a-9540-48dd-b0ec-4575ad62cf87")
                    },
                    {
                        title: contentData.getContent("2f4ee6cc-d3ea-4708-bb2f-b973fd682d29"),
                        imageId: contentData.getContent("66a255c8-fa22-434e-8f5b-3050722d6ec5")
                    },
                    {
                        title: contentData.getContent("456192e9-f6ed-47b2-8da6-a8a00f9ccdb3"),
                        imageId: contentData.getContent("96ab9434-6564-4232-a3fe-467c4e7b7f7d")
                    },

                ]
            },
        ]
    ];
    const [selectedVideo, setSelectedVideo] = useState(videos[selectedTabIndex][0].title);

    useEffect(()=> {
        setSelectedVideo(videos[selectedTabIndex][0].title);
    }, [selectedTabIndex]);
    return (
        <div className="tw-grid tw-gap-6 lg:tw-gap-8">
            <div className="sc-text-headline tw-text-center sc-px-screen-edge">
                {contentData.getContent('23b0d42c-796e-435a-a373-33cf5a5e134d')}
            </div>

            <div className="tw-flex tw-gap-2 tw-justify-center tw-border tw-border-secondary-100 tw-py-4">
                <button
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer', selectedTabIndex == 0 ? "sc-tab-button" : "tw-bg-secondary-400 tw-text-secondary-800"
                    )} onClick={()=> setSelectedTabIndex(0)}>
                    {contentData.getContent(
                        'd295430a-31f8-4867-b40e-3e8e8f1cdee9',
                    )}
                </button>
                <button
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer', selectedTabIndex == 1 ? "sc-tab-button" : "tw-bg-secondary-400 tw-text-secondary-800"
                    )} onClick={()=> setSelectedTabIndex(1)}>
                    {contentData.getContent(
                        '76b8cf9a-ab1f-41ae-a9a2-234cddad14b0',
                    )}
                </button>
            </div>
            <div className='sc-px-screen-edge'>
                <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:tw-grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:tw-grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] tw-gap-8 md:tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto'>
                    <div className='tw-grid tw-gap-6 tw-rounded-lg'>
                        <div className='tw-h-[200px] lg:tw-h-[400px] tw-bg-[#FF8D288F] tw-rounded-lg tw-overflow-hidden'></div>
                        <div className='tw-grid tw-gap-2 md:tw-gap-3'>
                            <div className='sc-text-title1'>{videos[selectedTabIndex].filter((item)=> item.title == selectedVideo)[0].title}</div>
                            <div className='sc-text-body tw-text-secondary-600'>{videos[selectedTabIndex].filter((item)=> item.title == selectedVideo)[0].text}</div>
                        </div>
                        <Link to="#" className='sc-cta-button tw-w-full md:tw-w-fit tw-text-center'>{contentData.getContent("f6562ab4-cf99-46c8-be16-45df2e5bf114")}</Link>
                    </div>
                    <div className='tw-grid tw-auto-rows-max tw-gap-6 md:tw-bg-secondary-100 tw-rounded-lg md:tw-p-6'>
                        <div className='sc-text-title2 tw-font-bold'>{contentData.getContent("88c273e5-de47-4a71-812e-13517a9135a0")}</div>
                        <ItemBuilder
                            items={videos[selectedTabIndex].filter((item)=> item.title == selectedVideo)[0].recommendedVideos}
                            itemBuilder={(item, itemIndex)=> {
                                return (
                                    <div key={itemIndex} className='tw-grid tw-grid-cols-[96px_1fr] md:tw-grid-cols-[128px_1fr] tw-gap-4'>
                                        <div className='tw-bg-[#FF8D288F] tw-rounded-lg tw-overflow-hidden tw-h-[54px] tw-w-full md:tw-h-[72px]'></div>
                                        <div className='sc-text-caption tw-cursor-pointer' onClick={()=> setSelectedVideo(item.title)}>{item.title}</div>
                                    </div>
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
