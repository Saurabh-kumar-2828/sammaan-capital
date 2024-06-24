import {MetaFunction, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import type {LoaderFunction} from 'react-router-dom';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

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

    const vernacularData = getVernacularFromBackend('documentsHomeLoan');

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
                        <DocumentsHomeLoan />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function DocumentsHomeLoan() {

    return (
        <>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                   {
                    contentId: "Home",
                    link: "/",
                   },
                   {
                    contentId: "Home Loan",
                    link: "#",
                   },
                   {
                    contentId: "Required Documents",
                    link: "#",
                   },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <RequiredDocument />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function RequiredDocument() {
    const contentData = useContext(ContentProviderContext);
    const loanTab = [
        '106e77c6-3a4f-4b0b-aa55-f611f437aab5',
        '350d0c69-d2d9-4ec1-9cfd-f98572fbb002',
    ];
    const [selectedTab, setSelectedTab] = useState(0);

    const items = [
        {
            title: contentData.getContent(
                '181927fb-b9a5-4f94-a524-6fc1e28d7b61',
            ),
            description: contentData.getContent(
                '18b2d7f0-1c3c-4079-a17c-052737f5d0e5',
            ),
        },
        {
            title: contentData.getContent(
                'b88468e2-7018-41f2-a8b3-a6b27eff351c',
            ),
            description: contentData.getContent(
                'e137ca9a-1a3e-4d8b-92ec-2a0cab2423c6',
            ),
        },
        {
            title: contentData.getContent(
                'f2bb9f47-72ba-4500-80d8-c53e0929ffaf',
            ),
            description: contentData.getContent(
                'f1dde408-a6dc-4f0f-b3aa-77604d090910',
            ),
        },
        {
            title: contentData.getContent(
                '527e1d91-605f-4e10-a6cb-35cc8b6dab47',
            ),
            description: contentData.getContent(
                'b4ef52a2-b2cc-4e87-bd8a-559857f72973',
            ),
        },
        {
            title: contentData.getContent(
                '9c370b6b-c810-4911-a719-54bb66c44e00',
            ),
            description: contentData.getContent(
                '7b9383a4-3fba-49d7-9675-4ae2db0881b4',
            ),
        },
        {
            title: contentData.getContent(
                '35a4552a-9944-42f0-ae0f-a91742b208a5',
            ),
            description: contentData.getContent(
                '87c06633-f168-43a0-92fa-85f1f6b3b004',
            ),
        },
    ];
    return (
        <div className="">
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('144f6d56-3ad1-4e44-8c3e-5489acc111d4')}
            </div>
            <VerticalSpacer className="tw-h-6 lg:tw-h-4" />
            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 tw-justify-center tw-py-2 lg:tw-py-4">
                {loanTab.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-p-[0.63rem] tw-rounded-lg sc-text-button tw-h-full ${
                                selectedTab === itemIndex
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() =>
                                (window.location.href =
                                    '/document-for-loan-against-property')
                            }>
                            {contentData.getContent(item)}
                        </button>
                    </div>
                ))}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className=" sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {selectedTab === 0
                            ? contentData.getContent(
                                  '39440a9a-de4a-4836-965a-bcfaf432a554',
                              )
                            : contentData.getContent(
                                  '213cf6d7-8cdf-42ef-aa9b-fa3e4fbb3ba7',
                              )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {selectedTab === 0
                            ? contentData.getContent(
                                  'af8fcbf6-dbfb-4f29-ab8c-9b57041a9441',
                              )
                            : contentData.getContent(
                                  '2b681e3b-c683-469e-96f1-f85938719365',
                              )}
                    </div>
                    <div className="">
                        <ItemBuilder
                            items={items}
                            itemBuilder={(item, itemIndex) => (
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-grid tw-grid-cols-2 tw-gap-x-6 ',
                                        itemIndex === 0
                                            ? 'tw-bg-secondary-800 tw-text-secondary-200 sc-text-title1 tw-p-3 lg:tw-p-6 tw-border-b tw-border-secondary-600'
                                            : itemIndex % 2 != 0
                                            ? 'tw-bg-secondary-200 tw-text-secondary-800 tw-p-3 lg:tw-p-6 tw-border-b tw-border-secondary-600'
                                            : 'tw-bg-secondary-100 tw-text-secondary-800 tw-p-3 lg:tw-p-6 tw-border-b tw-border-secondary-600',
                                    )}
                                    key={itemIndex}>
                                    <div className="">{item.title}</div>
                                    <div className="">
                                        <div className="">
                                            {item.description}
                                        </div>
                                        {itemIndex === 1 ? (
                                            <>
                                                <VerticalSpacer className="tw-h-6" />
                                                <button className="sc-cta-button max-sm:tw-py-0 lg:tw-px-0 tw-py-[0.6rem] lg:tw-w-[15rem]">
                                                    {contentData.getContent(
                                                        'd9a521f5-84ce-4353-ba6f-d0b954da0a0c',
                                                    )}
                                                </button>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            )}
                        />
                    </div>

                    <button className="sc-cta-button tw-grid lg:tw-justify-self-start tw-px-0 tw-py-[0.6rem] lg:tw-w-[16.5rem]">
                        {contentData.getContent(
                            '90989ed1-54a0-4958-9fbf-93d8409063b3',
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
