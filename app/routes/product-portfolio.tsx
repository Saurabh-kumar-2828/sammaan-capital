import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {StickyBar} from '~/components/reusableComponents/stickyBar';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import 'keen-slider/keen-slider.min.css';
import {HeroSection} from '~/components/reusableSection/heroSection';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {LoanPlanSection} from '~/components/reusableSection/loanPlanSection';
import {ProductCard} from '~/components/componentLibrary/reusableCards/productCard';
import {CalculateYourLoansSection} from '~/components/reusableSection/calculateYourLoansSection';
import {ChevronRight, GooglePlay} from 'react-bootstrap-icons';
import {EmbeddedYoutubeVideo} from '~/components/embeddedYoutubeVideo';
import {TestimonialsSection} from '~/components/reusableSection/testimonialsSection';
import {BgImageTextCard} from '~/components/componentLibrary/reusableCards/bgImageTextCard';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {KeenCarousel} from '~/components/reusableComponents/keenCarousel';
import {TestimonialsCarousel} from '~/components/testimonialsCarousel';
import {PageScaffold2} from '~/components/pageScaffold2';

export const meta: MetaFunction = () => {
    return [
        {title: 'Product Portfolio'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('productPortfolio');

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
                        <ProductPortfolio />
                    </PageScaffold2>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function ProductPortfolio() {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection
                imgId=""
                bannerHeadingId="b2fa7cdd-49cf-409d-b96b-0f9021e80e9b"
                ctaTextId='82dd7dcc-8b32-47b8-aa6d-5f722170fc77'
                ctaLink='#'
            />

            <VerticalSpacer className="tw-h-4 lg:tw-h-6" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'All loans', link: '#'},
                ]}
            />

            <VerticalSpacer className="tw-h-10 lg:tw-h-16" />

            <OurWideRange />

            <PlanYourHomeLoan />

            <PlanYourLap />

            <CalculateYourLoans />

            <ManageLoan />

            <Testimonials />

            <DisCoverOurBlogs className="tw-py-10 lg:tw-py-20" />

            <NewsCorner />

            <SammanCapitalApp className="tw-bg-secondary-400 lg:tw-py-20 tw-py-10" />

            <HelpSection
                className="sc-px-screen-edge"
                heading={contentData.getContent(
                    '52c16e93-73d9-4a46-8e9c-54bc2a01c9f5',
                )}
                subHeading={contentData.getContent(
                    'ff040bef-f2da-44b8-afe6-0ef3440f4058',
                )}
                contentData={contentData}
            />
        </>
    );
}

