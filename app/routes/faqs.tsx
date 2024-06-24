import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import type {LoaderFunction} from '@remix-run/node';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {useLoaderData} from '@remix-run/react';
import {Search} from 'react-bootstrap-icons';
import {AccordionComponents} from '~/components/reusableComponents/accordionComponents';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('faqs');

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
                        <FaqsPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function FaqsPage() {
    return (
        <>
            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Faqs', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <HowCanWeHelp />

            <div className="lg:tw-h-20 tw-h-10" />

            <OurBlogs />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function HowCanWeHelp() {
    const contentData = useContext(ContentProviderContext);
    const [selectedText, setSelectedText] = useState('');
    const [finalFaqs, setFinalFaqs] = useState([
        {
            title: '',
            description: '',
        },
    ]);

    const faqs = [
        {
            title: contentData.getContent(
                '432bc85c-5685-4856-aede-3fbb832a660d',
            ),
            description: contentData.getContent(
                'b330d0e7-f646-4379-a562-f7ba1d6a8bd2',
            ),
        },
        {
            title: contentData.getContent(
                '72798d51-d48c-402c-a054-fa6d62bfba10',
            ),
            description: contentData.getContent(
                'b229db46-4b4a-433a-97d6-9ceb97b2a543',
            ),
        },
        {
            title: contentData.getContent(
                '2209702e-047a-4326-aa54-3b0d60062ff7',
            ),
            description: contentData.getContent(
                '6d0f60db-6cea-409b-a72e-3fb6e1e20ceb',
            ),
        },
        {
            title: contentData.getContent(
                '44ae5ee5-d21e-4621-b5e1-c4fe9244053f',
            ),
            description: contentData.getContent(
                'f03347e7-2aab-494e-a602-85e63d8ef659',
            ),
        },
        {
            title: contentData.getContent(
                '36d9fd2c-0fcd-4f1c-8fb3-354aef61e477',
            ),
            description: contentData.getContent(
                'd9066b2a-e889-4c4a-abae-55f0f3328612',
            ),
        },
        {
            title: contentData.getContent(
                'cf1c9d0c-5504-4f67-918f-2e98899caee9',
            ),
            description: contentData.getContent(
                'cafe871e-49ab-4991-b3ef-05665f97f165',
            ),
        },
        {
            title: contentData.getContent(
                'b6c859bb-2e38-4eee-8374-678752903eb2',
            ),
            description: contentData.getContent(
                'f3faf11b-a112-46cc-b02a-1c6b60f9e616',
            ),
        },
        {
            title: contentData.getContent(
                '632c285c-de97-40e7-9a95-a89f998194e0',
            ),
            description: contentData.getContent(
                'bad02fc4-f802-49d0-b4d9-8c8b1cb03e9d',
            ),
        },
        {
            title: contentData.getContent(
                '4820c5e1-21c1-45cb-b9a6-d784cfcb5f13',
            ),
            description: contentData.getContent(
                'e287dd77-71a8-494f-b6fb-96e5bf20a55b',
            ),
        },
        {
            title: contentData.getContent(
                '0d48c267-e3c7-437a-8005-fb2e460ee32b',
            ),
            description: contentData.getContent(
                '1c96dce4-9b8b-40de-9b8a-88cf64cf6d8a',
            ),
        },
        {
            title: contentData.getContent(
                '50e094f3-bac6-4c87-bd1a-984bae70d8a7',
            ),
            description: contentData.getContent(
                '0714c6bb-2101-4eee-a250-16258ace6f91',
            ),
        },
        {
            title: contentData.getContent(
                '9f2fcd13-d46a-44c2-9738-37f92c665057',
            ),
            description: contentData.getContent(
                '71f6e94c-971b-454c-b6cf-9d3b430fe147',
            ),
        },
        {
            title: contentData.getContent(
                '53fff47f-f46a-40c0-a1bd-a60db006a192',
            ),
            description: contentData.getContent(
                '60b76abc-0cc4-4bcd-a7ca-9a66499e821a',
            ),
        },
        {
            title: contentData.getContent(
                '9f774430-c95d-4503-94cc-2f9d706a677d',
            ),
            description: contentData.getContent(
                'd79d2ceb-af99-4a08-a066-d55a6c34bc9c',
            ),
        },
        {
            title: contentData.getContent(
                '16edf219-75fa-4e7e-b7fa-405889e3be83',
            ),
            description: contentData.getContent(
                '6136675c-4644-4eff-99e0-2a88537e0ce4',
            ),
        },
        {
            title: contentData.getContent(
                '59d602db-ef9a-4230-b1cf-b7b504e0358a',
            ),
            description: contentData.getContent(
                '7a727381-15b7-48fa-95f2-be6e8cf47242',
            ),
        },
        {
            title: contentData.getContent(
                '4defc98a-aea1-4c9b-8fa2-60376f6dfe52',
            ),
            description: contentData.getContent(
                'ef08fd73-7f9a-4635-ae0e-905827769bb1',
            ),
        },
        {
            title: contentData.getContent(
                '4e90ce58-f6cc-4e30-88ea-86f266c7ced5',
            ),
            description: contentData.getContent(
                '4b6d215b-6547-44d4-86b0-dbbe3ee2c346',
            ),
        },
    ];

    useEffect(() => {
        const regex = new RegExp(
            `\\W*${selectedText ? selectedText : 'h'}*\\w`,
            'i',
        );
        const virtualFaqs = faqs.filter(item => regex.test(item.title));
        setFinalFaqs(virtualFaqs);
    }, [selectedText]);

    return (
        <div className="tw-grid tw-gap-6">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-px-screen-edge tw-grid tw-gap-6 lg:tw-gap-8">
                    <div className="tw-text-center sc-text-headline tw-max-w-7xl tw-m-auto tw-w-full">
                        {contentData.getContent(
                            '3ea314bc-a89d-461c-b547-41b1f8911347',
                        )}
                    </div>
                    <div className="tw-relative tw-max-w-7xl tw-m-auto tw-w-full">
                        <input
                            className="sc-text-input"
                            type="text"
                            placeholder={contentData.getContent(
                                '7a1c8fff-1b3a-4537-86f7-fc7920aa2aba',
                            )}
                            onChange={e => {
                                setSelectedText(e.target.value);
                            }}
                        />

                        <div className="tw-absolute tw-top-0 tw-right-5 tw-h-full tw-flex tw-items-center">
                            <Search />
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-gap-2 tw-w-full tw-justify-center tw-py-2 md:tw-py-4 tw-border-y tw-border-y-secondary-100">
                    <div
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-p-3 tw-rounded-lg sc-text-body tw-cursor-pointer',
                            selectedText == 'home loan'
                                ? 'sc-tab-button'
                                : 'tw-bg-secondary-400 tw-text-secondary-800',
                        )}
                        onClick={() => {
                            setSelectedText('home loan');
                        }}>
                        {contentData.getContent(
                            '990a38ae-08fc-4a10-9f76-c50699e77add',
                        )}
                    </div>
                    <div
                        className={concatenateNonNullStringsWithSpaces(
                            'tw-p-3 tw-rounded-lg sc-text-body tw-cursor-pointer',
                            selectedText == 'against property'
                                ? 'sc-tab-button'
                                : 'tw-bg-secondary-400 tw-text-secondary-800',
                        )}
                        onClick={() => {
                            setSelectedText('against property');
                        }}>
                        {contentData.getContent(
                            '0eadb652-63f7-4224-9aa5-8ea093c48ec7',
                        )}
                    </div>
                </div>
                <div className="sc-px-screen-edge">
                    <AccordionComponents
                        className="tw-max-w-7xl tw-m-auto tw-w-full tw-mb-10 lg:tw-mb-20"
                        items={finalFaqs}
                    />
                </div>
            </div>
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            img: contentData.getContent('08ea3531-ab97-48e6-8fe5-144487dfc2d6'),
            title: contentData.getContent(
                'e9e6a7d1-fb13-4c7c-9d62-7fbd053c7dbf',
            ),
            text: contentData.getContent(
                '10bf6f4e-ba40-4c54-abcf-608ec50e5269',
            ),
            date: contentData.getContent(
                'a612db83-a9a0-4449-a86a-3ca5c9b3ec0c',
            ),
        },
        {
            img: contentData.getContent('f6173d79-5d8c-470c-abb6-68eb8addd764'),
            title: contentData.getContent(
                '4c0e6cc4-c823-4008-9351-3d27e078a7f9',
            ),
            text: contentData.getContent(
                '42bd8880-2ded-4858-b9f6-88152b7cba55',
            ),
            date: contentData.getContent(
                'c14925a2-1dc6-40a3-abbe-534b376b2431',
            ),
        },
        {
            img: contentData.getContent('795b76df-296b-47a1-bafd-53a208e49ab3'),
            title: contentData.getContent(
                '1364e634-5c7e-4b2d-a661-1228b713ca16',
            ),
            text: contentData.getContent(
                '41848fe5-4397-4354-b07a-789a15186c72',
            ),
            date: contentData.getContent(
                'cf587531-346a-4f6b-ac93-8433ebe1de42',
            ),
        },
        {
            img: contentData.getContent('f0e842a6-2445-438b-ba5b-64dfb0f8292b'),
            title: contentData.getContent(
                'c78dc151-91d9-4556-a5b4-a1b29df924ae',
            ),
            text: contentData.getContent(
                'e9a1c172-3c39-4e06-8f0d-0ea7e29d1947',
            ),
            date: contentData.getContent(
                '7397b5e6-a320-4c5c-a9ff-0497de167ae9',
            ),
        },
        {
            img: contentData.getContent('ee6896e4-fc1b-4528-b478-a99d3f19799e'),
            title: contentData.getContent(
                '47030041-3ca2-4acf-bd47-8d274b0d2ae2',
            ),
            text: contentData.getContent(
                '0bc03467-9604-438f-832d-3938bb31bb7a',
            ),
            date: contentData.getContent(
                '8b968fc0-d801-4aef-9918-adc2a7296b7b',
            ),
        },
        {
            img: contentData.getContent('4f6a903c-a102-45da-8734-a8b9ed683d7e'),
            title: contentData.getContent(
                '832775b1-c4af-4772-9148-a6de2a482cf6',
            ),
            text: contentData.getContent(
                '173e07d7-a0c7-47f3-9657-257b44c2cbc4',
            ),
            date: contentData.getContent(
                'e2d12e97-1fcd-4c96-a1f5-36f11ba2d057',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-m-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '1a882ef4-717f-45ff-a70a-d5dcb336cfd7',
                    )}
                </div>
                <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6">
                    <ItemBuilder
                        items={blogs}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard
                                date={item.date}
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
