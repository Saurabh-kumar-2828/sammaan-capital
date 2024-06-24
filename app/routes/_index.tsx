import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {ChevronRight} from 'react-bootstrap-icons';
import {
    contentDataLatest,
    getBlogs,
    getData,
    getNews,
    getReviews,
} from '~/backend/contentData.server';
import {BgImageTextCard} from '~/components/componentLibrary/reusableCards/bgImageTextCard';
import {ProductCard} from '~/components/componentLibrary/reusableCards/productCard';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {StickyBar} from '~/components/reusableComponents/stickyBar';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {NumberCard} from '~/components/componentLibrary/reusableCards/numberCard';
import 'keen-slider/keen-slider.min.css';
import {CarouselStyle4} from '~/components/carouselStyle4';
import {CalculateYourLoansSection} from '~/components/reusableSection/calculateYourLoansSection';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {KeenCarousel} from '~/components/reusableComponents/keenCarousel';
import {PartnerWithUsSection} from '~/components/reusableSection/partnerWithUsSection';
import {DownloadAppSection} from '~/components/reusableSection/downloadApp';
import {TestimonialsSection} from '~/components/reusableSection/testimonialsSection';
import type {News, Reviews} from '~/typeDefinitions';
import {PageScaffold2} from '~/components/pageScaffold2';

