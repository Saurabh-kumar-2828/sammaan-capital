export function BlogsCard5({
    img,
    title,
    text,
}: {
    img?: string;
    title: string;
    text: string;
}) {
    return (
        <div className="tw-grid tw-grid-cols-[8rem_minmax(0,1fr)] tw-h-full tw-items-center">
            <div className="tw-col-start-1 tw-bg-[#001CA8] tw-rounded-l-lg tw-h-full"></div>
            <div className="tw-col-start-2 tw-grid tw-grid-rows-[auto_minmax(0,1fr)] tw-p-4 tw-border tw-bg-secondary-200 sc-medium-shadow tw-border-secondary-100 tw-rounded-r-lg tw-h-full">
                <div className="sc-text-title1 tw-text-[#424242]">{title}</div>
                <div className="sc-text-title2 tw-text-secondary-600">
                    {text}
                </div>
            </div>
        </div>
    );
}
