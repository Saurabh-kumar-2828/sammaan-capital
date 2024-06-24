import {useKeenSlider} from 'keen-slider/react.js';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function CarouselStyle3({
    items,
    className,
    keyIndex,
}: {
    items: Array<any>;
    className?: string;
    keyIndex?: number;
}) {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'snap',
        slides: {
            origin: 'center',
            perView: 'auto',
        },
    });
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'keen-slider',
                className,
            )}
            key={keyIndex}
            ref={ref}>
            <ItemBuilder
                items={items}
                itemBuilder={(item, itemIndex) => (
                    <div
                        className={concatenateNonNullStringsWithSpaces(
                            'keen-slider__slide tw-p-3',
                        )}
                        key={itemIndex}>
                        {item}
                    </div>
                )}
            />
        </div>
    );
}
