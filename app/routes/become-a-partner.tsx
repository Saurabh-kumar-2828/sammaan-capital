import {useContext, useEffect, useState} from 'react';
import {getContentGenerator} from '~/components/contentGenerator';
import {PageScaffold} from '~/components/pageScaffold';
import {SideImageCard} from '~/components/componentLibrary/reusableCards/sideImageCard/sideImageCard';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {json, type ActionFunction, type LoaderFunction} from '@remix-run/node';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {
    Form,
    Link,
    useActionData,
    useFetcher,
    useLoaderData,
} from '@remix-run/react';
import {CenterContentTwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/centerContentTwoLinerCard';
import {FaqsSectionComponent} from '~/components/componentLibrary/faqs/faqsComponent';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {
    getNonEmptyStringFromUnknown,
    safeParse,
} from '~/global-common-typescript/utilites/typeValidationUtilities';
import type {GenericActionData} from './resend-otp';
import {indianPhoneNumberValidationPattern} from '~/global-common-typescript/utilites/validationPatterns';
import {toast} from 'react-toastify';
import {CheckCircleFill} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import type {StatesAndCities} from '~/typeDefinitions';
import {statesAndCities} from '~/backend/stateAndCity';
import {CarouselStyle2} from '~/components/carouselStyle2';

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    statesAndCities: StatesAndCities;
    states: Array<string>;
};

export const loader: LoaderFunction = async ({request}) => {
    // const vernacularData = getVernacularFromBackend('partnerWithUs');
    const stateAndCities: StatesAndCities = statesAndCities;
    const states = Object.keys(stateAndCities);

    const pageIds = contentDataLatest.partnerWithUs;

    const vernacularData = await getData(pageIds);

    // console.log("LatestVernac >>>>", vernacularDataLatest);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        states: states,
        statesAndCities: stateAndCities,
    };
    return loaderData;
};

export type ActionData = {
    error: string | null;
    // isInvalidOtp?: boolean;
};

export const action: ActionFunction = async ({request, params}) => {
    const body = await request.formData();

    const fullName = safeParse(getNonEmptyStringFromUnknown, body.get('name'));
    const phoneNo = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('phoneNumber'),
    );
    // const otp = safeParse(getNonEmptyStringFromUnknown, body.get("otp"));
    const pinCode = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('pinCode'),
    );
    const state = safeParse(getNonEmptyStringFromUnknown, body.get('state'));
    const city = safeParse(getNonEmptyStringFromUnknown, body.get('city'));

    // console.log(fullName, phoneNo, pinCode, state, city, "<<<<<>>>>>>>>>>>>>>>>>>");

    if (
        fullName == null ||
        phoneNo == null ||
        state == null ||
        pinCode == null ||
        city == null
    ) {
        const actionData: GenericActionData = {
            error: 'Error in submitting form! Error code: 2a355407-ecbf-446d-9e00-96957d90592b',
        };
        return json(actionData);
    }

    const actionData: GenericActionData = {
        error: null,
    };

    return json(actionData);
};

export default function Index() {
    const {vernacularData, states, statesAndCities} =
        useLoaderData() as LoaderData;
    return (
        <>
            <div className="">
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <PartnerPage
                            states={states}
                            statesAndCities={statesAndCities}
                        />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function PartnerPage({
    statesAndCities,
    states,
}: {
    statesAndCities: StatesAndCities;
    states: Array<string>;
}) {
    return (
        <>
            <HeroSection />

            <div className="tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Become A Partner', link: '#'},
                ]}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <WeAreSammaanCapital />

            <div className="lg:tw-h-20 tw-h-10" />

            <WhoCanPartner />

            <div className="lg:tw-h-20 tw-h-10" />

            <WhyShouldJoinUs />

            <div className="lg:tw-h-20 tw-h-10" />

            <UnlockingProfits />

            <div className="lg:tw-h-20 tw-h-10" />

            <BecomePartnerForm
                states={states}
                statesAndCities={statesAndCities}
            />

            <div className="lg:tw-h-20 tw-h-10" />

            <FaqSection />

            <div className="lg:tw-h-20 tw-h-10" />
        </>
    );
}