function OurWideRange() {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            icon: '5ef264ad-9586-4a0b-8140-2cc9fcdfedca',
            title: '5513892e-83a8-4d41-a710-0f5af01a5ce4',
        },
        {
            icon: '9a815ab2-dcf5-4bbf-80e3-dea8d33acefb',
            title: '11ac6c4b-c7a1-4938-84b7-a6a1a726be04',
        },
        {
            icon: '88eacd21-ab3f-4ce6-9b95-332d4b737fc1',
            title: 'f347b987-60b8-4cdf-bcb0-5aebe7f293f8',
        },
        {
            icon: 'a9c88ca2-b471-46c5-a560-ebdf05ad0d0b',
            title: '23bed7c8-832f-4330-8b4d-e62f93f5fa93',
        },
        {
            icon: '86b392ba-e03c-422a-9d34-cdfcb5b01aaa',
            title: '68a1a075-4085-4360-8143-7a44650d216d',
        },
        {
            icon: 'b6f62765-8983-413e-8468-cc2e34fe30ce',
            title: '25f02f85-8e64-4d7d-bba5-9f17eb6e3bee',
        },
        {
            icon: '9643c984-983e-4fbb-85e2-0116116411c1',
            title: '3c87c51b-5895-46e5-8d11-74b09f78fde9',
        },
    ];
    return (
        <div className="sc-px-screen-edge lg:tw-pb-20 tw-pb-10">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div
                    className="sc-text-headline tw-text-secondary-800 tw-text-center"
                    dangerouslySetInnerHTML={{
                        __html: contentData.getContent(
                            '5cadbfe5-3bd4-4c4a-b96e-c8bc26279adc',
                        ),
                    }}
                />
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-grid-cols-6 tw-grid-rows-3 lg:tw-grid-cols-8 lg:tw-grid-rows-2 tw-gap-2 lg:tw-gap-4">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-bg-secondary-400 tw-grid tw-gap-2 lg:tw-gap-4 tw-w-full tw-rounded-lg sc-small-shadow tw-py-3 tw-px-4 lg:tw-p-6',
                                        itemIndex === 0
                                            ? 'tw-row-start-1 tw-col-start-1 tw-col-span-3 lg:tw-grid-cols-2 tw-items-center'
                                            : itemIndex === 1
                                            ? 'tw-col-start-4 tw-col-span-3 tw-row-start-1 lg:tw-grid-cols-2 tw-items-center'
                                            : itemIndex === 2
                                            ? 'tw-col-start-1 tw-col-span-2 tw-row-start-2 lg:tw-col-start-7 lg:tw-col-span-2 lg:tw-row-start-1'
                                            : itemIndex === 3
                                            ? 'tw-col-start-3 tw-col-span-2 tw-row-start-2 lg:tw-col-start-1 lg:tw-col-span-2'
                                            : itemIndex === 4
                                            ? 'tw-col-start-5 tw-col-span-2 tw-row-start-2 lg:tw-col-start-3 lg:tw-col-span-2'
                                            : itemIndex === 5
                                            ? 'tw-row-start-3 tw-col-start-1 tw-col-span-3 lg:tw-row-start-2 lg:tw-col-start-5 lg:tw-col-span-2'
                                            : itemIndex === 6
                                            ? 'tw-col-start-4 tw-col-span-3 tw-row-start-3 lg:tw-row-start-2 lg:tw-col-start-7 lg:tw-col-span-2'
                                            : '',
                                    )}>
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            'tw-h-8 tw-w-8 lg:tw-h-11 lg:tw-w-11 tw-bg-primary-500 tw-grid',
                                            itemIndex === 0 || itemIndex === 1
                                                ? 'lg:tw-justify-self-end tw-justify-self-center'
                                                : 'tw-justify-self-center',
                                        )}>
                                        {/* <img src="" /> */}
                                    </div>
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            'sc-text-caption tw-text-secondary-800 ',
                                            itemIndex === 0 || itemIndex === 1
                                                ? 'lg:tw-text-start tw-text-center'
                                                : 'tw-text-center',
                                        )}>
                                        {contentData.getContent(item.title)}
                                    </div>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function PlanYourHomeLoan() {
    const contentData = useContext(ContentProviderContext);
    const item = [
        contentData.getContent('d2c0aec0-a093-4808-954a-eeabc3907ffa'),
        contentData.getContent('d0bf8f56-87c3-4819-badc-90ea9046eba5'),
        contentData.getContent('06dee4a7-691d-4cae-a770-fbab544a88fa'),
        contentData.getContent('09a82303-b187-4fab-893f-fca3081af71c'),
    ];

    const products = [
        {
            image: contentData.getContent(
                '4cc67408-0d1c-41a4-a77f-9e43338df9f6',
            ),
            title: contentData.getContent(
                '8ab25c1b-1109-4e84-abf5-fcf46dbb4314',
            ),
            text: contentData.getContent(
                '30c2be35-ee88-45dc-8b22-19635eacad02',
            ),
            linkText: contentData.getContent(
                'f91d0ede-59af-494d-bc1d-371685b89764',
            ),
            linkUrl: contentData.getContent(
                '0b84e8fe-13c5-4280-8102-0b8fa4ab0013',
            ),
        },
        {
            image: contentData.getContent(
                '03d81a90-5219-444e-9b03-9ae04bffff2d',
            ),
            title: contentData.getContent(
                '17068e64-fd69-436e-96ca-d609947e3702',
            ),
            text: contentData.getContent(
                '0976534d-c102-4adc-8f50-033059cfaa66',
            ),
            linkText: contentData.getContent(
                '09edfaba-eb87-41a9-b126-d4b8922d4411',
            ),
            linkUrl: contentData.getContent(
                '294d3c85-2d72-400b-ba77-3a4f9d2013f5',
            ),
        },
        {
            image: contentData.getContent(
                '4cc67408-0d1c-41a4-a77f-9e43338df9f6',
            ),
            title: contentData.getContent(
                '8ab25c1b-1109-4e84-abf5-fcf46dbb4314',
            ),
            text: contentData.getContent(
                '30c2be35-ee88-45dc-8b22-19635eacad02',
            ),
            linkText: contentData.getContent(
                'f91d0ede-59af-494d-bc1d-371685b89764',
            ),
            linkUrl: contentData.getContent(
                '0b84e8fe-13c5-4280-8102-0b8fa4ab0013',
            ),
        },
        {
            image: contentData.getContent(
                '03d81a90-5219-444e-9b03-9ae04bffff2d',
            ),
            title: contentData.getContent(
                '17068e64-fd69-436e-96ca-d609947e3702',
            ),
            text: contentData.getContent(
                '0976534d-c102-4adc-8f50-033059cfaa66',
            ),
            linkText: contentData.getContent(
                '09edfaba-eb87-41a9-b126-d4b8922d4411',
            ),
            linkUrl: contentData.getContent(
                '294d3c85-2d72-400b-ba77-3a4f9d2013f5',
            ),
        },
        {
            image: contentData.getContent(
                '4cc67408-0d1c-41a4-a77f-9e43338df9f6',
            ),
            title: contentData.getContent(
                '8ab25c1b-1109-4e84-abf5-fcf46dbb4314',
            ),
            text: contentData.getContent(
                '30c2be35-ee88-45dc-8b22-19635eacad02',
            ),
            linkText: contentData.getContent(
                'f91d0ede-59af-494d-bc1d-371685b89764',
            ),
            linkUrl: contentData.getContent(
                '0b84e8fe-13c5-4280-8102-0b8fa4ab0013',
            ),
        },
        {
            image: contentData.getContent(
                '03d81a90-5219-444e-9b03-9ae04bffff2d',
            ),
            title: contentData.getContent(
                '17068e64-fd69-436e-96ca-d609947e3702',
            ),
            text: contentData.getContent(
                '0976534d-c102-4adc-8f50-033059cfaa66',
            ),
            linkText: contentData.getContent(
                '09edfaba-eb87-41a9-b126-d4b8922d4411',
            ),
            linkUrl: contentData.getContent(
                '294d3c85-2d72-400b-ba77-3a4f9d2013f5',
            ),
        },
    ];
    return (
        <div className="tw-py-10 lg:tw-py-20">
            <LoanPlanSection
                heading={contentData.getContent(
                    '7ba6c582-3816-4702-9ffb-5c30e90ea78f',
                )}
                text={contentData.getContent(
                    'e9a6e7c8-9608-4220-841b-16a615edc663',
                )}
                item={item}
                buttonText={contentData.getContent(
                    'cd7deeb0-159e-4d05-a1f6-600deb800f4b',
                )}
                buttonLink={contentData.getContent(
                    'de61e6db-bba9-43b5-9a60-093b213c9cdc',
                )}
                image={contentData.getContent('')}
            />
            <VerticalSpacer className="tw-h-8" />
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="sc-text-title-bold">
                        {contentData.getContent(
                            'df8daa1f-94e6-4e5b-8396-8609b09dd806',
                        )}
                    </div>
                    <VerticalSpacer className="tw-h-4" />
                    <div className="">
                        <KeenCarousel
                            items={products}
                            itemBuilder={(item, itemIndex) => (
                                <ProductCard
                                    title={item.title}
                                    linkText={item.linkText}
                                    linkUrl={item.linkUrl}
                                    image={item.image}
                                    key={itemIndex}
                                />
                            )}
                            slideClassName="tw-max-w-[20rem] tw-p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function PlanYourLap() {
    const contentData = useContext(ContentProviderContext);
    const item = [
        contentData.getContent('d1b45061-af52-424d-ae78-074618683ab0'),
        contentData.getContent('bd937358-367d-4c53-8c3e-b975f52cd9dc'),
        contentData.getContent('a26a9f9b-6ba0-4232-8b0b-e4e4e9f37497'),
        contentData.getContent('6be5913d-47b6-4706-9034-0e3de31aa1f6'),
    ];
    return (
        <LoanPlanSection
            className="tw-py-10 lg:tw-py-20"
            heading={contentData.getContent(
                'eecb6673-b289-4180-b515-a4cd1199cb3c',
            )}
            text={contentData.getContent(
                'ab6f7617-2f41-452f-9766-5ce71921b272',
            )}
            item={item}
            buttonText={contentData.getContent(
                'f0cd08c3-6e72-47ba-9a5e-c9e601d06ab4',
            )}
            buttonLink={contentData.getContent(
                '1fcc07be-9d45-4293-af6f-4883cacafebf',
            )}
            image={contentData.getContent('')}
            imageClassName="lg:tw-col-start-2 tw-row-start-1"
        />
    );
}

function CalculateYourLoans() {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            imgLink: contentData.getContent(
                '51ab076e-92cd-4e4a-a17f-e9cdf0d4b38c',
            ),
            title: contentData.getContent(
                '8073d45b-ee7a-4851-a6c9-3ff82465fba6',
            ),
            text: contentData.getContent(
                'b8eae257-0cde-4142-abc6-60bc5c22fa45',
            ),
            subText: contentData.getContent(
                'e16c92ca-7f2c-4375-86fb-25e5caccd90f',
            ),
        },
        {
            imgLink: contentData.getContent(
                '8b89d37e-9afe-48bb-aeb8-e00988dad8bf',
            ),
            title: contentData.getContent(
                '6e4b410e-c27d-4451-9c32-c8445e1a6f65',
            ),
            text: contentData.getContent(
                '55e30f82-5aa0-4613-b91e-93e09a41fae8',
            ),
            subText: contentData.getContent(
                '76041965-0ae7-4c4c-aa2d-1e54971a92e1',
            ),
        },
        {
            imgLink: contentData.getContent(
                '7758b211-7066-4160-9dac-dc6e4576fa4b',
            ),
            title: contentData.getContent(
                '72632872-f5dd-44c4-ab81-c0a0fe0eeeec',
            ),
            text: contentData.getContent(
                '03a8b50e-be39-4d87-b2b1-f89044f52b10',
            ),
            subText: contentData.getContent(
                '2dd1d851-8bb2-4eab-982d-0ee5ba5ad6b7',
            ),
        },
    ];
    const cardLinks = ['#', '#', '#'];

    return (
        <CalculateYourLoansSection
            items={items}
            heading={contentData.getContent(
                '15c12807-f16a-4ab9-8297-5accf6db8d84',
            )}
            buttonText={contentData.getContent(
                'c828df99-1bbb-4357-afb7-c2780ddf3450',
            )}
            buttonUrl="/"
            cardLinks={cardLinks}
        />
    );
}

