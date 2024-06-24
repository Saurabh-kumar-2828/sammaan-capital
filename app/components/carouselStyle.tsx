import React from 'react';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {useEmblaCarouselWithIndex} from '~/hooks/useEmblaCarouselWithindex';

export function CarouselStyle({
    items,
    className,
    slidesContainerClassName,
    controlsContainerClassName,
    chevronButtonsDivisionFactor,
    hideButtons,
    itemContainerClassName,
    emblaAlignProp,
}: {
    items: Array<any>;
    className?: string;
    slidesContainerClassName?: string;
    controlsContainerClassName?: string;
    chevronButtonsDivisionFactor?: number;
    hideButtons?: boolean;
    itemContainerClassName?: string;
    emblaAlignProp?: string;
}) {
    const {emblaRef, emblaApi, selectedIndex} = useEmblaCarouselWithIndex(
        {loop: true, align: emblaAlignProp == null ? 'start' : emblaAlignProp},
        8000,
    );
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-overflow-hidden tw-w-full',
                className,
            )}
            ref={emblaRef}>
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-grid tw-grid-flow-col tw-auto-cols-[100%] md:tw-auto-cols-[50%] lg:tw-auto-cols-[40%] xl:tw-auto-cols-auto tw-h-full"',
                    slidesContainerClassName,
                )}>
                <ItemBuilder
                    items={items}
                    itemBuilder={(item, itemIndex) => (
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-px-3',
                                itemContainerClassName,
                            )}
                            key={itemIndex}>
                            {item}
                        </div>
                    )}
                />
            </div>
            ​
            {!hideButtons && (
                <div
                    className={concatenateNonNullStringsWithSpaces('tw-h-4')}
                />
            )}
            ​
            <div
                className={concatenateNonNullStringsWithSpaces(
                    'tw-w-full tw-flex tw-flex-row tw-items-center lg:tw-justify-center lg:tw-gap-10',
                    controlsContainerClassName,
                    hideButtons ? 'tw-hidden' : 'tw-justify-between tw-block',
                )}>
                {!hideButtons && (
                    <button
                        type="button"
                        className="tw-rounded-full tw-p-1 tw-border tw-border-solid tw-border-secondary-900"
                        onClick={() => emblaApi?.scrollPrev()}>
                        <ChevronLeft className="tw-w-6 tw-h-6" />
                    </button>
                )}
                ​
                <div className="tw-flex tw-flex-row tw-gap-x-2">
                    <ItemBuilder
                        items={
                            chevronButtonsDivisionFactor == undefined
                                ? items
                                : items.slice(
                                      0,
                                      items.length /
                                          chevronButtonsDivisionFactor,
                                  )
                        }
                        itemBuilder={(_, scrollSnapIndex) => {
                            return (
                                <React.Fragment key={scrollSnapIndex}>
                                    <button
                                        className={concatenateNonNullStringsWithSpaces(
                                            'tw-w-2 tw-h-2 tw-rounded-full',
                                            scrollSnapIndex == selectedIndex ||
                                                (chevronButtonsDivisionFactor !=
                                                    undefined &&
                                                    scrollSnapIndex ===
                                                        selectedIndex %
                                                            (items.length /
                                                                chevronButtonsDivisionFactor))
                                                ? 'lg-bg-secondary-900'
                                                : 'lg-bg-secondary-300',
                                        )}
                                        key={scrollSnapIndex}
                                        onClick={() => {
                                            if (
                                                scrollSnapIndex !==
                                                selectedIndex
                                            ) {
                                                emblaApi?.scrollTo(
                                                    scrollSnapIndex,
                                                );
                                            }
                                        }}
                                    />
                                </React.Fragment>
                            );
                        }}
                    />
                </div>
                ​
                {!hideButtons && (
                    <button
                        type="button"
                        className="tw-rounded-full tw-p-1 tw-border tw-border-solid tw-border-secondary-900"
                        onClick={() => emblaApi?.scrollNext()}>
                        <ChevronRight className="tw-w-6 tw-h-6" />
                    </button>
                )}
            </div>
        </div>
    );
}
