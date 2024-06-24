import {Link, useFetcher} from '@remix-run/react';
import {useEffect, useRef, useState} from 'react';
import {CheckCircleFill, ChevronRight} from 'react-bootstrap-icons';
import {toast} from 'react-toastify';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {
    emailIdValidationPattern,
    indianPhoneNumberValidationPattern,
    pinCodeValidationPattern,
} from '~/global-common-typescript/utilites/validationPatterns';
import type {ContentProvider} from '~/typeDefinitions';

// export function HelpSection({
//     heading,
//     subHeading,
//     className,
//     contentData,
// }: {
//     heading: string;
//     subHeading: string;
//     className?: string;
//     contentData: ContentProvider;
// }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         phoneNo: '',
//         query: '',
//         termsAndConditionsChecked: true,
//     });
//     const checkInputRef = useRef(null);
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     const formFetcher = useFetcher();
//     const [useData, setUseData] = useState(formFetcher);
//     const jsonItems = contentData.getContent(
//         '573b2f14-89bc-4dce-a256-a47293ad1518',
//     );
//     const items = jsonItems ? JSON.parse(jsonItems) : [];
//     // console.log("Content Data>>>>>>>", items);

//     useEffect(() => {
//         // console.log("Fetcher Data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//         if (formFetcher.data != null) {
//             if (formFetcher.data.error != null) {
//                 toast.error(formFetcher.data.error);
//                 setIsFormSubmitted(false);
//                 return;
//             }
//             setIsFormSubmitted(true);
//         }
//     }, [formFetcher.data, useData]);
//     return (
//         <div className={concatenateNonNullStringsWithSpaces('', className)}>
//             <div className="tw-max-w-7xl tw-mx-auto">
//                 <div className="tw-text-center sc-text-headline">{heading}</div>
//                 <VerticalSpacer className="tw-h-2" />
//                 <div className="tw-text-center sc-text-body">{subHeading}</div>
//                 <VerticalSpacer className="lg:tw-h-8 tw-h-6" />
//                 <div className="tw-grid lg:tw-grid-cols-2 tw-gap-8">
//                     <div className="tw-px-4 tw-border tw-border-[#F2F2F2] tw-rounded-lg tw-py-2">
//                         <ItemBuilder
//                             items={items}
//                             itemBuilder={(item, itemIndex) => {
//                                 return (
//                                     <Link
//                                         to={item.subText}
//                                         className={concatenateNonNullStringsWithSpaces(
//                                             'tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-gap-3 tw-py-2',
//                                             itemIndex === items.length - 1
//                                                 ? ''
//                                                 : 'tw-border-b tw-border-[#424242] tw-border-opacity-[0.1]',
//                                         )}
//                                         key={itemIndex}>
//                                         <div className="tw-h-14 tw-w-14 tw-rounded-full tw-bg-[#001CA8]">
//                                             {/* <img src="" /> */}
//                                         </div>
//                                         <div className="tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-gap-x-1">
//                                             <div className="sc-text-title1 tw-col-start-1">
//                                                 {item.title}
//                                             </div>
//                                             <div className="sc-text-title2 tw-col-start-1 tw-text-secondary-600">
//                                                 {item.text}
//                                             </div>
//                                             <ChevronRight className="tw-h-4 tw-w-4 tw-col-start-2 tw-row-start-1 tw-text-primary-500 tw-font-bold" />
//                                         </div>
//                                     </Link>
//                                 );
//                             }}
//                         />
//                     </div>
//                     {!isFormSubmitted ? (
//                         <formFetcher.Form
//                             className="tw-grid"
//                             method="post"
//                             action="/contact-us-form-submission">
//                             <div className="sc-text-title1">
//                                 {contentData.getContent(
//                                     'f0b9145c-6837-4c83-80e4-fd2bba093a9d',
//                                 )}
//                             </div>
//                             <VerticalSpacer className="tw-h-4" />

