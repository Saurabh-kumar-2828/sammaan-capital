import {EnvelopeFill, GeoAltFill, TelephoneFill} from 'react-bootstrap-icons';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

export function QueriesCard({
    image,
    title,
    location,
    contact,
    email,
}: {
    image?: string;
    title: string;
    location: string;
    contact: string;
    email: string;
}) {
    return (
        <div className="tw-bg-secondary-400 lg:tw-p-8 tw-p-6 tw-rounded-lg">
            <div className="tw-h-12 tw-w-12 tw-rounded-full tw-bg-primary-500 tw-grid tw-justify-center tw-items-center">
                {image ? <img src={image} alt="icone url" /> : null}
            </div>
            <VerticalSpacer className="tw-h-4" />
            <div className="sc-text-title1 tw-font-bold">{title}</div>
            <VerticalSpacer className="tw-h-6" />
            <div className="tw-grid lg:tw-gap-4 tw-gap-2">
                <div className="sc-text-body tw-text-secondary-800 tw-grid tw-grid-cols-[auto_minmax(0,1fr)] lg:tw-gap-4 tw-gap-2">
                    <GeoAltFill className="lg:tw-h-6 lg:tw-w-6 tw-h-5 tw-w-5" />
                    <div className="">{location}</div>
                </div>
                <div className="sc-text-body tw-text-secondary-800 tw-grid tw-grid-cols-[auto_minmax(0,1fr)] lg:tw-gap-4 tw-gap-2">
                    <TelephoneFill className="lg:tw-h-6 lg:tw-w-6 tw-h-5 tw-w-5" />
                    <div className="">{contact}</div>
                </div>
                <div className="sc-text-body tw-text-secondary-800 tw-grid tw-grid-cols-[auto_minmax(0,1fr)] lg:tw-gap-4 tw-gap-2">
                    <EnvelopeFill className="lg:tw-h-6 lg:tw-w-6 tw-h-5 tw-w-5" />
                    <div className="">{email}</div>
                </div>
            </div>
        </div>
    );
}
