import React, {useState} from 'react';
import {useKeenSlider} from 'keen-slider/react.js';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CarouselStyle4({items, keyIndex}: {items: Array<any>; keyIndex?: number;}) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <>
            <div className="tw-relative">
                <div ref={sliderRef} className="keen-slider" key={keyIndex}>
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <div key={itemIndex} className="keen-slider__slide">{item}</div>
                        )}
                    />
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() ||
                                instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides
                                    .length -
                                    1
                            }
                        />
                    </>
                )}
                {loaded && instanceRef.current && (
                    <div className="tw-absolute tw-bottom-2 tw-left-[47%] tw-flex tw-gap-2">
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length,
                            ).keys(),
                        ].map(idx => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-border-none tw-w-3 tw-h-3 tw-rounded-full tw-my-1 tw-p-1 tw-cursor-pointer ',
                                        currentSlide === idx
                                            ? 'tw-bg-primary-500'
                                            : 'tw-bg-secondary-100',
                                    )}></button>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabled = props.disabled ? ' arrow--disabled' : '';
    return (
        <div
            onClick={props.onClick}
            className={`tw-absolute tw-top-[50%]  tw-cursor-pointer ${
                props.left ? 'tw-left-2' : 'tw-left-auto tw-right-2'
            } ${disabled}`}>
            {props.left && <ChevronLeft className="tw-h-8 tw-w-8" />}
            {!props.left && <ChevronRight className="tw-h-8 tw-w-8" />}
        </div>
    );
}
