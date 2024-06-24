import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

export function InterestRangCard({
    title,
    numberString,
    text1,
    text2,
}: {
    title: string;
    numberString: string;
    text1: string;
    text2?: string;
}) {
    return (
        <div className="lg:tw-px-6 lg:tw-py-4 lg:tw-bg-secondary-200 lg:sc-medium-shadow lg:tw-border lg:tw-border-secondary-100 lg:tw-rounded-lg">
            <div className="sc-text-tiltl2 lg:tw-text-secondary-600">
                {title}
            </div>
            <VerticalSpacer className="lg:tw-h-3 tw-h-2" />
            <div className="sc-text-title-bold">{numberString}</div>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />
            <div className="sc-text-icone tw-text-secondary-600">
                <div className="">{text1}</div>
                <div className="">{text2}</div>
            </div>
        </div>
    );
}
