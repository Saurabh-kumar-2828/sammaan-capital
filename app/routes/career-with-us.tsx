import {useContext, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {SideImageCard} from '~/components/componentLibrary/reusableCards/sideImageCard/sideImageCard';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {OneLinerCard} from '~/components/componentLibrary/reusableCards/oneLinerCard/oneLinerCard';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import type {LoaderFunction} from '@remix-run/node';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {Link, useLoaderData} from '@remix-run/react';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {CareerCard} from '~/components/componentLibrary/reusableCards/careerCard/careerCard';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import {Testimonials} from './_index';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {HeroSection} from '~/components/reusableSection/heroSection';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.careerWithUs;

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
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <CareerPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function CareerPage() {
    return (
        <>
            <HeroSection
                imgId="e2e7c9fc-7025-48ff-98da-ce816a6e048b"
                bannerHeadingId="c792abeb-e6e7-4cde-a31e-070315803079"
                ctaLink="#opportunity"
                ctaTextId="3932ab57-805a-4752-865a-b4923ef0e9de"
            />

            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Career With Us', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <WeAreSammaanCapital />

            <div className="lg:tw-h-20 tw-h-10" />

            <LifeWithUs />

            <div className="lg:tw-h-20 tw-h-10" />

            <PerksAtSammaanCapital />

            <div className="lg:tw-h-20 tw-h-10" />

            <EmbraceOpportunity />

            <div className="lg:tw-h-20 tw-h-10" />

            <Testimonials headline="66e4fb40-7134-4c3d-88b0-90ebc7aa5e7f" />

            <div className="lg:tw-h-20 tw-h-10" />

            <KnowMore />

            <div className="lg:tw-h-20 tw-h-10" />

            {/* <TestComponent />

            <div className="lg:tw-h-20 tw-h-10" /> */}
        </>
    );
}

function WeAreSammaanCapital() {
    const contentData = useContext(ContentProviderContext);

    const item = {
        image: contentData.getContent('da1da3c6-1cd6-44b8-9506-1ee9fac68903'),
        imageClassName:
            'tw-row-start-2 tw-col-start-1 md:tw-row-start-1 md:tw-col-start-2',
        title: contentData.getContent('4227ddd5-25c1-4507-8cc7-aba9034ee3c9'),
        text: contentData.getContent('5fafadcb-5f90-41cd-8d8e-f6d066c7c179'),
        textClassName: 'tw-col-start-1 tw-row-start-1',
        buttonText: contentData.getContent(
            '8f98e855-878f-45bb-aee3-ba97d11b473e',
        ),
    };
    return (
        <div className="tw-max-w-7xl tw-mx-auto sc-px-screen-edge">
            <SideImageCard
                imageClassName={item.imageClassName}
                title={item.title}
                text={item.text}
                textClassName={item.textClassName}
                buttonText={item.buttonText}
                buttonLink="#opportunity"
                imageUrl={contentData.getContent(
                    'da1da3c6-1cd6-44b8-9506-1ee9fac68903',
                )}
            />
        </div>
    );
}

function LifeWithUs() {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(
        'f9d60b4a-3451-42b7-9822-1b35e46925d1',
    );
    const partialData = jsonData ? JSON.parse(jsonData) : [];
    const data = [
        {
            imgLink: contentData.getContent(
                '5f98f7fb-1156-4ac9-a098-b43d8575e70a',
            ),
            text: contentData.getContent(
                '0322c948-e517-45f9-882e-0e9069cb9d29',
            ),
        },
        ...partialData,
    ];

    return (
        <div className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20 sc-px-screen-edge">
            <div className="tw-grid tw-gap-4 lg-tw-gap-6 tw-max-w-7xl tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'c6cde0c6-bd55-404e-b0c9-8b9fca3d6692',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-[repeat(7,minmax(150px,auto))] tw-grid-rows-2 tw-gap-4 tw-overflow-x-auto tw-p-4 lg:tw-justify-cente">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <OneLinerCard
                                    key={itemIndex}
                                    title={item.text}
                                    img={item.imgLink}
                                    className={concatenateNonNullStringsWithSpaces(
                                        'sc-medium-shadow',
                                        itemIndex === 0
                                            ? 'tw-row-span-2 tw-col-span-3'
                                            : 'tw-col-span-2',
                                    )}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function PerksAtSammaanCapital() {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(
        '8dd673ae-ca60-4ead-800e-8ff693fdffb1',
    );
    const data = jsonData ? JSON.parse(jsonData) : [];

    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '4023a687-fa40-4fbf-b6aa-3b217dcb45bd',
                    )}
                </div>

                <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-grid-cols-[repeat(4,minmax(216px,auto))] tw-overflow-auto tw-py-6 tw-px-4">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <TwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        }}
                    />
                </div>
                {/* <Link to="#opportunity" className="sc-cta-button tw-w-fit tw-justify-self-center">
                    {contentData.getContent(
                        '55a5672a-5b06-4933-b20a-3206eb18e03b',
                    )}
                </Link> */}
            </div>
        </div>
    );
}

