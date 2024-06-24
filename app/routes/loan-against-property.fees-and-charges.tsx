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
    const vernacularData = getVernacularFromBackend('lapFeesAndCharges');

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
                    {
                        contentId: 'Loan Against Property',
                        link: '/product/home-loan',
                    },
                    {contentId: 'Fees & Charges', link: '#'},
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
                'e0289d38-6f8d-44e9-9400-88f6b6f2a9d4',
            ),
            col2: contentData.getContent(
                '3186a91a-24c1-4a18-99df-4f78733907d2',
            ),
            col3: contentData.getContent(
                '78cbbc61-6c7b-4179-9848-a39e883a2efd',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '52eb4494-a71d-45fe-b2c5-24974b525be6',
            ),
            col3: contentData.getContent(
                'ae4f02a0-d4b0-49a3-ae08-eda2606ad72f',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'c4bea76e-82da-47c3-870a-02d48d334ca9',
            ),
            col3: contentData.getContent(
                'd60a1488-e78c-44bf-9243-035eaa58f219',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '49898e41-83d8-4940-bee8-003fcc9d60a7',
            ),
            col3: contentData.getContent(
                '602450ec-026d-4db5-9d95-539bdbec2ab7',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '4f26daf1-936e-4bcf-9f67-74cf6ddb8827',
            ),
            col3: contentData.getContent(
                'c8fa92aa-4bf5-4af4-aaee-9be74513752c',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '9ade0aa4-a686-434f-99fe-9b6c44b0f647',
            ),
            col3: contentData.getContent(
                'ea99a4b8-fb0c-4c04-9158-06c6d8587b36',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'ebc6451c-53cf-4f0a-a48d-aebe0feb637a',
            ),
            col3: contentData.getContent(
                '6a9e76b1-0739-443c-acf9-b7577adee08c',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '158c7c7e-3f05-40aa-b2d1-2a42aaacb406',
            ),
            col3: contentData.getContent(
                '2a1e983b-c2ed-480c-8140-e25122661f0e',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '63ecf711-8c66-49a6-a912-b3f6dbdd4cae',
            ),
            col3: contentData.getContent(
                '07bb771d-e478-4e89-a698-22904b4481ed',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'ff3965e5-9fa2-4eb6-a06e-4318312ff9c4',
            ),
            col3: contentData.getContent(
                '44b0d4d1-e865-4aff-b358-35df21d23ff3',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '01791919-ac25-4278-b1cb-a4480c463f58',
            ),
            col3: contentData.getContent(
                '40753836-5f11-4cbc-b742-5fb00aba7a28',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '7a2db957-29cb-40c9-b478-b8647783877f',
            ),
            col3: contentData.getContent(
                '31fd96fa-429c-4770-967b-a380c0c81b22',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '51b2f7fe-39fb-49f5-8366-5984dda2dcca',
            ),
            col3: contentData.getContent(
                'b8e2a3b6-66fd-4ee7-8f50-9d17d7a172c1',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '85132476-12b5-4c1f-a716-084b3743dbd5',
            ),
            col3: contentData.getContent(
                '08b78cbb-1be7-488e-a662-c9625bc3d7f8',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '9bdae3c7-a5aa-4f51-9d19-534f37f92263',
            ),
            col3: contentData.getContent(
                '95d09de5-7124-4b99-8b4d-e0682196fa0c',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '762caa71-421b-4c2f-ac68-9807f55f4d3e',
            ),
            col3: contentData.getContent(
                '3f8f69fe-edf8-4d6a-899d-2965e8e5b24e',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'e642d7a7-4a3c-4564-b0f3-5bca5247ba4d',
            ),
            col3: contentData.getContent(
                'e86f3eca-c66c-4769-9c09-b42badc9783f',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'a804e5dc-e2a4-497f-b606-42df6f1c5025',
            ),
            col3: contentData.getContent(
                '0d7f8568-ab3a-411f-b6a6-f32c87885f1b',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'f16fbac2-c382-4085-915f-814af0044eb8',
            ),
            col3: contentData.getContent(
                'e765ed6a-6724-48a8-898e-314ff62afb99',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                'f5c15dae-eb2a-4636-9d3a-4f469766a196',
            ),
            col3: contentData.getContent(
                '030da5b6-5def-4fe3-ba9d-d76f24a250bb',
            ),
        },
        {
            col1: '',
            col2: contentData.getContent(
                '44902914-f9a8-40df-a26d-a46e309fa095',
            ),
            col3: contentData.getContent(
                'a6de7dc0-a387-41d7-973f-d3bd4731f890',
            ),
        },
    ];
    return (
        <div className="tw-grid tw-gap-6 lg:tw-gap-8">
            <div className="tw-grid tw-gap-4 lg:tw-gap-6">
                <div className="sc-text-headline tw-text-center sc-px-screen-edge">
                    {contentData.getContent(
                        'd4262610-1b8b-4cd7-be3d-1e344860cbda',
                    )}
                </div>

                <div className="tw-flex tw-gap-2 tw-justify-center tw-border tw-border-secondary-100 tw-py-4">
                    <Link
                        to="/home-loan/home-loan-fees-and-charges"
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer tw-bg-secondary-400 tw-text-secondary-800',
                        )}>
                        {contentData.getContent(
                            '95215fcb-2115-4aed-819b-04ad4f015e14',
                        )}
                    </Link>
                    <Link
                        to="#"
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-p-3 tw-rounded-lg sc-text-title2 tw-cursor-pointer sc-tab-button',
                        )}>
                        {contentData.getContent(
                            '62decddf-2727-4805-92f0-262f28363f9e',
                        )}
                    </Link>
                </div>

                <div className="sc-px-screen-edge">
                    <div className="sc-text-title2 tw-text-secondary-600 tw-max-w-7xl tw-w-full tw-mx-auto">
                        {contentData.getContent(
                            '0ef5de3a-0e16-4cfd-9d12-81999e2031f0',
                        )}
                    </div>
                </div>
            </div>

            <div className="sc-px-screen-edge">
                <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto">
                    <div className="tw-grid tw-overflow-x-auto max-sm:-tw-mr-[1.5rem]">
                        <div className="tw-grid tw-grid-cols-[9.5rem_1fr_1fr] lg:tw-grid-cols-3 tw-bg-secondary-800">
                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[7.5rem] tw-w-full">
                                {contentData.getContent(
                                    '77ec61a8-128a-4c45-9868-e9ed412dca97',
                                )}
                            </div>

                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[17.5rem]">
                                {contentData.getContent(
                                    '9fd8d265-b3f7-4e35-bd87-44dec456d586',
                                )}
                            </div>

                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-200 sc-text-title1 tw-min-w-[17.5rem]">
                                {contentData.getContent(
                                    '1571348f-12a9-4804-924f-ffdd9799fe12',
                                )}
                            </div>
                        </div>

                        <div className="tw-grid tw-grid-cols-[9.5rem_1fr_1fr] lg:tw-grid-cols-3">
                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[7.5rem]">
                                {contentData.getContent(
                                    'acd0fd31-b5fb-44ae-b616-a17537dad183',
                                )}
                            </div>

                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                {contentData.getContent(
                                    'd8ea9949-a039-477b-92be-38c48f2817e3',
                                )}
                            </div>

                            <div className="tw-p-3 lg:tw-p-6 tw-text-secondary-600 sc-text-title2 tw-border-b tw-border-b-secondary-600 tw-min-w-[17.5rem]">
                                {contentData.getContent(
                                    '7135a3b7-f9f8-4dff-8846-86417a4f6c9b',
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
                        onClick={() => setShowFullArticle(!showFullArticle)}>
                        <div className="tw-flex tw-items-center tw-gap-2 tw-w-fit">
                            <div className="tw-text-[14px] tw-underline">
                                {!showFullArticle
                                    ? contentData.getContent(
                                          'bcd0be9f-33af-4cc7-95e6-62b8e72f7687',
                                      )
                                    : contentData.getContent(
                                          '9aee5352-23ff-4928-8334-b535c38d60ae',
                                      )}
                            </div>
                            {!showFullArticle ? <ChevronDown /> : <ChevronUp />}
                        </div>
                    </div>

                    <div className="sc-text-title2">
                        {contentData.getContent(
                            'fa1d2ed0-a2d6-4893-a4c6-3fae55d53c88',
                        )}
                    </div>

                    <button className="sc-cta-button tw-w-full sm:tw-w-fit">
                        {contentData.getContent(
                            'b5a5fd6a-1417-402f-9929-6d5ba6d35764',
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
                'caa58e83-4f7f-4fbe-8421-9b8fb2b3b022',
            ),
            answer: contentData.getContent(
                'e559e7b3-3247-4cb7-8e3c-6f64e44d1541',
            ),
        },
        {
            question: contentData.getContent(
                'e8559e2a-79bb-4de2-86a2-99550724edc1',
            ),
            answer: contentData.getContent(
                'b274b8f1-772a-4635-95ad-1e8465e256bd',
            ),
        },
        {
            question: contentData.getContent(
                '3495a2ed-3f61-451d-8239-394d7036421e',
            ),
            answer: contentData.getContent(
                'dd1f991f-fd69-44ba-83c5-3b3a486990f6',
            ),
        },
        {
            question: contentData.getContent(
                '2ff49164-c83c-4953-b982-6bbcf1f383dd',
            ),
            answer: contentData.getContent(
                '8852e6fe-523a-4879-a0d5-fc5d40209381',
            ),
        },
        {
            question: contentData.getContent(
                '175bee27-61bf-43e1-9085-437195032c55',
            ),
            answer: contentData.getContent(
                '3f971d84-059c-445a-a13b-77add38fad5b',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} />
        </div>
    );
}