function HeroSection() {
    const contentData = useContext(ContentProviderContext);

    return (
        <div className="tw-h-[480px] tw-w-full tw-grid tw-relative tw-overflow-hidden">
            {/* <img src="" alt/> */}
            <div className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-row-start-1 tw-col-start-1">
                <img
                    src={contentData.getContent(
                        '53651138-f403-4e79-827d-fe0536540d55',
                    )}
                    alt=""
                />
            </div>

            <div className="tw-row-start-1 tw-col-start-1 tw-w-fit tw-h-fit tw-self-center tw-justify-self-center lg:tw-justify-self-start sc-px-screen-edge tw-z-10">
                <div
                    dangerouslySetInnerHTML={{
                        __html: contentData.getContent(
                            '176f406b-1675-4368-a558-5f9ed76f50ec',
                        ),
                    }}
                    className="sc-text-banner tw-text-center lg:tw-text-left"
                />
            </div>
        </div>
    );
}

function WeAreSammaanCapital() {
    const contentData = useContext(ContentProviderContext);
    const item = {
        image: contentData.getContent('c44d71ba-b4d4-4f0f-89ca-bf80f68af2b5'),
        imageClassName:
            'tw-row-start-2 tw-col-start-1 md:tw-row-start-1 md:tw-col-start-2',
        title: contentData.getContent('057606b7-2da4-46fd-b45c-a01c6b897825'),
        text: contentData.getContent('71f3e7cb-e2f1-4647-915d-a9ad32585041'),
        textClassName: 'tw-col-start-1 tw-row-start-1',
        buttonText: contentData.getContent(
            'c3071f25-7391-4de0-80ca-6e677accb5a0',
        ),
    };
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-max-w-7xl tw-mx-auto">
                <SideImageCard
                    imageClassName={item.imageClassName}
                    title={item.title}
                    text={item.text}
                    imageUrl={item.image}
                    textClassName={item.textClassName}
                    buttonText={item.buttonText}
                    buttonLink="#becomePartner"
                />
            </div>
        </div>
    );
}

function WhoCanPartner() {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(
        '8ff6d273-0ac4-4a3d-95f0-77542e53b515',
    );
    const data = jsonData ? JSON.parse(jsonData) : [];
    // console.log("data>>>.===", data1);
    // console.log("data>>>.===",typeof jsonData);
    // const data = [
    //     {
    //         imgUrl: contentData.getContent(
    //             '93d01cf4-f207-4c5f-8d73-20214de6b116',
    //         ),
    //         text: contentData.getContent(
    //             'df167c0b-06e3-423c-8bf1-f70aae212858',
    //         ),
    //     },
    //     {
    //         imgUrl: contentData.getContent(
    //             'db533805-8304-4e47-bd9b-cfad8e0d99de',
    //         ),
    //         text: contentData.getContent(
    //             'c3405e8b-601b-4ab7-98c9-9efd27db92bc',
    //         ),
    //     },
    //     {
    //         imgUrl: contentData.getContent(
    //             '091f6e5c-00fe-4b86-96b5-07edc6341112',
    //         ),
    //         text: contentData.getContent(
    //             'b61904f2-595b-496e-94f7-47e32a185702',
    //         ),
    //     },
    //     {
    //         imgUrl: contentData.getContent(
    //             '2b0d4396-ba99-408a-9f74-b0b3fa679c76',
    //         ),
    //         text: contentData.getContent(
    //             'e682b8a7-5eed-4b09-a8fe-906d33ea9e5e',
    //         ),
    //     },
    //     {
    //         imgUrl: contentData.getContent(
    //             '2c906bdd-58c3-4aaf-b5bd-9ade811ae086',
    //         ),
    //         text: contentData.getContent(
    //             'b927a309-174a-4398-8909-34996eec1fe4',
    //         ),
    //     },
    //     {
    //         imgUrl: contentData.getContent(
    //             'e02d9aef-695a-4991-b942-76b97fd22024',
    //         ),
    //         text: contentData.getContent(
    //             '35837ec0-4312-4575-98a0-1737bc735de9',
    //         ),
    //     },
    // ];
    return (
        <div className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20 sc-px-screen-edge">
            <div className="tw-grid tw-gap-4 lg-tw-gap-6 tw-max-w-7xl tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '3ed02ca6-3d84-4c30-bf32-cc4e229531d7',
                    )}
                </div>
                <CarouselStyle2
                    items={data.map((item, itemIndex) => {
                        return (
                            <div
                                key={itemIndex}
                                className="tw-grid tw-justify-center sc-medium-shadow tw-bg-secondary-200 tw-p-6 tw-gap-6 tw-w-[280px] tw-rounded-lg tw-border tw-border-secondary-100">
                                <div className="tw-bg-[#001CA8] tw-w-20 tw-aspect-square tw-rounded-full tw-justify-self-center"></div>
                                <div className="sc-text-title1 tw-whitespace-nowrap tw-text-secondary-800">
                                    {item.text}
                                </div>
                            </div>
                        );
                    })}
                    slideClassName="tw-max-w-[18rem]"
                />
            </div>
        </div>
    );
}