function ManageLoan() {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            icon: 'b17ebcd4-850c-42e9-a548-fc4782cf336f',
            title: '8b2b5287-8403-4576-a297-003f0f80d023',
        },
        {
            icon: '4462b704-26af-411e-acf2-60a120833024',
            title: '7aaf2354-bb0a-4e50-b707-6149b7dcd90c',
        },
        {
            icon: '89546064-eee9-47cb-9591-5f6d91534df9',
            title: 'fe4d0e27-aa69-4e3c-8470-7cb547972e51',
        },
        {
            icon: '9a1fe332-9ed2-4a21-ba91-851d4f89cb3a',
            title: '2934447b-52a5-4ef2-967c-f95fff358b85',
        },
    ];
    return (
        <div className="sc-px-screen-edge tw-py-10 lg:tw-py-20">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                    {contentData.getContent(
                        '38678f58-fb47-42d8-bcda-fa95d0715bda',
                    )}
                </div>
                <VerticalSpacer className="tw-h-2" />
                <div className="sc-text-caption tw-text-center tw-text-secondary-800">
                    {contentData.getContent(
                        '7aaedd00-a98f-49b7-b187-84f65e93bfb2',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-gap-8 tw-gap-2">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <div
                                className="tw-p-4 lg:tw-p-6 tw-grid tw-gap-4 tw-bg-secondary-400 sc-medium-shadow tw-border tw-border-secondary-100 tw-rounded-lg tw-cursor-pointer"
                                key={itemIndex}>
                                <div className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-justify-items-end">
                                    {/* <img
                                        src={item.icon}
                                        alt=""
                                        className="tw-h-10 tw-w-10 tw-rounded-full tw-bg-primary-500"
                                    /> */}
                                    <div className='tw-h-10 tw-w-10 tw-rounded-full tw-bg-primary-500'></div>
                                    <ChevronRight className="tw-h-4 tw-w-4" />
                                </div>
                                <div className="sc-text-title2 tw-text-secondary-800">
                                    {contentData.getContent(item.title)}
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export function Testimonials({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const testimonials = [
        {
            video: (
                <EmbeddedYoutubeVideo
                    id="b4o3OPUM8Yg"
                    style={{aspectRatio: '560/315'}}
                    className="tw-rounded-lg"
                />
            ),
            name: contentData.getContent(
                '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            ),
            rating: Number(
                contentData.getContent('4b9426fc-9926-4dfa-817f-fb0af5ab028c'),
            ),
            location: contentData.getContent(
                'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            ),
            description: contentData.getContent(
                '0b213458-c6af-472e-8f56-f4986a95fd35',
            ),
        },
        {
            video: (
                <EmbeddedYoutubeVideo
                    id="b4o3OPUM8Yg"
                    style={{aspectRatio: '560/315'}}
                    className="tw-rounded-lg"
                />
            ),
            name: contentData.getContent(
                '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            ),
            rating: Number(
                contentData.getContent('4b9426fc-9926-4dfa-817f-fb0af5ab028c'),
            ),
            location: contentData.getContent(
                'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            ),
            description: contentData.getContent(
                '0b213458-c6af-472e-8f56-f4986a95fd35',
            ),
        },
        {
            video: (
                <EmbeddedYoutubeVideo
                    id="b4o3OPUM8Yg"
                    style={{aspectRatio: '560/315'}}
                    className="tw-rounded-lg"
                />
            ),
            name: contentData.getContent(
                '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            ),
            rating: Number(
                contentData.getContent('4b9426fc-9926-4dfa-817f-fb0af5ab028c'),
            ),
            location: contentData.getContent(
                'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            ),
            description: contentData.getContent(
                '0b213458-c6af-472e-8f56-f4986a95fd35',
            ),
        },
        {
            video: (
                <EmbeddedYoutubeVideo
                    id="b4o3OPUM8Yg"
                    style={{aspectRatio: '560/315'}}
                    className="tw-rounded-lg"
                />
            ),
            name: contentData.getContent(
                '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            ),
            rating: Number(
                contentData.getContent('4b9426fc-9926-4dfa-817f-fb0af5ab028c'),
            ),
            location: contentData.getContent(
                'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            ),
            description: contentData.getContent(
                '0b213458-c6af-472e-8f56-f4986a95fd35',
            ),
        },
        {
            video: (
                <EmbeddedYoutubeVideo
                    id="b4o3OPUM8Yg"
                    style={{aspectRatio: '560/315'}}
                    className="tw-rounded-lg"
                />
            ),
            name: contentData.getContent(
                '3f89eb10-766e-405b-8939-4e6fe0ed65c2',
            ),
            rating: Number(
                contentData.getContent('4b9426fc-9926-4dfa-817f-fb0af5ab028c'),
            ),
            location: contentData.getContent(
                'a8f32482-bd21-4cc5-96e5-6e7691218e18',
            ),
            description: contentData.getContent(
                '0b213458-c6af-472e-8f56-f4986a95fd35',
            ),
        },
    ];
    return (
        <TestimonialsSection
            headingId="ea3019f5-d3be-449b-951e-ead9fceab1d7"
            testimonials={testimonials}
        />
    );
}

export function DisCoverOurBlogs({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);

    const blogsTab = [
        contentData.getContent('aa675433-88ea-4177-bc3e-f139f31cc3f5'),
        contentData.getContent('6ff50e9f-71f6-4eaf-915f-803b662a2752'),
        contentData.getContent('732bfa75-7cfa-4bcb-85c3-74b43eda297d'),
        contentData.getContent('e18eb943-8e47-4803-8edd-f73ac571be8f'),
    ];

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const blogs = [
        [],
        [
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
        ],
        [
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
        ],
        [
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
            {
                title: contentData.getContent(
                    '46e2e380-709d-4ea2-90ca-62faf6daafb2',
                ),
                text: contentData.getContent(
                    '83ed97f4-1e31-49cc-9894-650ed5b1f0b7',
                ),
            },
        ],
    ];

    return (
        <div className={className}>
            <div className="tw-grid">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'b6ead393-0078-49a4-9f9f-04fa35c5be82',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="sc-px-screen-edge tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-py-4 tw-justify-start md:tw-justify-center max-lg:tw-overflow-auto sc-scroll-line-hidden">
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
                <VerticalSpacer className="tw-h-4" />
                <div className="sc-px-screen-edge">
                    <div className="tw-max-w-7xl tw-mx-auto tw-grid">
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
                            className="sc-cta-button tw-grid tw-text-center lg:tw-justify-self-center  lg:tw-w-[17rem] lg:tw-px-0 tw-py-3 max-lg:tw-mx-[1.5rem]">
                            {contentData.getContent(
                                '16c4242d-0261-4a82-ab3c-3834b746a164',
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NewsCorner({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const news = [
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                'd9dd30d8-0568-4a8d-ab85-30ace18a3056',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
        {
            img: contentData.getContent('40a138bc-671a-4807-93a5-31c1beaf21b1'),
            date: contentData.getContent(
                '133aec50-12a2-4e44-87d9-f76bd400746b',
            ),
            title: contentData.getContent(
                '11fa87f1-fbae-4dfd-83d0-e2949c9be76d',
            ),
            text: contentData.getContent(
                '9eac687c-743c-494f-9e74-843be35e7446',
            ),
            // linkText: contentData.getContent(
            //     '6fe17c93-fe7e-45c5-885b-2d2e9bb86e86',
            // ),
            // linkUrl: contentData.getContent(
            //     'a303be98-a06a-4b6f-96f5-e7cf014be1b9',
            // ),
        },
    ];
    return (
        <>
            <NewsCornerSection
                news={news}
                heading={contentData.getContent(
                    '09a26d7b-7abb-406d-991b-b5a186bdef8a',
                )}
                buttonText={contentData.getContent(
                    '76b65842-2676-4ed0-a178-1c8d26be2fc3',
                )}
            />
        </>
    );
}

function SammanCapitalApp({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            text: contentData.getContent(
                'f982d49b-0925-4bd8-8517-aea9d75c504a',
            ),
            text2: contentData.getContent(
                '6f78d225-5ccd-48eb-a99b-933b0408e304',
            ),
        },
        {
            text: contentData.getContent(
                '8e0388cc-c1f4-45c9-97a0-b843580a87ea',
            ),
            text2: contentData.getContent(
                '0ea652ba-6918-4716-ae45-631d9611441c',
            ),
        },
        {
            text: contentData.getContent(
                '442e0290-246e-4129-968c-09f50423593c',
            ),
            text2: contentData.getContent(
                'd9882d9e-7d05-4e11-b001-5040966cef38',
            ),
        },
        {
            text: contentData.getContent(
                '68c89764-e212-45e6-9592-08f1e122f126',
            ),
            text2: contentData.getContent(
                '06644477-76ea-4c42-b4bb-2f52b69608af',
            ),
        },
    ];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge',
                className,
            )}>
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[auto_1.5rem_minmax(0,1fr)] lg:tw-grid-rows-[auto_1.5rem_minmax(0,1fr)] lg:tw-grid-cols-2 max-lg:tw-bg-secondary-400">
                    <div
                        className="tw-row-start-1 sc-text-headline tw-text-center"
                        dangerouslySetInnerHTML={{
                            __html: contentData.getContent(
                                '9a1d90fe-5e53-4fee-86fe-05353dd198f2',
                            ),
                        }}
                    />
                    <div className="tw-grid tw-row-start-3 tw-col-start-1 tw-z-10">
                        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-rows-2 tw-grid-rows-[auto_1.4rem_auto_auto] lg:tw-gap-6 tw-gap-x-10 max-lg:tw-self-end">
                            <ItemBuilder
                                items={items}
                                itemBuilder={(item, itemIndex) => (
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            'sc-small-shadow tw-bg-secondary-200 lg:tw-p-12 tw-px-2 tw-py-3 tw-rounded-lg tw-grid tw-text-center tw-content-center',
                                            itemIndex === 0
                                                ? 'tw-row-start-1 lg:tw-row-start-1 tw-col-start-1 max-lg:tw-mt-4 tw-justify-self-end'
                                                : itemIndex === 1
                                                ? 'tw-row-start-1 lg:tw-row-start-1 tw-col-start-2 max-lg:tw-mb-4 tw-justify-self-start'
                                                : itemIndex === 2
                                                ? 'tw-row-start-4 lg:tw-row-start-2 tw-col-start-1 tw-justify-self-end'
                                                : itemIndex === 3
                                                ? 'tw-row-start-3 lg:tw-row-start-2 tw-col-start-2 tw-justify-self-start'
                                                : '',
                                        )}
                                        key={itemIndex}>
                                        <div className="sc-text-body">
                                            {item.text}
                                        </div>
                                        <div className="sc-text-body">
                                            {item.text2}
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <VerticalSpacer className="tw-h-4" />
                        <div className="tw-text-title2 tw-text-secondary-800 tw-text-center tw-hidden lg:tw-block">
                            {contentData.getContent(
                                'cf1996bb-b003-40e7-b5bb-3c1e990115c5',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-3 tw-hidden lg:tw-block" />
                        <div className="lg:tw-grid tw-grid-cols-2 tw-gap-4 tw-hidden">
                            <Link
                                to=""
                                className="tw-grid tw-justify-self-end tw-h-[2.8rem] tw-w-[9.9rem] tw-bg-slate-300">
                                {/* <img src="" /> */}
                            </Link>
                            <Link
                                to=""
                                className="tw-h-[2.8rem] tw-w-[9.9rem] tw-bg-slate-300">
                                {/* <img src="" /> */}
                            </Link>
                        </div>
                    </div>
                    <div className="tw-col-start-1 lg:tw-col-start-2 lg:tw-row-start-1 tw-row-start-3 tw-row-span-full tw-grid tw-justify-self-center lg:tw-justify-self-end">
                        <div className="lg:tw-w-[16.6rem] tw-w-[9.8rem] tw-h-[20rem] lg:tw-h-full tw-bg-primary-400 tw-rounded-3xl">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <VerticalSpacer className="tw-h-4" />
                <div className="sc-cta-button lg:tw-hidden tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-justify-items-center tw-items-center">
                    {contentData.getContent(
                        '0cb1e9de-9371-4f6a-9e2b-a4f7efbc3f22',
                    )}
                    <GooglePlay className="tw-text-end tw-h-4 tw-w-4" />
                </div>
            </div>
        </div>
    );
}
