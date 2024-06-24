import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {
    contentDataLatest,
    getData,
    getFaqs,
    getNews,
    getReviews,
    getVernacularFromBackend,
} from '~/backend/contentData.server';
import {BlogsCard2} from '~/components/componentLibrary/blog/blogsCard2';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {AccordionComponents} from '~/components/reusableComponents/accordionComponents';
import {EmiCalculator} from '~/components/reusableComponents/emiCalculatorCard';
import {TestimonialsCard} from '~/components/componentLibrary/reusableCards/testimonialsCard';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {TwoLinerCard2} from '~/components/componentLibrary/reusableCards/twoLinerCard2';
import {getContentGenerator} from '~/components/contentGenerator';
import {EmbeddedYoutubeVideo} from '~/components/embeddedYoutubeVideo';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {CarouselStyle2} from '~/components/carouselStyle2';
import {TextWithCardSection} from '~/components/reusableSection/textWithCardLoanSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {CardsInARow} from '~/components/reusableSection/cardsInARow';
import type {Faqs, News, Reviews} from '~/typeDefinitions';
import {CardType, Ids} from '~/typeDefinitions';
import {TestimonialsSection} from '~/components/reusableSection/testimonialsSection';
import {CardsFromTwoColsToFour} from '~/components/reusableSection/cardsFromTwoColsToFour';
import {DownloadAppSection} from '~/components/reusableSection/downloadApp';
import {ResourceCenterSection} from '~/components/reusableSection/resourceCenterSection';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {CalculatorSection} from '~/components/reusableSection/calculatorSection';
import {PageScaffold2} from '~/components/pageScaffold2';

export const meta: MetaFunction = () => {
    return [
        {title: 'Loan Against Property'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    reviews: Reviews;
    news: News;
    faqs: Faqs;
};

export const loader: LoaderFunction = async ({request}) => {
    // const userPreferences =
    //     await getUserPreferencesFromCookiesAndUrlSearchParameters(request);
    // if (userPreferences instanceof Error) {
    //     throw userPreferences;
    // }
    const pageIds = contentDataLatest.loanAgainstProperty;
    const vernacularData = await getData(pageIds);
    // const vernacularData = getVernacularFromBackend('loanAgainstProperty');

    const reviewsIds = JSON.parse(
        vernacularData.filter(
            (data: {id: string; text: string}) =>
                data.id == 'be3c6c2e-4dfe-4af1-a08d-fc068df23eab',
        )[0].text,
    );

    const reviews = await getReviews(reviewsIds);

    const newsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == '236870c6-706b-4302-b8a8-165be38f0081',
        )[0].text,
    );

    const news = await getNews(newsIds);

    const faqsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == '637200fd-b66c-4d49-8a52-86a1a58ab1b8',
        )[0].text,
    );

    const faqs = await getFaqs(faqsIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        reviews: reviews,
        faqs: faqs,
        news: news,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData, reviews, news, faqs} = useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <LoanAgainstProperty
                            reviews={reviews}
                            news={news}
                            faqs={faqs}
                        />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function LoanAgainstProperty({
    reviews,
    news,
    faqs,
}: {
    reviews: Reviews;
    news: News;
    faqs: Faqs;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection
                imgId=""
                bannerHeadingId="080f3c12-8ce9-453e-aa18-6667a4b7b671"
                ctaLink="#oportunity"
                ctaTextId="d776df41-c4ee-4778-a625-72ca3a80d89b"
            />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'ProductPage', link: '#'},
                ]}
            />

            <LoanSection />

            <CalculateHomeLoan />

            <StepstoTake />

            <WhyChooseUs />

            <Testimonials reviews={reviews} />

            <CustomerPortal />

            <ResourceCenterSection headingId={Ids.ResourceCenter} />

            <OurBlogs />

            <NewsCorner news={news} />

            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />

            <DownloadAppSection background />

            <HelpSection
                heading={contentData.getContent(
                    '997c99b9-8997-46d2-b80d-ed69039e3d29',
                )}
                subHeading={contentData.getContent(
                    'b598a4f1-2ae5-4343-906f-a7272d1cd63a',
                )}
                contentData={contentData}
            />

            {/* <VerticalSpacer className="lg:tw-h-20 tw-h-10" /> */}
        </>
    );
}

// function HeroSection() {
//     const contentData = useContext(ContentProviderContext);
//     return (
//         <div className="tw-h-[480px] tw-w-full tw-grid tw-relative tw-overflow-hidden">
//             <div className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-row-start-1 tw-col-start-1">
//                 <img src={contentData.getContent("d0115816-ffc6-4618-a60d-a43e989b6fc9")} alt=""/>
//             </div>

