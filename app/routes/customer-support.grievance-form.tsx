import {
    type LoaderFunction,
    type MetaFunction
} from '@remix-run/node';
import {Form, useActionData, useFetcher, useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useRef, useState} from 'react';
import {CheckCircleFill, Upload} from 'react-bootstrap-icons';
import {toast} from 'react-toastify';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {indianPhoneNumberValidationPattern} from '~/global-common-typescript/utilites/validationPatterns';

export const meta: MetaFunction = () => {
    return [
        {title: 'New Remix App'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('grievanceForm');

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

export type ActionData = {
    error: string | null;
};

// export const action: ActionFunction = async ({request, params}) => {
//     const body = await request.formData();

//     const formType = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('fomrType'),
//     );
//     const firstName = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('firstName'),
//     );
//     const lastName = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('lastName'),
//     );
//     const emailId = safeParse(getNonEmptyStringFromUnknown, body.get('email'));
//     const phoneNo = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('phoneNumber'),
//     );
//     const image = safeParse(getNonEmptyStringFromUnknown, body.get('image'));
//     const feedback = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('feedback'),
//     );
//     const query = safeParse(getNonEmptyStringFromUnknown, body.get('query'));
//     const typeOfQuery = safeParse(
//         getNonEmptyStringFromUnknown,
//         body.get('typeOfQuery'),
//     );

//     if (
//         formType == null ||
//         firstName == null ||
//         lastName == null ||
//         phoneNo == null ||
//         emailId == null ||
//         image == null
//     ) {
//         const actionData: GenericActionData = {
//             error: 'Error in submitting form! Error code: 6bcf0886-4a10-446a-a9d0-c2f820938fb3',
//         };
//         return json(actionData);
//     }

//     if (formType == 'feedback') {
//         if (feedback == null) {
//             const actionData: GenericActionData = {
//                 error: 'Error in submitting form! Error code: 2a355407-ecbf-446d-9e00-96957d90592b',
//             };
//             return json(actionData);
//         }
//     } else {
//         if (query == null || typeOfQuery == null) {
//             const actionData: GenericActionData = {
//                 error: 'Error in submitting form! Error code: bd2deb03-0940-47d2-b80b-b1dec1ab041d',
//             };
//             return json(actionData);
//         }
//     }

//     const actionData: GenericActionData = {
//         error: null,
//     };

//     return json(actionData);
// };

export default function Index() {
    const {vernacularData} = useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <GrievanceForm />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function GrievanceForm() {
    const contentData = useContext(ContentProviderContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [image, setImage] = useState(null);
    const [imageSizeError, setImageSizeError] = useState(false);
    const [otp, setOtp] = useState('');
    const [typeOfGrievance, setTypeOfGrievance] = useState('');
    const [grievance, setGrievance] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const actionData = useActionData() as ActionData;
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [errorInOtpVerification, setErrorInOtpVerification] = useState(false);
    const [activateOtpField, setOtpField] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<
        typeof setTimeout
    > | null>(null);
    const [resendTimeOut, setResendTimeOut] = useState(0);
    const otpFetcher = useFetcher();
    const verifyOtpFetcher = useFetcher<{
        error: string;
        isInvalidOtp?: boolean;
    }>();
    const fileInputRef = useRef(null);

    const grievanceList = ['A', 'B'];

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
        if (otpFetcher.data == null) {
            return;
        } else if (otpFetcher.data.error != null) {
            toast.error(otpFetcher.data.error);
            return;
        }
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

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = event => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const maxSize = 2 * 1024 * 1024;
            if (selectedFile.size > maxSize) {
                setImage(null);
                setImageSizeError(true);
            } else {
                setImage(selectedFile);
                setImageSizeError(false);
            }
        }
    };

    return (
        <div>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'Contact Us', link: '#'},
                    {contentId: 'Grievance Form', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    {!isFormSubmitted ? (
                        <div>
                            <div className="sc-footer-text tw-text-center">
                                {contentData.getContent(
                                    '9d863061-a8de-4b87-81e0-50f621dec1ff',
                                )}
                            </div>

                            <VerticalSpacer className="tw-h-2 lg:tw-h-3" />

                            <div className="sc-text-headline tw-text-center">
                                {contentData.getContent(
                                    'eb051cd8-aebd-4956-9871-ac1f210e8e68',
                                )}
                            </div>

                            <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                            <Form className="tw-grid tw-gap-6" method="post">
                                <div className="tw-grid tw-gap-8 md:tw-gap-6">
                                    {/* <div className='tw-flex tw-gap-4 lg:tw-gap-6 tw-flex-wrap'>
                                        <div>{contentData.getContent("")}</div>
                                        <div className='tw-flex'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div> */}
                                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 md:tw-gap-6 tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-fit">
                                        <input
                                            name="firstName"
                                            value={firstName}
                                            className="sc-text-input"
                                            onChange={e =>
                                                setFirstName(e.target.value)
                                            }
                                            placeholder="First Name"
                                        />
                                        <input
                                            name="lastName"
                                            value={lastName}
                                            className="sc-text-input"
                                            onChange={e =>
                                                setLastName(e.target.value)
                                            }
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="tw-grid tw-gap-1 tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                        <div className="tw-relative">
                                            <input
                                                name="phoneNumber"
                                                pattern={
                                                    indianPhoneNumberValidationPattern
                                                }
                                                value={phoneNo}
                                                className="sc-text-input"
                                                onChange={e => {
                                                    setIsOtpVerified(false);
                                                    setOtpField(false);
                                                    setPhoneNo(e.target.value);
                                                    setResendTimeOut(0);
                                                }}
                                                placeholder="Mobile NO."
                                            />
                                            <div
                                                className="tw-absolute tw-right-5 tw-top-[calc(50%-12px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                                onClick={e => {
                                                    if (
                                                        firstName.length === 0
                                                    ) {
                                                        toast.error(
                                                            'Name cannot be null! Error code: 9048aa2f-a1c5-43cb-afb8-b44da22866d4',
                                                        );
                                                        return;
                                                    } else if (
                                                        phoneNo.length != 10
                                                    ) {
                                                        toast.error(
                                                            'Please Enter Valid Phone Number! Error code: 1079abdc-3a4a-415f-98d1-b50986fe13ee',
                                                        );
                                                        return;
                                                    }
                                                    setOtpField(true);
                                                    setResendTimeOut(60);
                                                    const data = new FormData();
                                                    data.append(
                                                        'phoneNumber',
                                                        phoneNo,
                                                    );
                                                    data.append(
                                                        'name',
                                                        firstName,
                                                    );
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
                                                        RESEND OTP
                                                    </button>
                                                ) : (
                                                    <button
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-opacity-50',
                                                            phoneNo.length == 10
                                                                ? 'tw-text-primary-500 tw-opacity-100'
                                                                : '',
                                                        )}>
                                                        SEND OTP
                                                    </button>
                                                )}
                                            </div>
                                            {resendTimeOut > 0 &&
                                                !isOtpVerified && (
                                                    <div className="tw-absolute tw-right-5 -tw-bottom-[25px] tw-text-[#00B61D] tw-font-bold">
                                                        Resend Otp in{' '}
                                                        {resendTimeOut} sec
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
                                            onChange={e =>
                                                setOtp(e.target.value)
                                            }
                                            placeholder="OTP"
                                        />
                                        <div
                                            className="tw-absolute tw-right-5 tw-top-[calc(50%-24px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                            onClick={e => {
                                                if (phoneNo.length != 10) {
                                                    toast.error(
                                                        'Enter Valid Phone Number! Error code: f07702dc-00b2-4a45-bf87-3a35e8857efc',
                                                    );
                                                    return;
                                                }
                                                const data = new FormData();
                                                data.append(
                                                    'phoneNumber',
                                                    phoneNo,
                                                );
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
                                                        : 'VERIFY'}
                                                </div>
                                            ) : (
                                                <div
                                                    className={concatenateNonNullStringsWithSpaces(
                                                        'tw-flex tw-gap-2',
                                                    )}>
                                                    <CheckCircleFill className="tw-text-[#00B61D]" />
                                                    <div>Verified</div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            Your OTP will generate on your given
                                            Mobile number
                                        </div>
                                    </div>
                                    <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                        <SelectComponent
                                            items={grievanceList}
                                            className="tw-w-full tw-border-none"
                                            greyBg={true}
                                            itemBuilder={item => {
                                                return item == ''
                                                    ? 'Select type of grievance'
                                                    : item;
                                            }}
                                            value={typeOfGrievance}
                                            setValue={item => {
                                                if (item != '') {
                                                    setTypeOfGrievance(item);
                                                    return;
                                                }

                                                setTypeOfGrievance('');
                                            }}
                                            buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                                        />
                                        <input
                                            readOnly
                                            className="tw-hidden"
                                            name="typeOfGrievance"
                                            value={typeOfGrievance}
                                        />
                                    </div>
                                    <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                        <textarea
                                            rows={3}
                                            name="grievance"
                                            value={grievance}
                                            className="sc-text-input"
                                            onChange={e =>
                                                setGrievance(e.target.value)
                                            }
                                            placeholder="Your Grievance..."
                                        />
                                    </div>
                                    <input
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{display: 'none'}}
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />
                                    <input
                                        className="tw-hidden"
                                        value={image ? image : ''}
                                        name="image"
                                    />
                                    <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-[180px] tw-rounded-lg tw-p-3 tw-bg-secondary-100">
                                        <div
                                            className="tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-background-200 tw-w-full tw-h-full tw-cursor-pointer"
                                            onClick={handleClick}>
                                            <div className="tw-grid tw-auto-rows-max tw-gap-2 tw-h-fit tw-relative">
                                                <Upload className="tw-justify-self-center" />
                                                <div className="tw-text-center sc-text-body">
                                                    Upload an image (optional)
                                                </div>
                                                <div className="tw-text-center sc-footer-text tw-text-secondary-600">
                                                    Max. 2 MB size in .jpg or
                                                    .png format
                                                </div>
                                                {imageSizeError && (
                                                    <div className="tw-absolute tw-w-full tw-text-center -tw-bottom-5 sc-footer-text tw-text-[red] tw-font-bold">
                                                        File Size exceeded!
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="sc-cta-button tw-w-fit tw-mx-auto"
                                    disabled={
                                        firstName == '' ||
                                              lastName == '' ||
                                              phoneNo == '' ||
                                              grievance == '' ||
                                              typeOfGrievance == '' ||
                                              !isOtpVerified
                                    }>
                                    Submit
                                </button>
                            </Form>
                        </div>
                    ) : (
                        <div className="tw-grid tw-auto-rows-max tw-h-[80vh] tw-py-28 tw-gap-6">
                            <div className="tw-w-fit tw-h-fit tw-grid tw-items-center tw-justify-self-center">
                                <CheckCircleFill className="tw-text-[#00B61D] tw-text-[80px] tw-aspect-square" />
                            </div>
                            <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                            Thanks for sharing your grievance!
                            </div>
                            <div className="tw-text-center sc-text-title1 tw-text-secondary-600">
                            We’re here to assist you
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </div>
    );
}