//                             <input
//                                 type="text"
//                                 name="phoneNumber"
//                                 value={formData.phoneNo}
//                                 placeholder={contentData.getContent(
//                                     '498b8a28-38dd-40c3-ab3f-be251e41a968',
//                                 )}
//                                 className="sc-text-input"
//                                 onChange={e =>
//                                     setFormData(prev => {
//                                         return {
//                                             ...prev,
//                                             phoneNo: e.target.value,
//                                         };
//                                     })
//                                 }
//                                 required
//                             />
//                             <VerticalSpacer className="tw-h-4" />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 placeholder={contentData.getContent(
//                                     '537097fc-ec46-4ae1-a81b-b355bc98a79c',
//                                 )}
//                                 className="sc-text-input"
//                                 onChange={e =>
//                                     setFormData(prev => {
//                                         return {
//                                             ...prev,
//                                             name: e.target.value,
//                                         };
//                                     })
//                                 }
//                                 required
//                             />
//                             <VerticalSpacer className="tw-h-4" />
//                             <textarea
//                                 name="queryDetails"
//                                 placeholder={contentData.getContent(
//                                     'f5502f0d-d0e6-47e5-ab24-90a1c3b4f244',
//                                 )}
//                                 value={formData.query}
//                                 className="sc-text-input"
//                                 onChange={e =>
//                                     setFormData(prev => {
//                                         return {
//                                             ...prev,
//                                             query: e.target.value,
//                                         };
//                                     })
//                                 }
//                                 required
//                             />
//                             <VerticalSpacer className="tw-h-2" />
//                             <div className="tw-w-full tw-flex tw-flex-row tw-gap-x-2 tw-items-center">
//                                 <input
//                                     ref={checkInputRef}
//                                     type="checkbox"
//                                     defaultChecked={
//                                         formData.termsAndConditionsChecked
//                                     }
//                                     name="termsAndConditionsChecked"
//                                     className="tw-hidden"
//                                     onChange={() =>
//                                         setFormData(prev => {
//                                             return {
//                                                 ...prev,
//                                                 termsAndConditionsChecked:
//                                                     !formData.termsAndConditionsChecked,
//                                             };
//                                         })
//                                     }
//                                 />
//                                 <div
//                                     className={concatenateNonNullStringsWithSpaces(
//                                         'tw-w-4 tw-aspect-square tw-text-secondary-200 tw-cursor-pointer tw-rounded tw-font-bold tw-flex tw-items-center tw-justify-center',
//                                         formData.termsAndConditionsChecked
//                                             ? 'tw-bg-primary-500'
//                                             : 'tw-border tw-border-primary-500',
//                                     )}
//                                     onClick={() =>
//                                         checkInputRef.current?.click()
//                                     }>
//                                     {formData.termsAndConditionsChecked ? (
//                                         <Check />
//                                     ) : (
//                                         ''
//                                     )}
//                                 </div>

//                                 <div className="sc-text-body">
//                                     {contentData.getContent(
//                                         '069eb233-b02b-40d7-b8ba-dcc6e471bc2e',
//                                     )}
//                                 </div>
//                             </div>

//                             <input
//                                 className="tw-hidden"
//                                 name="formData"
//                                 readOnly
//                                 value={JSON.stringify(formData)}
//                             />

//                             <VerticalSpacer className="tw-h-5" />
//                             <button
//                                 disabled={
//                                     formData.termsAndConditionsChecked ==
//                                         false ||
//                                     formData.name == '' ||
//                                     formData.phoneNo == '' ||
//                                     formData.query == ''
//                                 }
//                                 type="submit"
//                                 className="sc-cta-button tw-text-secondary-100 lg:tw-justify-self-start tw-justify-self-center tw-grid tw-w-[19rem]">
//                                 {contentData.getContent(
//                                     '6b96b9dd-8a88-4867-9222-56ee5bddd3cf',
//                                 )}
//                             </button>
//                         </formFetcher.Form>
//                     ) : (
//                         <div className="tw-flex tw-auto-rows-max tw-h-full tw-gap-6 tw-items-center tw-justify-center">
//                             <div className="tw-grid tw-h-fit tw-self-center">
//                                 <div className="tw-w-fit tw-h-fit tw-grid tw-items-center tw-justify-self-center">
//                                     <CheckCircleFill className="tw-text-[#00B61D] tw-text-[80px] tw-aspect-square" />
//                                 </div>
//                                 <VerticalSpacer className="tw-h-8 lg:tw-h-12" />
//                                 <div className="tw-text-center sc-text-title1 tw-text-secondary-800">
//                                     {contentData.getContent(
//                                         '9c307452-501c-465c-bfa3-1a2f831f1c08',
//                                     )}
//                                 </div>
//                                 <VerticalSpacer className="tw-h-3 lg:tw-h-4" />
//                                 <div className="tw-text-center sc-text-title2 tw-text-secondary-600">
//                                     {contentData.getContent(
//                                         'e1694c8a-5b67-4049-8370-2c3f26d1e13c',
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

