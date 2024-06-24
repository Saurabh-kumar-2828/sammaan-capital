import {GeoAltFill} from 'react-bootstrap-icons';

export function ProjectCard({
    image,
    location,
    projectName,
    text,
}: {
    image?: string;
    location: string;
    projectName: string;
    text: string;
}) {
    return (
        <div className="tw-bg-secondary-200 sc-medium-shadow tw-rounded-lg tw-h-full">
            <div className="tw-h-[254px] tw-bg-[#001CA8] tw-relative tw-rounded-t-lg">
                {/* <img className="" src={item.img} alt="image url" /> */}
                <div className="tw-absolute tw-top-4 tw-left-4 tw-bg-secondary-100 tw-px-2 tw-py-[2px] tw-rounded-sm tw-flex tw-gap-1 tw-items-center sc-text-icon">
                    <GeoAltFill />
                    {location}
                </div>
            </div>
            <div className="tw-p-4 tw-grid tw-auto-rows-max tw-gap-2">
                <div className="sc-text-title2 tw-font-semibold">{projectName}</div>
                <div className="sc-text-body tw-text-secondary-600">
                    {text}
                </div>
            </div>
        </div>
    );
}
