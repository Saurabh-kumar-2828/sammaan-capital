import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {BlogsCard4} from '~/components/componentLibrary/blog/blogsCard4';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

export const meta: MetaFunction = () => {
    return [
        {title: 'About Us - Awards and Accolades'},
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

    const vernacularData = getVernacularFromBackend('awardsAndAccolades');

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
                    <PageScaffold>
                        <BoardOfDirectors />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function BoardOfDirectors() {
    return (
        <>
            <HeroSection />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'About us', link: '/about-us/overview'},
                    {contentId: 'Awards and Accolades', link: '#'},
                ]}
            />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <AwardsSection className="" />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <BlogsSection className="sc-px-screen-edge" />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-w-full tw-bg-[#001CA8] tw-grid tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr)_auto_auto_minmax(0,1fr)]">
            <div className="tw-h-[380px] tw-w-full tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full">
                {/* <img src="" alt/> */}
            </div>
            <div className="sc-text-banner tw-text-center lg:tw-text-left tw-row-start-2 sc-px-screen-edge tw-col-start-1">
                {contentData.getContent('d542a737-36af-4ac1-8b88-ee540bee4856')}
            </div>
            <div className="sc-text-banner tw-text-center lg:tw-text-left tw-row-start-3 sc-px-screen-edge tw-col-start-1">
                {contentData.getContent('d542a737-36af-4ac1-8b88-ee540bee4856')}
            </div>
        </div>
    );
}

