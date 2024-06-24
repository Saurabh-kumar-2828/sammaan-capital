// export function FooterComponent() {
//     return (
//         <div className="tw-bg-[#D9D9D9] tw-h-28 tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center sc-text-headline">
//             Footer
//         </div>
//     );
// }

import {Link} from '@remix-run/react';
import {useContext} from 'react';
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from 'react-bootstrap-icons';
import {Accordion} from '~/components/reusableComponents/accordion';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';

export function FooterComponent() {
    const contentData = useContext(ContentProviderContext);

    const ourOfferings = [
        {
            title: contentData.getContent(
                '06a37dfb-57c3-4f22-a967-14e031c5c450',
            ),
            link: '/home-loan-app',
        },
        {
            title: contentData.getContent(
                'b63c302b-0f25-4e27-be0b-a1952397a46c',
            ),
            link: '/home-loan/balance-transfer',
        },
        {
            title: contentData.getContent(
                '50179052-5f06-444e-9374-e61d0487fb8e',
            ),
            link: '/nri-home-loan',
        },
        {
            title: contentData.getContent(
                '550851ba-dcfd-4aa5-a04d-e76b41e3d430',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '12e3553b-da7f-4d49-9125-bf3c9ca15b3d',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'bfb2f99b-9a11-429a-8b7f-6405e36a259a',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '626498be-2d60-430e-b1be-efe48c8c7900',
            ),
            link: '/home-loan/loan-against-property-interest-rate',
        },
    ];

    const aboutUs = [
        {
            title: contentData.getContent(
                'e10e8f36-176b-4db2-ae57-f35a4f7affae',
            ),
            link: '/about-us/overview',
        },
        {
            title: contentData.getContent(
                'ef4741fe-bbd8-4c78-ae09-eb679df95397',
            ),
            link: '/about-us/management-team',
        },
        {
            title: contentData.getContent(
                '112ad47f-1cbd-4191-86b4-460d1a5a8c10',
            ),
            link: '/about-us/board-of-directors',
        },
        {
            title: contentData.getContent(
                'bd692edc-1ce8-4efe-a4c2-575dfe49b713',
            ),
            link: '/about-us/awards-and-accolades',
        },
    ];

    const calculators = [
        {
            title: contentData.getContent(
                'be6c493d-c568-4410-8bf9-8f3eadd51fd4',
            ),
            link: '/emi-calculator',
        },
        {
            title: contentData.getContent(
                'a928b10b-628e-47c1-9cc7-f4bc76812a14',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '5de0e0b5-9d47-49c2-9b97-354d4fd64769',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'd15600e6-d87c-4804-ac60-2d8f447ff5ca',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'f0b529ec-e05a-4425-a182-7ad387faafef',
            ),
            link: '/pmay-calculator',
        },
        {
            title: contentData.getContent(
                '76faf409-fb05-4845-b2ab-7dd2632f0cf8',
            ),
            link: '/affordability-calculator',
        },
    ];

    const contactUs = [
        {
            title: contentData.getContent(
                'e003fc74-47bd-43d4-95cd-cda39f301b5f',
            ),
            link: '/contact-us/customer-support',
        },
        {
            title: contentData.getContent(
                '97f31122-1ff8-4fe3-a9a8-86d9ab8e8bf9',
            ),
            link: '/contact-us/locate-us',
        },
        {
            title: contentData.getContent(
                '284f49b3-47a1-4cb6-a2f8-e7593b734e3c',
            ),
            link: '/contact-us/investor-media-relations',
        },
        {
            title: contentData.getContent(
                '689f2e1a-18f4-4a89-adf6-49d3fbb01216',
            ),
            link: '/eclgs',
        },
        {
            title: contentData.getContent(
                '1ada4b59-f2ad-4fcf-948a-a221577fe83b',
            ),
            link: '/roi-range',
        },
        {
            title: contentData.getContent(
                'ca2cda32-32a0-4a73-b942-44c7ed72712b',
            ),
            link: '/roi-switch-policy',
        },
    ];

    const resourceCentre = [
        {
            title: contentData.getContent(
                'bef9908f-3d79-4a68-8ad5-186aeef0d757',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '38d5d280-2792-4129-bfa3-5dc70c645806',
            ),
            link: '/home-loan/home-loan-interest-rate',
        },
        {
            title: contentData.getContent(
                'b01aa581-1171-4dfc-8e31-62bc0d695980',
            ),
            link: '/home-loan/home-loan-fees-and-charges',
        },
        {
            title: contentData.getContent(
                '179d756b-e8df-4a1c-9879-89cbc09d052e',
            ),
            link: '/lap-prepayment-charges',
        },
        {
            title: contentData.getContent(
                '214f5e34-1143-424e-9199-75ba7e9f41df',
            ),
            link: '/faqs',
        },
        {
            title: contentData.getContent(
                'ee765c3b-2057-422a-ba04-a71d8b6ce342',
            ),
            link: '/video-center',
        },
        {
            title: contentData.getContent(
                'd6009009-6b8a-4f3c-be4b-3c67684bdab1',
            ),
            link: '/blogs',
        },
        {
            title: contentData.getContent(
                'aa557a1b-b158-4059-845a-c1f4bb3e16d6',
            ),
            link: '/downloads',
        },
        {
            title: contentData.getContent(
                'fff77d51-7ecd-4567-86f1-9c4c8ecc2a1b',
            ),
            link: '/investor-relations/financial-reports',
        },
        {
            title: contentData.getContent(
                'd2a61e8f-dd59-47d0-91e4-c9249ff774c5',
            ),
            link: '#',
        },
    ];

    const company = [
        {
            title: contentData.getContent(
                '70b2c4f5-5750-47fa-85b4-738437329a64',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'c660f7aa-091c-4ab2-8084-0e5ab67bd8ed',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '9dd860ac-40ab-4d6e-8d5c-513983771954',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '24a6c84c-e716-4f6b-867f-9e7323e8327b',
            ),
            link: '/become-a-partner',
        },
        {
            title: contentData.getContent(
                'e73fa2ef-c040-424f-a814-870f408606cf',
            ),
            link: '/csr-policy',
        },
        {
            title: contentData.getContent(
                '2834dd3f-a96d-44a9-bd99-a30ce4de44e3',
            ),
            link: '/career-with-us',
        },
    ];

    const pressMedia = [
        {
            title: contentData.getContent(
                'a1eda80b-b330-45de-acb4-5453ab79a5b0',
            ),
            link: '#',
        },
    ];

    const bottomItem = [
        {
            title: contentData.getContent(
                '1a34d067-8791-44c3-b6a3-b0c1b7459d97',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'e61e2f9f-b989-43f2-9d3d-d8e08909bcb1',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'aafa29bb-bcf2-4f10-b24b-533995b7c1f9',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '51581679-411f-4060-b3bd-33f45172d8e4',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '826ce734-3ab4-4a27-be96-d787a5816547',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'f7b1550a-0460-44e1-8bfc-adf1bc1907df',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '704bccb8-56f5-4255-aa49-3485c88d1e7c',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '6fbba50b-2e5d-4524-a7f5-d3658552c7c0',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '47f739e1-7e1b-479d-a07c-a6ce0fc8e008',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '3f4def69-f4a0-4c87-a2b4-61d0e81048d5',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '895b3673-d6e5-40d1-b5e0-f2aa0ead7c5a',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '267269af-39bc-4215-b475-4dfa342785da',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                '77db889e-a6ba-4eea-87f3-9b7c813714a6',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'b1ea5b54-b8b7-4419-8015-340d9bb3ea10',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'b7bc6ee8-b69e-4ed1-a14b-cdc7a9c7f2f8',
            ),
            link: '#',
        },
        {
            title: contentData.getContent(
                'f5e09c37-0f22-4f60-b213-e70330d83761',
            ),
            link: '#',
        },
    ];
    return (
        <div className="lg:tw-pt-16 tw-pt-8 lg:tw-pb-10 tw-border-t tw-border-secondary-600">
            <div className="sc-px-screen-edge lg:tw-grid tw-grid-rows-[auto_minmax(0,1fr)] tw-gap-12 tw-hidden">
                <div className="tw-grid tw-grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)__minmax(0,1fr)_minmax(0,1fr)] ">
                    <div className="tw-grid tw-grid-rows-[auto_minmax(0,1fr)] tw-gap-6">
                        <Link to="/">
                            <img
                                className="tw-w-[126px]"
                                src="/sammaan_capital_logo.png"
                                alt="logo"
                            />
                        </Link>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    'dac41596-505e-4bb6-9a66-9889ae7aaedf',
                                )}
                            </div>
                            <div
                                className="sc-footer-text tw-text-secondary-800"
                                dangerouslySetInnerHTML={{
                                    __html: contentData.getContent(
                                        '85780b59-0ef1-4aa5-b5a4-03f67b4610da',
                                    ),
                                }}
                            />
                            <a
                                href="tel:1800-572-7777"
                                className="sc-footer-text tw-text-secondary-800 tw-underline">
                                {contentData.getContent(
                                    'df275923-01c5-4c0c-8255-3d7cbd39ae33',
                                )}
                            </a>
                            <a
                                href="mailto:homeloans@indiabulls.com"
                                className="sc-footer-text tw-text-secondary-800 tw-underline">
                                {contentData.getContent(
                                    'b2407ee8-a1bc-4e70-a603-421b17c51c40',
                                )}
                            </a>

                            <div className="tw-flex tw-gap-5">
                                <Facebook className="tw-h-6 tw-w-6" />
                                <Twitter className="tw-h-6 tw-w-6" />
                                <Instagram className="tw-h-6 tw-w-6" />
                                <Linkedin className="tw-h-6 tw-w-6" />
                                <Youtube className="tw-h-6 tw-w-6" />
                            </div>
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-8">
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    'ed7614e1-8772-40d7-adb4-7aa4b11197dc',
                                )}
                            </div>
                            <ItemBuilder
                                items={ourOfferings}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    '66e14d86-92fc-428d-9b3c-651d6755ddb6',
                                )}
                            </div>
                            <ItemBuilder
                                items={aboutUs}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-8">
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    '9bd47e89-a883-45b2-ba8f-6f8cd721e1ee',
                                )}
                            </div>
                            <ItemBuilder
                                items={calculators}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    '71131a25-3c9b-437e-b802-2442caf119cf',
                                )}
                            </div>
                            <ItemBuilder
                                items={contactUs}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-3">
                        <div className="sc-footer-headline tw-text-secondary-800">
                            {contentData.getContent(
                                '7656ee64-ee38-40bd-97cc-b11bca2590c1',
                            )}
                        </div>
                        <ItemBuilder
                            items={resourceCentre}
                            itemBuilder={(item, itemIndex) => (
                                <div className="" key={itemIndex}>
                                    <Link
                                        to={item.link}
                                        className="sc-footer-text tw-text-secondary-800">
                                        {item.title}
                                    </Link>
                                </div>
                            )}
                        />
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-8">
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    '01e7e4a8-dc12-4916-bab6-3afe5ee56365',
                                )}
                            </div>
                            <ItemBuilder
                                items={company}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <div className="sc-footer-headline tw-text-secondary-800">
                                {contentData.getContent(
                                    '71f79217-521a-49dd-b7f8-99fcf8c5b48f',
                                )}
                            </div>
                            <ItemBuilder
                                items={pressMedia}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="tw-border-t tw-border-secondary-600 tw-border-opacity-[40%] tw-grid tw-gap-4"></div>
            </div>
            <div className="lg:tw-hidden sc-px-screen-edge">
                <Link to="/">
                    <img
                        className="tw-w-[126px]"
                        src="/sammaan_capital_logo.png"
                        alt="logo"
                    />
                </Link>
                <VerticalSpacer className="tw-h-8" />
                <div className="tw-grid tw-gap-4">
                    <Accordion
                        title={contentData.getContent(
                            'ed7614e1-8772-40d7-adb4-7aa4b11197dc',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={ourOfferings}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '9bd47e89-a883-45b2-ba8f-6f8cd721e1ee',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={calculators}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '7656ee64-ee38-40bd-97cc-b11bca2590c1',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={resourceCentre}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '01e7e4a8-dc12-4916-bab6-3afe5ee56365',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={company}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '66e14d86-92fc-428d-9b3c-651d6755ddb6',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={aboutUs}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '71131a25-3c9b-437e-b802-2442caf119cf',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={contactUs}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                    <Accordion
                        title={contentData.getContent(
                            '71f79217-521a-49dd-b7f8-99fcf8c5b48f',
                        )}
                        panelItem={
                            <ItemBuilder
                                items={pressMedia}
                                itemBuilder={(item, itemIndex) => (
                                    <div className="" key={itemIndex}>
                                        <Link
                                            to={item.link}
                                            className="sc-footer-text tw-text-secondary-800">
                                            {item.title}
                                        </Link>
                                    </div>
                                )}
                            />
                        }
                    />
                </div>

                <VerticalSpacer className="tw-h-10" />

                <div className="tw-flex tw-flex-col tw-gap-3 tw-text-center">
                    <div className="sc-footer-headline tw-text-secondary-800">
                        {contentData.getContent(
                            'dac41596-505e-4bb6-9a66-9889ae7aaedf',
                        )}
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: contentData.getContent(
                                '85780b59-0ef1-4aa5-b5a4-03f67b4610da',
                            ),
                        }}
                        className="sc-footer-text tw-text-secondary-800"
                    />

                    <a
                        href="tel:1800-572-7777"
                        className="sc-footer-text tw-text-secondary-800 tw-underline">
                        {contentData.getContent(
                            'df275923-01c5-4c0c-8255-3d7cbd39ae33',
                        )}
                    </a>
                    <a
                        href="mailto:homeloans@indiabulls.com"
                        className="sc-footer-text tw-text-secondary-800 tw-underline">
                        {contentData.getContent(
                            'b2407ee8-a1bc-4e70-a603-421b17c51c40',
                        )}
                    </a>
                </div>
                <VerticalSpacer className="tw-h-8" />
                <div className="tw-flex tw-gap-5 tw-justify-center">
                    <Facebook className="tw-h-6 tw-w-6" />
                    <Twitter className="tw-h-6 tw-w-6" />
                    <Instagram className="tw-h-6 tw-w-6" />
                    <Linkedin className="tw-h-6 tw-w-6" />
                    <Youtube className="tw-h-6 tw-w-6" />
                </div>
            </div>

            <VerticalSpacer className="tw-h-10" />

            <div className="lg-tw-hidden tw-grid tw-gap-6 max-lg:tw-bg-secondary-100 tw-py-8 sc-px-screen-edge">
                <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
                    <ItemBuilder
                        items={bottomItem}
                        itemBuilder={(item, itemIndex) => (
                            <div
                                className={concatenateNonNullStringsWithSpaces(
                                    'sc-footer-text tw-text-secondary-800',
                                    itemIndex === bottomItem.length - 1
                                        ? ''
                                        : 'tw-border-r tw-border-secondary-600 tw-pr-4',
                                )}
                                key={itemIndex}>
                                <Link className="" to={item.link}>
                                    {item.title}
                                </Link>
                            </div>
                        )}
                    />
                </div>
                <div className="sc-footer-text tw-text-secondary-800 tw-text-center">
                    {contentData.getContent(
                        '62186aef-712f-410d-8e36-cb94b395dc7d',
                    )}
                </div>
            </div>
        </div>
    );
}
