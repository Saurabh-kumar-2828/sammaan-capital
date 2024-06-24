import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {type LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('blogs');

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
                        <BlogsPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function BlogsPage() {
    return (
        <>
            <HeroSection />

            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Blogs', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <OurBlogs />

            <div className="lg:tw-h-20 tw-h-10" />

            <AlternateBanner />
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
                            '2efde01e-36d3-4708-8689-bb2f97f35b3e',
                        ),
                    }}
                    className="sc-text-banner tw-text-center lg:tw-text-left lg:tw-w-4/5"
                />
            </div>
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);
    const [selectedBlogType, setselectedBlogType] = useState('All');
    const [showAllBlogs, setshowAllBlogs] = useState(false);
    const [selectedBlogs, setSelectedBlogs] = useState([
        {
            img: '',
            title: '',
            text: '',
            date: '',
        },
    ]);

    const blogs = [
        {
            name: contentData.getContent(
                '2869b158-6e7d-4ef2-8728-0752b6a886ec',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '84e39293-bcf9-4443-bff0-594407e8cb97',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '51c79d41-e80a-435a-967d-4da133ee97e5',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '08a0fcae-f3dc-43fd-a1f6-df5c94f6df5c',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '63662965-2045-46f3-a5fe-d8627357809c',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '1b61fa96-8d54-4974-bb7f-a2e0a6e07f0a',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                'f6432b8c-19ee-40e4-905f-8d5141d16279',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '4b98ca86-7fb3-48fe-b366-83e0c7188d90',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '3ff20d0e-c627-44d7-ac47-b7257ec8b62d',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                'eb305939-a3e6-4055-a821-f44a1c60205a',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                'd6ab4dc9-b1c9-4e32-b333-3432a37c47e9',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '3f70e455-235c-4185-ba2a-6995fbf52372',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                'b1b52b98-c0f8-4c71-94fc-b335a36dd310',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
        {
            name: contentData.getContent(
                '5939fea4-9530-4947-afb3-b27a1050c74d',
            ),
            content: [
                {
                    img: contentData.getContent(
                        '67fb9d4b-1196-477c-8eab-5366168ab3aa',
                    ),
                    title: contentData.getContent(
                        'bd76b31b-d203-49b6-b2b6-b26c89a43aa7',
                    ),
                    text: contentData.getContent(
                        'ae804274-72a1-4e44-a55d-abfa678f320f',
                    ),
                    date: contentData.getContent(
                        'de7d28b3-af7b-4252-8ee4-40e358f74d50',
                    ),
                },
                {
                    img: contentData.getContent(
                        '786843f5-649d-44f5-ab2d-1ed1780195c7',
                    ),
                    title: contentData.getContent(
                        'a6925e92-1723-424d-92b9-c2cfb9b338b5',
                    ),
                    text: contentData.getContent(
                        'fcf1a218-3134-455d-9008-d186a1c3858b',
                    ),
                    date: contentData.getContent(
                        '4c486475-8a3e-43d3-b173-93902c9937d5',
                    ),
                },
                {
                    img: contentData.getContent(
                        'f2af6c52-2d1e-49aa-9cc3-e7d8e169c3b8',
                    ),
                    title: contentData.getContent(
                        '4074e7ee-2b3a-4d57-b4cb-5ead97ff4e18',
                    ),
                    text: contentData.getContent(
                        '312f6a6a-b1ea-42ae-8a5f-6cafa01b1a81',
                    ),
                    date: contentData.getContent(
                        '84725682-15f4-4546-a455-b0228e6a2e85',
                    ),
                },
                {
                    img: contentData.getContent(
                        '6919d180-a1dc-4dac-aa25-4708a1e2721d',
                    ),
                    title: contentData.getContent(
                        '7a22eaac-62ef-42cf-a520-d44b67899b99',
                    ),
                    text: contentData.getContent(
                        '2baa9d81-e28e-45a1-abba-5f3451259865',
                    ),
                    date: contentData.getContent(
                        '0ac75bff-8581-4a71-9d23-9c6b0bf7951b',
                    ),
                },
                {
                    img: contentData.getContent(
                        '7dabe7e6-5c5a-4b38-9b7a-9bd648128153',
                    ),
                    title: contentData.getContent(
                        'e7e1f7df-1bbd-473e-a536-9e1ef5b095fa',
                    ),
                    text: contentData.getContent(
                        '7f3f862b-63f7-4346-b90d-cf06e28b81ef',
                    ),
                    date: contentData.getContent(
                        'acccd091-f163-4987-bbea-a9fc21b7816e',
                    ),
                },
                {
                    img: contentData.getContent(
                        '8dbf4d2d-76da-4852-b7a0-667e1cab319c',
                    ),
                    title: contentData.getContent(
                        '4514d332-6488-43d2-92b2-fa8c24404a79',
                    ),
                    text: contentData.getContent(
                        '9d50211e-4dc2-4dda-943d-32678c689a52',
                    ),
                    date: contentData.getContent(
                        'c473021f-4608-42a6-891d-e61284b7ae9b',
                    ),
                },
            ],
        },
    ];

    useEffect(() => {
        if (selectedBlogType == 'All') {
            const virtualBlogs = blogs
                .filter(item => item.name != 'All')
                .map(item => item.content)
                .flat();
            setSelectedBlogs(virtualBlogs);
        } else {
            const virtualBlogs = blogs
                .filter(item => item.name == selectedBlogType)
                .map(item => item.content)
                .flat();
            setSelectedBlogs(virtualBlogs);
        }
    }, [selectedBlogType]);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-m-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'd77b6658-6b50-4e9a-8035-b89d5cedb6de',
                    )}
                </div>

                <SelectComponent
                    items={blogs.map(item => item.name)}
                    className="tw-w-full md:tw-w-1/2 tw-justify-self-center tw-border-none"
                    greyBg={true}
                    itemBuilder={item => {
                        return item == ''
                            ? contentData.getContent('')
                            : `${item} (${
                                  item == 'All'
                                      ? blogs
                                            .filter(blog => blog.name != 'All')
                                            .map(item => item.content)
                                            .flat().length
                                      : blogs.filter(
                                            blog => blog.name == item,
                                        )[0].content.length
                              })`;
                    }}
                    value={selectedBlogType}
                    setValue={item => {
                        if (item != '') {
                            setselectedBlogType(item);
                            return;
                        }

                        setselectedBlogType('');
                    }}
                    buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                />

                <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6">
                    <ItemBuilder
                        items={selectedBlogs}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard
                                className={concatenateNonNullStringsWithSpaces(
                                    showAllBlogs
                                        ? ''
                                        : itemIndex > 5
                                        ? 'tw-hidden'
                                        : '',
                                )}
                                date={item.date}
                                title={item.title}
                                text={item.text}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
                {selectedBlogs.length > 6 && (
                    <button
                        className="sc-cta-outline-button tw-w-fit tw-justify-self-center"
                        onClick={() => setshowAllBlogs(!showAllBlogs)}>
                        {!showAllBlogs
                            ? contentData.getContent(
                                  'd3787777-ffe8-471d-b3df-8dd7cc63f61c',
                              )
                            : contentData.getContent(
                                  '7a7f9c9e-1bef-4f5e-824e-e1936536acbc',
                              )}
                    </button>
                )}
            </div>
        </div>
    );
}