export const meta: MetaFunction = () => {
    return [
        {title: 'Samman Capital'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    news: News;
    reviews: Reviews;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('homePage');
    const pageIds = contentDataLatest.homePage;

    const vernacularData = await getData(pageIds);

    const blogsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == 'f96a837a-1c1b-48e5-9ff9-e437b203ae92',
        )[0].text,
    );

    const blogs = await getBlogs(blogsIds);

    const newsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == '14c3a1d5-e17f-4cee-8f82-8b6e563645db',
        )[0].text,
    );

    const news = await getNews(newsIds);

    const reviewsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == 'fab53f5a-f3b1-450a-81f8-ef2e74d38be8',
        )[0].text,
    );

    const reviews = await getReviews(reviewsIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        news: news,
        reviews: reviews
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData, news, reviews} = useLoaderData() as LoaderData;
    return (
        <>
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <HomePage news={news} reviews={reviews} />
                    </PageScaffold2>
                    <StickyBar />
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function HomePage({
    news,
    reviews
}: {
    news: Array<{image: string; title: string; text: string; date: string}>;
    reviews: Array<{video: string; name: string; rating: string; location: string; description: string}>
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection />

            <SammanCapitalNumber className="sc-px-screen-edge tw-py-10 lg:tw-py-20" />

            <OurRange className="sc-px-screen-edge lg:tw-py-20 tw-py-10" />

            <CalculateYourLoans />

            <WhyChooseUs className="lg:tw-py-20 tw-py-10" />

            <Testimonials
                className=""
                headline="42addcc8-ea7c-45ab-9892-5c0a65b4a8e7"
                reviews={reviews}
            />

            <DisCoverOurBlogs className="lg:tw-py-20 tw-py-10" />

            <NewsCorner className="" news={news} />

            <SammanCapitalApp />

            <PartnerWithUs className="tw-py-6" />

            <HelpSection
                className="sc-px-screen-edge"
                heading={contentData.getContent(
                    'e8104804-fce1-4b93-8749-f1da33644c73',
                )}
                subHeading={contentData.getContent(
                    '38f93439-2755-431e-979c-41ab7b18654e',
                )}
                contentData={contentData}
            />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);

    const data = [
        {
            bannerText: contentData.getContent(
                '2129f676-25b4-4282-aad9-bf9f796d6e58',
            ),
            imageLink: contentData.getContent(
                'a161dccd-f469-4538-9546-7ecd1fa2420c',
            ),
            buttonText: contentData.getContent(
                'df203937-f12e-4208-92f1-2d10068d8064',
            ),
            buttonLink: '/',
        },
        {
            bannerText: contentData.getContent(
                '2129f676-25b4-4282-aad9-bf9f796d6e58',
            ),
            imageLink: contentData.getContent(
                'a161dccd-f469-4538-9546-7ecd1fa2420c',
            ),
            buttonText: contentData.getContent(
                'df203937-f12e-4208-92f1-2d10068d8064',
            ),
            buttonLink: '/',
        },
    ];

    return (
        <div className="">
            <CarouselStyle4
                items={data.map((item, itemIndex) => (
                    <div
                        className="tw-grid tw-grid-cols-1 tw-grid-rows-[2rem_auto_minmax(0,1fr)_auto_2rem] lg:tw-grid-rows-[minmax(0,1fr)_auto_0.5rem_auto_minmax(0,1fr)]"
                        key={itemIndex}>
                        <div className="tw-h-[380px] tw-w-full tw-bg-primary-500 tw-bg-opacity-[30%] tw-col-start-1 tw-col-span-full tw-row-start-1 tw-row-span-full">
                            <img src={item.imageLink} alt="banner" />
                        </div>
                        <div
                            className="sc-text-banner tw-text-center lg:tw-text-left tw-row-start-2 sc-px-screen-edge tw-col-start-1"
                            dangerouslySetInnerHTML={{__html: item.bannerText}}
                        />
                        <div className="tw-row-start-4 sc-px-screen-edge tw-grid lg:tw-justify-self-start tw-justify-self-center tw-col-start-1">
                            <Link
                                to={item.buttonLink}
                                className="sc-cta-button tw-text-secondary-100 tw-px-[1.5rem]">
                                {item.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
                keyIndex={data.length}
            />
        </div>
    );
}

function SammanCapitalNumber({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const numbersCard = [
        {
            number: contentData.getContent(
                '0c309f95-fd15-475b-9d53-0beb752a7794',
            ),
            text: contentData.getContent(
                '6d466aa1-1dd0-425e-849b-39089a7cfaf1',
            ),
        },
        {
            number: contentData.getContent(
                '94291849-1c26-45c8-a527-449b337d8ef9',
            ),
            text: contentData.getContent(
                '96a8f4fa-f30a-4dd1-aa40-592874da4e56',
            ),
        },
        {
            number: contentData.getContent(
                '5a1f78e7-f471-4841-a5e9-cc44821257ac',
            ),
            text: contentData.getContent(
                '381c2343-4917-42b2-9a51-48d6eae9b732',
            ),
        },
        {
            number: contentData.getContent(
                '38644fdb-7d36-48a5-921f-12b6067d5ccf',
            ),
            text: contentData.getContent(
                'fe47c71f-f525-4e39-8f3e-1df500f9b8e8',
            ),
        },
    ];
    return (
        <div className={className}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        '11ad9afc-c831-43cd-b523-76744f2e62b6',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="sc-text-title2 tw-text-secondary-600">
                    {contentData.getContent(
                        'c3b80b1d-6c2d-4d4b-8e1e-0241ffb0a3d0',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6" />
                <div className="tw-h-[17.5rem] tw-w-full tw-bg-primary-500 tw-bg-opacity-[30%] tw-rounded-lg tw-overflow-hidden">
                    <img
                        src={contentData.getContent(
                            'c7a5b21a-1f55-410f-b092-ad7cf3879c93',
                        )}
                        alt=""
                    />
                </div>
                <VerticalSpacer className="tw-h-10" />
                <div className="tw-grid md:tw-grid-cols-4 tw-grid-cols-2 lg:tw-gap-5 tw-gap-3">
                    <ItemBuilder
                        items={numbersCard}
                        itemBuilder={(item, itemIndex) => (
                            <NumberCard
                                key={itemIndex}
                                text={item.text}
                                number={item.number}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

function OurRange({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const jsonProducts = contentData.getContent(
        '54bc344d-b81d-4b34-a3c3-a7bb70625d39',
    );
    const products = JSON.parse(jsonProducts);
    return (
        <div className={concatenateNonNullStringsWithSpaces('', className)}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '44f97c6a-9ce9-4b87-b3d5-5fdc87499501',
                    )}
                </div>
                {/* <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '1f60e0e5-1c1a-4de0-95ca-776d4a7e258e',
                    )}
                </div> */}
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr)_auto_1rem] lg:tw-grid-cols-[minmax(0,2fr)_minmax(0,4fr)] tw-aspect-video lg:tw-grid-rows-1 lg:tw-h-[26rem] lg:tw-bg-secondary-200 lg:sc-medium-shadow tw-rounded-lg tw-w-full">
                    <div className="lg:tw-p-8 tw-p-4 tw-p sc-text-title1 tw-row-start-2 lg:tw-row-start-1 tw-col-start-1 tw-z-10">
                        <div className="sc-text-title1 max-lg:tw-text-secondary-200">
                            {contentData.getContent(
                                '8b7ad7da-866b-45b9-b4bd-bba950537383',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-2" />
                        <Link
                            to="#"
                            className="sc-text-button tw-text-primary-500 tw-flex tw-items-center tw-gap-1 max-lg:tw-text-secondary-200">
                            {contentData.getContent(
                                '205c7ad0-cc1f-47f6-b6df-2862fa270bf1',
                            )}
                            <ChevronRight className="tw-h-4 tw-w-4" />
                        </Link>
                    </div>
                    <div className="lg:tw-h-full tw-w-full tw-bg-primary-500 tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full lg:tw-col-start-2 tw-rounded-lg">
                        <img src="" alt="" />
                    </div>
                </div>
                <VerticalSpacer className="tw-h-4" />
                <KeenCarousel
                    items={products}
                    multiplicationFactor={2}
                    itemBuilder={(item, itemIndex) => (
                        <ProductCard
                            title={item.title}
                            linkText={item.text}
                            linkUrl="#"
                            image=""
                            key={itemIndex}
                        />
                    )}
                    slideClassName="tw-max-w-[20rem] tw-p-2"
                    multiplicationFactor={2}
                />
            </div>
        </div>
    );
}

function CalculateYourLoans() {
    const contentData = useContext(ContentProviderContext);
    const jsonItems = contentData.getContent(
        '3559e940-90c7-4186-9aa3-464392477f2a',
    );
    const items = JSON.parse(jsonItems);
    const cardLinks = ['#', '#', '#'];

    return (
        <CalculateYourLoansSection
            items={items}
            heading={contentData.getContent(
                'ae050ac5-d8fb-4f52-9cc0-86f6bdd11b69',
            )}
            buttonText={contentData.getContent(
                '064ffad3-01c1-4d53-b5a4-1c70569f1002',
            )}
            buttonUrl="/emi-calculator"
            cardLinks={cardLinks}
        />
    );
}

// function CalculateHomeLoan({className}: {className: string}) {
//     const contentData = useContext(ContentProviderContext);
//     const categories = [
//         contentData.getContent('b8201b12-dba2-431b-8359-3ef4d39972cf'),
//         contentData.getContent('14cd7ae9-79aa-41bd-9d49-d8a68129d0f3'),
//         contentData.getContent('ff1dfcf5-072a-4665-948d-3c0ea870cf88'),
//     ];
//     const [selectedcategories, setSelectedCategories] = useState(categories[0]);
//     return (
//         <div
//             className={concatenateNonNullStringsWithSpaces(
//                 'tw-grid tw-gap-4',
//                 className,
//             )}>
//             <div className="tw-text-center sc-text-headline">
//                 {contentData.getContent('4d9e3dd7-949d-4850-b8f9-7431a7d0315a')}
//             </div>
//             <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 tw-justify-center tw-py-4">
//                 {categories.map((item, itemIndex) => (
//                     <div key={itemIndex}>
//                         <button
//                             className={`lg:tw-p-4 lg:tw-px-5 tw-p-3 tw-rounded-lg sc-text-button tw-h-full ${
//                                 selectedcategories === item
//                                     ? 'sc-tab-button'
//                                     : 'tw-bg-secondary-400'
//                             }`}
//                             onClick={() => setSelectedCategories(item)}>
//                             {item}
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             <div className="sc-text-body tw-text-center sc-px-screen-edge">
//                 {contentData.getContent('e703b024-2cdf-43d6-8ed0-9ac930ac1c75')}
//             </div>
//             <div className="sc-px-screen-edge">
//                 {selectedcategories === categories[0] ? (
//                     <EmiCalculator className="" />
//                 ) : selectedcategories === categories[1] ? (
//                     <AffordabilityCalculatorCard />
//                 ) : (
//                     <PmayCalculatorCard />
//                 )}
//             </div>
//         </div>
//     );
// }

function WhyChooseUs({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);
    const jsonItems = contentData.getContent(
        '9c5129d8-eee4-442a-b7cf-e28474542443',
    );
    const items = JSON.parse(jsonItems);

    return (
        <div className={className}>
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(
                            '41bcc9c4-31ab-4850-9fba-dacbc52e9f05',
                        )}
                    </div>
                    <VerticalSpacer className=" lg:tw-h-8 tw-h-6" />
                    <div className="xl:tw-grid tw-grid-cols-4 tw-gap-8 tw-hidden">
                        <ItemBuilder
                            items={items}
                            itemBuilder={(item, itemIndex) => (
                                <TwoLinerCard
                                    className="!tw-bg-secondary-100 sc-xxsmall-shadow"
                                    title={item.title}
                                    text={item.text}
                                    key={itemIndex}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="tw-block xl:tw-hidden tw-pl-3">
                <KeenCarousel
                    items={items}
                    itemBuilder={(item, itemIndex) => (
                        <TwoLinerCard
                            className="!tw-bg-secondary-100 sc-xxsmall-shadow"
                            title={item.title}
                            text={item.text}
                            key={itemIndex}
                        />
                    )}
                    slideClassName="tw-max-w-[20rem] tw-p-2"
                    multiplicationFactor={2}
                />
            </div>
        </div>
    );
}

export function Testimonials({
    className,
    headline,
    reviews
}: {
    className?: string;
    headline: string;
    reviews: Array<{video: string; name: string; rating: number; location: string; description: string}>
}) {
    return (
        <TestimonialsSection headingId={headline} testimonials={reviews} />
    );
}

function SammanCapitalApp({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            title: contentData.getContent(
                '8817b542-af7a-4ca8-be67-7d50d9632f28',
            ),
            text: contentData.getContent(
                'c5bc92aa-66d9-4102-80ef-e4980ba6fcd1',
            ),
        },
        {
            title: contentData.getContent(
                'acead166-4c2c-484e-a463-dff4f1f46e9e',
            ),
            text: contentData.getContent(
                '9e1abca9-ca47-4ed4-8a10-4a3801d45016',
            ),
        },
        {
            title: contentData.getContent(
                '3b06322c-1d05-44e1-bbba-620e84e8dc41',
            ),
            text: contentData.getContent(
                'f5f5a508-c205-43c6-8971-d4c5e3771c6e',
            ),
        },
        {
            title: contentData.getContent(
                '6fde484e-cb6c-44f8-ba06-0d38fc0dadde',
            ),
            text: contentData.getContent(
                'd09b1745-78aa-4fba-b030-e8afd45d7812',
            ),
        },
    ];
    return (
        <DownloadAppSection
            background={true}
        />
    );
}

// function BecomePrtner({className}: {className: string}) {
//     const contentData = useContext(ContentProviderContext);
//     const items = [
//         {
//             image: '',
//             title: contentData.getContent(
//                 '427c88de-ca8e-4ad1-bca9-2cf5a778b634',
//             ),
//             text: contentData.getContent(
//                 'e32ee75f-1a7c-4eb4-ad0f-aa7e73ad6bf8',
//             ),
//         },
//         {
//             image: '',
//             title: contentData.getContent(
//                 'b5bce45a-11f0-4aea-b01b-36f1f38b26bb',
//             ),
//             text: contentData.getContent(
//                 'be812222-1bc6-402d-b1e1-2e4fdeb369b9',
//             ),
//         },
//         {
//             image: '',
//             title: contentData.getContent(
//                 'ea2a05ba-e071-47bd-b581-1e2b4ecafeba',
//             ),
//             text: contentData.getContent(
//                 '8e7054c2-3fc3-4ca1-806b-f250f711c185',
//             ),
//         },
//         {
//             image: '',
//             title: contentData.getContent(
//                 '990d813d-f4a8-4c89-b1b4-9146775c1ad9',
//             ),
//             text: contentData.getContent(
//                 '3c7218d9-a4d2-4b6c-8e7c-0e335f6826d9',
//             ),
//         },
//     ];
//     return (
//         <div
//             className={concatenateNonNullStringsWithSpaces(
//                 'tw-grid',
//                 className,
//             )}>
//             <div className="sc-px-screen-edge">
//                 <div className="tw-max-w-7xl tw-mx-auto">
//                     <div className="tw-text-center sc-text-headline">
//                         {contentData.getContent(
//                             '301b56b4-c9c7-4d8a-af91-45005de0e109',
//                         )}
//                     </div>
//                     <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
//                     <div className="sc-text-title2 tw-text-center">
//                         {contentData.getContent(
//                             'ee12cd16-3cab-4285-8219-549f624b13d2',
//                         )}
//                     </div>
//                     <VerticalSpacer className="lg:tw-h-6 tw-h-4" />
//                     <div className="lg:tw-grid tw-grid-cols-4 tw-gap-8 tw-hidden">
//                         <ItemBuilder
//                             items={items}
//                             itemBuilder={(item, itemIndex) => (
//                                 <TwoLinerCard
//                                     className="sc-xxsmall-shadow"
//                                     title={item.title}
//                                     text={item.text}
//                                     key={itemIndex}
//                                 />
//                             )}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="tw-block lg:tw-hidden tw-overflow-hidden tw-pl-3">
//                 <CarouselStyle
//                     items={items.map((item, itemIndex) => {
//                         return (
//                             <TwoLinerCard
//                                 className="sc-xxsmall-shadow"
//                                 title={item.title}
//                                 text={item.text}
//                                 key={itemIndex}
//                             />
//                         );
//                     })}
//                     hideButtons={true}
//                     slidesContainerClassName="tw-auto-cols-[75%] md:tw-auto-cols-[40%]"
//                 />
//             </div>
//             <VerticalSpacer className="tw-h-4 lg:tw-h-6" />
//             <div className="sc-px-screen-edge tw-grid md:tw-justify-self-center">
//                 <div className="sc-cta-button tw-w-full md:tw-w-[14.5rem] tw-grid tw-justify-center lg:tw-justify-self-center sc-text-body tw-text-secondary-100">
//                     {contentData.getContent(
//                         '49eff5f6-2704-402b-a12b-8b365c0dda82',
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function OurBlogs({className}: {className: string}) {
//     const contentData = useContext(ContentProviderContext);
//     const blogs = [
//         {
//             img: '',
//             date: contentData.getContent(
//                 'bda19d68-1bda-40b7-9e89-f2de0fe77843',
//             ),
//             title: contentData.getContent(
//                 'cd187da7-2d7c-4630-a92b-1dc755521921',
//             ),
//             text: contentData.getContent(
//                 '3e0a0685-52bf-47d4-9353-c295c0501928',
//             ),
//             linkText: contentData.getContent(
//                 '727af0ba-b18c-43d7-95e5-aa1af4bf6e58',
//             ),
//             linkUrl: contentData.getContent(
//                 'd849da1e-e3c1-4af0-bd11-62dd37de4182',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 'd07c3169-ae8d-40b2-8148-bbbc2f0c2bd7',
//             ),
//             title: contentData.getContent(
//                 '554023f2-ecdc-4167-9b7d-56607ec61581',
//             ),
//             text: contentData.getContent(
//                 '5185797f-766e-4073-b80f-569cac73db87',
//             ),
//             linkText: contentData.getContent(
//                 '7d2ba0aa-7bef-4969-abb5-e8f83b4209ae',
//             ),
//             linkUrl: contentData.getContent(
//                 '285fb989-dafb-418a-87ec-e9b4a2ec718a',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 '116ead9c-0938-413c-bc1a-98c019836d69',
//             ),
//             title: contentData.getContent(
//                 '3463d0f4-03ff-445a-acb0-2bdb38659f32',
//             ),
//             text: contentData.getContent(
//                 '78661781-4e04-4a09-b674-e2af08e3af94',
//             ),
//             linkText: contentData.getContent(
//                 '87fa4111-4c72-438c-98fd-758f21d0389a',
//             ),
//             linkUrl: contentData.getContent(
//                 '11383653-4646-4554-9bae-c00cd8e929ae',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 '59ee8980-2dc2-496c-b017-1216d848e3af',
//             ),
//             title: contentData.getContent(
//                 '23cba9b3-69d7-45af-997a-f7846f997d6b',
//             ),
//             text: contentData.getContent(
//                 '0f4a8f9b-472c-41a5-9cad-d25c0527f42f',
//             ),
//             linkText: contentData.getContent(
//                 '157f9178-bb62-4d68-945e-8f8f936393ce',
//             ),
//             linkUrl: contentData.getContent(
//                 '7f3f7c1f-0329-46ec-b38c-885c750b7949',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 'ea36b9d2-79a8-46fd-bf69-e3661d5dce56',
//             ),
//             title: contentData.getContent(
//                 '64edd5c3-8a0d-4244-93e6-1d9361980bb1',
//             ),
//             text: contentData.getContent(
//                 '68a8a6c6-34a3-4f5a-b577-2f3831c284dd',
//             ),
//             linkText: contentData.getContent(
//                 'ba4688e2-8d08-43e6-af63-a1fb713d20c3',
//             ),
//             linkUrl: contentData.getContent(
//                 'e3d0ac60-9763-40f2-8653-f6a17b13e1ab',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 '10046aeb-6d6d-4692-9f08-a13d43372513',
//             ),
//             title: contentData.getContent(
//                 '692a821f-6bdb-4ed6-988f-7a34ad183f03',
//             ),
//             text: contentData.getContent(
//                 '15f77782-237d-44f6-a362-1f89c7964b62',
//             ),
//             linkText: contentData.getContent(
//                 '515d9d58-1d20-4309-8b68-9c607173abe9',
//             ),
//             linkUrl: contentData.getContent(
//                 '1585d9fc-76c0-4cf6-9ccf-a26ed527c663',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 '6b5fff56-8ba6-45a6-abbc-125273295f31',
//             ),
//             title: contentData.getContent(
//                 'be8888e1-0f5e-4114-993a-b10759943745',
//             ),
//             text: contentData.getContent(
//                 'a9d54c65-59f0-4daa-8f0d-1d5639b86ddf',
//             ),
//             linkText: contentData.getContent(
//                 '58c563f9-e5e3-4cc7-83fd-f3ab87c6a0dd',
//             ),
//             linkUrl: contentData.getContent(
//                 '2715be0a-eef0-409e-91be-626ca0acd75e',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 '85889be8-bae1-443a-b647-42e717e785e0',
//             ),
//             title: contentData.getContent(
//                 '94110b96-11f4-4bad-b91b-c33aabc707cb',
//             ),
//             text: contentData.getContent(
//                 '9f7adadb-37fe-4b7c-9030-9c73ecf8dcfa',
//             ),
//             linkText: contentData.getContent(
//                 '568d102a-235f-4d7c-bc7f-37e84c9ee1bd',
//             ),
//             linkUrl: contentData.getContent(
//                 '4ef45b28-8c19-42fd-94d8-bdbbc1a29250',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 'ff8924bb-85ae-4129-94de-32b924afff20',
//             ),
//             title: contentData.getContent(
//                 '6e3bebda-d00a-4709-96e3-ce9db9523155',
//             ),
//             text: contentData.getContent(
//                 '27768f47-0088-4cac-8c48-3237b112b305',
//             ),
//             linkText: contentData.getContent(
//                 'f1f1bc87-8fbd-463e-886c-db25a9a24e6d',
//             ),
//             linkUrl: contentData.getContent(
//                 '58ad9881-0289-43ba-93b9-97c47a57f9ee',
//             ),
//         },
//         {
//             img: '',
//             date: contentData.getContent(
//                 'ea25255b-2dba-45c8-a764-48ade253e42e',
//             ),
//             title: contentData.getContent(
//                 '3c4fb927-90de-4808-9c6b-bad98cd9cc48',
//             ),
//             text: contentData.getContent(
//                 'd03ea34d-b8b6-4974-a92a-2484fcef6b46',
//             ),
//             linkText: contentData.getContent(
//                 '8f3066e3-6f95-4b58-aeb5-862dd9d86cce',
//             ),
//             linkUrl: contentData.getContent(
//                 'a066a3ca-c528-4f4f-8221-48e0bcd6a16e',
//             ),
//         },
//     ];
//     return (
//         <div className={className}>
//             <div className="tw-grid tw-gap-6 lg:tw-gap-8">
//                 <div className="tw-text-center sc-text-headline">
//                     Discover Our Blogs
//                 </div>
//                 <div className="tw-overflow-hidden">
//                     <CarouselStyle
//                         items={blogs.map((item, itemIndex) => {
//                             return (
//                                 <BlogsCard2
//                                     date={item.date}
//                                     title={item.title}
//                                     text={item.text}
//                                     linkText={item.linkText}
//                                     linkUrl={item.linkUrl}
//                                     key={itemIndex}
//                                 />
//                             );
//                         })}
//                         slidesContainerClassName="!tw-auto-cols-[90%] md:!tw-auto-cols-[45%] lg:!tw-auto-cols-[30%]"
//                         hideButtons={true}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

export function DisCoverOurBlogs({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const jsonBlogTabs = contentData.getContent(
        '9a639bdc-f26f-45e2-8e98-1874602a48b7',
    );
    const blogsTab = JSON.parse(jsonBlogTabs);
    // const blogsTab = [
    //     contentData.getContent('0b4cf691-66e5-4b27-8415-4c441bb696fa'),
    //     contentData.getContent('02a75344-1621-41de-8377-0992fef87d22'),
    //     contentData.getContent('2813973c-1b2f-496d-97b9-9bd3c16a78c1'),
    //     contentData.getContent('be669251-ec93-403e-92be-0dd4751fef48'),
    //     contentData.getContent('16f0bbd0-9d2f-4f25-980c-76257711f4e3'),
    // ];

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const blogs = [
        [],
        [
            {
                title: '111111111 Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights2 for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
        ],
        [
            {
                title: '2222222 Insights34 45 for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights 545 for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights er for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
        ],
        [
            {
                title: '33333333 Insights67 43 for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights e32 for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
            {
                title: 'Insights 5rt for Astute Investors',
                text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
            },
        ],
    ];

    return (
        <div className={className}>
            <div className="tw-grid">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '90ca6617-6317-4f40-87ca-05797017706d',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-py-4 tw-justify-start md:tw-justify-center max-lg:tw-overflow-auto sc-scroll-line-hidden">
                    <ItemBuilder
                        items={blogsTab}
                        itemBuilder={(item, itemIndex) => (
                            <div className="tw-w-[max-content]" key={itemIndex}>
                                <button
                                    className={`lg:tw-p-4 lg:tw-px-5 tw-px-3 tw-py-1 tw-rounded-lg sc-text-button ${
                                        selectedTabIndex === itemIndex
                                            ? 'sc-tab-button'
                                            : 'tw-bg-secondary-400'
                                    }`}
                                    onClick={() =>
                                        setSelectedTabIndex(itemIndex)
                                    }>
                                    {item}
                                </button>
                            </div>
                        )}
                    />
                </div>
                <div className="sc-px-screen-edge">
                    <div className="tw-max-w-7xl tw-mx-auto tw-grid">
                        <VerticalSpacer className="tw-h-4" />
                        <div className="tw-overflow-hidden">
                            {selectedTabIndex === 0 ? (
                                <div className="tw-pl-3">
                                    <KeenCarousel
                                        key={selectedTabIndex}
                                        items={blogs.flat()}
                                        itemBuilder={(item, itemIndex) => (
                                            <BgImageTextCard
                                                key={itemIndex}
                                                title={item.title}
                                                text={item.text}
                                            />
                                        )}
                                        slideClassName="tw-max-w-[20rem] lg:tw-max-w-[25rem] tw-p-2"
                                    />
                                </div>
                            ) : (
                                <div className="tw-pl-3">
                                    <KeenCarousel
                                        key={selectedTabIndex}
                                        items={blogs[selectedTabIndex]}
                                        itemBuilder={(item, itemIndex) => (
                                            <BgImageTextCard
                                                key={itemIndex}
                                                title={item.title}
                                                text={item.text}
                                            />
                                        )}
                                        slideClassName="tw-max-w-[20rem] lg:tw-max-w-[25rem] tw-p-2"
                                    />
                                </div>
                            )}
                        </div>
                        <VerticalSpacer className="lg:tw-h-6 tw-h-4" />
                        <Link
                            to="/"
                            className="sc-cta-button tw-grid tw-text-center lg:tw-justify-self-center  lg:tw-w-[17rem] tw-w-full lg:tw-px-0 tw-py-3">
                            {contentData.getContent(
                                'a7f2b19d-e861-4495-9c9d-5520e21b786c',
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NewsCorner({
    className,
    news,
}: {
    className?: string;
    news: Array<{image: string; title: string; text: string; date: string}>;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <NewsCornerSection
                news={news}
                heading={contentData.getContent(
                    '832476e4-2837-4a46-8d95-8dd379b6b425',
                )}
                buttonText={contentData.getContent(
                    '75c5ee28-86db-4127-a427-602cef517463',
                )}
            />
        </>
    );
}

function PartnerWithUs({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const jsonContent = contentData.getContent(
        '8f24bcf4-5880-4139-9a1e-aa679c66d04d',
    );
    const content = JSON.parse(jsonContent);

    return (
        <div className={className}>
            <PartnerWithUsSection items={content} />
        </div>
    );
}
