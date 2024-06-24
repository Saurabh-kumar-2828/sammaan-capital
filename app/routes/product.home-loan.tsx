import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext} from 'react';
import {
    contentDataLatest,
    getData,
    getFaqs,
    getNews,
    getProjects,
    getReviews,
} from '~/backend/contentData.server';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {getContentGenerator} from '~/components/contentGenerator';
import {EmbeddedYoutubeVideo} from '~/components/embeddedYoutubeVideo';
import {PageScaffold} from '~/components/pageScaffold';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {TextWithCardSection} from '~/components/reusableSection/textWithCardLoanSection';
import {CardsInARow} from '~/components/reusableSection/cardsInARow';
import type {Faqs, News, Projects, Reviews} from '~/typeDefinitions';
import {CardType, Ids} from '~/typeDefinitions';
import {TestimonialsSection} from '~/components/reusableSection/testimonialsSection';
import {ApprovedProjectsSection} from '~/components/reusableSection/approvedProjectsSection';
import {CardsFromTwoColsToFour} from '~/components/reusableSection/cardsFromTwoColsToFour';
import {ResourceCenterSection} from '~/components/reusableSection/resourceCenterSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {DownloadAppSection} from '~/components/reusableSection/downloadApp';
import {CalculatorSection} from '~/components/reusableSection/calculatorSection';
import {PageScaffold2} from '~/components/pageScaffold2';
export const meta: MetaFunction = () => {
    return [
        {title: 'Home Loan'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    reviews: Reviews;
    news: News;
    faqs: Faqs;
    projects: Projects;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.homeLoan;

    const vernacularData = await getData(pageIds);

    const reviewsIds = JSON.parse(
        vernacularData.filter(
            (data: {id: string; text: string}) =>
                data.id == 'dda169ad-3c88-49b0-aa77-e3ac7e3b4fa7',
        )[0].text,
    );

    const reviews = await getReviews(reviewsIds);

    const newsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == 'c401cec2-edb9-48d9-af75-9cf874b8c9cb',
        )[0].text,
    );

    const news = await getNews(newsIds);

    const faqsIds = JSON.parse(
        vernacularData.filter(
            data => data.id == '1c1f8ed7-6041-4885-9e44-fe5b7630e74b',
        )[0].text,
    );

    const faqs = await getFaqs(faqsIds);

    const projects = await getProjects();

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        reviews: reviews,
        news: news,
        faqs: faqs,
        projects: projects,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData, reviews, news, faqs, projects} =
        useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold2>
                        <HomeLoanPage
                            reviews={reviews}
                            news={news}
                            faqs={faqs}
                            projects={projects}
                        />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function HomeLoanPage({
    reviews,
    news,
    faqs,
    projects,
}: {
    reviews: Reviews;
    news: News;
    faqs: Faqs;
    projects: Projects;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection
                imgId="792826ca-de17-4f8c-937b-8dc5cb26e296"
                bannerHeadingId="8a027155-32eb-47e3-b3d2-525b21b422f8"
                ctaTextId="282d5612-28d9-4875-877b-6711eb2a0ac5"
                ctaLink=""
            />

            <VerticalSpacer className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Product', link: '/product'},
                    {contentId: 'Home Loan', link: '#'},
                ]}
            />

            <HomeLoanSection />

            <CalculateHomeLoan />

            <StepstoTake />

            <WhyChooseUs />

            <Testimonials reviews={reviews} />

            <ApprovedProjects projects={projects} />

            <CustomerPortal />

            <ResourceCenterSection
                headingId={Ids.ResourceCenter}
                itemsId="bb4bf20d-fafe-4164-8aba-56912b9d3103"
            />

            <OurBlogs />

            <NewsCorner news={news} />

            <FaqSection faqs={faqs} />

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
        </>
    );
}

function HomeLoanSection() {
    const contentData = useContext(ContentProviderContext);
    const jsonCard = contentData.getContent(
        'f89b7e1a-8c17-4993-b78b-3ba843d2c79c',
    );
    const cardItems = JSON.parse(jsonCard);

    return (
        <TextWithCardSection
            heading="8cfe3398-b37e-468f-8bcc-49653cfe1b6b"
            description="fef5f24b-f995-47b2-8970-d21a93b59272"
            buttonText="160aebf2-0352-4699-b05b-3967cb3e672b"
            condition1="16ddba8c-2238-4d0b-967e-f9d253fafec1"
            condition2="0bbd06f3-67fc-4793-a26c-2004f22ebfd8"
            buttonLink="#"
            cardItems={cardItems}
        />
    );
}

function StepstoTake() {
    const contentData = useContext(ContentProviderContext);
    const jsonItems = contentData.getContent(
        'e2249e5d-79c9-4c8f-8321-8c51a75d6403',
    );
    const items = JSON.parse(jsonItems);

    return (
        <CardsInARow
            cardType={CardType.TwoLinerCardWithNumber}
            data={items}
            sectionHeadingId={Ids.StepsToTakeHomeLoan}
            background
        />
    );
}

function WhyChooseUs() {
    const contentData = useContext(ContentProviderContext);

    const jsonItems = contentData.getContent(
        'db936b4a-0845-4ecc-b898-d3438d83c828',
    );
    const items = JSON.parse(jsonItems);

    return (
        <CardsInARow
            cardType={CardType.TwoLinerCard}
            data={items}
            sectionHeadingId="7e99da23-d5bb-453b-90f6-1cd2be636624"
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
        '096e67af-21c5-4cb2-9c67-96ebc4d38bc8',
    );
    const categories = JSON.parse(jsonCategories);
    return (
        <CalculatorSection
            categories={categories}
            subHeadingId="37b23412-19ab-48c7-8491-3570f4e2ae84"
        />
    );
}

function ApprovedProjects({projects}: {projects: Projects}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <ApprovedProjectsSection
            headingId="7a020b38-ac6a-465b-99c3-b28aa2c906d9"
            projects={projects}
            contentData={contentData}
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
                'f5106bbb-9ce1-428c-9b42-c4c3b9639f40',
            )}
            items={blogs}
        />
    );
}

function FaqSection({faqs}: {faqs: Faqs}) {
    return <FaqsSectionComponent items={faqs} showFaqPageLink />;
}

function NewsCorner({news}: {news: News}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <NewsCornerSection
            heading={Ids.NewsCorner}
            news={news}
            buttonText={contentData.getContent(
                '75c5ee28-86db-4127-a427-602cef517463',
            )}
        />
    );
}