function AlternateBanner() {
    const contentData = useContext(ContentProviderContext);

    return (
        <div className="tw-h-[400px] lg:tw-h-[188px] tw-w-full tw-grid">
            {/* <img src="" alt/> */}
            <div className="tw-bg-[#001CA8] tw-h-full tw-w-full tw-row-start-1 tw-col-start-1">
                {/* <img src="" alt=""/> */}
            </div>

            <div className="tw-row-start-1 tw-col-start-1 tw-w-fit tw-h-full lg:tw-w-fit tw-self-center tw-justify-self-center lg:tw-justify-self-start sc-px-screen-edge tw-grid tw-grid-rows-[minmax(0,1fr),auto] lg:tw-grid-rows-[auto_auto] tw-gap-6 tw-py-10 lg:tw-py-0">
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentData.getContent(
                            '85888505-1d1f-49c8-9062-d7962bafbb7e',
                        ),
                    }}
                    className="sc-text-headline md:tw-text-[2rem] md:tw-leading-10 tw-text-center lg:tw-text-left lg:tw-h-fit lg:tw-w-4/5 lg:tw-self-end"
                />
                <button className='sc-cta-button tw-w-fit tw-justify-self-center lg:tw-justify-self-start lg:tw-h-fit'>{contentData.getContent("04d8bbe2-e854-4e0d-90ee-8e1792c64d1c")}</button>
            </div>
        </div>
    );
}
