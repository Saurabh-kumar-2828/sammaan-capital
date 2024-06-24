import {useContext, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {
    contentData,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('homeLoanApp');

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
                        <HomeLoanAppPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function HomeLoanAppPage() {
    return (
        <>
            <DownloadApp />
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Sammaan Capital App', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <FeatureSection />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function DownloadApp() {
    const contentData = useContext(ContentProviderContext);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <div className="sc-px-screen-edge tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
            <div className="tw-grid tw-grid-cols-1 min-[825px]:tw-grid-cols-[20rem_1fr] tw-gap-16 lg:tw-gap-24 tw-max-w-7xl tw-w-full tw-mx-auto xl:tw-px-16">
                <div className="tw-bg-secondary-800 tw-w-full tw-h-full tw-rounded-lg tw-hidden min-[825px]:tw-block"></div>
                <div>
                    <div className="sc-text-headline">
                        {contentData.getContent(
                            'cc56306b-7db8-4cc0-8dff-0c1674b1de6e',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-6 lg:tw-h-10" />

                    <div className="sc-text-title2">
                        {contentData.getContent(
                            '886229d2-2003-479e-a940-68d50d3f9946',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-4" />

                    <div className="tw-flex tw-gap-6">
                        <div className="tw-flex tw-gap-2 tw-p-2 tw-items-center">
                            <div
                                className="tw-w-6 tw-h-6 tw-rounded-full tw-border-2 tw-border-secondary-800 tw-p-1 tw-cursor-pointer"
                                onClick={() => setSelectedTabIndex(0)}>
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-rounded-full tw-w-full tw-h-full tw-aspect-square',
                                        selectedTabIndex == 0
                                            ? 'tw-bg-secondary-800'
                                            : '',
                                    )}></div>
                            </div>
                            <div>
                                {contentData.getContent(
                                    '389f2889-174f-4f3c-a271-409cbfbfb8e1',
                                )}
                            </div>
                        </div>
                        <div className="tw-flex tw-gap-2 tw-p-2">
                            <div
                                className="tw-w-6 tw-h-6 tw-rounded-full tw-border-2 tw-border-secondary-800 tw-p-1 tw-cursor-pointer"
                                onClick={() => setSelectedTabIndex(1)}>
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-rounded-full tw-w-full tw-h-full tw-aspect-square',
                                        selectedTabIndex == 1
                                            ? 'tw-bg-secondary-800'
                                            : '',
                                    )}></div>
                            </div>
                            <div>
                                {contentData.getContent(
                                    '64b6c1b3-621e-41f4-82d2-151f78d6a98e',
                                )}
                            </div>
                        </div>
                    </div>

                    <VerticalSpacer className="tw-h-4" />

                    <div className="tw-relative">
                        <input
                            type="text"
                            className="sc-text-input"
                            placeholder={contentData.getContent(
                                '976654eb-5178-4a23-89eb-4f00670a4c7c',
                            )}
                        />
                        <div className="tw-absolute tw-top-0 tw-right-5 tw-h-full tw-flex tw-items-center">
                            <div className="tw-h-fit sc-text-title2 tw-text-secondary-600">
                                {contentData.getContent(
                                    '84ab74cf-b1eb-41dc-911a-8f11d481a536',
                                )}
                            </div>
                        </div>
                    </div>

                    <VerticalSpacer className="tw-h-8 lg:tw-h-12" />

                    <div className="sc-text-title2">
                        {contentData.getContent(
                            '1df10aae-91bf-4514-a7da-b34041795704',
                        )}
                    </div>

                    <VerticalSpacer className="tw-h-4" />

                    <div className="tw-flex tw-gap-4">
                        <div className="tw-w-[12rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                        <div className="tw-w-[12rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureSection() {
    const contentData = useContext(ContentProviderContext);
    const featureData = [
        {
            title: contentData.getContent(
                'a993db54-b907-42e4-800d-480bb7bdf345',
            ),
            text: contentData.getContent(
                '4d8b2ee4-5bc0-4c76-8226-9c16e7aadf9b',
            ),
            buttonHeadingText: contentData.getContent(
                '75e8d88a-0ca0-43c5-8413-dfec6a197c8c',
            ),
            playStoreLink: contentData.getContent(
                'e78b2070-de1d-43e8-a3c9-2a23ad46bfaa',
            ),
            appStoreLink: contentData.getContent(
                '870337d0-188f-40da-81a5-eb6b1a747c35',
            ),
            imageLink: contentData.getContent(
                '52dd99f1-059b-42d8-9115-cb9aeb6d7a95',
            ),
        },
        {
            title: contentData.getContent(
                '0e6df94b-de7a-4286-bc20-7359894c03ad',
            ),
            text: contentData.getContent(
                '82b4a8c4-3bab-405c-912f-6567fc16264a',
            ),
            buttonHeadingText: contentData.getContent(
                '75e8d88a-0ca0-43c5-8413-dfec6a197c8c',
            ),
            playStoreLink: contentData.getContent(
                'ff645dea-2822-4b80-a5ec-d39e186d9863',
            ),
            appStoreLink: contentData.getContent(
                '5e6120d5-3ca5-4c8f-b634-0a1b235ec837',
            ),
            imageLink: contentData.getContent(
                '6052fafe-f182-4d29-9d03-b2b2133b6874',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-8">
                    <ItemBuilder
                        items={featureData}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className="tw-p-6 lg:tw-p-8 tw-pb-0 lg:tw-pb-0 tw-rounded-lg sc-small-shadow tw-grid tw-grid-rows-[minmax(0,1fr)_auto]">
                                    <div>
                                        <div className="tw-text-center sc-text-headline">
                                            {item.title}
                                        </div>

                                        <VerticalSpacer className="tw-h-3 lg:tw-h-5" />

                                        <div className="tw-text-center sc-text-title2 tw-text-secondary-600">
                                            {item.text}
                                        </div>

                                        <VerticalSpacer className="tw-h-8" />

                                        <div className="md:tw-hidden tw-w-fit tw-mx-auto">
                                            <div className="tw-text-center sc-text-title2">
                                                {item.buttonHeadingText}
                                            </div>

                                            <VerticalSpacer className="tw-h-3" />

                                            <div className="tw-flex tw-gap-4">
                                                <div className="tw-w-[7rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                                                <div className="tw-w-[7rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                                            </div>
                                        </div>

                                        <VerticalSpacer className="tw-h-12" />
                                    </div>

                                    <div className="tw-bg-secondary-800 tw-w-1/2 tw-h-[250px] tw-rounded-t-lg tw-mx-auto"></div>
                                </div>
                            );
                        }}
                    />
                </div>

                <div className='tw-grid md:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-pb-0 md:tw-pb-6 tw-py-6 tw-px-6 lg:tw-px-20 lg:tw-py-16 lg:tw-pb-16 sc-small-shadow tw-rounded-lg'>
                    <div>
                        <div className='tw-text-center md:tw-text-start sc-text-headline'>{contentData.getContent("eb1002c0-7852-4818-8abf-9508bbd6577d")}</div>

                        <VerticalSpacer className='tw-h-3 lg:tw-h-5' />

                        <div className='tw-text-center md:tw-text-start sc-text-title2 tw-text-secondary-600'>{contentData.getContent("be6b2b5f-7e12-4ae5-9541-0c4349f81bea")}</div>

                        <VerticalSpacer className='tw-h-8' />

                        <div className="tw-w-fit tw-mx-auto md:tw-mx-0">
                            <div className="tw-text-center md:tw-text-start sc-text-title2">
                                {contentData.getContent("75e8d88a-0ca0-43c5-8413-dfec6a197c8c")}
                            </div>

                            <VerticalSpacer className="tw-h-3" />

                            <div className="tw-flex tw-gap-4">
                                <div className="tw-w-[7rem] md:tw-w-[10rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                                <div className="tw-w-[7rem] md:tw-w-[10rem] tw-h-[3rem] tw-bg-secondary-800 tw-rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="tw-bg-secondary-800 tw-w-1/2 md:tw-w-full tw-h-[250px] md:tw-h-full tw-rounded-t-lg md:tw-rounded-lg tw-mx-auto"></div>
                </div>
            </div>
        </div>
    );
}
