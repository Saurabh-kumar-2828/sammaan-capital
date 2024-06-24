import {Link} from '@remix-run/react';
import {ChevronRight, GeoAltFill, TelephoneFill} from 'react-bootstrap-icons';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';

export function LocationCard({
    heading,
    address,
    phoneNo,
    linkText,
    link,
}: {
    heading: string;
    address: string;
    phoneNo: string;
    linkText: string;
    link: string;
}) {
    return (
        <div className="tw-p-6 sc-medium-shadow tw-rounded-lg">
            <div className='sc-text-title1 tw-text-secondary-800'>{heading}</div>

            <VerticalSpacer className='tw-h-4' />

            <div className="tw-flex tw-gap-2 sc-text-title2">
                <GeoAltFill className='tw-text-secondary-800' />
                <div className='tw-text-secondary-600 tw-max-w-[256px]'>{address}</div>
            </div>

            <VerticalSpacer className='tw-h-2' />

            <div className="tw-flex tw-gap-2 tw-items-center sc-text-title2 tw-text-secondary-800">
                <TelephoneFill />
                <div>Tel: <span className='tw-text-secondary-600'>{phoneNo}</span></div>
            </div>

            <VerticalSpacer className='tw-h-6' />

            <div className="tw-flex tw-gap-2 tw-items-center sc-text-button tw-text-primary-500 tw-font-normal">
                <Link to={link}>{linkText}</Link>
                <ChevronRight/>
            </div>
        </div>
    );
}
