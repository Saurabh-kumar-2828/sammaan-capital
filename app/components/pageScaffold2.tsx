import {useState} from 'react';
import {FooterComponent} from '~/components/footerComponents';
import {HeaderComponent2} from './headerComponent2';

export function PageScaffold2({children}: {children: any}) {
    const pagesOptions = [
        {
            name: 'About Us',
            link: '/about-us/overview',
        },
        {
            name: 'Affordable Calculator',
            link: '/affordable-calculator',
        },
        {
            name: 'Awards And Accolades',
            link: '/about-us/awards-and-accolades',
        },
        {
            name: 'Become a Partner',
            link: '/become-a-partner',
        },
        {
            name: 'Board Of Directors',
            link: '/abour-us/board-of-directors',
        },
        {
            name: 'Career With Us',
            link: '/career-with-us',
        },
        {
            name: 'Cookie Policy',
            link: '/cookie-policy',
        },
        {
            name: 'Customer Support',
            link: '/contact-us/customer-support',
        },
        {
            name: 'Feedback And Query Form',
            link: '/customer-support/feedback-query-form',
        },
        // {
        //     name: 'Grievance Form',
        //     link: '/customer-support/grievance-form',
        // },
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Home Loan in Delhi',
            link: '/seo/home-loan-in-delhi',
        },
        {
            name: 'Locate Us',
            link: '/contact-us/locate-us',
        },
        {
            name: 'Management Team',
            link: '/about-us/management-team',
        },
        {
            name: 'PMAY Calculator',
            link: '/pmay-calculator',
        },
    ];
    const options = [
        {
            optionList: [
                {
                    title: 'Home Loan',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '/product.home-loan',
                },
                {
                    title: 'Home Loan Balance Transfer',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '#',
                },
                {
                    title: "Home Loan for NRI's",
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '#',
                },
                {
                    title: 'Home Renovation Loan',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '#',
                },
                {
                    title: 'Home Extension Loan',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '#',
                },
                {
                    title: 'Rural Home Loan',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '#',
                },
            ],
            sideContent: {
                image: '',
                title: 'Find Your Perfect Home Now',
                buttonText: 'Apply Now'
            }
        },
        {
            optionList: [
                {
                    title: '',
                    text: "",
                    img: '',
                    link: '',
                },
            ],
            sideContent: {
                image: "",
                title: "",
                buttonText: ""
            }
        },
        {
            optionList: [
                {
                    title: 'EMI Calculator',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '/emi-calculator',
                },
                {
                    title: 'PMAY Calculator',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '/pmay-calculator',
                },
                {
                    title: 'Affordability Calculator',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '/affordability-calculator',
                },
                {
                    title: 'Eligibility Calculator',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '#',
                },
                {
                    title: 'APR Calculator',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '#',
                },
                {
                    title: 'Stamp Duty',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '#',
                },
                {
                    title: 'Tax Benefits',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: "",
                    link: '#',
                },
            ],
            sideContent: {
                image: '',
                title: 'Simple Calculations. Clear Decisions.',
                buttonText: 'Apply Now'
            }
        },
        {
            optionList: [
                {
                    title: 'Locate Us',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '/contact-us/locate-us',
                },
                {
                    title: 'Customer Support',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '/contact-us/customer-support',
                },
                {
                    title: 'Investor & Media Relations',
                    text: 'Lorem ipsum dolor sit amet consectetur elit',
                    img: '',
                    link: '/contact-us/investor-media-relations',
                },
            ],
            sideContent: {
                image: '',
                title: 'Connect and Interact With Us Now',
                buttonText: 'Apply Now'
            }
        },
        {
            optionList:  [
                {
                    title: "",
                    text: "",
                    img: "",
                    link: "",
                },
            ],
            sideContent: {
                image: "",
                title: "",
                buttonText: ""
            }
        },
    ];
    const [showList, setShowList] = useState(Array(options.length +1).fill(false));
    return (
        <>
            <div className="tw-flex tw-flex-col tw-items-stretch tw-min-h-screen">
                <HeaderComponent2
                    showList={showList}
                    setShowList={setShowList}
                    options={options}
                    pagesOptions={pagesOptions}
                />

                <div
                    onClick={() => {
                        const newShowList = [...showList];
                        newShowList.map(
                            (item, itemIndex) =>
                                (newShowList[itemIndex] = false),
                        );
                        setShowList(newShowList);
                    }}>
                    {children}
                </div>
                <div className="tw-flex-grow" />

                <div
                    onClick={() => {
                        const newShowList = [...showList];
                        newShowList.map(
                            (item, itemIndex) =>
                                (newShowList[itemIndex] = false),
                        );
                        setShowList(newShowList);
                    }}>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
}
