import type {LoaderFunction, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useContext, useState} from 'react';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {CarouselStyle2} from '~/components/carouselStyle2';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {BlogsCard2} from '~/components/componentLibrary/blog/blogsCard2';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
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
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {HelpSection} from '~/components/reusableSection/helpSection';
import {TestimonialsCarousel} from '~/components/testimonialsCarousel';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import useIsScreenSizeBelow from '~/hooks/useIsScreenSizeBelow';

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

    const vernacularData = getVernacularFromBackend('balanceTransferPage');

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
                        <BalanceTransferPage />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function BalanceTransferPage() {
    const contentData = useContext(ContentProviderContext);

    return (
        <>
            <HeroSection />

            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {
                        contentId: 'Home',
                        link: '/',
                    },
                    {
                        contentId: 'Home Loan Balance Transfer',
                        link: '#',
                    },
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <BalanceTransferSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <ChooseSammaanCapital />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <Testimonials headline="ba9457d0-cac9-42af-911f-a3a7687c1a28" />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <StepToHomeLoan />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <CalculateYourEmi />

            <VerticalSpacer className="tw-h-20 lg:tw-h-40" />

            <ResourceCenter />

            <VerticalSpacer className="tw-h-20 lg:tw-h-40" />

            <OurBlogs />

            <VerticalSpacer className="tw-h-20 lg:tw-h-40" />

            <NewsCorner />

            <VerticalSpacer className="tw-h-20 lg:tw-h-40" />

            <FaqSection />

            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

            <HelpSection
                className="sc-px-screen-edge lg:tw-bg-secondary-400 tw-bg-secondary-200 lg:tw-py-20 tw-py-10"
                heading={contentData.getContent(
                    'cfd92f5d-4bdb-4586-89b6-ef58a72c90a6',
                )}
                subHeading={contentData.getContent(
                    'd555b7fb-79fc-4b2e-92ad-188219417472',
                )}
                contentData={contentData}
            />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="tw-grid lg:tw-grid-rows-[minmax(0,1fr)_auto_2.5rem_auto_minmax(0,1fr)] tw-grid-rows-[3.2rem_auto_minmax(0,1fr)_auto_2.6rem]  tw-grid-cols-1">
            <div className="tw-bg-secondary-400 tw-h-[23.75rem] tw-w-full tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full"></div>
            <div
                className="tw-row-start-2 tw-col-start-1 sc-px-screen-edge sc-text-banner tw-text-center lg:tw-text-start"
                dangerouslySetInnerHTML={{
                    __html: contentData.getContent(
                        '3330658c-1893-4910-96ee-5e9ffc2c4879',
                    ),
                }}
            />
            <div className="lg:sc-px-screen-edge tw-px-[2.6rem] tw-row-start-4 tw-col-start-1 tw-grid lg:tw-justify-items-start">
                <button className="sc-cta-button">
                    {contentData.getContent(
                        'b4fb44bd-df8a-490a-81e6-a1e154981b4b',
                    )}
                </button>
            </div>
        </div>
    );
}

