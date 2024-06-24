import {BlogsCard4} from '~/components/componentLibrary/blog/blogsCard4';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';

export function AwardSection({
    heading,
    items,
}: {
    heading: string;
    items: Array<any>;
}) {
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid">
                <div className="tw-text-center sc-text-headline">{heading}</div>
                <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
                <div className="tw-grid lg:tw-grid-cols-3 tw-grid-cols-2 lg:tw-gap-[2rem] tw-gap-x-2 tw-gap-y-4">
                    <ItemBuilder
                        items={items}
                        itemBuilder={(item, itemIndex) => (
                            <BlogsCard4
                                date={item.date}
                                title={item.title}
                                text={item.text}
                                key={itemIndex}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
