import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {reactMarkdownComponents} from '~/global-common-typescript/scratchpad';

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
    const pageIds = contentDataLatest.existingCustomerBenefits;

    const vernacularData = await getData(pageIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
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
                        <ExistingCustomersBenefits />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function ExistingCustomersBenefits() {
    return (
        <>
            <HeroSection
                imgId="f3ec4c47-e0ab-41ce-bbe2-08efe9296858"
                bannerHeadingId="bcdfd437-2137-40e0-98d0-3a0703b55969"
            />

            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: 'Existing Customers Benefits',
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="tw-h-10 lg:tw-h-16" />

            <CustomersBenefits />

            <VerticalSpacer className="tw-h-20 lg:tw-h-40" />

            <OurBlogs />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </>
    );
}

function CustomersBenefits() {
    const contentData = useContext(ContentProviderContext);

    // const benefit = [
    //     {
    //         title: '6e671ca2-ef32-447c-a5ae-846d1ff36c9b',
    //         text: 'e629dc8a-3f44-49fa-ba57-919979d09c32',
    //     },
    //     {
    //         title: 'f697989c-da60-4bae-8f08-c096057486ce',
    //         text: 'd8c60d14-a308-43fc-b09d-8e3506ea8021',
    //     },
    //     {
    //         title: 'cda9e2d6-05f3-467f-b5ea-d8491484cba9',
    //         text: '555925b6-80f3-4474-9c18-e38abb04065c',
    //     },
    //     {
    //         title: '9b4202b6-85dd-4281-b9f2-a49fa9b0489e',
    //         text: 'cb836f54-2569-4664-a578-144eb9ac0004',
    //     },
    //     {
    //         title: '226de225-cdf1-40c4-ad5e-3edb652401d6',
    //         text: '8e946458-ca7b-45b1-adf7-a57626e4165c',
    //     },
    //     {
    //         title: '7210fef9-69cb-4c0f-aba5-7f68ab16fe81',
    //         text: 'd238be79-924f-4f2c-b0b3-d1ec873d0667',
    //     },
    //     {
    //         title: '3271e222-3b9a-4753-ae3a-eb27b2e745b5',
    //         text: '41a66e87-a9eb-4034-baf9-2f19768b8430',
    //     },
    //     {
    //         title: '0f8cbc48-5dc0-4645-bc16-f2d1bdcc617f',
    //         text: '9ea11246-04a8-40f0-82f1-5053b14bb4ed',
    //     },
    // ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-4">
                <div className="sc-text-headline tw-text-secondary-800">
                    {contentData.getContent(
                        '32111c92-6668-4b57-a813-5cf1130b608d',
                    )}
                </div>

                <ReactMarkdown components={reactMarkdownComponents}>
                    {contentData.getContent(
                        '2926adfd-3659-44dc-b325-31ec926dd7c9',
                    )}
                </ReactMarkdown>

                {/* <div className="tw-grid tw-gap-4 lg:tw-gap-2">
                    <ItemBuilder
                        items={benefit}
                        itemBuilder={(item, itemIndex) => (
                            <div className="tw-grid tw-gap-2">
                                <div className="sc-text-title1">
                                    {itemIndex + 1}.{' '}
                                    {contentData.getContent(item.title)}
                                </div>
                                <div className="sc-text-title2 tw-text-secondary-600">
                                    {contentData.getContent(item.text)}
                                </div>
                            </div>
                        )}
                    />
                </div> */}

                <button className="sc-cta-button tw-grid lg:tw-justify-self-start lg:tw-px-0 lg:tw-w-[19.5rem]">
                    {contentData.getContent(
                        'ddfcac78-f392-4697-9f69-7a01659aa9b4',
                    )}
                </button>
            </div>
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);

    const blogs = [
        {
            image: '7b5c68c3-b68d-41ce-8afb-b6060b7edf42',
            title: 'a4d3be81-0678-40ed-bae7-878948a2d86d',
            text: '6c39ee2b-9c9c-4b75-88a3-2f08d7949689',
            date: '84d3c677-cba8-4f6c-a667-58d9b6e52043',
        },
        {
            image: 'e2922b04-a8ff-4ee1-a437-554a9ea6baa6',
            title: '86c10003-e3cc-4ed6-96a6-d64624b697ec',
            text: 'c3fd20a7-6a01-4c4b-a4db-49ff54bba659',
            date: '81cb49d4-3b75-4840-a285-1de109005d02',
        },
        {
            image: 'e373d138-5aa7-4ecc-bf57-7b3914b1b9bf',
            title: '95150bc8-7ef4-4cfe-b731-c9d58518d5d4',
            text: '73c3ffec-90f6-4d1d-a3d9-a023cb61570a',
            date: 'a746fa42-5e8f-430b-af41-e68bae270f0a',
        },
        {
            image: 'a7df68fa-5eb4-485c-b042-7cae265c58b3',
            title: 'ee4fd701-2cc7-4937-8e0f-0d30f960fdbf',
            text: '68e67f8e-a56f-40af-ba73-884840190d25',
            date: 'e4711036-a225-4b3d-be2e-7e4711091bcb',
        },
        {
            image: '8b985e4c-47d6-42a1-9634-d1fe373a57c3',
            title: '6e244d58-45a4-4f8f-96df-b98b5a7fbf9f',
            text: 'fa901f4b-9f39-47d6-a92d-cb482dec2e98',
            date: '2ef96786-2b97-44a3-8242-bc3d7fca56e6',
        },
        {
            image: 'ad13edb6-f1c2-45c1-b50c-b859fb143ef5',
            title: '48904624-1326-4a6b-b57c-c814d23d6275',
            text: '3e4517ac-a06e-4c1a-88f1-a7a0329648bf',
            date: '40f9dbe1-0405-49c7-a086-ceab1be9f458',
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '491f7831-7aba-45d4-9c86-89f9149286c6',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-grid-rows-6 lg:tw-grid-rows-2 lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-x-5 lg:tw-gap-6">
                    <ItemBuilder
                        items={blogs}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard
                                title={contentData.getContent(item.title)}
                                text={contentData.getContent(item.text)}
                                date={contentData.getContent(item.date)}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