function BalanceTransferSection() {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid lg:tw-gap-8 tw-gap-6">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(
                        'b4fb44bd-df8a-490a-81e6-a1e154981b4b',
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:tw-gap-12 tw-gap-6">
                    <div className="">
                        <div className="sc-text-tiltl2 tw-text-secondary-600">
                            {contentData.getContent(
                                '5ed33e97-8675-4528-adec-3a76f80cef56',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-3" />
                        <div className="sc-text-caption tw-text-secondary-600 tw-hidden lg:tw-block">
                            {contentData.getContent(
                                '5cfc357e-a5f0-4b54-aed7-921b8d2fecf4',
                            )}
                        </div>
                    </div>
                    <div className="lg:tw-max-w-[30rem] lg:tw-w-full lg:tw-h-fit lg:tw-bg-secondary-200 lg:tw-border lg:tw-border-secondary-100 lg:sc-medium-shadow lg:tw-grid lg:tw-pt-12 lg:tw-pb-6 lg:tw-rounded-lg">
                        <div className="lg:sc-text-caption sc-text-title2 lg:tw-text-secondary-800 tw-text-secondary-600 lg:tw-text-center tw-text-start">
                            {contentData.getContent(
                                '511f1fb2-52bf-4c8c-9b14-c13c663930d1',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-2" />
                        <div className="lg:sc-text-title1 sc-text-headline tw-text-secondary-800 lg:tw-text-center">
                            {contentData.getContent(
                                'd9e38eaa-1088-41fe-bc7d-3fdedd9e16f6',
                            )}
                        </div>
                        <VerticalSpacer className="tw-h-6  tw-hidden lg:tw-block" />
                        <button className="tw-hidden sc-cta-button lgtw-grid tw-place-self-center tw-w-[14.5rem] tw-px-0">
                            {contentData.getContent(
                                'a9e9323f-c796-4786-a24e-23f071824380',
                            )}
                        </button>
                    </div>

                    <div className="sc-text-caption tw-text-secondary-600 tw-block lg:tw-hidden">
                        {contentData.getContent(
                            '5cfc357e-a5f0-4b54-aed7-921b8d2fecf4',
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChooseSammaanCapital() {
    const contentData = useContext(ContentProviderContext);

    const items = [
        {
            image: contentData.getContent(
                '664ef767-23bc-4b9e-99e3-deb1fe4ea71c',
            ),
            title: contentData.getContent(
                '6315acdf-8fd6-48f9-be88-00d53034502c',
            ),
            text: contentData.getContent(
                '62dc6898-a4d3-4f71-a903-15cb11870994',
            ),
        },
        {
            image: contentData.getContent(
                '5799e861-e195-4d20-944b-4e817ead4074',
            ),
            title: contentData.getContent(
                'e45998c9-6ca7-464c-a237-00c3adcfa5c7',
            ),
            text: contentData.getContent(
                'e45a9a46-f1f3-4029-ada8-b106249ccc0e',
            ),
        },
        {
            image: contentData.getContent(
                'f80b1abd-43ab-4cae-bdba-4703fd6f1688',
            ),
            title: contentData.getContent(
                '29cafc18-4f19-425b-afe9-8a82aded7e92',
            ),
            text: contentData.getContent(
                '21ea0f4f-de71-4343-87f1-fe66d635a065',
            ),
        },
        {
            image: contentData.getContent(
                '8d052831-0150-43ea-9c27-e9250dbe6249',
            ),
            title: contentData.getContent(
                '88f35617-9b72-4bac-b8b3-d71769010e50',
            ),
            text: contentData.getContent(
                'ba9d616d-940a-469e-8246-74bd4a4bb384',
            ),
        },
    ];
    return (
        <div className="tw-bg-secondary-400 lg:tw-py-20 tw-py-10">
            <div className="tw-max-w-7xl tw-mx-auto ">
                <div className="sc-px-screen-edge sc-text-headline tw-text-secondary-800 tw-text-center">
                    {contentData.getContent(
                        '7377d97f-81aa-47eb-944a-925279d35007',
                    )}
                </div>
                <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
                <div className="tw-hidden lg:tw-grid tw-grid-cols-4 tw-gap-8 sc-px-screen-edge">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <TwoLinerCard
                                key={itemIndex}
                                title={item.title}
                                text={item.text}
                            />
                        )}
                    />
                </div>
                <div className="tw-block lg:tw-hidden tw-pl-3 ">
                    <CarouselStyle2
                        items={items.map((item, itemIndex) => {
                            return (
                                <TwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                    imageClassName="!tw-justify-self-start"
                                    titleClassName="tw-text-start"
                                    textClassName="tw-text-start"
                                />
                            );
                        })}
                        slideClassName="tw-max-w-[17rem]"
                    />
                </div>
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
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
                '8407422c-d06d-4c8c-a8fa-5c22e9c7193f',
            ),
            rating: Number(
                contentData.getContent('4bb61937-c33d-4b53-baad-b09b031fd200'),
            ),
            state: contentData.getContent(
                'b2a5c910-3f8f-4b37-a7c7-07055a12d6a1',
            ),
            message: contentData.getContent(
                'e95c7d35-8171-4718-9303-c83933fd2f28',
            ),
        },
    ];
    return (
        <div>
            <div className="sc-text-headline tw-text-center">
                {contentData.getContent(headline)}
            </div>
            <VerticalSpacer className="tw-h-6 lg:tw-h-8" />
            <TestimonialsCarousel
                items={testimonials}
                itemBuilder={(
                    testimonial,
                    testimonialIndex,
                    activeSlideIndex,
                    scrollToPrevSlide,
                    scrollToNextSlide,
                ) => (
                    <TestimonialsCard
                        video={testimonial.video}
                        rating={testimonial.rating}
                        name={testimonial.name}
                        state={testimonial.state}
                        message={testimonial.message}
                        key={testimonialIndex}
                        className={`${
                            activeSlideIndex != testimonialIndex
                                ? 'tw-scale-[.85] tw-opacity-50 -tw-m-3'
                                : 'tw-p-4'
                        } tw-duration-300`}
                    />
                )}
                slideClassName="tw-max-w-[30rem]"
            />
        </div>
    );
}

function StepToHomeLoan() {
    const contentData = useContext(ContentProviderContext);

    const steps = [
        {
            image: contentData.getContent(
                '79159acd-4a32-4cdc-8ab0-dbe8a0b791b3',
            ),
            title: contentData.getContent(
                'cfceeac7-82c1-4ffc-818c-72172cf8eef0',
            ),
            text: contentData.getContent(
                '0a3c5bc4-86df-4161-b534-d02a89ccba03',
            ),
        },
        {
            image: contentData.getContent(
                '156370a8-e6ce-4fe0-9f49-ad14359a03a2',
            ),
            title: contentData.getContent(
                '0b13714e-b99a-41ca-af55-2315506a793a',
            ),
            text: contentData.getContent(
                'f6134fd5-e265-4f7c-8659-50d3e6f3f992',
            ),
        },
        {
            image: contentData.getContent(
                '2bab9c15-296a-434f-8220-799af016b6e5',
            ),
            title: contentData.getContent(
                '77ff562e-da84-4581-a2b8-142093b716f6',
            ),
            text: contentData.getContent(
                'd37457ac-a408-4f45-b607-8ac868d0a418',
            ),
        },
        {
            image: contentData.getContent(
                '562bb6e0-c72a-4b4d-b675-30d25fb94686',
            ),
            title: contentData.getContent(
                'e7ff3dc9-ec85-4155-abb5-206099d3e295',
            ),
            text: contentData.getContent(
                '37988a04-dbaf-4c6b-b7bd-f84b530a4c04',
            ),
        },
    ];
    return (
        <div className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-px-screen-edge tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '67934bac-6fb6-4f52-8e29-a676e60a3a77',
                    )}
                </div>
                <div className="sc-px-screen-edge tw-hidden lg:tw-grid tw-grid-cols-4 tw-gap-8">
                    <ItemBuilder
                        items={steps}
                        itemBuilder={(item, itemIndex) => (
                            <TwoLinerCard2
                                cardNumber={`0${itemIndex + 1}/0${
                                    steps.length
                                }`}
                                text={item.text}
                                title={item.title}
                            />
                        )}
                    />
                </div>

                <div className="tw-grid lg:tw-hidden tw-pl-3">
                    <CarouselStyle2
                        items={steps.map((item, itemIndex) => {
                            return (
                                <TwoLinerCard2
                                    className="!tw-bg-secondary-200 sc-xxsmall-shadow tw-h-full"
                                    cardNumber={`0${itemIndex + 1}/0${
                                        steps.length
                                    }`}
                                    title={item.title}
                                    text={item.text}
                                    key={itemIndex}
                                />
                            );
                        })}
                        slideClassName="tw-max-w-[17rem]"
                    />
                </div>
                <div className="sc-px-screen-edge tw-grid">
                    <button className="lg:tw-hidden tw-grid sc-cta-button">
                        {contentData.getContent(
                            '9af61317-894c-4059-b9f9-8af246901fa4',
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

function CalculateYourEmi({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const tabs = [
        contentData.getContent('6cb5ea94-7b10-4be1-a7ad-2b8c21176c81'),
        contentData.getContent('3d192092-5fda-47ac-b2df-60ce8ef718da'),
        contentData.getContent('8a71e84b-c86c-4f68-924b-009f3682b7a9'),
        contentData.getContent('da7c1573-7737-4914-a7ca-6aff9b05df4c'),
    ];
    const [selectedTabs, setSelectedTabs] = useState(tabs[0]);
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-grid tw-gap-4',
                className,
            )}>
            <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                {contentData.getContent('29780653-e206-4f5c-a0ad-76545e2a32ae')}
            </div>
            <div className="tw-border tw-border-secondary-600 tw-border-opacity-[20%] tw-grid tw-grid-flow-col tw-gap-4 tw-justify-center tw-py-4 tw-h-full">
                {tabs.map((item, itemIndex) => (
                    <div key={itemIndex}>
                        <button
                            className={`lg:tw-p-4 lg:tw-px-5 tw-py-1 tw-px-2 tw-rounded-lg sc-text-button tw-h-full ${
                                selectedTabs === item
                                    ? 'sc-tab-button'
                                    : 'tw-bg-secondary-400'
                            }`}
                            onClick={() => setSelectedTabs(item)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className="sc-text-caption tw-text-center tw-text-secondary-600 sc-px-screen-edge">
                {contentData.getContent('d7dd44b7-8f85-4d31-a921-120c6d1547b1')}
            </div>
            <div className="sc-px-screen-edge">
                {selectedTabs === tabs[0] ? (
                    <EmiCalculator className="" />
                ) : selectedTabs === tabs[1] ? (
                    <AffordabilityCalculatorCard />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

function ResourceCenter({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const items = [
        {
            title: contentData.getContent(
                '049a0f3a-b43f-4ab2-8bc6-de598aa64fb5',
            ),
            description: contentData.getContent(
                '1ea3a5cc-90e0-4c63-8afc-8d8a9d0c3c68',
            ),
        },
        {
            title: contentData.getContent(
                '332578fd-b805-44d3-87ee-1698fa8a43f8',
            ),
            description: contentData.getContent(
                '7f5ed14a-966c-4828-bc9e-320e61bc7375',
            ),
        },
        {
            title: contentData.getContent(
                '3a958725-c72b-4224-b3df-e15615f6b2bd',
            ),
            description: contentData.getContent(
                'cbfca81a-b963-4e4d-bb21-8ee541f47333',
            ),
        },
        {
            title: contentData.getContent(
                '02c1605e-5fbf-43a8-8944-3548da42ff63',
            ),
            description: contentData.getContent(
                '34faf226-191c-4190-919b-bfa42fe7ba81',
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
                        '779322b4-cc1d-40ad-a6ee-385d121fd36a',
                    )}
                </div>
                <AccordionComponents
                    items={items}
                    className="tw-w-full tw-bg-secondary-200"
                />
            </div>
        </div>
    );
}

function OurBlogs() {
    const contentData = useContext(ContentProviderContext);

    const isScreenSizeBelow = useIsScreenSizeBelow(1024);

    const [isViewMore, setIsViewMore] = useState(false);

    const blogs = [
        {
            image: contentData.getContent(
                '5c2af689-cd14-4acd-b071-31378d879632',
            ),
            title: contentData.getContent(
                '74734ca5-ee66-4747-82cb-f365c3269548',
            ),
            text: contentData.getContent(
                '1d9459c6-74e2-4c35-bb5a-f7688e07ee48',
            ),
            date: contentData.getContent(
                'c3ab5578-b8e2-40e8-b13b-3bd9d1ada9d9',
            ),
        },
        {
            image: contentData.getContent(
                '1299fecf-f1cf-451b-840b-d760b7a79bcc',
            ),
            title: contentData.getContent(
                '50844ed3-e78b-4bfd-b764-e22da46af86a',
            ),
            text: contentData.getContent(
                '0ac546e9-424a-4255-89f3-2b7f5ebe6e64',
            ),
            date: contentData.getContent(
                'ef9faa49-ecb6-4a15-a315-4d9d986dd3ae',
            ),
        },
        {
            image: contentData.getContent(
                'b0c05d6f-98d1-42b7-bd0b-939a5e706e07',
            ),
            title: contentData.getContent(
                'f2408a93-a575-4f19-80b2-d7e5c8607376',
            ),
            text: contentData.getContent(
                'afb3093f-69f8-4a27-979b-3f1ba7ddc7f1',
            ),
            date: contentData.getContent(
                'f067df1f-65ef-4bfc-9cbc-1f0af5c41614',
            ),
        },
        {
            image: contentData.getContent(
                'ac992e7c-4e2c-4676-af67-9e40908b7b08',
            ),
            title: contentData.getContent(
                'a522bc5d-e3fe-474f-98e5-f4990c321856',
            ),
            text: contentData.getContent(
                'a9d6f857-2f8b-40fc-92ed-04c77fcba0af',
            ),
            date: contentData.getContent(
                '229df2e9-f1d6-4979-9e5e-7da06c72a834',
            ),
        },
        {
            image: contentData.getContent(
                'e2bba964-c420-4ccd-941e-a1e0c626a399',
            ),
            title: contentData.getContent(
                '0c1c8584-8c8a-4b4f-a65f-0b1b8cd1d084',
            ),
            text: contentData.getContent(
                'b2d6ff0d-c38a-45b0-99b8-381c567d5873',
            ),
            date: contentData.getContent(
                '0e5c05c6-f802-4121-8aa6-07692f188ad6',
            ),
        },
        {
            image: contentData.getContent(
                'c50df9f8-9751-4c7c-895c-47caeb7ac85d',
            ),
            title: contentData.getContent(
                '29f6d030-4aad-40bb-8459-8b29ed365e53',
            ),
            text: contentData.getContent(
                'd0760aa6-acca-47c7-8574-871df7f26b80',
            ),
            date: contentData.getContent(
                'd34b0239-c032-4441-a2b1-d3fae80b3655',
            ),
        },
    ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-text-headline tw-text-center tw-text-secondary-800">
                    {contentData.getContent(
                        '6e37bee0-fc44-4e69-bed7-bc445283b0fb',
                    )}
                </div>

                {isScreenSizeBelow && !isViewMore ? (
                    <div className="tw-grid tw-grid-cols-1 tw-grid-rows-3 tw-gap-2">
                        <ItemBuilder
                            items={blogs.slice(0, 3)}
                            itemBuilder={(item, itemIndex) => (
                                <BlogsCard
                                    date={item.date}
                                    title={item.title}
                                    text={item.text}
                                />
                            )}
                        />
                    </div>
                ) : (
                    <div className="tw-grid lg:tw-grid-cols-3 lg:tw-grid-rows-2 tw-grid-cols-1 tw-grid-rows-6 tw-gap-2 lg:tw-gap-6">
                        <ItemBuilder
                            items={blogs}
                            itemBuilder={(item, itemIndex) => (
                                <BlogsCard
                                    date={item.date}
                                    title={item.title}
                                    text={item.text}
                                />
                            )}
                        />
                    </div>
                )}

                <button
                    className="sc-cta-outline-button tw-grid lg:tw-hidden"
                    onClick={() => setIsViewMore(prev => !prev)}>
                    {!isViewMore ? 'View More Blogs' : 'See Less Blogs'}
                </button>
            </div>
        </div>
    );
}

export function NewsCorner({className}: {className?: string}) {
    const contentData = useContext(ContentProviderContext);
    const news = [
        {
            img: contentData.getContent('2c3434af-3cab-4bcf-ad3f-e2e183f45f30'),
            date: contentData.getContent(
                '448ddb0c-65c9-4b5e-b0bb-610618f9b926',
            ),
            title: contentData.getContent(
                '9dc93aa1-608b-4903-a35e-061788029446',
            ),
            text: contentData.getContent(
                '7d0a00af-9aa0-4d74-85d9-055d0bc3c880',
            ),
            linkText: contentData.getContent(
                '51b71adb-c74b-442f-b03d-b6774695bc05',
            ),
            linkUrl: contentData.getContent(
                'e250b070-b632-4493-bf49-f9c961a8cbc1',
            ),
        },
        {
            img: contentData.getContent('b670f9ed-989c-4c7c-9212-d19b88283663'),
            date: contentData.getContent(
                'f52b0ae8-cdd0-469a-9503-ee736e135e8d',
            ),
            title: contentData.getContent(
                '0a7455b5-1246-46df-a59b-077a553e0abb',
            ),
            text: contentData.getContent(
                'a9d2c040-b493-4e12-a9db-c27423cbc310',
            ),
            linkText: contentData.getContent(
                '25a4d2c8-8ad9-4be6-82fc-c5a95b853598',
            ),
            linkUrl: contentData.getContent(
                '1bf4f493-77fb-4fc8-956a-24f46ced0b09',
            ),
        },
        {
            img: contentData.getContent('ffa4a0b6-37e7-4d3c-98f6-54d7ff25d9f5'),
            date: contentData.getContent(
                '782e2ceb-5280-4074-b693-59d88f2424f0',
            ),
            title: contentData.getContent(
                'e7c255cc-08db-41fa-861b-c56b62d272b5',
            ),
            text: contentData.getContent(
                '1c402362-0d1a-4d92-92ca-deb28e562143',
            ),
            linkText: contentData.getContent(
                '51211d76-330b-406b-b8f7-959037a011c4',
            ),
            linkUrl: contentData.getContent(
                'e412d463-15c7-4276-b65f-1885161c96c4',
            ),
        },
        {
            img: contentData.getContent('2c3434af-3cab-4bcf-ad3f-e2e183f45f30'),
            date: contentData.getContent(
                '448ddb0c-65c9-4b5e-b0bb-610618f9b926',
            ),
            title: contentData.getContent(
                '9dc93aa1-608b-4903-a35e-061788029446',
            ),
            text: contentData.getContent(
                '7d0a00af-9aa0-4d74-85d9-055d0bc3c880',
            ),
            linkText: contentData.getContent(
                '51b71adb-c74b-442f-b03d-b6774695bc05',
            ),
            linkUrl: contentData.getContent(
                'e250b070-b632-4493-bf49-f9c961a8cbc1',
            ),
        },
        {
            img: contentData.getContent('b670f9ed-989c-4c7c-9212-d19b88283663'),
            date: contentData.getContent(
                'f52b0ae8-cdd0-469a-9503-ee736e135e8d',
            ),
            title: contentData.getContent(
                '0a7455b5-1246-46df-a59b-077a553e0abb',
            ),
            text: contentData.getContent(
                'a9d2c040-b493-4e12-a9db-c27423cbc310',
            ),
            linkText: contentData.getContent(
                '25a4d2c8-8ad9-4be6-82fc-c5a95b853598',
            ),
            linkUrl: contentData.getContent(
                '1bf4f493-77fb-4fc8-956a-24f46ced0b09',
            ),
        },
        {
            img: contentData.getContent('ffa4a0b6-37e7-4d3c-98f6-54d7ff25d9f5'),
            date: contentData.getContent(
                '782e2ceb-5280-4074-b693-59d88f2424f0',
            ),
            title: contentData.getContent(
                'e7c255cc-08db-41fa-861b-c56b62d272b5',
            ),
            text: contentData.getContent(
                '1c402362-0d1a-4d92-92ca-deb28e562143',
            ),
            linkText: contentData.getContent(
                '51211d76-330b-406b-b8f7-959037a011c4',
            ),
            linkUrl: contentData.getContent(
                'e412d463-15c7-4276-b65f-1885161c96c4',
            ),
        },
    ];
    return (
        <div className={className}>
            <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                {contentData.getContent('ec3b32a9-9cd8-4377-b7dd-3815b44d446f')}
            </div>
            <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
            <div className="">
                <CarouselStyle2
                    items={news.map((item, itemIndex) => {
                        return (
                            <BlogsCard2
                                date={item.date}
                                title={item.title}
                                text={item.text}
                                linkText={item.linkText}
                                linkUrl={item.linkUrl}
                                key={itemIndex}
                            />
                        );
                    })}
                    slideClassName="tw-max-w-[35rem]"
                />
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                '00057b9f-613a-4151-bd96-62229470fefe',
            ),
            answer: contentData.getContent(
                '83185fa0-c7f8-409e-b486-a8bcbe7c32b8',
            ),
        },
        {
            question: contentData.getContent(
                'c4181045-d8da-4e28-b9a4-2f87645c9cdb',
            ),
            answer: contentData.getContent(
                '91315e0c-cfcb-444d-892a-1f5a265d5838',
            ),
        },
        {
            question: contentData.getContent(
                '08f2f1e2-e4f8-4f4c-97ec-49341c79d022',
            ),
            answer: contentData.getContent(
                'f8f751d9-eaf2-48de-a29e-48c91f1b9448',
            ),
        },
        {
            question: contentData.getContent(
                '8c341ef1-d884-4bbc-b6e5-96ea68d43d2c',
            ),
            answer: contentData.getContent(
                '891baf32-5035-4bf2-87e5-11ec4d06b18e',
            ),
        },
        {
            question: contentData.getContent(
                '143a4ddc-dc1e-4338-bbdf-6967ba91b861',
            ),
            answer: contentData.getContent(
                '745507f4-e866-4418-93a2-360eb9693efa',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />
        </div>
    );
}
