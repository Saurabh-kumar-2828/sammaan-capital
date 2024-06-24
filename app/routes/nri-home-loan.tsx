import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {CarouselStyle2} from '~/components/carouselStyle2';
import {CarouselStyle4} from '~/components/carouselStyle4';
import {HomeLoanRangeCard} from '~/components/componentLibrary/reusableCards/homeLoanRangeCard';
import {TestimonialsCard} from '~/components/componentLibrary/reusableCards/testimonialsCard';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {TwoLinerCard2} from '~/components/componentLibrary/reusableCards/twoLinerCard2';
import {getContentGenerator} from '~/components/contentGenerator';
import {EmbeddedYoutubeVideo} from '~/components/embeddedYoutubeVideo';
import {PageScaffold} from '~/components/pageScaffold';
import {AccordionComponents} from '~/components/reusableComponents/accordionComponents';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {EmiCalculator} from '~/components/reusableComponents/emiCalculatorCard';
import {AffordabilityCalculatorCard} from '~/components/reusableComponents/affordabilityCalculatorCard';
import {PmayCalculatorCard} from '~/components/reusableComponents/pmayCalculatorCard';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {NewsCornerSection} from '~/components/reusableSection/newsCornerSection';
import {OurBlogSection} from '~/components/reusableSection/ourBlogSection';
import {TestimonialsCarousel} from '~/components/testimonialsCarousel';

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
    // const userPreferences =
    //     await getUserPreferencesFromCookiesAndUrlSearchParameters(request);
    // if (userPreferences instanceof Error) {
    //     throw userPreferences;
    // }

    const vernacularData = getVernacularFromBackend('nriHomeLoan');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        // redirectTo: getRedirectToUrlFromRequest(request),
        // pageUrl: getUrlFromRequest(request),
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
                        <NriHomeLoan />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function NriHomeLoan() {
    const contentData = useContext(ContentProviderContext);
    return (
        <>
            <HeroSection />

            <VerticalSpacer className="tw-h-6" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: "Home Loan for NRI's",
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="tw-h-16" />

            <HomeLoanNriSection />
            {/* <TextWithCardSection
                heading=""
                description="ba930803-6f01-47b8-be7e-299f71701edd"
                condition1="cb2bfd0d-4e82-4648-83b7-e24cc36c1f21"
                condition2="65de4e50-2ef4-45a2-a0bf-51aab1113129"
                cardText="8ee0567b-08b0-4a62-9056-fafaa1228e3d"
                cardIntrestRate="efdf7985-20c2-49d9-937f-de7c3e81f7d9"
                buttonText="66454b7b-568d-40d4-bae3-61c09b55e1c5"
                buttonLink="/product/loan-against-property"
            /> */}

            <VerticalSpacer className="lg:tw-h-20  tw-h-10" />

            <WhyChooseUs className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20" />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <Testimonials headline="a88308bc-376c-45f2-85b3-2e8f9a9b9741" />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <StepstoTake className="tw-bg-secondary-400-ight lg:tw-py-20 tw-py-10" />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <CalculateEmi />

            <VerticalSpacer className="lg:tw-h-40 tw-h-20" />

            <ResourceCenter />

            <VerticalSpacer className="lg:tw-h-40 tw-h-20" />

            <OurBlogs />

            <VerticalSpacer className="lg:tw-h-40 tw-h-20" />

            <NewsCorner />

            <VerticalSpacer className="lg:tw-h-40 tw-h-20" />

            <FaqSection />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <HelpSection
                className="sc-px-screen-edge tw-bg-secondary-400 tw-py-20"
                heading={contentData.getContent(
                    '3f922a6e-45f9-45f0-b34c-126c2724ac85',
                )}
                subHeading={contentData.getContent(
                    'b25c9826-0ff7-4ff2-85e8-2d3416fe915f',
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
            imageLink: contentData.getContent(
                'a138bd9c-5d9c-4c51-8e20-92ff76703f92',
            ),
            textHeading: contentData.getContent(
                '0221b828-fa09-4df0-9ac7-acff40162347',
            ),
            buttonText: contentData.getContent(
                '8510369a-4468-48de-b190-61fe8e3e9379',
            ),
            buttonLink: contentData.getContent(
                '157628fe-2ce1-489b-b2e1-8503b309259f',
            ),
        },
        {
            imageLink: contentData.getContent(
                '58b84855-6384-4775-b3e5-668efca70319',
            ),
            textHeading: contentData.getContent(
                'a0088aa7-c336-4bd0-a994-44393450241e',
            ),
            buttonText: contentData.getContent(
                '66f6764a-db12-425c-b665-f7c3c3e9b2c1',
            ),
            buttonLink: contentData.getContent(
                'c5cc8603-4278-436b-9399-48250b9c70ac',
            ),
        },
    ];

    return (
        <div className="">
            <CarouselStyle4
                items={data.map((item, itemIndex) => (
                    <div
                        className="tw-grid tw-grid-cols-1 tw-grid-rows-[2rem_auto_minmax(0,1fr)_auto_2rem] lg:tw-grid-rows-[minmax(0,1fr)_auto_2.5rem_auto_minmax(0,1fr)]"
                        key={itemIndex}>
                        <div className="tw-h-[380px] tw-w-full tw-bg-[#001CA8] tw-col-start-1 tw-col-span-full tw-row-start-1 tw-row-span-full">
                            {item.imageLink}
                        </div>
                        <div
                            className="sc-text-banner tw-text-center lg:tw-text-left tw-row-start-2 sc-px-screen-edge tw-col-start-1"
                            dangerouslySetInnerHTML={{__html: item.textHeading}}
                        />

                        <div className="tw-row-start-4 sc-px-screen-edge tw-grid lg:tw-justify-self-start tw-justify-self-center tw-col-start-1">
                            <button className="sc-cta-button tw-text-secondary-100 tw-px-8">
                                {item.buttonLink}
                            </button>
                        </div>
                    </div>
                ))}
            />
        </div>
    );
}

function HomeLoanNriSection() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="sc-text-headline tw-text-center tw-text-secondary-800">
                    {contentData.getContent(
                        '98932b9b-859f-4b82-b09f-4b7f7cd256c0',
                    )}
                </div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="lg:tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr_auto)] tw-gap-x-8">
                    <div className="tw-col-start-1 tw-row-start-1 sc-text-title2 tw-text-secondary-800">
                        {contentData.getContent(
                            'd6bb42b0-f159-462c-b83a-5b113705d0d7',
                        )}
                    </div>
                    <div className="lg:tw-col-start-2 tw-row-start-1">
                        <HomeLoanRangeCard
                            text={contentData.getContent(
                                '820c1e0c-416d-4396-8518-f293a5da3f01',
                            )}
                            boldText={contentData.getContent(
                                '08db8dad-7758-4753-b5c2-1bcd19a60607',
                            )}
                            buttonText="Apply Now"
                            buttonLink={contentData.getContent('')}
                        />
                    </div>
                    <div className="lg:tw-col-start-1 lg:tw-col-span-full lg:tw-row-start-2 sc-text-caption tw-text-secondary-600">
                        {contentData.getContent(
                            'feb204d9-85c8-4975-b390-fe24c06b0e0a',
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function WhyChooseUs({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            image: contentData.getContent(
                '4a03e175-bc83-469d-9f77-480cd4411bc4',
            ),
            title: contentData.getContent(
                'c657cc9b-bfd5-4066-b6e0-4d476173df52',
            ),
            text: contentData.getContent(
                'c76798dd-d835-48f1-9bfb-7ac09f2bdc33',
            ),
        },
        {
            image: contentData.getContent(
                '09e27ab4-81ec-4ba9-8fdf-25e3762e53ab',
            ),
            title: contentData.getContent(
                '1b6bc646-3a78-49e3-9e62-8e0ee1a124ef',
            ),
            text: contentData.getContent(
                'd519a7ae-cc9b-42b5-b03b-aa0b7a18ee26',
            ),
        },
        {
            image: contentData.getContent(
                '713dcd5e-9567-4c34-b514-b880b0c061c2',
            ),
            title: contentData.getContent(
                'ef15358a-0ec2-4ae5-aabf-2815e1f8c8ba',
            ),
            text: contentData.getContent(
                'ff63645b-38e2-4037-b795-3b987fa1f6ff',
            ),
        },
        {
            image: contentData.getContent(
                '399233c8-2b3d-412e-bc5c-5aa28a090cc4',
            ),
            title: contentData.getContent(
                '37e53bb3-00ba-4ab9-a043-3c75d4acc729',
            ),
            text: contentData.getContent(
                '3bdbc464-14eb-4577-8e8e-8684c078adec',
            ),
        },
    ];

    return (
        <div className={className}>
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(
                            '1f231041-5197-4803-a74c-c2a5c2a013ec',
                        )}
                    </div>
                    <VerticalSpacer className=" lg:tw-h-8 tw-h-6" />
                    <div className="lg:tw-grid tw-grid-cols-4 tw-gap-8 tw-hidden">
                        <ItemBuilder
                            items={items}
                            itemBuilder={(item, itemIndex) => (
                                <TwoLinerCard
                                    className=""
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
                    items={items.map((item, itemIndex) => {
                        return (
                            <TwoLinerCard
                                className="!tw-bg-secondary-100 sc-xxsmall-shadow"
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

export function Testimonials({
    className,
    headline,
}: {
    className?: string;
    headline: string;
}) {
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
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
                'ef81382f-9b54-4cd1-a443-7ccc1917e336',
            ),
            rating: Number(
                contentData.getContent('9efa41c5-0835-4b8a-8818-a37278a61b36'),
            ),
            state: contentData.getContent(
                'cc53e01e-a8bb-4b55-b855-07d93c39beb7',
            ),
            message: contentData.getContent(
                '6bb1fdc1-d48e-48c9-accb-55cbc7583e6f',
            ),
        },
    ];
    return (
        <div className="tw-grid tw-gap-6 lg:tw-gap-8">
            <div className="sc-text-headline tw-text-center">
                {contentData.getContent(headline)}
            </div>
            <div className="tw-p-0 tw-overflow-hidden">
                <TestimonialsCarousel
                    items={testimonials}
                    itemBuilder={(
                        testimonial,
                        testimonialIndex,
                        activeSlideIndex,
                        scrollToPrevSlide,
                        scrollTONextSlide,
                    ) => (
                        <TestimonialsCard
                            video={testimonial.video}
                            rating={testimonial.rating}
                            name={testimonial.name}
                            state={testimonial.state}
                            message={testimonial.message}
                            className={`${
                                activeSlideIndex != testimonialIndex
                                    ? 'tw-scale-[0.85] tw-opacity-50 -tw-m-3'
                                    : 'tw-p-4'
                            } tw-duration-300`}
                        />
                    )}
                    slideClassName="tw-max-w-[28rem]"
                />
            </div>
        </div>
    );
}

function StepstoTake({className}: {className: string}) {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            image: contentData.getContent(
                '33dd9ea3-0f52-4be4-aade-3bf3e2acdd8c',
            ),
            title: contentData.getContent(
                '8e607272-9108-4c75-ab5d-7fbf2913a4d0',
            ),
            text: contentData.getContent(
                '57158435-ecfa-45ef-81b5-eef6ca1844ae',
            ),
        },
        {
            image: contentData.getContent(
                '50ba1107-f14f-44bb-bfd4-82e83410c9a7',
            ),
            title: contentData.getContent(
                '784f9e85-9717-493a-a71d-95894dfe93be',
            ),
            text: contentData.getContent(
                '0686bf92-1335-43c1-99fb-08142a9710fc',
            ),
        },
        {
            image: contentData.getContent(
                'a687a59c-7aa4-4f23-8fce-c3ec44fec6c8',
            ),
            title: contentData.getContent(
                'f05c3c8c-239a-4671-9369-2921b00711da',
            ),
            text: contentData.getContent(
                '9434b255-4c4a-4cae-a566-d1fcb668865c',
            ),
        },
        {
            image: contentData.getContent(
                '4f5e8630-b8d3-4301-bc09-667a62fcf6ac',
            ),
            title: contentData.getContent(
                '8f596b54-c80b-48dc-9396-a1f8eb8a21ae',
            ),
            text: contentData.getContent(
                '9216e635-1220-4465-9433-1d1a98c87ff3',
            ),
        },
    ];

    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-bg-secondary-400 lg:tw-py-20 tw-py-10',
                className,
            )}>
            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(
                            '97d3b19c-c935-4419-a9d0-c569baeab6b9',
                        )}
                    </div>
                    <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                    <div className="tw-hidden lg:tw-grid tw-grid-cols-4 tw-gap-8">
                        <ItemBuilder
                            items={items}
                            itemBuilder={(item, itemIndex) => (
                                <TwoLinerCard2
                                    className="!tw-bg-secondary-200 sc-xxsmall-shadow"
                                    cardNumber={`0${itemIndex + 1}/0${
                                        items.length
                                    }`}
                                    title={item.title}
                                    text={item.text}
                                    key={itemIndex}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="tw-grid lg:tw-hidden tw-pl-3">
                <CarouselStyle2
                    items={items.map((item, itemIndex) => {
                        return (
                            <TwoLinerCard2
                                className="!tw-bg-secondary-200 sc-xxsmall-shadow tw-h-full"
                                cardNumber={`0${itemIndex + 1}/0${
                                    items.length
                                }`}
                                title={item.title}
                                text={item.text}
                                key={itemIndex}
                            />
                        );
                    })}
                    slideClassName='tw-max-w-[18rem]'
                />
            </div>
        </div>
    );
}

function CalculateEmi() {
    const contentData = useContext(ContentProviderContext);

    const calculators = [
        contentData.getContent('8a86f873-6cb2-4660-86ea-747854391e38'),
        contentData.getContent('8964654f-7d64-4dff-a2ad-0214dc6a5bef'),
        contentData.getContent('a634bb26-51e5-4bfd-8b17-1385952e6489'),
        contentData.getContent('84e5ddab-1541-49ac-a5d0-f130ce83f05b'),
        contentData.getContent('ee69d41d-fbaf-412d-bd3b-58a7a1a6f62b'),
        contentData.getContent('a31bd47d-4ce0-48c2-b68e-987fa002bec0'),
    ];
    const [calTabIndex, setCalTabIndex] = useState(calculators[0]);
    return (
        <div
            className={concatenateNonNullStringsWithSpaces('tw-grid tw-gap-4')}>
            <div className="tw-text-center sc-text-headline">
                {contentData.getContent('5b6cfc5d-0123-48e3-9d4d-e572a2296387')}
            </div>
            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 lg:tw-justify-center tw-py-4 tw-overflow-x-scroll tw-px-6">
                {calculators.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-py-1 tw-px-2 tw-rounded-lg sc-text-button tw-h-full tw-whitespace-nowrap ${
                                calTabIndex === item
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setCalTabIndex(item)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className="sc-text-body tw-text-center sc-px-screen-edge">
                {contentData.getContent('a4f4926f-28e8-4e52-bb42-02e94f0a92e1')}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className="sc-px-screen-edge">
                {calTabIndex === calculators[0] ? (
                    <EmiCalculator className="" />
                ) : calTabIndex === calculators[1] ? (
                    <AffordabilityCalculatorCard />
                ) : calTabIndex === calculators[2] ? (
                    ''
                ) : calTabIndex === calculators[3] ? (
                    <PmayCalculatorCard />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

function ResourceCenter({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const centerInfo = [
        {
            title: contentData.getContent(
                '9d1ed014-a806-46c6-ae40-9f847bc045c6',
            ),
            description: contentData.getContent(
                '1da104c3-0bd5-4f46-b3eb-dc2cc9775be4',
            ),
        },
        {
            title: contentData.getContent(
                'c194e6f5-3d4f-414c-a28b-74af17cfcfab',
            ),
            description: contentData.getContent(
                'a5cec791-38a3-43c0-a2b7-0f2c26d73211',
            ),
        },
        {
            title: contentData.getContent(
                '0c91f169-c6e1-4b14-b31d-b2895060e591',
            ),
            description: contentData.getContent(
                'ccb98d63-bd8f-4006-b2b5-771e6639d080',
            ),
        },
        {
            title: contentData.getContent(
                '963edfc3-4539-4fe8-93d6-94d7d05d50f2',
            ),
            description: contentData.getContent(
                '26681065-dbae-4621-a160-e1db9d486c40',
            ),
        },
    ];
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'sc-px-screen-edge',
                className,
            )}>
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-gap-8 tw-gap-6 tw-w-full">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'b4eb45bc-c095-47d6-9f00-fcf2c143c603',
                    )}
                </div>
                <AccordionComponents items={centerInfo} className="tw-w-full" />
            </div>
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);
    const blogs = [
        {
            image: contentData.getContent(
                'caeab850-ede2-4603-b2d0-507289e1dd05',
            ),
            title: contentData.getContent(
                'ef03b814-045a-4178-9705-8293660e6428',
            ),
            text: contentData.getContent(
                '549826ff-1f5b-4734-9541-680a3f72f31a',
            ),

            date: contentData.getContent(
                '8bcccb49-e243-4edd-b61d-3947e94e4b0b',
            ),
        },
        {
            image: contentData.getContent(
                '5f31ac28-be9e-4a5e-a32d-d52315f66a9c',
            ),
            title: contentData.getContent(
                '26212db3-af20-4460-ade5-341f34185bd5',
            ),
            text: contentData.getContent(
                '10fccf13-d675-413b-9371-8c422e9f3ca6',
            ),
            date: contentData.getContent(
                '22feef69-823c-4da9-892b-4f27ad9d1db6',
            ),
        },
        {
            image: contentData.getContent(
                '58beff89-546a-4d7a-a5c2-0900b2c2e5c0',
            ),
            title: contentData.getContent(
                'e557b101-2af2-4dbc-91a8-49756b7777af',
            ),
            text: contentData.getContent(
                '540aa2a1-0f44-4ad7-a40f-0beb00f324ea',
            ),
            date: contentData.getContent(
                '42f2b59d-0ed7-4966-becb-9b85b4e29d72',
            ),
        },
        {
            image: contentData.getContent(
                '812827b5-3c76-4302-8d6d-0f4f936758be',
            ),
            title: contentData.getContent(
                '0f2c122b-6f82-4620-ba39-bcbb4d3ed4a0',
            ),
            text: contentData.getContent(
                '4018a800-d5bd-41c2-872d-9a0f60b9c2dd',
            ),
            date: contentData.getContent(
                '670f6c82-2250-41e0-8da3-d37240485665',
            ),
        },
        {
            image: contentData.getContent(
                '7a84123a-193f-4800-8493-aa2aa7f5b5c3',
            ),
            title: contentData.getContent(
                '52a10949-0056-4594-a187-0da674acf58a',
            ),
            text: contentData.getContent(
                '4cea2ccf-17d5-4f46-8393-731ad4ebb35d',
            ),
            date: contentData.getContent(
                'e9f131f6-668b-4f4f-ad71-f22891542802',
            ),
        },
        {
            image: contentData.getContent(
                '51c360cf-1657-4f9c-900c-4be41345fdb7',
            ),
            title: contentData.getContent(
                'a079ef6d-6737-4a71-bf21-cebf9d740836',
            ),
            text: contentData.getContent(
                'fddf975e-7001-42bf-bfaa-9c3178e192a7',
            ),
            date: contentData.getContent(
                'bdfa47fe-64e5-45a6-b8cb-045710e2b5a2',
            ),
        },
    ];
    return (
        <OurBlogSection
            heading={contentData.getContent(
                'c7acc424-ad47-4e2e-be82-5d0283817aca',
            )}
            items={blogs}
        />
    );
}

export function NewsCorner() {
    const contentData = useContext(ContentProviderContext);
    const news = [
        {
            image: contentData.getContent(
                '96f01687-954e-4518-9313-555148a4e106',
            ),
            date: contentData.getContent(
                '5e8b6d80-dce4-4dba-8a32-462545666711',
            ),
            title: contentData.getContent(
                '2891fbe6-10f1-499e-bee2-3a2e0cb36ded',
            ),
            text: contentData.getContent(
                'ae9c9a80-0b12-45c8-9599-03dfb19b43f8',
            ),
            // linkText: contentData.getContent(
            //     '8c7a7489-f072-4bc4-8994-3eb90042c928',
            // ),
            // linkUrl: contentData.getContent(
            //     'ba4237eb-0274-40d8-97e8-490d9bbd50f8',
            // ),
        },
        {
            image: contentData.getContent(
                '0b1151a5-b6da-4d64-a916-001d9c7d821f',
            ),
            date: contentData.getContent(
                '2e81e60f-48c8-4343-b874-1be7e39b9110',
            ),
            title: contentData.getContent(
                '48fde03d-af7f-424b-98ba-ae31e2134f44',
            ),
            text: contentData.getContent(
                '74f11d7c-783d-47a6-ad38-d4080d0b8ae4',
            ),
            // linkText: contentData.getContent(
            //     '78edf878-d839-401d-aaf1-df9744c5ba84',
            // ),
            // linkUrl: contentData.getContent(
            //     'f6a32085-0bb0-4563-8195-b33a53d253b3',
            // ),
        },
        {
            image: contentData.getContent(
                '96f01687-954e-4518-9313-555148a4e106',
            ),
            date: contentData.getContent(
                '5e8b6d80-dce4-4dba-8a32-462545666711',
            ),
            title: contentData.getContent(
                '2891fbe6-10f1-499e-bee2-3a2e0cb36ded',
            ),
            text: contentData.getContent(
                'ae9c9a80-0b12-45c8-9599-03dfb19b43f8',
            ),
            // linkText: contentData.getContent(
            //     '8c7a7489-f072-4bc4-8994-3eb90042c928',
            // ),
            // linkUrl: contentData.getContent(
            //     'ba4237eb-0274-40d8-97e8-490d9bbd50f8',
            // ),
        },
        {
            image: contentData.getContent(
                '0b1151a5-b6da-4d64-a916-001d9c7d821f',
            ),
            date: contentData.getContent(
                '2e81e60f-48c8-4343-b874-1be7e39b9110',
            ),
            title: contentData.getContent(
                '48fde03d-af7f-424b-98ba-ae31e2134f44',
            ),
            text: contentData.getContent(
                '74f11d7c-783d-47a6-ad38-d4080d0b8ae4',
            ),
            // linkText: contentData.getContent(
            //     '78edf878-d839-401d-aaf1-df9744c5ba84',
            // ),
            // linkUrl: contentData.getContent(
            //     'f6a32085-0bb0-4563-8195-b33a53d253b3',
            // ),
        },
        {
            image: contentData.getContent(
                '96f01687-954e-4518-9313-555148a4e106',
            ),
            date: contentData.getContent(
                '5e8b6d80-dce4-4dba-8a32-462545666711',
            ),
            title: contentData.getContent(
                '2891fbe6-10f1-499e-bee2-3a2e0cb36ded',
            ),
            text: contentData.getContent(
                'ae9c9a80-0b12-45c8-9599-03dfb19b43f8',
            ),
            // linkText: contentData.getContent(
            //     '8c7a7489-f072-4bc4-8994-3eb90042c928',
            // ),
            // linkUrl: contentData.getContent(
            //     'ba4237eb-0274-40d8-97e8-490d9bbd50f8',
            // ),
        },
        {
            image: contentData.getContent(
                '0b1151a5-b6da-4d64-a916-001d9c7d821f',
            ),
            date: contentData.getContent(
                '2e81e60f-48c8-4343-b874-1be7e39b9110',
            ),
            title: contentData.getContent(
                '48fde03d-af7f-424b-98ba-ae31e2134f44',
            ),
            text: contentData.getContent(
                '74f11d7c-783d-47a6-ad38-d4080d0b8ae4',
            ),
            // linkText: contentData.getContent(
            //     '78edf878-d839-401d-aaf1-df9744c5ba84',
            // ),
            // linkUrl: contentData.getContent(
            //     'f6a32085-0bb0-4563-8195-b33a53d253b3',
            // ),
        },
        {
            image: contentData.getContent(
                '96f01687-954e-4518-9313-555148a4e106',
            ),
            date: contentData.getContent(
                '5e8b6d80-dce4-4dba-8a32-462545666711',
            ),
            title: contentData.getContent(
                '2891fbe6-10f1-499e-bee2-3a2e0cb36ded',
            ),
            text: contentData.getContent(
                'ae9c9a80-0b12-45c8-9599-03dfb19b43f8',
            ),
            // linkText: contentData.getContent(
            //     '8c7a7489-f072-4bc4-8994-3eb90042c928',
            // ),
            // linkUrl: contentData.getContent(
            //     'ba4237eb-0274-40d8-97e8-490d9bbd50f8',
            // ),
        },
        {
            image: contentData.getContent(
                '0b1151a5-b6da-4d64-a916-001d9c7d821f',
            ),
            date: contentData.getContent(
                '2e81e60f-48c8-4343-b874-1be7e39b9110',
            ),
            title: contentData.getContent(
                '48fde03d-af7f-424b-98ba-ae31e2134f44',
            ),
            text: contentData.getContent(
                '74f11d7c-783d-47a6-ad38-d4080d0b8ae4',
            ),
            // linkText: contentData.getContent(
            //     '78edf878-d839-401d-aaf1-df9744c5ba84',
            // ),
            // linkUrl: contentData.getContent(
            //     'f6a32085-0bb0-4563-8195-b33a53d253b3',
            // ),
        },
    ];
    return (
        <NewsCornerSection
            news={news}
            heading={contentData.getContent(
                '6f37ac14-2cb4-4b58-91b4-c08c02070bd1',
            )}
        />
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                '74e4fc34-d301-4e64-8080-7128171fa5dc',
            ),
            answer: contentData.getContent(
                '474a7c23-2b32-4b9e-9394-9011c289864e',
            ),
        },
        {
            question: contentData.getContent(
                'fa59bba3-164f-4f7c-9d11-0510e69e59f3',
            ),
            answer: contentData.getContent(
                '69e3a01d-c0a5-40fd-b00c-16104118a3cd',
            ),
        },
        {
            question: contentData.getContent(
                '5913acf8-ea36-4d82-8cf8-9261c79eeef4',
            ),
            answer: contentData.getContent(
                '4aa31ca7-8681-4928-9796-af3ee0179e2a',
            ),
        },
        {
            question: contentData.getContent(
                'aa388701-68e9-4cf7-b226-9a2932b235b3',
            ),
            answer: contentData.getContent(
                '9b95a4d0-d7a6-4070-9acf-8422421d8e88',
            ),
        },
        {
            question: contentData.getContent(
                '9f57ec31-0199-4af2-987b-ab66ed64c7b4',
            ),
            answer: contentData.getContent(
                '0cd55fb0-66ee-4e92-9f88-6ab241bb6466',
            ),
        },
    ];

    return (
        <div className="sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />
        </div>
    );
}
