import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { ItemBuilder } from "~/global-common-typescript/itemBuilder";
import { concatenateNonNullStringsWithSpaces } from "~/global-common-typescript/utilites/utilities";
import { useEmblaCarouselWithIndex } from "~/hooks/useEmblaCarouselWithindex";

export function UspCarousel({
    items,
    className,
    slidesContainerClassName,
    selectedContainerClassName,
    deselectedContainersClassName,
    disabledChevronClassName,
    snapDotsMultipleFactor,
    itemContainerClassName,
    hideButtons,
}: {
    items: Array<any>;
    className?: string;
    selectedContainerClassName?: string;
    deselectedContainersClassName?: string;
    slidesContainerClassName?: string;
    disabledChevronClassName?: string;
    snapDotsMultipleFactor?: number;
    itemContainerClassName?: string;
    hideButtons?: boolean;
}) {
    const { emblaRef, emblaApi, selectedIndex } = useEmblaCarouselWithIndex({
        loop: true,
    });
    let advancedItems: Array<any> = [];

    if (snapDotsMultipleFactor != null) {
        for (let i = 0; i < snapDotsMultipleFactor; i++) {
            items.map((item) => advancedItems.push(item));
        }
    } else {
        advancedItems = items;
    }

    // emblaApi?.reInit();
    useEffect(() => {
        // console.log(emblaApi);
        // emblaApi?.reInit();
        setTimeout(() => {
            emblaApi?.reInit();
        }, 100);
    }, [emblaApi]);

    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                "tw-py-4 tw-overflow-hidden tw-w-full",
                className
            )}
            ref={emblaRef}
        >
            <div
                className={concatenateNonNullStringsWithSpaces(
                    "tw-grid tw-grid-flow-col tw-auto-cols-[100%] md:tw-auto-cols-[50%] lg:tw-auto-cols-[33%]",
                    slidesContainerClassName
                )}
            >
                <ItemBuilder
                    items={advancedItems}
                    itemBuilder={(item, itemIndex) => (
                        // Non selected items are dimmed
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                `tw-px-3 tw-transition-[height] tw-ease-linear tw-delay-200 tw-h-full ${
                                    itemIndex !== selectedIndex
                                        ? "tw-opacity-50"
                                        : ""
                                }`,
                                itemContainerClassName
                            )}
                            key={itemIndex}
                        >
                            <div
                                className={concatenateNonNullStringsWithSpaces(
                                    "tw-h-full",
                                    itemIndex === selectedIndex
                                        ? selectedContainerClassName
                                        : deselectedContainersClassName
                                )}
                            >
                                {item}
                            </div>
                        </div>
                    )}
                />
            </div>

            <div className="tw-h-4" />
            {!hideButtons && (
                <div className="tw-w-full tw-flex tw-flex-row tw-justify-between tw-items-center lg:tw-justify-center lg:tw-gap-10 lgs-px-screen-edge-2">
                    <button
                        type="button"
                        className={concatenateNonNullStringsWithSpaces(
                            "tw-rounded-full tw-p-1 tw-border tw-border-solid tw-border-secondary-900 ",
                            selectedIndex === 0 ? disabledChevronClassName : ""
                        )}
                        onClick={() => emblaApi?.scrollPrev()}
                    >
                        <ChevronLeft className="tw-w-6 tw-h-6" />
                    </button>

                    <div className="tw-flex tw-flex-row tw-gap-x-2">
                        <ItemBuilder
                            items={
                                snapDotsMultipleFactor == undefined
                                    ? advancedItems
                                    : advancedItems.slice(
                                          0,
                                          advancedItems.length /
                                              snapDotsMultipleFactor
                                      )
                            }
                            itemBuilder={(_, scrollSnapIndex) => (
                                <React.Fragment key={scrollSnapIndex}>
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            "tw-w-2 tw-h-2 tw-rounded-full",
                                            scrollSnapIndex == selectedIndex ||
                                                (snapDotsMultipleFactor !=
                                                    undefined &&
                                                    scrollSnapIndex ===
                                                        selectedIndex %
                                                            (advancedItems.length /
                                                                snapDotsMultipleFactor))
                                                ? "lgs-bg-secondary-900"
                                                : "lgs-bg-secondary-300"
                                        )}
                                        key={scrollSnapIndex}
                                        onClick={() => {
                                            if (
                                                scrollSnapIndex !==
                                                selectedIndex
                                            ) {
                                                emblaApi?.scrollTo(
                                                    scrollSnapIndex
                                                );
                                            }
                                        }}
                                    />
                                </React.Fragment>
                            )}
                        />
                    </div>

                    <button
                        type="button"
                        className={concatenateNonNullStringsWithSpaces(
                            "tw-rounded-full tw-p-1 tw-border tw-border-solid tw-border-secondary-900",
                            selectedIndex === advancedItems.length - 1
                                ? disabledChevronClassName
                                : ""
                        )}
                        onClick={() => emblaApi?.scrollNext()}
                    >
                        <ChevronRight className="tw-w-6 tw-h-6" />
                    </button>
                </div>
            )}
        </div>
    );
}