//             <div className="tw-row-start-1 tw-col-start-1 tw-w-fit tw-h-fit tw-self-center tw-justify-self-center lg:tw-justify-self-start sc-px-screen-edge tw-grid tw-gap-4 tw-z-10">
//                 <div
//                     dangerouslySetInnerHTML={{
//                         __html: contentData.getContent(
//                             '080f3c12-8ce9-453e-aa18-6667a4b7b671',
//                         ),
//                     }}
//                     className="sc-text-banner tw-text-center lg:tw-text-left"
//                 />
//                 <div className="tw-justify-self-center lg:tw-justify-self-start">
//                     <Link
//                         to="#opportunity"
//                         className="sc-cta-button tw-text-secondary-100-light">
//                         {contentData.getContent(
//                             'd776df41-c4ee-4778-a625-72ca3a80d89b',
//                         )}
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

function LoanSection() {
    const contentData = useContext(ContentProviderContext);
    const jsonCard = contentData.getContent(
        '9b5c0909-ee44-48f4-9143-8a4114f2e213',
    );
    const cardItems = JSON.parse(jsonCard);

    return (
        <TextWithCardSection
            heading="d0427ba4-1161-4827-80d3-6bb5c3bd44d5"
            description="4e5b76ad-4940-43d7-887a-b545572d0a92"
            buttonText="80b79cff-bd0a-474f-9c8b-b7f28c465f8d"
            condition1="0c9fa9f7-eabe-4463-a5a5-9b216150707c"
            condition2="7ebf85ed-5a11-42dd-840c-33f4dd0cdc66"
            buttonLink="/product/loan-against-property"
            cardItems={cardItems}
        />
    );
}

function StepstoTake() {
    const items = [
        {
            imgLink: '',
            title: 'Fill the Loan Application Form',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        },
        {
            imgLink: '',
            title: 'Confirm the details with our agent',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgLink: '',
            title: 'Fill the Loan Application Form ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imgLink: '',
            title: 'Confirm the details with our agent',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];
    return (
        <CardsInARow
            cardType={CardType.TwoLinerCardWithNumber}
            data={items}
            sectionHeadingId={'1df42065-7fe1-4a9d-b028-f9b17bf11000'}
            background
        />
    );
}

function WhyChooseUs() {
    const items = [
        {
            imgLink: '',
            title: 'Attractive Interest Rates',
            text: 'Opt for Sammaan Capital for competitive home loan rates.',
        },
        {
            imgLink: '',
            title: 'Flexible Repayment Options',
            text: 'Choose Sammaan Capital for flexible & tailored repayment plans.',
        },
        {
            imgLink: '',
            title: 'Simple and hassle-free process',
            text: 'We ensure a hassle-free home loan process for your convenience.',
        },
        {
            imgLink: '',
            title: 'Application to disbursal online',
            text: 'We streamlines your journey from online application to swift disbursal.',
        },
    ];
    return (
        <CardsInARow
            cardType={CardType.TwoLinerCard}
            data={items}
            sectionHeadingId={'8aedc93d-47b8-4399-b98d-29c32bc2e23c'}
        />
    );
}

export function Testimonials({reviews}: {reviews: Reviews}) {
    return (
        <TestimonialsSection
            headingId={Ids.HappyHomeStories}
            testimonials={reviews}
        />
    );
}

function CalculateHomeLoan() {
    const contentData = useContext(ContentProviderContext);
    const jsonCategories = contentData.getContent(
        '245ab4b7-6426-42c2-8704-68758a414527',
    );
    const categories = JSON.parse(jsonCategories);
    return (
        <CalculatorSection
            categories={categories}
            subHeadingId="cd78ae99-1740-48fd-93b7-2cd24477fe8e"
        />
    );
}

function CustomerPortal() {
    return (
        <CardsFromTwoColsToFour
            cardType={CardType.OneLinerCardWithChevron}
            dataId={Ids.CustomerPortalCards}
            sectionHeadingId={Ids.CustomerPortalHeading}
            subHeadingId={Ids.CustomerPortalSubheading}
        />
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
        {
            image: '',
            title: 'How It Works',
            text: 'Learn about the process of getting a home loan.',
            date: '22 June',
        },
    ];
    return (
        <OurBlogSection
            heading={contentData.getContent(
                '4b4a8860-61b8-446a-ac84-c5329901a5dd',
            )}
            items={blogs}
        />
    );
}

function NewsCorner({news}: {news: News}) {
    const contentData = useContext(ContentProviderContext);

    return (
        <NewsCornerSection
            heading={contentData.getContent(
                'ef04276b-8d97-4d21-888f-ab602e6573de',
            )}
            news={news}
        />
    );
}