function EmbraceOpportunity() {
    const contentData = useContext(ContentProviderContext);

    const [page, setPage] = useState(1);
    const [selectedDesignation, setDesignation] = useState('');
    const [selectedLocation, setLocation] = useState('');
    const designation = [
        contentData.getContent('124b7e3d-8449-40b4-8db3-0c8250b82ec5'),
        contentData.getContent('8452a497-3e92-44fe-a9e5-ad3ea61c03f0'),
        contentData.getContent('40424c27-d811-4e66-a000-4f5a75021bf7'),
        contentData.getContent('564439dc-618a-425e-9257-e87aed021dc1'),
        contentData.getContent('a15a180e-03db-44ca-bffc-a20092cffdfa'),
        contentData.getContent('2007a118-0492-453e-8999-54feb2106dbb'),
    ];

    const data = [
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a banks.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers Lorem.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Lorem ipsum Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Kolkata',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Kolkata',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Kolkata',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Kolkata',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Relationship Manager',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'Mumbai',
        },
        {
            position: 'Credit Analyst',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Credit Analyst',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Credit Analyst',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
        {
            position: 'Credit Analyst',
            positionDescription:
                'Relationship Manager- sales manager in a bank is responsible for selling bank products to its Retail customers.',
            location: 'New Delhi',
        },
    ];

    const cardsPerPage = 6;

    const relevantData = data.filter(
        item =>
            item.position == selectedDesignation &&
            item.location == selectedLocation,
    );

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const pageCards = relevantData.slice(start, end);

    const location = ['New Delhi', 'Mumbai', 'Kolkata'];
    return (
        <div className="sc-px-screen-edge tw-relative">
            <div
                id="opportunity"
                className="tw-absolute -tw-top-[5rem] md:-tw-top-[10rem]"></div>
            <div className="tw-grid tw-max-w-7xl tw-m-auto tw-gap-6">
                <div className="tw-grid tw-gap-6 lg:tw-gap-8">
                    <div dangerouslySetInnerHTML={{__html: contentData.getContent(
                            'f849c7a3-7467-4414-a78c-1b9c6a61eb42',
                        )}} className="tw-text-center sc-text-headline"/>

                    <div className="tw-grid lg:tw-flex tw-gap-6 tw-justify-self-center">
                        <div className="tw-w-fit tw-flex tw-flex-col lg:tw-flex-row tw-gap-1 lg:tw-gap-3 lg:tw-items-center">
                            <div className="sc-text-title2">
                                {contentData.getContent(
                                    'e5b2284c-dae2-4c67-98a7-5c62e8d6c91f',
                                )}
                            </div>
                            <SelectComponent
                                items={designation}
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '2c168920-89ed-42a6-b2ba-a3ac985a9ca7',
                                          )
                                        : item;
                                }}
                                value={selectedDesignation}
                                setValue={item => {
                                    if (item != '') {
                                        setDesignation(item);
                                        return;
                                    }

                                    setDesignation('');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                            />
                        </div>
                        <div className="tw-w-fit tw-flex tw-flex-col lg:tw-flex-row tw-gap-1 lg:tw-gap-3 lg:tw-items-center">
                            <div className="sc-text-title2">
                                {contentData.getContent(
                                    'd02ac73c-32d6-437f-8ab4-826be1b480b7',
                                )}
                            </div>
                            <SelectComponent
                                items={location}
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '1e014985-e265-4295-96c5-fe5921d1c459',
                                          )
                                        : item;
                                }}
                                value={selectedLocation}
                                setValue={item => {
                                    if (item != '') {
                                        setLocation(item);
                                        return;
                                    }

                                    setLocation('');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="tw-grid tw-gird-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
                    <ItemBuilder
                        items={pageCards}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <CareerCard
                                    key={itemIndex}
                                    title={item.position}
                                    text={item.positionDescription}
                                    location={item.location}
                                    linkText={contentData.getContent(
                                        '988bb271-1fba-4563-8337-f8224fec1a26',
                                    )}
                                    link={contentData.getContent(
                                        'ab9d388f-6b12-4429-a44c-ec0838af4da4',
                                    )}
                                />
                            );
                        }}
                    />
                </div>
                <div
                    className={concatenateNonNullStringsWithSpaces(
                        'tw-flex tw-gap-4 tw-justify-self-center tw-items-center',
                        Math.ceil(relevantData.length / cardsPerPage) > 1
                            ? ''
                            : 'tw-hidden',
                    )}>
                    <ChevronLeft
                        className="tw-text-primary-500 tw-cursor-pointer"
                        onClick={() => (page > 1 ? setPage(page - 1) : page)}
                    />
                    <ItemBuilder
                        items={Array.from({
                            length: Math.ceil(
                                relevantData.length / cardsPerPage,
                            ),
                        })}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-rounded-full tw-w-7 tw-aspect-square tw-flex tw-items-center tw-justify-center tw-cursor-pointer',
                                        itemIndex == page - 1
                                            ? 'tw-bg-primary-500 tw-text-secondary-200'
                                            : '',
                                    )}
                                    onClick={() => setPage(itemIndex + 1)}>
                                    {itemIndex + 1}
                                </div>
                            );
                        }}
                    />
                    <ChevronRight
                        className="tw-text-primary-500 tw-cursor-pointer"
                        onClick={() =>
                            page < Math.ceil(relevantData.length / cardsPerPage)
                                ? setPage(page + 1)
                                : page
                        }
                    />
                </div>
            </div>
        </div>
    );
}