function WhyShouldJoinUs() {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(
        '1e455064-7b68-46e8-838d-518edffd5568',
    );
    const data: Array<{imgLink: string; title: string; text: string}> = jsonData
        ? JSON.parse(jsonData)
        : [];
    // const data = [
    //     {
    //         title: contentData.getContent(
    //             'cbd5b808-b64a-4cec-95b4-2b53bf191e8a',
    //         ),
    //         text: contentData.getContent(
    //             '60064f89-f7eb-4a75-b8ef-cec284326209',
    //         ),
    //     },
    //     {
    //         title: contentData.getContent(
    //             '60df7d37-d752-4fb5-8c3f-ae035e049dd2',
    //         ),
    //         text: contentData.getContent(
    //             'ea9fca5b-982f-4d1e-a095-1f750a10cf85',
    //         ),
    //     },
    //     {
    //         title: contentData.getContent(
    //             'b9b8d061-a511-4244-a494-1be436c5413a',
    //         ),
    //         text: contentData.getContent(
    //             '1fc18eac-2c21-457e-9608-5f7aa3077a97',
    //         ),
    //     },
    //     {
    //         title: contentData.getContent(
    //             '82640601-fbba-4aa7-801e-6989508bebd8',
    //         ),
    //         text: contentData.getContent(
    //             '9d6f5db5-d5a3-47ac-9869-c69b5e456e4b',
    //         ),
    //     },
    // ];
    return (
        <div className="sc-px-screen-edge">
            <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        '6f6d5a04-eac3-4803-964c-2bb5746d3f4a',
                    )}
                </div>

                <div className="tw-hidden lg:tw-grid tw-gap-4 tw-grid-cols-4 tw-py-6 tw-px-4">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <TwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        }}
                    />
                </div>
                <div className="tw-block lg:tw-hidden">
                    <CarouselStyle2
                        items={data.map((item, itemIndex) => {
                            return (
                                <TwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        })}
                        slideClassName="tw-max-w-[17.3rem]"
                    />
                </div>
                <Link
                    to="#becomePartner"
                    className="sc-cta-button tw-w-fit tw-justify-self-center">
                    {contentData.getContent(
                        '143cb849-485e-4823-ae0e-87605a275e0b',
                    )}
                </Link>
            </div>
        </div>
    );
}

