import {useKeenSlider} from "keen-slider/react.js";
import {useState} from "react";
import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function TestimonialsCarousel<T>({
    items,
    itemBuilder,
    wrapperClassName,
    slideClassName,
    containerClassName,
}: {
    items: Array<T>;
    itemBuilder: (item: T, itemIndex: number, activeSlideIndex: number, scrollToPrevSlide: () => void, scrollToNextSlide: () => void) => React.ReactNode;
    wrapperClassName?: string;
    slideClassName?: string;
    containerClassName?: string;
}) {
    const [isInitialized, setIsInitialized] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    function calculateCarouselState() {
        const progress = instanceRef.current?.track.details.progress ?? 0;
        const delta = 0.001;
        setCanScrollPrev(progress >= delta);
        setCanScrollNext(progress <= 1 - delta);
    }

    function mod(n: number, m: number): number {
        return ((n % m) + m) % m;
    }

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slides: {
                perView: "auto",
                origin: "center",
            },
            mode: "snap",
            renderMode: "performance",
            loop: true,

            created: () => {
                setIsInitialized(true);
                calculateCarouselState();
            },
            slideChanged: () => {
                const index = instanceRef.current?.track.details.abs ?? 0;
                setActiveSlideIndex(mod(index, items.length));
            },
            detailsChanged: () => {
                calculateCarouselState();
            },
        },
    );

    const scrollToPrevSlide = () => instanceRef.current?.prev();
    const scrollToNextSlide = () => instanceRef.current?.next();

    return (
        <div className={concatenateNonNullStringsWithSpaces("tw-w-full tw-h-full tw-relative tw-overflow-hidden", wrapperClassName)}>
            <div
                className={concatenateNonNullStringsWithSpaces("keen-slider tw-duration-300", isInitialized ? "tw-opacity-100" : "tw-opacity-0", containerClassName)}
                ref={sliderRef}
            >
                {items.map((item, itemIndex) => (
                    <div
                        className={concatenateNonNullStringsWithSpaces("keen-slider__slide tw-flex-none", slideClassName)}
                        key={itemIndex}
                    >
                        {itemBuilder(item, itemIndex, activeSlideIndex, scrollToPrevSlide, scrollToNextSlide)}
                    </div>
                ))}

            </div>

            <div
                className={concatenateNonNullStringsWithSpaces(
                    "max-md:tw-hidden tw-absolute tw-left-0 tw-inset-y-0 tw-z-10 tw-w-32 tw-bg-gradient-to-l tw-from-transparent gjo-to-foreground-100 tw-duration-200 tw-ease-in tw-pointer-events-none",
                    isInitialized == false || canScrollPrev ? "tw-opacity-100" : "tw-opacity-0",
                )}
            />

            <div
                className={concatenateNonNullStringsWithSpaces(
                    "max-md:tw-hidden tw-absolute tw-right-0 tw-inset-y-0 tw-z-10 tw-w-32 tw-bg-gradient-to-r tw-from-transparent gjo-to-foreground-100 tw-duration-200 tw-ease-in tw-pointer-events-none",
                    isInitialized == false || canScrollNext ? "tw-opacity-100" : "tw-opacity-0",
                )}
            />
        </div>
    );
}