export function HelpSection({
    heading,
    subHeading,
    className,
    contentData,
    background
}: {
    heading: string;
    subHeading?: string;
    className?: string;
    contentData: ContentProvider;
    background?: boolean
}) {
    const [formData, setFormData] = useState({
        name: '',
        phoneNo: '',
        reason: '',
        email: '',
        pincode: '',
        Category: '',
        // termsAndConditionsChecked: true,
    });
    // const checkInputRef = useRef(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const formFetcher = useFetcher();
    const [useData, setUseData] = useState(formFetcher);
    const jsonItems = contentData.getContent(
        '573b2f14-89bc-4dce-a256-a47293ad1518',
    );
    const categoriesItem = [
        'Home Loan',
        'Loan Against Property',
        'Home Renovation',
    ];

    const [selectedCategories, setSelectedCategories] =
        useState(contentData.getContent("7a659e01-1231-48bb-9be7-84a781d15f7f"));
    // const items = jsonItems ? JSON.parse(jsonItems) : [];

    const items = [
        {
            image: '',
            title: 'Email us',
            text: 'homeloans@indiabulls.com',
            linkUrl: 'mailto:homeloans@indiabulls.com',
        },
        {
            image: '',
            title: 'Call Us',
            text: 'Home Loan Inquiry and Assistance',
            linkUrl: 'tel:+82390199000',
        },
        {
            image: '',
            title: 'WhatsApp',
            text: 'WhatsApp on 82390199000',
            linkUrl: 'https://wa.me/82390199000',
        },
        {
            image: '',
            title: 'Branch Locator',
            text: 'Locate your nearest branch',
            linkUrl: '/contact-us/locate-us',
        },
    ];

    useEffect(() => {
        if (formFetcher.data != null) {
            if (formFetcher.data.error != null) {
                toast.error(formFetcher.data.error);
                setIsFormSubmitted(false);
                return;
            }
            setIsFormSubmitted(true);
        }
    }, [formFetcher.data, useData]);

    const [reason, setReason] = useState(true);
    return (
        <div className={concatenateNonNullStringsWithSpaces('sc-px-screen-edge tw-py-10 lg:tw-py-20', className, background? "lg:tw-bg-secondary-400" : "")}>
            <div className="tw-max-w-[56rem] tw-mx-auto">
                <div className="lg:tw-block tw-hidden tw-text-center sc-text-headline">
                    {contentData.getContent("eb268dbd-cf19-4690-b0d1-ca219c5160ee")}
                </div>
                {/* <div className="lg:tw-block tw-hidden tw-text-center sc-text-title1 tw-text-secondary-600">
                    {subHeading}
                </div> */}
                <VerticalSpacer className="lg:tw-h-8 tw-hidden lg:tw-block" />
                <div className="tw-grid lg:tw-grid-cols-2 tw-gap-10">
                    {!isFormSubmitted ? (
                        <formFetcher.Form
                            className="tw-grid"
                            method="post"
                            action="/contact-us-form-submission">
                            <div className="sc-text-headline tw-text-secondary-800 tw-text-center">
                                {contentData.getContent("4d37f5c2-5fa0-417a-93a5-cb0a7c120c75")}
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <div className="tw-w-full tw-relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    placeholder={contentData.getContent("32a4b1e1-0dd1-4faf-8942-1625f921edf6")}
                                    className="sc-text-input"
                                    onChange={e =>
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                name: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-absolute sc-text-icon tw-px-2 tw-z-10 tw-text-secondary-600 tw-top-1 tw-left-2 tw-isolate',
                                        formData.name
                                            ? 'tw-visible'
                                            : 'tw-hidden',
                                    )}>
                                    {contentData.getContent("32a4b1e1-0dd1-4faf-8942-1625f921edf6")}
                                </label>
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <div className="tw-w-full tw-relative">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNo}
                                    placeholder={contentData.getContent("9f40bee5-a8a1-4b34-bc80-77b7e73fd02b")}
                                    pattern={indianPhoneNumberValidationPattern}
                                    max={10}
                                    className="sc-text-input"
                                    onChange={e =>
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                phoneNo: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                                <label
                                    htmlFor="phoneNumber"
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-absolute sc-text-icon tw-px-2 tw-z-10 tw-text-secondary-600 tw-top-1 tw-left-2 tw-isolate',
                                        formData.phoneNo
                                            ? 'tw-visible'
                                            : 'tw-hidden',
                                    )}>
                                    {contentData.getContent("9f40bee5-a8a1-4b34-bc80-77b7e73fd02b")}
                                </label>
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <div className="tw-w-full tw-relative">
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    pattern={emailIdValidationPattern}
                                    placeholder={contentData.getContent("525b1b32-8b55-4ab5-8264-429319252d7b")}
                                    className="sc-text-input"
                                    onChange={e =>
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                email: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-absolute sc-text-icon tw-px-2 tw-z-10 tw-text-secondary-600 tw-top-1 tw-left-2 tw-isolate',
                                        formData.email
                                            ? 'tw-visible'
                                            : 'tw-hidden',
                                    )}>
                                    {contentData.getContent("525b1b32-8b55-4ab5-8264-429319252d7b")}
                                </label>
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <div className="tw-w-full tw-relative">
                                {' '}
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    placeholder={contentData.getContent("bb67455d-4f1e-4b4e-87f8-4e165597ccd3")}
                                    pattern={pinCodeValidationPattern}
                                    className="sc-text-input"
                                    onChange={e =>
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                pincode: e.target.value,
                                            };
                                        })
                                    }
                                    required
                                />
                                <label
                                    htmlFor="pincode"
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-absolute sc-text-icon tw-px-2 tw-z-10 tw-text-secondary-600 tw-top-1 tw-left-2 tw-isolate',
                                        formData.pincode
                                            ? 'tw-visible'
                                            : 'tw-hidden',
                                    )}>
                                    {contentData.getContent("bb67455d-4f1e-4b4e-87f8-4e165597ccd3")}
                                </label>
                            </div>

                            <VerticalSpacer className="tw-h-6" />
                            <div className="tw-w-full tw-relative">
                                <SelectComponent
                                    items={categoriesItem}
                                    itemBuilder={item => {
                                        return item == '' ? contentData.getContent("7a659e01-1231-48bb-9be7-84a781d15f7f") : item;
                                    }}
                                    value={selectedCategories}
                                    setValue={item => {
                                        if (item != '') {
                                            setSelectedCategories(item);
                                            setFormData(prev => {
                                                return {
                                                    ...prev,
                                                    Category: item,
                                                };
                                            });
                                            return;
                                        }

                                        setSelectedCategories('');
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                Category: '',
                                            };
                                        });
                                    }}
                                    buttonClassName="disabled:tw-bg-[#aeaeae] tw-bg-secondary-200"
                                    className="tw-w-full tw-border-none"
                                />
                                <label
                                    htmlFor="category"
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-absolute sc-text-icon tw-px-2 tw-z-10 tw-text-secondary-600 tw-top-1 tw-left-2 tw-isolate',
                                        formData.Category
                                            ? 'tw-visible'
                                            : 'tw-hidden',
                                    )}>
                                    {contentData.getContent("7a659e01-1231-48bb-9be7-84a781d15f7f")}
                                </label>
                            </div>
                            <VerticalSpacer className="tw-h-6" />
                            <div
                                className="tw-text-primary-500 tw-text-center sc-text-button tw-cursor-pointer"
                                onClick={() => setReason(!reason)}>
                                {reason ? '+ ADD Reason' : '- Hide Reason'}
                            </div>
                            <VerticalSpacer className="tw-h-8" />
                            {!reason && (
                                <>
                                    <textarea
                                        name="reason"
                                        placeholder={contentData.getContent("bf5e333f-d062-44fa-89ae-ebb3b0584b85")}
                                        value={formData.reason}
                                        className="sc-text-input tw-min-h-[8rem] tw-rounded-lg"
                                        onChange={e =>
                                            setFormData(prev => {
                                                return {
                                                    ...prev,
                                                    reason: e.target.value,
                                                };
                                            })
                                        }
                                    />
                                    <VerticalSpacer className="tw-h-4" />
                                </>
                            )}
                            {/* <div className="tw-w-full tw-flex tw-flex-row tw-gap-x-2 tw-items-center">
                                <input
                                    ref={checkInputRef}
                                    type="checkbox"
                                    defaultChecked={
                                        formData.termsAndConditionsChecked
                                    }
                                    name="termsAndConditionsChecked"
                                    className="tw-hidden"
                                    onChange={() =>
                                        setFormData(prev => {
                                            return {
                                                ...prev,
                                                termsAndConditionsChecked:
                                                    !formData.termsAndConditionsChecked,
                                            };
                                        })
                                    }
                                />
                                <div
                                    className={concatenateNonNullStringsWithSpaces(
                                        'tw-w-4 tw-aspect-square tw-text-secondary-200 tw-cursor-pointer tw-rounded tw-font-bold tw-flex tw-items-center tw-justify-center',
                                        formData.termsAndConditionsChecked
                                            ? 'tw-bg-primary-500'
                                            : 'tw-border tw-border-primary-500',
                                    )}
                                    onClick={() =>
                                        checkInputRef.current?.click()
                                    }>
                                    {formData.termsAndConditionsChecked ? (
                                        <Check />
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <div className="sc-text-body">
                                    I Agree To Terms & Conditions
                                </div>
                            </div> */}
                            <div className="sc-text-icon tw-text-secondary-600 tw-text-center">
                                {contentData.getContent("830a213b-2da7-4e78-9721-2e86b3344e0c")}
                            </div>

                            <input
                                className="tw-hidden"
                                name="formData"
                                readOnly
                                value={JSON.stringify(formData)}
                            />

                            <VerticalSpacer className="tw-h-6" />
                            <button
                                disabled={
                                    // formData.termsAndConditionsChecked ===
                                    //     false ||
                                    formData.name === '' ||
                                    formData.phoneNo === '' ||
                                    formData.phoneNo.length !== 10 ||
                                    formData.email === '' ||
                                    formData.pincode === '' ||
                                    formData.pincode.length !== 6 ||
                                    formData.Category === ''
                                }
                                type="submit"
                                className="sc-cta-button tw-text-secondary-100 lg:tw-justify-self-start tw-justify-self-center tw-grid tw-w-[19rem]">
                                {contentData.getContent("548ba16c-fd16-4622-b51e-2656a4e959b9")}
                            </button>
                        </formFetcher.Form>
                    ) : (
                        <div className="tw-flex tw-auto-rows-max tw-h-full tw-gap-6 tw-items-center tw-justify-center">
                            <div className="tw-grid tw-h-fit tw-self-center">
                                <div className="tw-w-fit tw-h-fit tw-grid tw-items-center tw-justify-self-center">
                                    <CheckCircleFill className="tw-text-[#00B61D] tw-text-[80px] tw-aspect-square" />
                                </div>
                                <VerticalSpacer className="tw-h-8 lg:tw-h-12" />
                                <div className="tw-text-center sc-text-title1 tw-text-secondary-800">
                                    {contentData.getContent(
                                        '9c307452-501c-465c-bfa3-1a2f831f1c08',
                                    )}
                                </div>
                                <VerticalSpacer className="tw-h-3 lg:tw-h-4" />
                                <div className="tw-text-center sc-text-title2 tw-text-secondary-600">
                                    {contentData.getContent(
                                        'e1694c8a-5b67-4049-8370-2c3f26d1e13c',
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="">
                        <div className="lg:tw-hidden tw-block">
                            <div className="tw-text-center sc-text-headline">
                                {heading}
                            </div>
                            <VerticalSpacer className="tw-h-2" />
                            <div className="tw-text-center sc-text-title1 tw-text-secondary-600">
                                {subHeading}
                            </div>
                            <VerticalSpacer className="tw-h-2" />
                        </div>
                        <div className="tw-px-4 tw-pt-3 tw-pb-10 tw-border tw-border-secondary-100">
                            <ItemBuilder
                                items={items}
                                itemBuilder={(item, itemIndex) => {
                                    return (
                                        <Link
                                            to={item.linkUrl}
                                            className={concatenateNonNullStringsWithSpaces(
                                                'tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-gap-3 tw-pb-6',
                                                itemIndex === items.length - 1
                                                    ? ''
                                                    : 'tw-border-b tw-border-[#424242] tw-border-opacity-[0.1]',
                                                itemIndex === 0
                                                    ? 'tw-pt-0'
                                                    : 'tw-pt-6',
                                            )}
                                            key={itemIndex}>
                                            <div className="tw-h-12 tw-w-12 tw-rounded-full tw-bg-[#001CA8]">
                                                {/* <img src="" /> */}
                                            </div>
                                            <div className="tw-grid tw-grid-cols-[minmax(0,1fr)_auto] tw-gap-x-1">
                                                <div className="sc-text-title1 tw-col-start-1">
                                                    {item.title}
                                                </div>
                                                <div className="sc-text-title2 tw-col-start-1 tw-text-secondary-600">
                                                    {item.text}
                                                </div>
                                                <ChevronRight className="tw-h-4 tw-w-4 tw-col-start-2 tw-row-start-1 tw-text-primary-500 tw-font-bold" />
                                            </div>
                                        </Link>
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
