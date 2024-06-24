import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useContext, useState} from 'react';
import {LeaderCard} from '~/components/componentLibrary/reusableCards/leaderCard';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {ImageWithText} from '~/components/componentLibrary/reusableCards/sideImageCard/imageWithText';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Link, useLoaderData} from '@remix-run/react';
import {PageScaffold} from '~/components/pageScaffold';
import {getContentGenerator} from '~/components/contentGenerator';
import {CenterContentTwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/centerContentTwoLinerCard';
import {CarouselStyle2} from '~/components/carouselStyle2';
import {NumberCard} from '~/components/componentLibrary/reusableCards/numberCard';
import {AwardSection} from '~/components/reusableSection/awardSection';
import {PartnerWithUsSection} from '~/components/reusableSection/partnerWithUsSection';
import {BlogsCard3} from '~/components/componentLibrary/blog/blogsCard3';
import {PageScaffold2} from '~/components/pageScaffold2';
import {HeroSection} from '~/components/reusableSection/heroSection';
export const meta: MetaFunction = () => {
    return [
        {title: 'About Us - Overview'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('overViewPage');

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
                    <PageScaffold2>
                        <Overview />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function Overview() {
    return (
        <>
            <HeroSection
                imgId=""
                bannerHeadingId="6a7dcf95-30d8-47b0-8b10-63c5a7681443"
            />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'About us', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <AboutSammaanCapital className="sc-px-screen-edge" />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <OurMission className="sc-px-screen-edge" />

            {/* <OurNumber className="sc-px-screen-edge lg:tw-bg-secondary-400 lg:tw-py-20" /> */}

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <GuidingValue />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <SammaanCapitalNumber />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <WalkThrough className="sc-px-screen-edge" />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <LeaderSection className="tw-bg-secondary-400 lg:tw-py-20 tw-py-10" />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <OurAwards />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <PartnerWithUs className="tw-py-6" />

            {/* <HiringSection className="" /> */}

            {/* <VerticalSpacer className="lg:tw-h-20 tw-h-10" /> */}
        </>
    );
}

export function AboutSammaanCapital({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            image: '',
            imageClassName:
                'tw-row-start-2 tw-col-start-1 lg:tw-row-start-1 lg:tw-col-start-2',
            title: contentData.getContent(
                '2f3734a7-3d7a-477b-82d9-7b9d1d00d865',
            ),
            text: contentData.getContent(
                '40980a9b-6eb5-4808-b34b-a26936352cbe',
            ),
            textClassName: 'tw-col-start-1 tw-row-start-1',
        },
        {
            image: '',
            imageClassName: 'tw-col-start-1 tw-row-start-2 lg:tw-row-start-1',
            title: contentData.getContent(
                '68d7549f-dbb5-4731-a91a-0145109de850',
            ),
            text: contentData.getContent(
                '7ecfe534-9186-4b48-8298-0c2a8a2aa51e',
            ),
            textClassName: 'tw-col-start-1 tw-row-start-1 lg:tw-col-start-2',
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-grid tw-grid-rows-[auto_auto] tw-gap-6 lg:tw-gap-10">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <ImageWithText
                                imageClassName={item.imageClassName}
                                title={item.title}
                                text={item.text}
                                textClassName={item.textClassName}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export function OurNumber({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-w-full tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '954e3c77-a063-47df-ac66-6d2fe5fcc8c9',
                    )}
                </div>
                <div className="tw-grid lg:tw-grid-cols-4 lg:tw-grid-rows-1 md:tw-grid-rows-2 md:tw-grid-cols-2 tw-grid-rows-4 tw-grid-cols-1 tw-gap-4 lg:tw-gap-8 tw-h-full">
                    <ItemBuilder
                        items={[
                            {
                                title: contentData.getContent(
                                    '83b97a3f-943b-4fcc-9eac-09e0796635a2',
                                ),
                                text: contentData.getContent(
                                    '0c3b66ba-2d2f-493a-b089-43efd53a6f0a',
                                ),
                                text2: contentData.getContent(
                                    'ad6bb85d-1a89-4407-810a-57b8e21525f4',
                                ),
                            },
                            {
                                title: contentData.getContent(
                                    'f124d1cc-f535-4cb0-8def-806576990984',
                                ),
                                text: contentData.getContent(
                                    '121dc41d-c39b-4590-adcb-5547ecac9a88',
                                ),
                                text2: contentData.getContent(
                                    '5a410569-6d31-4bf5-8b2d-68189d83934a',
                                ),
                            },
                            {
                                title: contentData.getContent(
                                    'a7cc1e6b-3b56-4a4e-be06-e3bc316cd0a7',
                                ),
                                text: contentData.getContent(
                                    '707fb772-e4aa-4c17-8890-888e33f8df51',
                                ),
                                text2: contentData.getContent(
                                    '265dfd39-2299-4f0e-a061-b754e77efddc',
                                ),
                            },
                            {
                                title: contentData.getContent(
                                    '12f94019-db36-4542-8f6e-df8cad3ef4e7',
                                ),
                                text: contentData.getContent(
                                    'd21cd362-9c1f-4e0c-9f10-8396e3f5d58c',
                                ),
                                text2: contentData.getContent(
                                    'fbf5df9b-f058-4a04-8dfa-08ba54087a26',
                                ),
                            },
                        ]}
                        itemBuilder={(item, itemIndex) => (
                            <div
                                className="tw-rounded-lg tw-p-6 tw-text-center tw-bg-secondary-400 lg:tw-bg-secondary-200 tw-w-full"
                                key={itemIndex}>
                                <div className="sc-text-headline">
                                    {item.title}
                                </div>

                                <div className="sc-text-body">{item.text}</div>
                                <div className="sc-text-body">{item.text2}</div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function WalkThrough({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const journey = [
        {
            image: '',
            times: contentData.getContent(
                '7abafe09-8f67-4d0b-a8be-b1b5a3b62eb5',
            ),
            title: contentData.getContent(
                '31b922f6-e2bb-427f-a37a-2316834243e2',
            ),
            text: contentData.getContent(
                '8a9eb805-c881-451f-8458-89a118221020',
            ),
        },
        {
            image: '',
            times: contentData.getContent(
                '86c18891-91cb-497d-8e94-7ac5494e8b7f',
            ),
            title: contentData.getContent(
                '098efe2e-12b9-45d6-8c66-854569e606a0',
            ),
            text: contentData.getContent(
                '9d22a6fb-3cbc-41e9-a666-6fbd4dd5f758',
            ),
        },
        {
            image: '',
            times: contentData.getContent(
                'a50875c1-cdf4-4bc1-88d5-7a76d975d63a',
            ),
            title: contentData.getContent(
                '9476a9c7-5063-46f4-a4ed-25fd71418dc5',
            ),
            text: contentData.getContent(
                '55ec743f-c219-488d-a220-4b4134f15fa7',
            ),
        },
        {
            image: '',
            times: contentData.getContent(
                '7bb90b70-d4b8-40cd-8051-f10f93de2d2f',
            ),
            title: contentData.getContent(
                '9066f477-cad2-44bf-b52b-ed412be301bd',
            ),
            text: contentData.getContent(
                '3304d38a-c48b-4ee6-98a8-62cae891ee53',
            ),
        },
        {
            image: '',
            times: contentData.getContent(
                '7e14e474-1748-4a9e-b881-ce4215b7e41f',
            ),
            title: contentData.getContent(
                'dc60294b-fe82-4185-99b5-e3d348570517',
            ),
            text: contentData.getContent(
                '1b3d0ed5-5676-43e6-8edc-506681d6847a',
            ),
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-grid-cols-2 tw-gap-x-24 tw-gap-y-6">
                <div className="sc-text-headline tw-text-center lg:tw-text-left">
                    {contentData.getContent(
                        '28919add-6252-4f96-854d-ebdec325920f',
                    )}
                </div>
                <div className="tw-grid tw-gap-y-6">
                    <ItemBuilder
                        items={journey}
                        itemBuilder={(item, itemIndex) => (
                            <div
                                className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-grid-rows-1 tw-gap-6"
                                key={itemIndex}>
                                <div className="tw-grid tw-gap-4 tw-grid-rows-[auto_minmax(0,1fr)] tw-justify-items-center">
                                    <div className="tw-h-12 tw-w-12 tw-rounded-full tw-bg-secondary-400">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="tw-border-r tw-border-[2px] tw-border-primary-500 tw-h-full tw-w-0 tw-grid tw-justify-center"></div>
                                </div>
                                <div className="tw-grid tw-gap-[0.63rem] lg:tw-gap-3">
                                    <div className="sc-text-title1">
                                        {item.times}
                                    </div>
                                    <div className="sc-text-title1">
                                        {item.title}
                                    </div>
                                    <div className="sc-text-body tw-text-secondary-600">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function OurMission({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            image: '',
            title: contentData.getContent(
                'ba5080c3-714f-40db-b63e-3404645b9c0d',
            ),
            text: contentData.getContent(
                '20546f19-abf6-4960-968f-ac644d4e3bcd',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                'b021b266-dcd4-4788-9a83-455afca471c7',
            ),
            text: contentData.getContent(
                '631feb0f-94dd-4acd-9118-f4ee7d22f5b1',
            ),
        },
    ];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-bg-secondary-400 md:tw-py-20 tw-py-10',
                className,
            )}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-gap-8 tw-gap-6">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'c3789034-07f9-433b-8a06-81614734b4ca',
                    )}
                </div>
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-6 tw-justify-items-center">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <TwoLinerCard
                                className="tw-bg-secondary-200 tw-border tw-border-secondary-100 sc-small-shadow"
                                title={item.title}
                                text={item.text}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function GuidingValue({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const values = [
        {
            image: '',
            title: contentData.getContent(
                'be418038-ea79-48f8-9126-86b8bdef5d12',
            ),
            text: contentData.getContent(
                'c88d6de5-423e-45d8-8da9-e4168547f609',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '7eb32478-7231-4ace-871f-8b40f2613647',
            ),
            text: contentData.getContent(
                '6c5b13ea-bf33-4d61-91b6-98129a62eaaf',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '89232584-cd25-45dd-ba35-02b03f70f36e',
            ),
            text: contentData.getContent(
                'f280c812-4be7-4c60-931a-b2f1876f61fa',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '4e12541b-adb0-4a5f-9e4c-fcf47dec74ea',
            ),
            text: contentData.getContent(
                '66624697-2a98-46ea-a22e-e56a5f7a594f',
            ),
        },
    ];
    return (
        <div className={className}>
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="sc-text-headline tw-text-center tw-text-secondary-800">
                        {contentData.getContent(
                            '3617d4f3-ff3b-410c-a251-9652b3672197',
                        )}
                    </div>
                    <VerticalSpacer className="lg:tw-h-4 tw-h-6" />
                    <div className="md:tw-text-center tw-text-left sc-text-title2 tw-text-secondary-600">
                        {contentData.getContent(
                            '57661d1c-fc79-4f30-94fb-4452ccf97dd3',
                        )}
                    </div>
                    <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                    <div className="tw-hidden lg:tw-grid lg:tw-grid-cols-4 tw-rounded-lg tw-gap-[2rem]">
                        <ItemBuilder
                            items={values}
                            itemBuilder={(item, itemIndex) => (
                                <TwoLinerCard
                                    title={item.title}
                                    text={item.text}
                                    key={itemIndex}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="tw-block lg:tw-hidden tw-pl-3">
                <CarouselStyle2
                    items={values.map((item, itemIndex) => {
                        return (
                            <TwoLinerCard
                                title={item.title}
                                text={item.text}
                                key={itemIndex}
                            />
                        );
                    })}
                    slideClassName="tw-max-w-[20rem]"
                />
            </div>
        </div>
    );
}

function SammaanCapitalNumber() {
    const contentData = useContext(ContentProviderContext);
    const numbers = [
        {
            number: '38759308-f56f-4513-9aa6-540c60c87b64',
            text: '22d9d699-6574-4f6f-9c65-0d1ccd45dd12',
        },
        {
            number: 'c3f269af-27ba-43a5-9aac-ed906a6a7ce5',
            text: '2261ca43-1ff4-4a50-a692-808d92240957',
        },
        {
            number: 'e7c2e6d1-03a8-40ba-804e-0ab1ab09778b',
            text: 'b113309c-fc94-49c3-9228-8fbe37a85923',
        },
        {
            number: '168df6fc-9928-4f81-931b-86ba60444c7e',
            text: '5d26a536-7a15-4666-bbfa-937075293eba',
        },
    ];
    return (
        <div className="sc-px-screen-edge tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="tw-text-center sc-text-headline tw-text-secondary-600">
                    {contentData.getContent(
                        'e827e118-ec45-4fdf-b69c-56a602bfdb72',
                    )}
                </div>
                <div className="tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-3 lg:tw-gap-5">
                    <ItemBuilder
                        items={numbers}
                        itemBuilder={(item, itemIndex) => (
                            <NumberCard
                                key={itemIndex}
                                text={contentData.getContent(item.text)}
                                number={contentData.getContent(item.number)}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function LeaderSection({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const [selectItems, setSelectItems] = useState(0);

    const items = [
        [
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    'd62a8f6a-7092-46f0-a6a0-32f3437f5a46',
                ),
                text: contentData.getContent(
                    'a055abed-deec-4616-b434-a8f983092af3',
                ),
                linkText: contentData.getContent(
                    '66242f8c-3e3d-434c-964d-91e5a15364cc',
                ),
                linkUrl: contentData.getContent(
                    '7ec06dee-fdcf-4016-a652-27b692bd6acf',
                ),
            },
        ],
        [
            {
                image: '',
                title: contentData.getContent(
                    '338cbcd1-a269-4869-b41a-8f95b8835bb1',
                ),
                text: contentData.getContent(
                    '26084384-a085-49e9-8bd4-bb2c9e7b9c78',
                ),
                linkText: contentData.getContent(
                    '024ca189-c66f-433a-94cf-39fa97a4f9a1',
                ),
                linkUrl: contentData.getContent(
                    '06ab2233-54bf-4770-b8c1-650494215cd3',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    '338cbcd1-a269-4869-b41a-8f95b8835bb1',
                ),
                text: contentData.getContent(
                    '26084384-a085-49e9-8bd4-bb2c9e7b9c78',
                ),
                linkText: contentData.getContent(
                    '024ca189-c66f-433a-94cf-39fa97a4f9a1',
                ),
                linkUrl: contentData.getContent(
                    '06ab2233-54bf-4770-b8c1-650494215cd3',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    '338cbcd1-a269-4869-b41a-8f95b8835bb1',
                ),
                text: contentData.getContent(
                    '26084384-a085-49e9-8bd4-bb2c9e7b9c78',
                ),
                linkText: contentData.getContent(
                    '024ca189-c66f-433a-94cf-39fa97a4f9a1',
                ),
                linkUrl: contentData.getContent(
                    '06ab2233-54bf-4770-b8c1-650494215cd3',
                ),
            },
            {
                image: '',
                title: contentData.getContent(
                    '338cbcd1-a269-4869-b41a-8f95b8835bb1',
                ),
                text: contentData.getContent(
                    '26084384-a085-49e9-8bd4-bb2c9e7b9c78',
                ),
                linkText: contentData.getContent(
                    '024ca189-c66f-433a-94cf-39fa97a4f9a1',
                ),
                linkUrl: contentData.getContent(
                    '06ab2233-54bf-4770-b8c1-650494215cd3',
                ),
            },
        ],
    ];
    return (
        <div className={className}>
            <div className="tw-text-center sc-text-headline">Our Leader</div>
            <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
            <div className="lg:tw-py-4 tw-p-2 tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid">
                <div className="tw-grid tw-grid-flow-col tw-justify-self-center tw-gap-4">
                    <button
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-w-full tw-h-full tw-text-center tw-px-4 tw-py-2 lg:tw-py-4 lg:tw-px-5 tw-rounded-lg lg:sc-text-button sc-body-text',
                            selectItems === 0
                                ? 'sc-tab-button'
                                : 'tw-bg-secondary-400 tw-border tw-border-secondary-100',
                        )}
                        onClick={() => setSelectItems(0)}>
                        {contentData.getContent(
                            '870fe091-1758-4027-8a3c-45607917bab3',
                        )}
                    </button>
                    <button
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-w-full tw-h-full tw-text-center tw-p-3 lg:tw-py-3 lg:tw-px-10 tw-rounded-lg lg:sc-text-button sc-body-text',
                            selectItems === 1
                                ? 'sc-tab-button'
                                : 'tw-bg-secondary-400 tw-border tw-border-secondary-100',
                        )}
                        onClick={() => setSelectItems(1)}>
                        {contentData.getContent(
                            'e44cbb83-5443-47f7-8502-afeba8177ac4',
                        )}
                    </button>
                </div>
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    {selectItems === 0 && (
                        <div className="tw-grid">
                            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 lg:tw-grid-rows-2 md:tw-grid-rows-3 tw-grid-rows-6 lg:tw-gap-6 tw-gap-2">
                                <ItemBuilder
                                    items={items[selectItems]}
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
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <Link
                                to="/about-us/board-of-directors"
                                className="sc-cta-outline-button tw-grid lg:tw-justify-self-center tw-text-center tw-w-full lg:px-0 lg:tw-w-[19.5rem]">
                                {contentData.getContent(
                                    'e8aff132-7219-4791-bfe3-379882126ac6',
                                )}
                            </Link>
                        </div>
                    )}
                    {selectItems === 1 && (
                        <div className="tw-grid">
                            <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap-6 tw-gap-2">
                                <ItemBuilder
                                    items={items[selectItems]}
                                    itemBuilder={(item, itemIndex) => (
                                        <BlogsCard3
                                            title={item.title}
                                            text={item.text}
                                            linkText={item.linkText}
                                            linkUrl={item.linkUrl}
                                            key={itemIndex}
                                        />
                                    )}
                                />
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <Link
                                to="/about-us/management-team"
                                className="sc-cta-outline-button tw-grid lg:tw-justify-self-center tw-text-center tw-w-full lg:px-0 lg:tw-w-[19.5rem]">
                                {contentData.getContent(
                                    '1573cb59-2a6b-4487-aef8-2661fe7ee019',
                                )}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function OurAwards() {
    const contentData = useContext(ContentProviderContext);
    const awards = [
        {
            image: '',
            title: contentData.getContent(
                '04ef7a01-cc6a-4b79-8457-f059d6df82e4',
            ),
            text: contentData.getContent(
                'e57d1e63-aefd-4665-8e28-52faf0b96cc5',
            ),
            date: contentData.getContent(
                'c525b1c6-382a-406d-a43d-0f5f5f132a21',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '04ef7a01-cc6a-4b79-8457-f059d6df82e4',
            ),
            text: contentData.getContent(
                'e57d1e63-aefd-4665-8e28-52faf0b96cc5',
            ),
            date: contentData.getContent(
                'c525b1c6-382a-406d-a43d-0f5f5f132a21',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '04ef7a01-cc6a-4b79-8457-f059d6df82e4',
            ),
            text: contentData.getContent(
                'e57d1e63-aefd-4665-8e28-52faf0b96cc5',
            ),
            date: contentData.getContent(
                'c525b1c6-382a-406d-a43d-0f5f5f132a21',
            ),
        },
        {
            image: '',
            title: contentData.getContent(
                '04ef7a01-cc6a-4b79-8457-f059d6df82e4',
            ),
            text: contentData.getContent(
                'e57d1e63-aefd-4665-8e28-52faf0b96cc5',
            ),
            date: contentData.getContent(
                'c525b1c6-382a-406d-a43d-0f5f5f132a21',
            ),
        },
    ];
    return (
        <div className='tw-grid'>
            <AwardSection
                heading={contentData.getContent(
                    '9df9adbf-eb95-402a-b1bd-feabd439fa87',
                )}
                items={awards}
            />
            <VerticalSpacer className="tw-h-6" />
            <div className="sc-px-screen-edge tw-grid lg:tw-justify-self-center ">
                <Link
                    to="/about-us/awards-and-accolades"
                    className="sc-cta-outline-button sc-text-button tw-px-0 lg:tw-w-[19.5rem] tw-text-center">
                    {contentData.getContent(
                        '6fc2fa52-2dff-4f13-8ec8-cdde4135562e',
                    )}
                </Link>
            </div>
        </div>
    );
}

function PartnerWithUs({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const content = [
        {
            imgLink: contentData.getContent(
                '0a9f5e48-43bd-4bf8-957a-54b07b7e491b',
            ),
            title: contentData.getContent(
                '62a27de0-f184-403b-93cf-40c1bb51a648',
            ),
            text: contentData.getContent(
                'e6d78b6d-8abe-4470-a20c-b68a976e7308',
            ),
            subText: contentData.getContent(
                'e668568c-e5ab-4efe-bb4a-a0d8a530ad1e',
            ),
            linkUrl: contentData.getContent(
                '18939066-a53b-4c17-a496-0da2b7f2cd81',
            ),
        },
        {
            imgLink: contentData.getContent(
                'a51f2115-c03e-41af-a7f8-aef52f2f5fce',
            ),
            title: contentData.getContent(
                'e9807d73-cfac-4d44-942f-e62cdfff962c',
            ),
            text: contentData.getContent(
                '21db8f62-215b-4577-a696-9ce4cab63a0d',
            ),
            subText: contentData.getContent(
                'f54bddcd-0217-4a94-8b7f-53cd0f65a8aa',
            ),
            linkUrl: contentData.getContent(
                'abe02573-6648-4388-814b-7200313c0726',
            ),
        },
    ];
    return (
        <div className={className}>
            <PartnerWithUsSection items={content} />
        </div>
    );
}

// function HiringSection({className}: {className?: string}) {
//     const contentData = useContext(ContentProviderContext);
//     return (
//         <div
//             className={concatenateNonNullStringsWithSpaces(
//                 'tw-bg-secondary-400 tw-py-20',
//                 className,
//             )}>
//             <div className="tw-grid tw-text-center">
//                 <div className="sc-text-headline">
//                     {contentData.getContent(
//                         '44ee7eb8-a33d-4293-8116-026205b68e7e',
//                     )}
//                 </div>
//                 <VerticalSpacer className="tw-h-4" />
//                 <div className="sc-text-title2">
//                     {contentData.getContent(
//                         'ed8d475d-456b-4485-8286-97ab65bfc1d1',
//                     )}
//                 </div>
//                 <div className="sc-text-title2">
//                     {contentData.getContent(
//                         '5325d3fa-9b67-475e-9f90-3e8a0c806a97',
//                     )}
//                 </div>
//                 <VerticalSpacer className="tw-h-3" />
//                 <button className="sc-cta-button tw-grid tw-justify-self-center tw-px-0 tw-w-[19.5rem]">
//                     {contentData.getContent(
//                         '604ec865-5774-4aa7-aaa5-5c7dbc114e58',
//                     )}
//                 </button>
//             </div>
//         </div>
//     );
// }