function KnowMore() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            img: contentData.getContent('226b6843-38c9-4db7-b944-a8fe1176db8f'),
            title: contentData.getContent(
                '8c38ec15-3e45-4ed2-bb4a-f3e5446ca1e1',
            ),
            text: contentData.getContent(
                '3ff7b548-6d85-4176-8fd5-cb3cb3bbe1ed',
            ),
            date: contentData.getContent(
                '16ecf505-4de3-4b25-ac71-062fa87f45b2',
            ),
        },
        {
            img: contentData.getContent('56a5c932-10b1-4ac5-aaf7-2361df8444df'),
            title: contentData.getContent(
                '76428b53-8246-4a0c-81ce-920156bbf0ce',
            ),
            text: contentData.getContent(
                'e98fa6bd-d90b-455f-8fd5-0bdca9eb0688',
            ),
            date: contentData.getContent(
                '6c3d8d94-0794-4ca7-9347-81e7910a82d3',
            ),
        },
        {
            img: contentData.getContent('e7ab63c8-d5a2-4c55-959f-5a99d3a2aea1'),
            title: contentData.getContent(
                '50b58420-c480-444d-a623-91b3cb6bdfcd',
            ),
            text: contentData.getContent(
                '11db4916-7bb3-4177-a56d-d846f5c1a54c',
            ),
            date: contentData.getContent(
                '4d2134a5-21b6-4a53-b435-c82544d388e8',
            ),
        },
        {
            img: contentData.getContent('ef72052b-a5bd-41a8-a01c-62185fa5d012'),
            title: contentData.getContent(
                'b709f3b1-545c-4e93-aafc-fdbec3077810',
            ),
            text: contentData.getContent(
                '18fbb356-d479-454a-a84c-209da31d1728',
            ),
            date: contentData.getContent(
                '2d646189-d128-485d-a3d6-29c166969f06',
            ),
        },
        {
            img: contentData.getContent('2f5f00e6-a7eb-4aeb-a67f-196a12039eee'),
            title: contentData.getContent(
                '9d197b99-feec-46fe-a2b1-dde8eb86bfa2',
            ),
            text: contentData.getContent(
                '323906a2-4d6a-419f-b343-41bef904a683',
            ),
            date: contentData.getContent(
                'd9b7ac57-28a2-482a-9b59-d5428f62de1c',
            ),
        },
        {
            img: contentData.getContent('4371bc91-4e48-437f-a855-952f621be326'),
            title: contentData.getContent(
                '0afde52e-ba8d-46be-8c25-a22d5ddc4f74',
            ),
            text: contentData.getContent(
                '6035ed91-e99a-48d5-ad1a-1b2a77b9c372',
            ),
            date: contentData.getContent(
                '9560a7d6-e060-4486-b621-73a9af68ab83',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-max-w-7xl tw-m-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'ef2a0da1-28b3-4827-bbc6-f9696419291c',
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

// function TestComponent() {
//     const faqs = [
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//         {
//             question: 'How Are You?',
//             answer: 'I am fine.',
//         },
//     ];

//     return (
//         <div className="tw-grid tw-gap-8 sc-px-screen-edge">
//             <FaqsSectionComponent items={faqs} />
//             <CalculatorTab selectedTab={2} />
//             <CalculatorDropDown
//                 title="Calculate your affordability"
//                 text="This calculator determines the property cost and associated loan amount within your financial capacity"
//             />
//             <LocationCard heading='Location' address='hanuman nagar' phoneNo='98765678' link='#' linkText='Get Direction'/>
//         </div>
//     );
// }
