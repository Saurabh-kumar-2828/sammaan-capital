export function BlogsCard4({
    image,
    title,
    date,
    text,
}: {
    image?: string;
    title: string;
    date: string;
    text: string;
}) {
    return (
        <div className="tw-grid tw-grid-rows-2 tw-border tw-border-secondary-100 tw-bg-secondary-200 sc-medium-shadow">
            <div className="tw-row-start-1 tw-bg-[#001CA8] tw-rounded-t-lg"></div>
            <div className="tw-row-start-2 sc-card tw-p-4 tw-rounded-b-lg tw-grid tw-gap-2 tw-grid-rows-[auto_minmax(0,1fr)_auto]">
                <div className="sc-text-title1">{title}</div>
                <div className="sc-text-body tw-text-secondary-600">{text}</div>
                <div className="sc-text-title2">{date}</div>
            </div>
        </div>
    );
}
