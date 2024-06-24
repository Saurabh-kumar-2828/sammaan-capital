import {
    json,
    type ActionFunction,
    type LoaderFunction,
    type MetaFunction,
} from '@remix-run/node';
import {Form, useActionData, useFetcher, useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useRef, useState} from 'react';
import {CheckCircleFill, Upload} from 'react-bootstrap-icons';
import {toast} from 'react-toastify';
import {contentDataLatest, getData} from '~/backend/contentData.server';
import {getContentGenerator} from '~/components/contentGenerator';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {
    getNonEmptyStringFromUnknown,
    safeParse,
} from '~/global-common-typescript/utilites/typeValidationUtilities';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {indianPhoneNumberValidationPattern} from '~/global-common-typescript/utilites/validationPatterns';
import type {GenericActionData} from './resend-otp';

export const meta: MetaFunction = () => {
    return [
        {title: 'Feedback Query Form'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
};

export const loader: LoaderFunction = async ({request}) => {
    const pageIds = contentDataLatest.feedbackQueryform;

    const vernacularData = await getData(pageIds);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
    };
    return loaderData;
};

export type ActionData = {
    error: string | null;
};

export const action: ActionFunction = async ({request, params}) => {
    const body = await request.formData();

    const formType = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('fomrType'),
    );
    const firstName = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('firstName'),
    );
    const lastName = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('lastName'),
    );
    const emailId = safeParse(getNonEmptyStringFromUnknown, body.get('email'));
    const phoneNo = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('phoneNumber'),
    );
    const image = safeParse(getNonEmptyStringFromUnknown, body.get('image'));
    const feedback = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('feedback'),
    );
    const query = safeParse(getNonEmptyStringFromUnknown, body.get('query'));
    const typeOfQuery = safeParse(
        getNonEmptyStringFromUnknown,
        body.get('typeOfQuery'),
    );

    // console.log(
    //     firstName,
    //     phoneNo,
    //     lastName,
    //     emailId,
    //     query,
    //     '<<<<<>>>>>>>>>>>>>>>>>>',
    // );
    // console.log(image, 'Image<<<<<>>>>>>>>>>>>>>>>>>');
    // console.log(typeOfQuery, 'type of query >>>>>?>?>???>?');

    if (
        formType == null ||
        firstName == null ||
        lastName == null ||
        phoneNo == null ||
        emailId == null ||
        image == null
    ) {
        const actionData: GenericActionData = {
            error: 'Error in submitting form! Error code: 6bcf0886-4a10-446a-a9d0-c2f820938fb3',
        };
        return json(actionData);
    }

    if (formType == 'feedback') {
        if (feedback == null) {
            const actionData: GenericActionData = {
                error: 'Error in submitting form! Error code: 2a355407-ecbf-446d-9e00-96957d90592b',
            };
            return json(actionData);
        }
    } else {
        if (query == null || typeOfQuery == null) {
            const actionData: GenericActionData = {
                error: 'Error in submitting form! Error code: bd2deb03-0940-47d2-b80b-b1dec1ab041d',
            };
            return json(actionData);
        }
    }

    const actionData: GenericActionData = {
        error: null,
    };

    return json(actionData);
};

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
                        <FeedbackQueryForm />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function FeedbackQueryForm() {
    const contentData = useContext(ContentProviderContext);
    const [formType, setFormType] = useState('feedback');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [image, setImage] = useState(null);
    const [imageSizeError, setImageSizeError] = useState(false);
    const [otp, setOtp] = useState('');
    const [feedback, setFeedback] = useState('');
    const [typeOfQuery, setTypeOfQuery] = useState('');
    const [query, setQuery] = useState('');
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

    const queryList = ['Loan Disbursement', 'Loan Disbursement'];

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
                    {contentId: 'Feedback & Query Form', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-20 tw-h-10" />

            <div className="sc-px-screen-edge">
                <div className="tw-max-w-7xl tw-mx-auto">
                    {!isFormSubmitted ? (
                        <div>
                            <div className="sc-footer-text tw-text-center">
                                {contentData.getContent(
                                    '6db20e5e-ad18-4362-a869-8b539d900910',
                                )}
                            </div>

                            <VerticalSpacer className="tw-h-2 lg:tw-h-3" />

                            <div className="sc-text-headline tw-text-center">
                                {contentData.getContent(
                                    'ead9d0e2-e849-4fd6-a7fa-435a33566ba2',
                                )}
                            </div>

                            <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                            <div className="tw-flex tw-gap-2 tw-m-auto tw-w-fit">
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-p-3 tw-rounded-lg sc-text-body tw-cursor-pointer',
                                        formType == 'feedback'
                                            ? 'sc-tab-button'
                                            : 'tw-bg-secondary-400 tw-text-secondary-800',
                                    )}
                                    onClick={() => setFormType('feedback')}>
                                    {contentData.getContent("d3c303f2-ebc6-4b0a-8ff2-6a42113a8683")}
                                </div>
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-p-3 tw-rounded-lg sc-text-body tw-cursor-pointer',
                                        formType == 'query'
                                            ? 'sc-tab-button'
                                            : 'tw-bg-secondary-400 tw-text-secondary-800',
                                    )}
                                    onClick={() => setFormType('query')}>
                                    {contentData.getContent("f6e3ef9b-a993-4141-908e-ce4e9b1eb608")}
                                </div>
                            </div>

                            <VerticalSpacer className="tw-h-4 lg:tw-h-6" />

                            <div className="sc-text-body tw-text-center">
                                {contentData.getContent(
                                    '2221792d-c8d4-48f0-aef5-b7fb37929a26',
                                )}
                            </div>

                            <VerticalSpacer className="tw-h-12 lg:tw-h-8" />

                            <Form className="tw-grid tw-gap-6" method="post">
                                {formType == 'feedback' ? (
                                    <div className="tw-grid tw-gap-8 md:tw-gap-6">
                                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 md:tw-gap-6 tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-fit">
                                            <input
                                                name="firstName"
                                                value={firstName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFirstName(e.target.value)
                                                }
                                                placeholder={contentData.getContent("87e2d29c-8cc3-4623-9e69-a2fcd03be143")}
                                            />
                                            <input
                                                name="lastName"
                                                value={lastName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setLastName(e.target.value)
                                                }
                                                placeholder={contentData.getContent("850f1918-3aac-44ed-b79d-29680b977e53")}
                                            />
                                        </div>
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                            <input
                                                name="email"
                                                value={emailId}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setEmailId(e.target.value)
                                                }
                                                placeholder={contentData.getContent("17b7c145-161e-4274-a213-01fb2a78bfb5")}
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
                                                        setOtpField(false);
                                                        setPhoneNo(
                                                            e.target.value,
                                                        );
                                                        setIsOtpVerified(false);
                                                        setResendTimeOut(0);
                                                    }}
                                                    placeholder={contentData.getContent("564af2b0-053e-40a8-8ca3-22faba936de0")}
                                                />
                                                <div
                                                    className="tw-absolute tw-right-5 tw-top-[calc(50%-12px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                                    onClick={e => {
                                                        if (
                                                            firstName.length ===
                                                            0
                                                        ) {
                                                            toast.error(
                                                                'Name cannot be null! Error code: 8adb555e-e504-49a8-b7ed-5228f8bd3a7a',
                                                            );
                                                            return;
                                                        } else if (
                                                            phoneNo.length != 10
                                                        ) {
                                                            toast.error(
                                                                'Please Enter Valid Phone Number! Error code: 08122adb-69f7-4856-851d-598346f516e2',
                                                            );
                                                            return;
                                                        }
                                                        setOtpField(true);
                                                        setResendTimeOut(60);
                                                        const data =
                                                            new FormData();
                                                        data.append(
                                                            'phoneNumber',
                                                            phoneNo,
                                                        );
                                                        data.append(
                                                            'name',
                                                            firstName,
                                                        );
                                                        otpFetcher.submit(
                                                            data,
                                                            {
                                                                method: 'post',
                                                                action: '/resend-otp',
                                                            },
                                                        );
                                                    }}>
                                                    {activateOtpField ? (
                                                        <button
                                                            className={concatenateNonNullStringsWithSpaces(
                                                                'tw-opacity-50 disabled:tw-opacity-20',
                                                                phoneNo.length ==
                                                                    10
                                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                                    : '',
                                                            )}
                                                            disabled={
                                                                resendTimeOut >
                                                                    0 ||
                                                                isOtpVerified
                                                            }>
                                                            {contentData.getContent("94e994c0-5702-45bf-bc61-a1a5c0f77918")}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={concatenateNonNullStringsWithSpaces(
                                                                phoneNo.length ==
                                                                    10
                                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                                    : 'tw-opacity-50',
                                                            )}>
                                                            {contentData.getContent("aa034259-b52b-412c-944a-8d12eae08399")}
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
                                                placeholder={contentData.getContent("1fe938a0-af12-42a5-96bf-3fbf9687e077")}
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
                                                    verifyOtpFetcher.submit(
                                                        data,
                                                        {
                                                            method: 'post',
                                                            action: '/verify-otp',
                                                        },
                                                    );
                                                }}>
                                                {!isOtpVerified ? (
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            otp.length == 6
                                                                ? 'tw-text-primary-500'
                                                                : 'tw-opacity-50',
                                                        )}>
                                                        {errorInOtpVerification
                                                            ? contentData.getContent("2056357a-60cc-4316-aab4-540585c22e5c")
                                                            : contentData.getContent("14c3bd14-85c7-4f4e-a37c-3a5fddcf93a3")}
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-flex tw-gap-2',
                                                        )}>
                                                        <CheckCircleFill className="tw-text-[#00B61D]" />
                                                        <div className="tw-opacity-50">
                                                            Verified
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                {contentData.getContent("8c76e59c-965d-416c-8cfc-c3d6984f3546")}
                                            </div>
                                        </div>
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                            <textarea
                                                rows={3}
                                                name="feedback"
                                                value={feedback}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFeedback(e.target.value)
                                                }
                                                placeholder={contentData.getContent("ab2fd13d-6711-44e6-9b4f-a055d75d6f02")}
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
                                            readOnly
                                        />
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-[180px] tw-rounded-lg tw-p-3 tw-bg-secondary-100">
                                            <div
                                                className="tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-background-200 tw-w-full tw-h-full tw-cursor-pointer"
                                                onClick={handleClick}>
                                                <div className="tw-grid tw-auto-rows-max tw-gap-2 tw-h-fit tw-relative">
                                                    <Upload className="tw-justify-self-center" />
                                                    <div className="tw-text-center sc-text-body">
                                                        {contentData.getContent("3c5cff57-1049-4d39-a524-86dee56b949a")}
                                                    </div>
                                                    <div className="tw-text-center sc-footer-text tw-text-secondary-600">
                                                        {contentData.getContent("b5824002-198e-4b8a-8405-bd8d59d2b655")}
                                                    </div>
                                                    {imageSizeError && (
                                                        <div className="tw-absolute tw-w-full tw-text-center -tw-bottom-5 sc-footer-text tw-text-[red] tw-font-bold">
                                                            {contentData.getContent("ff326c1a-2617-466e-9c89-14a3f6c264d4")}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="tw-grid tw-gap-8 md:tw-gap-6">
                                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 md:tw-gap-6 tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-fit">
                                            <input
                                                name="firstName"
                                                value={firstName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFirstName(e.target.value)
                                                }
                                                placeholder={contentData.getContent("87e2d29c-8cc3-4623-9e69-a2fcd03be143")}
                                            />
                                            <input
                                                name="lastName"
                                                value={lastName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setLastName(e.target.value)
                                                }
                                                placeholder={contentData.getContent("850f1918-3aac-44ed-b79d-29680b977e53")}
                                            />
                                        </div>
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                            <input
                                                name="email"
                                                value={emailId}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setEmailId(e.target.value)
                                                }
                                                placeholder={contentData.getContent("17b7c145-161e-4274-a213-01fb2a78bfb5")}
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
                                                        setPhoneNo(
                                                            e.target.value,
                                                        );
                                                        setResendTimeOut(0);
                                                    }}
                                                    placeholder={contentData.getContent("564af2b0-053e-40a8-8ca3-22faba936de0")}
                                                />
                                                <div
                                                    className="tw-absolute tw-right-5 tw-top-[calc(50%-12px)] sc-text-button tw-text-secondary-600 tw-cursor-pointer"
                                                    onClick={e => {
                                                        if (
                                                            firstName.length ===
                                                            0
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
                                                        const data =
                                                            new FormData();
                                                        data.append(
                                                            'phoneNumber',
                                                            phoneNo,
                                                        );
                                                        data.append(
                                                            'name',
                                                            firstName,
                                                        );
                                                        otpFetcher.submit(
                                                            data,
                                                            {
                                                                method: 'post',
                                                                action: '/resend-otp',
                                                            },
                                                        );
                                                    }}>
                                                    {activateOtpField ? (
                                                        <button
                                                            className={concatenateNonNullStringsWithSpaces(
                                                                'tw-opacity-50 disabled:tw-opacity-20',
                                                                phoneNo.length ==
                                                                    10
                                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                                    : '',
                                                            )}
                                                            disabled={
                                                                resendTimeOut >
                                                                    0 ||
                                                                isOtpVerified
                                                            }>
                                                            {contentData.getContent("94e994c0-5702-45bf-bc61-a1a5c0f77918")}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={concatenateNonNullStringsWithSpaces(
                                                                'tw-opacity-50',
                                                                phoneNo.length ==
                                                                    10
                                                                    ? 'tw-text-primary-500 tw-opacity-100'
                                                                    : '',
                                                            )}>
                                                            {contentData.getContent("aa034259-b52b-412c-944a-8d12eae08399")}
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
                                                placeholder={contentData.getContent("1fe938a0-af12-42a5-96bf-3fbf9687e077")}
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
                                                    verifyOtpFetcher.submit(
                                                        data,
                                                        {
                                                            method: 'post',
                                                            action: '/verify-otp',
                                                        },
                                                    );
                                                }}>
                                                {!isOtpVerified ? (
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            otp.length == 6
                                                                ? 'tw-text-primary-500'
                                                                : 'tw-opacity-50',
                                                        )}>
                                                        {errorInOtpVerification
                                                            ? contentData.getContent("2056357a-60cc-4316-aab4-540585c22e5c")
                                                            : contentData.getContent("14c3bd14-85c7-4f4e-a37c-3a5fddcf93a3")}
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-flex tw-gap-2',
                                                        )}>
                                                        <CheckCircleFill className="tw-text-[#00B61D]" />
                                                        <div>{contentData.getContent("6d8ec230-cf1d-4d40-8152-d7ee54f05ad7")}</div>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                {contentData.getContent("8c76e59c-965d-416c-8cfc-c3d6984f3546")}
                                            </div>
                                        </div>
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                            <SelectComponent
                                                items={queryList}
                                                className="tw-w-full tw-border-none"
                                                greyBg={true}
                                                itemBuilder={item => {
                                                    return item == ''
                                                        ? contentData.getContent("45f57903-79d4-416d-8229-39a9071baf12")
                                                        : item;
                                                }}
                                                value={typeOfQuery}
                                                setValue={item => {
                                                    if (item != '') {
                                                        setTypeOfQuery(item);
                                                        return;
                                                    }

                                                    setTypeOfQuery('');
                                                }}
                                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100"
                                            />
                                            <input
                                                readOnly
                                                className="tw-hidden"
                                                name="typeOfQuery"
                                                value={typeOfQuery}
                                            />
                                        </div>
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center">
                                            <textarea
                                                rows={3}
                                                name="query"
                                                value={query}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setQuery(e.target.value)
                                                }
                                                placeholder={contentData.getContent("ab77e3ba-3d2f-4d6a-ad00-ba309e16ab6e")}
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
                                            readOnly
                                        />
                                        <div className="tw-w-full tw-max-w-[768px] tw-justify-self-center tw-h-[180px] tw-rounded-lg tw-p-3 tw-bg-secondary-100">
                                            <div
                                                className="tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-background-200 tw-w-full tw-h-full tw-cursor-pointer"
                                                onClick={handleClick}>
                                                <div className="tw-grid tw-auto-rows-max tw-gap-2 tw-h-fit tw-relative">
                                                    <Upload className="tw-justify-self-center" />
                                                    <div className="tw-text-center sc-text-body">
                                                        {contentData.getContent("3c5cff57-1049-4d39-a524-86dee56b949a")}
                                                    </div>
                                                    <div className="tw-text-center sc-footer-text tw-text-secondary-600">
                                                        {contentData.getContent("b5824002-198e-4b8a-8405-bd8d59d2b655")}
                                                    </div>
                                                    {imageSizeError && (
                                                        <div className="tw-absolute tw-w-full tw-text-center -tw-bottom-5 sc-footer-text tw-text-[red] tw-font-bold">
                                                            {contentData.getContent("ff326c1a-2617-466e-9c89-14a3f6c264d4")}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <input
                                    readOnly
                                    className="tw-hidden"
                                    name="formType"
                                    value={formType}
                                />
                                <button
                                    type="submit"
                                    className="sc-cta-button tw-w-fit tw-mx-auto"
                                    disabled={
                                        formType == 'feedback'
                                            ? firstName == '' ||
                                              lastName == '' ||
                                              phoneNo == '' ||
                                              emailId == '' ||
                                              feedback == '' ||
                                              !isOtpVerified
                                            : firstName == '' ||
                                              lastName == '' ||
                                              phoneNo == '' ||
                                              emailId == '' ||
                                              query == '' ||
                                              typeOfQuery == '' ||
                                              !isOtpVerified
                                    }>
                                    {contentData.getContent("0a6d1407-7c8b-4309-8023-47ab4b5b408b")}
                                </button>
                            </Form>
                        </div>
                    ) : (
                        <div className="tw-grid tw-auto-rows-max tw-h-[80vh] tw-py-28 tw-gap-6">
                            <div className="tw-w-fit tw-h-fit tw-grid tw-items-center tw-justify-self-center">
                                <CheckCircleFill className="tw-text-[#00B61D] tw-text-[80px] tw-aspect-square" />
                            </div>
                            <div className="tw-text-center sc-text-headline tw-text-secondary-800">
                                {contentData.getContent("680b41db-6d76-4aaf-b408-0de83f6e10a3")}
                            </div>
                            <div className="tw-text-center sc-text-title1 tw-text-secondary-600">
                                {contentData.getContent("3d0d6235-4126-4445-8a62-510c8a47227e")}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <VerticalSpacer className="tw-h-10 lg:tw-h-20" />
        </div>
    );
}
