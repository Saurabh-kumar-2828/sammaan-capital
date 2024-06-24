import {useContext, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import useIsScreenSizeBelow from '~/hooks/useIsScreenSizeBelow';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('homeLoanFeesAndCharges');

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
                        <FeesAndChargesPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function FeesAndChargesPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Home Loan', link: '/product/home-loan'},
                    {contentId: 'Home Loan Fees & Charges', link: '#'},
                ]}
            />

            <div className="lg:tw-h-16 tw-h-10" />

            <FeesAndCharges />

            <div className="lg:tw-h-16 tw-h-10" />

            <FaqSection />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function FeesAndCharges() {
    const contentData = useContext(ContentProviderContext);
    const isScreenSizeBelow = useIsScreenSizeBelow(768);
    const [showFullArticle, setShowFullArticle] = useState(
        isScreenSizeBelow ? false : true,
    );
    const postDisbursementData = [
        {
            col1: contentData.getContent(
                '5f942cf3-0e24-415e-aae6-502a7fedee6b',
            ),
            col2: contentData.getContent(
                'b221c54b-6be4-4187-b1c8-aee1db0ae2af',
            ),
            col3: contentData.getContent(
                'f6c1204b-a98f-4f79-b8de-628e8c32f9ba',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '4a97deb9-9b9b-4600-aab9-892e4017195d',
            ),
            col3: contentData.getContent(
                '336c734a-7f79-47c3-8fd1-bae7fe85e94e',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '9b7afd9f-ed18-4afc-843b-a18488d34e1e',
            ),
            col3: contentData.getContent(
                'b6940d6a-a440-4afb-8b89-cdc3bf4f4124',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '96a57eed-4e3a-4ab0-9217-c3ab17be8683',
            ),
            col3: contentData.getContent(
                'd94567a0-9800-4f5d-92e5-10754571abac',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '5dfcc8e8-24a1-434b-a1cc-bdd06414e4ba',
            ),
            col3: contentData.getContent(
                '1e5f2333-bb04-462f-b73e-a0c27afa8094',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'ce64a148-3073-496f-8a42-e976c8243059',
            ),
            col3: contentData.getContent(
                'a8479e20-f42e-4148-923e-ae265612ac6f',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '41ef6b5e-5b64-4da4-8a74-6b68a92113f6',
            ),
            col3: contentData.getContent(
                '76244b91-0af8-4498-b8cf-236517dca304',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'ddffdeff-af9e-4bc9-949d-14c493168494',
            ),
            col3: contentData.getContent(
                'ae9c8d85-6012-4b4a-8488-de015f608ec2',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'aa85e126-8ffd-474c-9ea4-001b946cb5cd',
            ),
            col3: contentData.getContent(
                '8b5bb812-1be4-4017-a75e-814d4d481742',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'b52074ad-ce47-41ba-9342-2e561b2d6150',
            ),
            col3: contentData.getContent(
                '0d222915-f5c0-4319-87c6-3d769ea3f1b3',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '060833b3-5418-44af-810d-65f6f3104f92',
            ),
            col3: contentData.getContent(
                '957501b3-4e02-46f5-9665-8752eaa93ea9',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '03f5a7e5-aefd-460f-802f-3bcd27e14e2c',
            ),
            col3: contentData.getContent(
                'd6f2d1d8-dcca-47a4-bbf6-4c5868f3e382',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'e3660b4e-e2ab-4ea0-9334-28d289635ed7',
            ),
            col3: contentData.getContent(
                '64a9f47f-c0be-43a2-9b7e-975f3d0caf4d',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '7cf1f23e-396a-46d3-a6ce-95ca08b4e320',
            ),
            col3: contentData.getContent(
                '7ac72295-2757-4387-b555-ee2629555924',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'cbd8cdc9-9418-4164-bbf4-0cd17d4a4369',
            ),
            col3: contentData.getContent(
                'bb61bb37-d106-4eb6-9528-561360d81ff6',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '7d1c336d-1dab-4dd5-97ab-bde2f508dba1',
            ),
            col3: contentData.getContent(
                '426b09a8-fe0b-4cb5-afbc-8b778e657393',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'bf28e5ef-55c8-43d1-a01a-0f1890188a12',
            ),
            col3: contentData.getContent(
                'f51eab78-7ccc-4a2b-877f-a36c828117cf',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '0a2c7706-afa3-45e8-9d09-212ee7e1999d',
            ),
            col3: contentData.getContent(
                '947e1a7d-b044-4c9e-ae89-055e6ddd687d',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '1bef155b-8ae8-4b32-b904-2370396035ef',
            ),
            col3: contentData.getContent(
                '95876138-7944-4d6d-a844-35767ac542c3',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '0426e198-0ba0-43d6-8176-44abeac5bbfe',
            ),
            col3: contentData.getContent(
                '4bf61182-76ff-422a-8a06-e040b49b2c46',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '33d15c4a-db94-4759-aa5b-431966b7723a',
            ),
            col3: contentData.getContent(
                'c1c38f31-9828-4a2c-9be1-5492c3780471',
            ),
        },
    ];
    return (
            <div className="tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="tw-grid tw-gap-4 lg:tw-gap-6">
                    <div className="sc-text-headline tw-text-center sc-px-screen-edge">
                        {contentData.getContent(
                            '399e5ecd-835d-4dbd-b91a-e716490d557e',
                        )}
                    </div>

                    <div className="tw-flex tw-gap-2 tw-justify-center tw-border tw-border-secondary-100 tw-py-4">
                        <Link
                            to="#"
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer sc-tab-button',
                            )}>
                            {contentData.getContent(
                                '956c7a16-875d-40c5-8b21-7e7695a4434e',
                            )}
                        </Link>
                        <Link
                            to="/loan-against-property/fees-and-charges"
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer tw-bg-secondary-400 tw-text-secondary-800',
                            )}>
                            {contentData.getContent(
                                '4efb0520-598c-4c3b-9087-2cce0fa87802',
                            )}
                        </Link>
                    </div>

                    <div className='sc-px-screen-edge'>
                    <div className="sc-text-title2 tw-text-secondary-600 tw-max-w-7xl tw-w-full tw-mx-auto">
                        {contentData.getContent(
                            'c09165b3-878f-4527-86da-20c449f880f8',
                        )}
                    </div>
                    </div>
                </div>

                <div className='sc-px-screen-edge'>
                    <div className='tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto'>
                        <div className="tw-grid tw-overflow-x-auto max-sm:-tw-mr-[1.5rem]">
                            <div className="tw-grid tw-grid-cols-[9.5rem_1fr_1fr] lg:tw-grid-cols-3 tw-bg-secondary-800">
                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[7.5rem] tw-w-full">
                                    {contentData.getContent(
                                        '1d324255-c0b0-4078-b0c1-38770fe8498a',
                                    )}
                                </div>

                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[17.5rem]">
                                    {contentData.getContent(
                                        'c4200791-9f19-44f2-8b37-ccd2b84b63e8',
                                    )}
                                </div>

                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[17.5rem]">
                                    {contentData.getContent(
                                        'e2981ca7-bdc0-41cb-ab5e-943453a34b49',
                                    )}
                                </div>
                            </div>

                            <div className="tw-grid tw-grid-cols-[9.5rem_1fr_1fr] lg:tw-grid-cols-3">
                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[7.5rem]">
                                    {contentData.getContent(
                                        'e310bc99-278e-4513-ade1-df4222f12261',
                                    )}
                                </div>

                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                    {contentData.getContent(
                                        'edb564b1-4525-4ca7-ad74-ad740b08b173',
                                    )}
                                </div>

                                <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                    {contentData.getContent(
                                        '33da4469-3c22-4a1c-a128-ea5a2b93acab',
                                    )}
                                </div>
                            </div>

                            <ItemBuilder
                                items={postDisbursementData}
                                itemBuilder={(item, itemIndex) => {
                                    return (
                                        <div
                                            key={itemIndex}
                                            className={concatenateNonNullStringsWithSpaces(
                                                'tw-grid tw-grid-cols-[9.5rem_1fr_1fr] lg:tw-grid-cols-3 tw-bg-secondary-100',
                                                showFullArticle
                                                    ? ''
                                                    : itemIndex > 8
                                                    ? 'tw-hidden'
                                                    : '',
                                            )}>
                                            <div
                                                className={concatenateNonNullStringsWithSpaces(
                                                    'tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-min-w-[7.5rem]',
                                                    itemIndex ==
                                                        postDisbursementData.length -
                                                            1
                                                        ? 'tw-border-b tw-border-b-secondary-600'
                                                        : '',
                                                )}>
                                                {item.col1}
                                            </div>

                                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                                {item.col2}
                                            </div>

                                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                                {item.col3}
                                            </div>
                                        </div>
                                    );
                                }}
                            />
                        </div>
                        <div
                                className="tw-w-fit tw-mx-auto tw-cursor-pointer md:tw-hidden"
                                onClick={() =>
                                    setShowFullArticle(!showFullArticle)
                                }>
                                <div className="tw-flex tw-items-center tw-gap-2 tw-w-fit">
                                    <div className="tw-text-[14px] tw-underline">
                                        {!showFullArticle
                                            ? contentData.getContent(
                                                  'a3d7cdd5-e435-4a14-8b9b-2f63bd797cab',
                                              )
                                            : contentData.getContent(
                                                  'c8c15fff-e711-4178-8501-52c16a9a4dcf',
                                              )}
                                    </div>
                                    {!showFullArticle ? (
                                        <ChevronDown />
                                    ) : (
                                        <ChevronUp />
                                    )}
                                </div>
                            </div>

                        <div className="sc-text-title2">
                            {contentData.getContent(
                                '69722ec9-c1f1-4aed-bbad-6e3cb7724fca',
                            )}
                        </div>

                        <button className="sc-cta-button tw-w-full sm:tw-w-fit">
                            {contentData.getContent(
                                '9a13bc77-1696-412d-bfcb-cfeb56950f45',
                            )}
                        </button>
                    </div>
                </div>
            </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                'bdedf11a-82d5-42e1-9500-51528ee06c1f',
            ),
            answer: contentData.getContent(
                '2ed6f8d3-4b15-48ff-b446-12dbe3b94d84',
            ),
        },
        {
            question: contentData.getContent(
                'aec7acfb-3c33-48f6-94b9-9c941707e1c9',
            ),
            answer: contentData.getContent(
                '386d469c-7f2a-457f-a412-6afdd310832b',
            ),
        },
        {
            question: contentData.getContent(
                '16685c17-0951-4a26-9cae-c72be21ef72c',
            ),
            answer: contentData.getContent(
                'ba87b820-4b2d-4128-b25d-d4aee2df58d0',
            ),
        },
        {
            question: contentData.getContent(
                '6223328a-ca1c-4a85-9bab-20da8bce4912',
            ),
            answer: contentData.getContent(
                'd5663386-6cc9-433d-a344-a4b9a6990d5a',
            ),
        },
        {
            question: contentData.getContent(
                'f666ee1d-05bb-4240-baa4-0a23f990169e',
            ),
            answer: contentData.getContent(
                '233d5599-24f7-4aae-8864-7ac0e79bed2f',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