function UnlockingProfits() {
    const contentData = useContext(ContentProviderContext);
    const jsonData = contentData.getContent(
        '0d258982-7d29-48e7-9081-ac3bb2fb7bdb',
    );
    const data: Array<{imgLink: string; title: string; text: string}> = jsonData
        ? JSON.parse(jsonData)
        : [];
    // const data = [
    //     {
    //         title: contentData.getContent(
    //             '4b387c63-4027-417d-84d0-b0410222b2be',
    //         ),
    //         text: contentData.getContent(
    //             '41af1863-b4ef-4eb6-ac45-ce4ee5c1ea45',
    //         ),
    //     },
    //     {
    //         title: contentData.getContent(
    //             '6ea0f7ab-1f03-4694-b78d-b31cb9b1e2f1',
    //         ),
    //         text: contentData.getContent(
    //             'f6898a61-cf8a-4fbc-8426-00063d893b7b',
    //         ),
    //     },
    //     {
    //         title: contentData.getContent(
    //             '5d5071da-e87b-4349-81a5-ac89d6c0f33b',
    //         ),
    //         text: contentData.getContent(
    //             '4c98f3ee-98b2-4a36-a176-28a7b4cdccba',
    //         ),
    //     },
    // ];
    return (
        <div className="tw-bg-secondary-400 tw-py-10 lg:tw-py-20 sc-px-screen-edge">
            <div className="tw-grid tw-gap-6 lg-tw-gap-8 tw-max-w-7xl tw-mx-auto">
                <div className="tw-grid tw-gap-4">
                    <div className="tw-text-center sc-text-headline">
                        {contentData.getContent(
                            'bd36c536-2a5c-4eae-95ef-76345345fc95',
                        )}
                    </div>
                    <div className="tw-text-center sc-footer-text tw-text-secondary-600">
                        {contentData.getContent(
                            '898adcb7-bd6e-40c0-bcb3-fe758960373d',
                        )}
                    </div>
                </div>
                <div className="tw-grid sm:tw-grid-cols-3 tw-gap-4 lg:tw-gap-6 tw-overflow-x-auto tw-p-4">
                    <ItemBuilder
                        items={data}
                        itemBuilder={(item, itemIndex) => {
                            return (
                                <CenterContentTwoLinerCard
                                    key={itemIndex}
                                    title={item.title}
                                    text={item.text}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function BecomePartnerForm({
    statesAndCities,
    states,
}: {
    statesAndCities: StatesAndCities;
    states: Array<string>;
}) {
    const contentData = useContext(ContentProviderContext);
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [otp, setOtp] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [activateOtpField, setOtpField] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [errorInOtpVerification, setErrorInOtpVerification] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<
        typeof setTimeout
    > | null>(null);
    const [resendTimeOut, setResendTimeOut] = useState(0);
    const actionData = useActionData() as ActionData;
    const otpFetcher = useFetcher();
    const verifyOtpFetcher = useFetcher<{
        error: string;
        isInvalidOtp?: boolean;
    }>();

    useEffect(() => {
        if (verifyOtpFetcher.data == null) {
            return;
        } else if (verifyOtpFetcher.data.error != null) {
            toast.error(verifyOtpFetcher.data.error);
            setErrorInOtpVerification(true);
            setIsOtpVerified(false);
            return;
        }
        if (verifyOtpFetcher.data.isInvalidOtp == false) {
            setIsOtpVerified(true);
            setErrorInOtpVerification(false);
        }
    }, [verifyOtpFetcher.data]);

    useEffect(() => {
        if (resendTimeOut > 0 && activateOtpField) {
            if (timeoutId != null) {
                clearTimeout(timeoutId);
            }
            const timeout = setTimeout(() => {
                setResendTimeOut(prev => prev - 1);
            }, 1000);
            setTimeoutId(timeout);
        }
    }, [resendTimeOut]);

    useEffect(() => {
        // console.log(otpFetcher.data,"otp data");
        if (otpFetcher.data == null) {
            return;
        } else if (otpFetcher.data.error != null) {
            toast.error(otpFetcher.data.error);
            return;
        }
        // if (isOtpResent) {
        //     toast.success('OTP resent successfully');
        // } else {
        //     toast.success('OTP sent successfully');
        // }
    }, [otpFetcher.data]);

    useEffect(() => {
        if (actionData != null) {
            if (actionData.error != null) {
                toast.error(actionData.error);
                return;
            }
            // setInvalidOtp(false);
            setIsFormSubmitted(true);
        }
    }, [actionData]);

    return (
        <div className="sc-px-screen-edge tw-relative">
            <div
                id="becomePartner"
                className="tw-absolute -tw-top-[5rem] md:-tw-top-[10rem]"></div>
            <div className="tw-grid tw-max-w-7xl tw-m-auto tw-gap-6 lg:tw-gap-8">
                <div className="tw-text-center sc-text-headline">
                    {contentData.getContent(
                        'dfce781c-224a-4c7e-8f9c-fc4273c2e3f1',
                    )}
                </div>
                {!isFormSubmitted ? (
                    <Form method="post" className="tw-grid tw-gap-6">
                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                            <input
                                name="name"
                                value={name}
                                className="sc-text-input"
                                onChange={e => setName(e.target.value)}
                                placeholder={contentData.getContent(
                                    'e3c5a91f-da90-405b-a934-d3a2655d3b07',
                                )}
                            />
                        </div>
                        <div className="tw-grid tw-gap-1 tw-w-full tw-max-w-[768px] tw-justify-self-center">
                            <div className="tw-relative">
                                <input
                                    name="phoneNumber"
                                    pattern={indianPhoneNumberValidationPattern}
                                    value={phoneNo}
                                    className="sc-text-input"
                                    onChange={e => {
                                        setPhoneNo(e.target.value);
                                        setIsOtpVerified(false);
                                        setOtpField(false);
                                        setResendTimeOut(0);
                                    }}
                                    placeholder={contentData.getContent(
                                        'b24da723-5049-4e4b-81d2-1fa107318177',
                                    )}
                                />
                                <div
                                    className="tw-absolute tw-right-5 tw-top-[calc(50%-12px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                    onClick={e => {
                                        if (name.length === 0) {
                                            toast.error(
                                                'Name cannot be null! Error code: 23cebcc3-500d-4533-83c9-e5110429fc47',
                                            );
                                            return;
                                        } else if (phoneNo.length != 10) {
                                            toast.error(
                                                'Please Enter Valid Phone Number! Error code: b08e3aa4-9cee-44de-924b-406b2653c416',
                                            );
                                            return;
                                        }
                                        setOtpField(true);
                                        setResendTimeOut(60);

                                        // if (otpFieldRef.current != null) {
                                        //     otpFieldRef.current.focus();
                                        // }
                                        const data = new FormData();
                                        data.append('phoneNumber', phoneNo);
                                        data.append('name', name);
                                        otpFetcher.submit(data, {
                                            method: 'post',
                                            action: '/resend-otp',
                                        });
                                    }}>
                                    {activateOtpField ? (
                                        <button
                                            className={concatenateNonNullStringsWithSpaces(
                                                'tw-opacity-50 disabled:tw-opacity-20',
                                                phoneNo.length == 10
                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                    : '',
                                            )}
                                            disabled={
                                                resendTimeOut > 0 ||
                                                isOtpVerified
                                            }>
                                            {contentData.getContent(
                                                '47130c42-07db-45c1-8e43-6adc72ee7089',
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            className={concatenateNonNullStringsWithSpaces(
                                                '',
                                                phoneNo.length == 10
                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                    : 'tw-opacity-50',
                                            )}>
                                            {contentData.getContent(
                                                '0a7fd173-6bf1-4256-a2fd-984e8dc203c7',
                                            )}
                                        </button>
                                    )}
                                </div>
                                {resendTimeOut > 0 && !isOtpVerified && (
                                    <div className="tw-absolute tw-right-5 -tw-bottom-[25px] tw-text-[#00B61D] tw-font-bold">
                                        Resend Otp in {resendTimeOut} sec
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-w-full tw-max-w-[768px] tw-justify-self-center tw-relative',
                                activateOtpField
                                    ? 'tw-opacity-1'
                                    : 'tw-opacity-40',
                            )}>
                            <input
                                readOnly={!activateOtpField}
                                name="otp"
                                value={otp}
                                className="sc-text-input"
                                onChange={e => setOtp(e.target.value)}
                                placeholder={contentData.getContent(
                                    'de179005-a481-49bf-aa22-2b0eb2be40c0',
                                )}
                            />
                            <div
                                className="tw-absolute tw-right-5 tw-top-[calc(50%-24px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                onClick={e => {
                                    if (phoneNo.length != 10) {
                                        toast.error(
                                            'Enter Valid Phone Number! Error code: 73a14d30-1b7f-4c71-81b6-ab6890ff9d99',
                                        );
                                        return;
                                    }
                                    // setShowOtpButton(false);
                                    // setShowOtpField(true);
                                    // setResendTimeOut(60);

                                    // if (otpFieldRef.current != null) {
                                    //     otpFieldRef.current.focus();
                                    // }
                                    const data = new FormData();
                                    data.append('phoneNumber', phoneNo);
                                    data.append('otp', otp);
                                    verifyOtpFetcher.submit(data, {
                                        method: 'post',
                                        action: '/verify-otp',
                                    });
                                }}>
                                {!isOtpVerified ? (
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            otp.length == 6
                                                ? 'tw-text-primary-500'
                                                : 'tw-opacity-50',
                                        )}>
                                        {errorInOtpVerification
                                            ? 'INVALID OTP'
                                            : contentData.getContent(
                                                  '8cb51d7e-9324-4285-8686-15f4ab472e7e',
                                              )}
                                    </div>
                                ) : (
                                    <div
                                        className={concatenateNonNullStringsWithSpaces(
                                            'tw-flex tw-gap-2',
                                        )}>
                                        <CheckCircleFill className="tw-text-[#00B61D]" />
                                        <div>
                                            {contentData.getContent(
                                                'ca5690bb-710b-4555-b651-e2df054c1dde',
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {contentData.getContent(
                                    '348fe890-5c34-428b-a2cd-388884ce1b58',
                                )}
                            </div>
                        </div>
                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                            <input
                                name="pinCode"
                                value={pinCode}
                                className="sc-text-input"
                                onChange={e => setPinCode(e.target.value)}
                                placeholder={contentData.getContent(
                                    '63466f4a-fcef-4bd6-9e1f-d1af112a9c38',
                                )}
                            />
                        </div>
                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                            <SelectComponent
                                items={states}
                                className="tw-w-full tw-border-none"
                                greyBg={true}
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '9c7d49ed-294c-4079-afb9-5aa4af368f5b',
                                          )
                                        : item;
                                }}
                                value={state}
                                setValue={item => {
                                    if (item != '') {
                                        setState(item);
                                        setCity('');
                                        return;
                                    }

                                    setState('');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                            />
                        </div>
                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                            <SelectComponent
                                items={state ? statesAndCities[state] : ['']}
                                className="tw-w-full tw-border-none"
                                greyBg={true}
                                itemBuilder={item => {
                                    return item == ''
                                        ? contentData.getContent(
                                              '303ea41f-86cc-47f5-a2fd-c56ea9e51794',
                                          )
                                        : item;
                                }}
                                value={city}
                                setValue={item => {
                                    if (item != '') {
                                        setCity(item);
                                        return;
                                    }

                                    setCity('');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                            />
                        </div>
                        <input
                            name="state"
                            readOnly
                            className="tw-hidden"
                            value={state}
                        />
                        <input
                            name="city"
                            readOnly
                            className="tw-hidden"
                            value={city}
                        />
                        <button
                            type="submit"
                            className="sc-cta-button sc-text-button tw-w-fit tw-justify-self-center tw-px-24"
                            disabled={
                                name == '' ||
                                phoneNo == '' ||
                                pinCode == '' ||
                                state == '' ||
                                city == '' ||
                                !isOtpVerified
                            }>
                            {contentData.getContent(
                                'ca95937e-b583-4775-8270-72f2fd0fab48',
                            )}
                        </button>
                    </Form>
                ) : (
                    <div className="tw-grid tw-auto-rows-max tw-h-[60vh] tw-py-28 tw-gap-6">
                        <div className="tw-w-fit tw-h-fit tw-grid tw-items-center tw-justify-self-center">
                            <CheckCircleFill className="tw-text-[#00B61D] tw-text-[80px] tw-aspect-square" />
                        </div>
                        <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                            {contentData.getContent(
                                '50ad339a-c706-43f2-8838-0285bd1d6c71',
                            )}
                        </div>
                        <div className="tw-text-center sc-text-title1 tw-text-secondary-600">
                            {contentData.getContent(
                                '23983611-b6a6-4b25-9fd8-47f667c96479',
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function FaqSection() {
    const contentData = useContext(ContentProviderContext);
    const faqs = [
        {
            question: contentData.getContent(
                '696bf110-98db-4315-b596-a90a991995d1',
            ),
            answer: contentData.getContent(
                '27ca3ea0-2705-4f8c-ae3e-7305459c72fd',
            ),
        },
        {
            question: contentData.getContent(
                '4f45ffbc-37ed-4b37-94ba-b7ea9de0b2c0',
            ),
            answer: contentData.getContent(
                '606c434a-7491-4966-a29c-c2ebdc136660',
            ),
        },
        {
            question: contentData.getContent(
                '5c0be715-054b-43b2-88eb-6e12c5f273e5',
            ),
            answer: contentData.getContent(
                '06882644-d2d5-478b-b5f1-393e8a1062cc',
            ),
        },
        {
            question: contentData.getContent(
                'f4baa5ee-1314-479f-9a8e-9032c665d420',
            ),
            answer: contentData.getContent(
                '28300889-6131-4e0c-aa6f-8dc916a5c426',
            ),
        },
        {
            question: contentData.getContent(
                '1c7baf48-8159-413f-b5cd-8e1cf1dd37dd',
            ),
            answer: contentData.getContent(
                'f8faf691-b023-492f-b8aa-db27994387c2',
            ),
        },
    ];

    return (
        <div className="tw-grid tw-gap-8 sc-px-screen-edge">
            <FaqsSectionComponent items={faqs} showFaqPageLink={true} />
        </div>
    );
}
