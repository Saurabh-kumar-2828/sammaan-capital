import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {TestimonialsCard} from '../componentLibrary/reusableCards/testimonialsCard';
import {VerticalSpacer} from '../reusableComponents/verticalSpacer';
import {TestimonialsCarousel} from '../testimonialsCarousel';
import React, {useContext} from 'react';

export function TestimonialsSection({
    headingId,
    testimonials,
}: {
    headingId: string;
    testimonials: Array<{
        video: string;
        name: string;
        rating: string;
        location: string;
        description: string;
    }>;
}) {
    const contentData = useContext(ContentProviderContext);
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <div className="tw-py-10 lg:tw-py-20">
                    <div className="sc-text-headline tw-text-center">
                        {contentData.getContent(headingId)}
                    </div>
                    <VerticalSpacer className="tw-h-2 lg:tw-h-4" />
                    <div className="">
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
                                    state={testimonial.location}
                                    message={testimonial.description}
                                    key={testimonialIndex}
                                    className={`${
                                        activeSlideIndex != testimonialIndex
                                            ? 'tw-scale-[0.9] tw-h-full tw-opacity-50'
                                            : 'tw-h-full'
                                    } tw-duration-300`}
                                />
                            )}
                            slideClassName="tw-max-w-[28rem] tw-p-3 tw-transition-[height] tw-ease-linear tw-delay-200 tw-h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
