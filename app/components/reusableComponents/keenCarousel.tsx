import {useKeenSlider} from "keen-slider/react.js";
import React, {useEffect, useMemo, useState} from "react";
import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function KeenCarousel<T>({
    items,
    itemBuilder,
    wrapperClassName,
    slideClassName,
    containerClassName,
    sliderButtonsPosition,
    multiplicationFactor,
    disablePrevButton,
}: {
    items: Array<T>;
    itemBuilder: (
        item: T,
        itemIndex: number,
        // activeSlideIndex: number,
        // scrollToPrevSlide: () => void,
        // scrollToNextSlide: () => void,
    ) => React.ReactNode;
    wrapperClassName?: string;
    slideClassName?: string;
    containerClassName?: string;
    sliderButtonsPosition?: string;
    multiplicationFactor?: number;
    disablePrevButton?: boolean;
}) {
    const [isInitialized, setIsInitialized] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    // const [canScrollPrev, setCanScrollPrev] = useState(false);
    // const [canScrollNext, setCanScrollNext] = useState(false);

    // function calculateCarouselState() {
    //     const progress = instanceRef.current?.track.details.progress ?? 0;
    //     const delta = 0.001;
    //     setCanScrollPrev(progress >= delta);
    //     setCanScrollNext(progress <= 1 - delta);
    // }

    function mod(n: number, m: number): number {
        return ((n % m) + m) % m;
    }

    const duplicateArray = (arr: Array<any>, factor: number) =>
        Array.from(
            {length: factor * arr.length},
            (_, i) => arr[i % arr.length],
        );

    const duplicatedItems = useMemo(
        () =>
            multiplicationFactor == undefined
                ? items
                : duplicateArray(items, multiplicationFactor),
        [],
    );

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: "auto",
            // origin: `${useIsScreenSizeBelow(576) ? "center" : "auto"}`,
        },
        mode: "snap",
        renderMode: "performance",
        // loop: true,

        created: () => {
            setIsInitialized(true);
            // calculateCarouselState();
        },
        slideChanged: () => {
            const index = instanceRef.current?.track.details.abs ?? 0;
            setActiveSlideIndex(mod(index, items.length));
        },
        // detailsChanged: () => {
        //     calculateCarouselState();
        // },
    });

    // const scrollToPrevSlide = () => instanceRef.current?.prev();
    // const scrollToNextSlide = () => instanceRef.current?.next();
    return (
        <React.Fragment>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    "tw-w-full tw-h-full tw-overflow-hidden",
                    wrapperClassName,
                )}
            >
                <div
                    className={concatenateNonNullStringsWithSpaces(
                        "keen-slider tw-duration-300",
                        isInitialized ? "tw-opacity-100" : "tw-opacity-0",
                        containerClassName,
                    )}
                    ref={sliderRef}
                >
                    {duplicatedItems.map((item, itemIndex) => (
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                "keen-slider__slide tw-flex-none tw-grid",
                                slideClassName,
                            )}
                            key={itemIndex}
                        >
                            {itemBuilder(
                                item,
                                itemIndex,
                                // activeSlideIndex,
                                // scrollToPrevSlide,
                                // scrollToNextSlide,
                            )}
                        </div>
                    ))}
                </div>

                {/* <div
                    className={concatenateNonNullStringsWithSpaces(
                        "tw-flex max-md:tw-hidden",
                        sliderButtonsPosition,
                    )}
                >
                    {isInitialized && instanceRef.current && (
                        <>
                            <button
                                className="tw-w-[52px] tw-h-[52px] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-yellow-button tw-border tw-border-light-100 disabled:tw-opacity-0"
                                onClick={(e) =>
                                    e.stopPropagation() ||
                                    instanceRef.current?.prev()
                                }
                                disabled={
                                    disablePrevButton
                                        ? activeSlideIndex === 0
                                        : false
                                }
                            >
                                <ChevronLeft className="tw-text-text-blue" />
                            </button>

                            <button
                                className="tw-w-[52px] tw-h-[52px] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-yellow-button tw-border tw-border-light-100 disabled:tw-opacity-50"
                                onClick={(e) => {
                                    e.stopPropagation() ||
                                        instanceRef.current?.next();
                                }}
                                // disabled={
                                //   activeSlideIndex ===
                                //   instanceRef.current.track.details.slides.length - 1
                                // }
                            >
                                <ChevronRight className="tw-text-text-blue" />
                            </button>
                        </>
                    )}
                </div> */}
            </div>

            <div className="tw-w-fit tw-mx-auto lg:tw-hidden db-px-screen-edge">
                {isInitialized && instanceRef.current && (
                    <div className="dots tw-flex tw-gap-2">
                        {[
                            ...Array(
                                multiplicationFactor
                                    ? instanceRef.current.track.details.slides
                                          .length / multiplicationFactor
                                    : instanceRef.current.track.details.slides
                                          .length,
                            ).keys(),
                        ].map((_, idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={concatenateNonNullStringsWithSpaces(
                                        "dot tw-w-3 tw-h-3 tw-rounded-full tw-cursor-pointer tw-z-10",
                                        activeSlideIndex % items.length ===
                                            idx % items.length
                                            ? "tw-bg-dot-highlight"
                                            : "tw-bg-dot-light",
                                    )}
                                ></button>
                            );
                        })}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
