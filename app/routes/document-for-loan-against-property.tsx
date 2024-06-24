import {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
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

    const vernacularData = getVernacularFromBackend(
        'documentsLoanAgainstProperty',
    );

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
                        <LoanAgainstProprerty />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function LoanAgainstProprerty() {

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
                        contentId: "Loan Against Property",
                        link: "#"
                    },
                    {
                        contentId: "Required Documents",
                        link: "#"
                    }
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
        '1917fd2b-69f7-4e6e-886f-45d028b73594',
        'c39e721b-bd49-4456-bd3d-279fe9483692',
    ];
    const [selectedTab, setSelectedTab] = useState(1);

    const items = [
        {
            title: contentData.getContent(
                '058d64ff-4035-4932-9c4d-04e979aee566',
            ),
            description: contentData.getContent(
                '3d3b0edf-e829-491d-9f0d-76d1e230aa5a',
            ),
        },
        {
            title: contentData.getContent(
                '13828043-8614-4416-a44f-c2ef112996c9',
            ),
            description: contentData.getContent(
                '80eeabbb-31d2-4c92-bf3c-d22020922455',
            ),
        },
        {
            title: contentData.getContent(
                '68196d55-d5f6-4ef8-8bcb-dc2da4068658',
            ),
            description: contentData.getContent(
                '0e59c28a-ca29-4609-9333-7a2704936452',
            ),
        },
        {
            title: contentData.getContent(
                '492b9d70-da00-407b-8b32-9d2bf8840278',
            ),
            description: contentData.getContent(
                'ecc9a5d4-3a59-49e0-92d8-e22c056c9bfb',
            ),
        },
        {
            title: contentData.getContent(
                '89fdaa96-79b1-48f4-a692-1d7393888129',
            ),
            description: contentData.getContent(
                'd7335af8-6d9a-46e8-a895-7a0dd9a5cfd6',
            ),
        },
        {
            title: contentData.getContent(
                'c6193e86-2ace-4d52-9eab-193caf8fef48',
            ),
            description: contentData.getContent(
                'fe224d92-21df-4281-8dfd-4189bfae9b9c',
            ),
        },
        {
            title: contentData.getContent(
                'eba34cb2-9ff5-4bf8-a75e-114504bd4b47',
            ),
            description: contentData.getContent(
                'eb8400c9-94f0-44f8-9c79-aac38a33fcd8',
            ),
        },
    ];

    return (
        <div className="">
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('dacf40a5-0767-4d53-8039-be5ab47074c8')}
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
                            onClick={() => (window.location.href = "/documents-for-home-loan")}>
                            {contentData.getContent(item)}
                        </button>
                    </div>
                ))}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className=" sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '213cf6d7-8cdf-42ef-aa9b-fa3e4fbb3ba7',
                        )}
                    </div>
                    <div className="sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
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
                                                        'd503f72d-1e56-4cea-9d64-473407057910',
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
                    <button className="lg:tw-w-[22.5rem] sc-cta-button tw-grid lg:tw-justify-self-start tw-px-0 tw-py-[0.6rem]">
                        {contentData.getContent(
                            '6d80c1c2-8eaf-4a98-b84c-a63a30744fdf',
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