function AwardsSection({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const years = [
        {
            buttonText: contentData.getContent(
                '5dc95295-77e0-4e2d-bae8-56c80273eee6',
            ),
        },
        {
            buttonText: contentData.getContent(
                '8aa46b55-f4c9-4b58-ad6c-845fda05f26d',
            ),
        },
        {
            buttonText: contentData.getContent(
                '78e29fc7-9073-4d9d-a34a-8ea0fcdceb7a',
            ),
        },
        {
            buttonText: contentData.getContent(
                'adcd3cc6-cfb9-4349-b3eb-5f2fc7822775',
            ),
        },
        {
            buttonText: contentData.getContent(
                '655f1846-eabd-44be-9fd0-1c71ad4f6a8d',
            ),
        },
        {
            buttonText: contentData.getContent(
                '1ef7326c-15f9-4ddd-ba9f-dbd4fd0c8ee4',
            ),
        },
        {
            buttonText: contentData.getContent(
                'fbed8e84-85fa-455d-a0fb-d787ac9d7541',
            ),
        },
        {
            buttonText: contentData.getContent(
                '5a1ce20f-82d8-4a7e-ab12-0c3c147d94d1',
            ),
        },
        {
            buttonText: contentData.getContent(
                'e14f0f38-d4e3-4dec-976b-aaa9fe418fc8',
            ),
        },
    ];

    const [selectedYears, setselectedYears] = useState(0);

    const awards = [
        [
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
            {
                image: contentData.getContent(
                    'a640a003-07f2-48ea-9be2-b30c0b31fbca',
                ),
                title: contentData.getContent(
                    '55babda3-0206-4435-a065-e1a3d5f81cda',
                ),
                text: contentData.getContent(
                    '8ba78660-7546-4021-bf6d-f2cab17f8049',
                ),
                date: contentData.getContent(
                    '9b608fd8-0328-4f57-acae-f8127fed7955',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    'fb73e807-3e7f-4b34-91a5-970335fa7ef2',
                ),
                title: contentData.getContent(
                    'a8f9df4b-0f39-40d3-b926-1e5e2acf8e91',
                ),
                text: contentData.getContent(
                    'c5c3010c-efc1-4a6c-9ee8-64d95c3cc3c4',
                ),
                date: contentData.getContent(
                    'e68d9dbc-c6fe-4eb8-bad1-f47f180ab61b',
                ),
            },
            {
                image: contentData.getContent(
                    'fb73e807-3e7f-4b34-91a5-970335fa7ef2',
                ),
                title: contentData.getContent(
                    'a8f9df4b-0f39-40d3-b926-1e5e2acf8e91',
                ),
                text: contentData.getContent(
                    'c5c3010c-efc1-4a6c-9ee8-64d95c3cc3c4',
                ),
                date: contentData.getContent(
                    'e68d9dbc-c6fe-4eb8-bad1-f47f180ab61b',
                ),
            },
            {
                image: contentData.getContent(
                    'fb73e807-3e7f-4b34-91a5-970335fa7ef2',
                ),
                title: contentData.getContent(
                    'a8f9df4b-0f39-40d3-b926-1e5e2acf8e91',
                ),
                text: contentData.getContent(
                    'c5c3010c-efc1-4a6c-9ee8-64d95c3cc3c4',
                ),
                date: contentData.getContent(
                    'e68d9dbc-c6fe-4eb8-bad1-f47f180ab61b',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '658018d8-e9f9-4dc0-9cd6-5690a296035c',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '658018d8-e9f9-4dc0-9cd6-5690a296035c',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '658018d8-e9f9-4dc0-9cd6-5690a296035c',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '658018d8-e9f9-4dc0-9cd6-5690a296035c',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'e488be8a-f5e6-4469-aae9-2745c60b6580',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'e488be8a-f5e6-4469-aae9-2745c60b6580',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'e488be8a-f5e6-4469-aae9-2745c60b6580',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'e488be8a-f5e6-4469-aae9-2745c60b6580',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'e488be8a-f5e6-4469-aae9-2745c60b6580',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '21eaea89-3d6b-495d-acad-8218ed192041',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'f0911f00-8133-47f6-a6aa-05d9fdf6d63b',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'f0911f00-8133-47f6-a6aa-05d9fdf6d63b',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'f0911f00-8133-47f6-a6aa-05d9fdf6d63b',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'c2f305e9-b05c-4d30-ba73-ceb173017e4e',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    'c2f305e9-b05c-4d30-ba73-ceb173017e4e',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '5499c001-8450-4288-a041-3735db37d0f3',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '5499c001-8450-4288-a041-3735db37d0f3',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
        [
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '2979961c-b350-43ce-b02b-bbaf48a46937',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '2979961c-b350-43ce-b02b-bbaf48a46937',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '2979961c-b350-43ce-b02b-bbaf48a46937',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
            {
                image: contentData.getContent(
                    '256c02b0-4b2c-46e6-9956-1ca5472525cc',
                ),
                title: contentData.getContent(
                    '2979961c-b350-43ce-b02b-bbaf48a46937',
                ),
                text: contentData.getContent(
                    'd2e7ccbf-8d56-43b2-966e-1d39d830a4e2',
                ),
                date: contentData.getContent(
                    'b5c3fe79-0c0f-489a-9b99-9208a2f8c805',
                ),
            },
        ],
    ];
    return (
        <div className={className}>
            <div className="sc-text-headline tw-text-center">
                {contentData.getContent('f5677933-f8a7-4466-813a-43d8986b6ad3')}
            </div>
            <VerticalSpacer className="lg:tw-h-2 tw-h-6" />
            <div className="tw-text-secondary-600 sc-text-title2 tw-text-center">
                {contentData.getContent('f57ecad5-f5ba-4d34-8b19-25d5e1448555')}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className="tw-bg-secondary-200 tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-justify-start tw-py-4 tw-overflow-x-auto max-lg:tw-px-6 sc-scroll-line-hidden">
                {years.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`tw-p-[0.69rem] lg:tw-p-4 lg:tw-px-5 tw-rounded-lg sc-text-button ${
                                selectedYears === itemIndex
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setselectedYears(itemIndex)}>
                            {item.buttonText}
                        </button>
                    </div>
                ))}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-grid-cols-3  tw-grid-cols-2 tw-gap-x-2 tw-gap-y-4 lg:tw-gap-6">
                    {awards[selectedYears].map((item, itemIndex) => (
                        <BlogsCard4
                            key={itemIndex}
                            image={item.image}
                            text={item.text}
                            title={item.title}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function BlogsSection({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
        {
            image: contentData.getContent(
                '4961ef4c-77b5-4641-98be-7227ee898c48',
            ),
            title: contentData.getContent(
                'f289ec08-0a88-4af6-ad0a-6e1d04715d16',
            ),
            text: contentData.getContent(
                'fd13f022-fd83-4afb-b69b-ca6bdfc3e65a',
            ),
            date: contentData.getContent(
                '015396f4-7a09-452b-bee8-2c859e2d8e0f',
            ),
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '654c154a-fb92-4b59-9cb2-930ff945a980',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-6">
                    <ItemBuilder
                        items={blogs}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard
                                key={itemIndex}
                                title={item.title}
                                text={item.text}
                                date={item.date}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
