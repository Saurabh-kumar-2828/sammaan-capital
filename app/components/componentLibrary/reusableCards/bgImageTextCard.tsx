export function BgImageTextCard({
    image,
    title,
    text,
}: {
    image?: string;
    title: string;
    text: string;
}) {
    return (
        <div className="tw-grid tw-grid-rows-[minmax(0,1fr)_auto_auto_1.5rem] tw-grid-cols-1 tw-rounded-lg tw-bg-secondary-500 tw-h-[25.4rem] tw-w-full">
            <div className="tw-row-start-1 tw-row-span-full tw-col-start-1 tw-col-span-full">
                {image}
            </div>

            <div className="tw-row-start-2 tw-px-[1.5rem] sc-text-headline tw-text-secondary-200">
                {title}
            </div>
            <div className="tw-row-start-3 tw-px-[1.5rem] sc-text-title2 tw-text-secondary-200">
                {text}
            </div>
        </div>
    );
}
