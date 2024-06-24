import {useKeenSlider} from 'keen-slider/react.js';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CarouselStyle2({
    items,
    className,
    keyIndex,
    slideClassName,
}: {
    items: Array<any>;
    className?: string;
    keyIndex?: number;
    slideClassName?: string;
}) {
    const [ref] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        mode: 'snap',
        slides: {
            // origin: 'center',
            perView: 'auto',
        },
    });
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'keen-slider tw-w-fit tw-mx-auto !tw-grid !tw-grid-flow-col !tw-auto-cols-[20rem]',
                className,
            )}
            key={keyIndex}
            ref={ref}>
            <ItemBuilder
                items={items}
                itemBuilder={(item, itemIndex) => (
                    <div
                        className={concatenateNonNullStringsWithSpaces(
                            'keen-slider__slide tw-flex-none tw-p-2 tw-h-full',
                        )}
                        key={itemIndex}>
                        {item}
                    </div>
                )}
            />
        </div>
    );
}
