import {
    type ActionFunction,
    json,
    type LoaderFunction,
    type MetaFunction,
} from '@remix-run/node';
import {Form, useActionData, useLoaderData} from '@remix-run/react';
import {useContext, useEffect, useRef, useState} from 'react';
import {
    BriefcaseFill,
    Check,
    CheckCircleFill,
    GeoAltFill,
    Share,
    Upload,
} from 'react-bootstrap-icons';
import {toast} from 'react-toastify';
import {getVernacularFromBackend} from '~/backend/contentData.server';
import {statesAndCities} from '~/backend/stateAndCity';
import {BlogsCard} from '~/components/componentLibrary/blog/blogsCard';
import {getContentGenerator} from '~/components/contentGenerator';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';
import {PageScaffold} from '~/components/pageScaffold';
import {Breadcrumbs} from '~/components/reusableComponents/breadcrumbs';
import {VerticalSpacer} from '~/components/reusableComponents/verticalSpacer';
import {ContentProviderContext} from '~/contexts/contentProviderContext';
import {ItemBuilder} from '~/global-common-typescript/itemBuilder';
import {
    safeParse,
    getObjectFromUnknown,
} from '~/global-common-typescript/utilites/typeValidationUtilities';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {
    emailIdValidationPattern,
    indianPhoneNumberValidationPattern,
} from '~/global-common-typescript/utilites/validationPatterns';
import type {StatesAndCities} from '~/typeDefinitions';

export const meta: MetaFunction = () => {
    return [
        {title: 'New Remix App'},
        {name: 'description', content: 'Welcome to SammanCapital'},
    ];
};

export type ActionData = {
    error: string | null;
};

export const action: ActionFunction = async ({request, params}) => {
    const body = await request.formData();

    const formData = safeParse(getObjectFromUnknown, body.get('formData'));

    if (formData == null) {
        const actionData: ActionData = {
            error: 'Error in submitting form! Error code: a4280aea-95cd-46df-87aa-568e6d083ebf',
        };
        return json(actionData);
    }
    // console.log("formData>>>>", formData);

    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const phoneNo = formData.phoneNo;
    const emailId = formData.emailId;
    const state = formData.state;
    const city = formData.city;
    const resume = formData.resume;
    const dob = formData.dob;
    const highestQualification = formData.highestQualification;
    const prevCompany = formData.prevCompany;
    const linkedInProfile = formData.linkedInProfile;
    const gender = formData.gender;

    // console.log("entered ???????>>>>>>>>>>>>><<<<<<<<", prevCompany);

    if (
        firstName == null ||
        phoneNo == null ||
        lastName == null ||
        emailId == null ||
        state == null ||
        city == null ||
        dob == null ||
        highestQualification == null ||
        gender == null ||
        resume == null
    ) {
        const actionData: ActionData = {
            error: 'Error in submitting form! Error code: 8722f756-30a8-41df-87b9-4cc5933b476e',
        };
        return json(actionData);
    }

    const actionData: ActionData = {
        error: null,
    };

    return json(actionData);
};

type LoaderData = {
    vernacularData: Array<{id: string; text: string}>;
    statesAndCities: StatesAndCities;
    states: Array<string>;
};

export const loader: LoaderFunction = async ({request}) => {
    const vernacularData = getVernacularFromBackend('asstBusinessManager');
    const stateAndCities: StatesAndCities = statesAndCities;
    const states = Object.keys(stateAndCities);

    const loaderData: LoaderData = {
        vernacularData: vernacularData,
        statesAndCities: stateAndCities,
        states: states,
    };
    return loaderData;
};

export default function Index() {
    const {vernacularData, statesAndCities, states} =
        useLoaderData() as LoaderData;
    return (
        <>
            <div>
                <ContentProviderContext.Provider
                    value={{
                        getContent: getContentGenerator(vernacularData),
                    }}>
                    <PageScaffold>
                        <AsstBusinessManager
                            statesAndCities={statesAndCities}
                            states={states}
                        />
                    </PageScaffold>
                </ContentProviderContext.Provider>
            </div>
        </>
    );
}

function AsstBusinessManager({
    statesAndCities,
    states,
}: {
    statesAndCities: StatesAndCities;
    states: Array<string>;
}) {
    const actionData = useActionData() as ActionData;
    const contentData = useContext(ContentProviderContext);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [imageSizeError, setImageSizeError] = useState(false);
    const fileInputRef = useRef(null);
    const dobInputRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const highestQualification = ['10th', '12th', 'Graduate', 'Post Graduate'];
    const industriesList = ['IT', 'Trading', 'Manufacturing', 'Others'];
    const checkInputRef = useRef(null);

    const blogs = [
        {
            img: contentData.getContent('1249eeea-884e-420d-8f7f-ea08e5c57ebc'),
            title: contentData.getContent(
                '0be2d531-543f-423f-9bd9-be1955edd996',
            ),
            text: contentData.getContent(
                'c9e213e8-d1bc-4c27-8ab2-2c62b47aab0a',
            ),
            date: contentData.getContent(
                '73cf8810-6871-4e14-9270-e73fa0b0bf69',
            ),
        },
        {
            img: contentData.getContent('99dd57aa-fba6-4a83-ba2e-f401d8b5fe9f'),
            title: contentData.getContent(
                'cbe6c3b2-0d77-40a7-abf8-8b283c6895f9',
            ),
            text: contentData.getContent(
                'debfa3a0-e504-447c-bd80-c04fcb7620a9',
            ),
            date: contentData.getContent(
                '8b657fbc-981d-435e-8bed-6485c416082f',
            ),
        },
        {
            img: contentData.getContent('fd411011-8af5-44e7-8384-60eb3a4877ed'),
            title: contentData.getContent(
                'dd113f2b-167b-4c7c-86b5-d4d54d894076',
            ),
            text: contentData.getContent(
                'a9b49b06-41c9-4d5d-a148-058ea26cd53c',
            ),
            date: contentData.getContent(
                'b34b6a9a-a748-4934-a936-17e8db84efed',
            ),
        },
        {
            img: contentData.getContent('53d84a4e-35da-42c3-96cc-68d853893611'),
            title: contentData.getContent(
                '6ad6cb66-bf18-493b-9466-f9c5bc373efc',
            ),
            text: contentData.getContent(
                '08ad9b9a-3c2e-4782-a2bb-6e77beb64945',
            ),
            date: contentData.getContent(
                '7f73491d-0e4f-4912-8f04-a1fbd1f995cb',
            ),
        },
        {
            img: contentData.getContent('9aa75b3b-59ea-4962-8987-d73cf493df25'),
            title: contentData.getContent(
                '64c6d076-0e95-483e-bde1-33732f24818f',
            ),
            text: contentData.getContent(
                '416e2682-11db-493a-a4eb-a64ce984aff0',
            ),
            date: contentData.getContent(
                '84b2abac-4cd2-4964-8b10-2a126f82363a',
            ),
        },
        {
            img: contentData.getContent('90b48e87-9e12-4ebf-b4ba-2be6ca1ebb38'),
            title: contentData.getContent(
                '1e3f7773-31af-489d-8dc9-95f4405e11da',
            ),
            text: contentData.getContent(
                '2cbd10af-beea-43f7-85ff-612b7c6411e4',
            ),
            date: contentData.getContent(
                'd834ab92-3067-4661-862f-7b34a4846d17',
            ),
        },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNo: '',
        emailId: '',
        state: '',
        city: '',
        resume: '',
        dob: '',
        highestQualification: '',
        prevCompany: [
            {
                companyName: '',
                industry: '',
                designation: '',
                startDate: '',
                endDate: '',
                current: false,
            },
        ],
        linkedInProfile: '',
        gender: '',
    });

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
                setFormData(prev => {
                    return {
                        ...prev,
                        resume: '',
                    };
                });
                setImageSizeError(true);
            } else {
                setFormData(prev => {
                    return {
                        ...prev,
                        resume: selectedFile,
                    };
                });
                setImageSizeError(false);
            }
        }
    };

    // console.log('companies', formData.prevCompany);

    const responsibilities = [
        'f613cf81-6439-40e3-a94d-f51d39057d66',
        '2a18eec7-bd39-4981-a1a6-d2b457d6e9d3',
        '6ae427e5-b600-4d34-bb11-a7374a522014',
        '4777a692-7dd6-48f4-a5ca-a817df90b5ed',
        '8923c115-48b6-4832-b3af-88fcc8d20ce4',
        'd1105a22-07ef-4809-8226-17a13debc7df',
        '6a272ca1-3b0f-4637-8731-f15c62fb390a',
        'fdfa7660-e483-49e8-9500-49332b26948b',
    ];
    const requirements = [
        'a7ce54f1-2bb1-40dc-a919-8b57328a1f80',
        '6b936e15-ab41-4674-b594-feffeaed5485',
        '300a5bc4-0b11-4079-8cfa-bdcadefb7253',
        '7795bf1b-419c-492c-a85f-090a6da377d0',
        '7b9f9698-0de8-4a4f-ae33-2c14a7a53e15',
        '431ca5a4-ab42-4442-99b3-9a71be65f05f',
    ];
    return (
        <>
            <VerticalSpacer className="lg:tw-h-6 tw-h-4" />

            <Breadcrumbs
                breadcrumbs={[
                    {contentId: 'Home', link: '/'},
                    {contentId: 'About Us', link: '/about-us/overview'},
                    {contentId: 'Career', link: '/career-with-us'},
                    {contentId: 'Job Description', link: '#'},
                ]}
            />

            <VerticalSpacer className="lg:tw-h-16 tw-h-10" />

            <div className="">
                <div className="sc-text-title2 tw-text-secondary-600">
                    <div className="sc-px-screen-edge">
                        <div className="tw-grid tw-gap-4 lg:tw-gap-8 tw-max-w-7xl tw-w-full tw-mx-auto ">
                            <div>
                                <div className="sc-text-headline tw-text-secondary-800">
                                    {contentData.getContent(
                                        '13768165-1eff-4efe-bb86-4820cd7fa2d9',
                                    )}
                                </div>
                                <div className="tw-flex tw-gap-5 tw-justify-between tw-items-end tw-py-4 lg:tw-py-8 tw-border-b tw-border-b-secondary-600">
                                    <div className="tw-flex tw-gap-2 md:tw-gap-6 tw-flex-wrap">
                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                            <div>
                                                <BriefcaseFill className="tw-text-secondary-800 tw-text-[21px] md:tw-text-[30px]" />
                                            </div>
                                            <div>
                                                {contentData.getContent(
                                                    'ee6eb79b-991e-4158-968d-a6d539d45418',
                                                )}
                                            </div>
                                        </div>
                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                            <div>
                                                <GeoAltFill className="tw-text-secondary-800 tw-text-[21px] md:tw-text-[30px]" />
                                            </div>
                                            <div>
                                                {contentData.getContent(
                                                    '1335d1a7-7483-4350-9063-c5610bad8aa6',
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tw-border-l tw-border-l-secondary-600 tw-px-1">
                                        <Share className="tw-text-[21px] md:tw-text-[30px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="tw-grid tw-gap-6 lg:tw-gap-10">
                                <div className="tw-flex tw-gap-4 tw-justify-between tw-flex-wrap">
                                    <div>
                                        {contentData.getContent(
                                            'd165039e-6551-40ce-882a-003bd7256012',
                                        )}
                                    </div>
                                    <button className="sc-cta-button tw-w-full sm:tw-w-fit">
                                        {contentData.getContent(
                                            '82d4a7a5-1165-4dda-8ce4-b0a81be2f2b5',
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <div className="tw-text-secondary-800 sc-text-title1">
                                        {contentData.getContent(
                                            'dfa702fb-97f1-4962-a2eb-bf87112878de',
                                        )}
                                    </div>
                                    <VerticalSpacer className="tw-h-2 lg:tw-h-4" />
                                    <div>
                                        {contentData.getContent(
                                            '8d48e71f-d9b2-4e71-b09d-8b5f7c2cb270',
                                        )}
                                    </div>
                                    <ul className="tw-list-disc tw-pl-8">
                                        <ItemBuilder
                                            items={responsibilities}
                                            itemBuilder={(item, itemIndex) => {
                                                return (
                                                    <li
                                                        key={itemIndex}
                                                        className="sc-text-title2 tw-text-secondary-600">
                                                        {contentData.getContent(
                                                            item,
                                                        )}
                                                    </li>
                                                );
                                            }}
                                        />
                                    </ul>
                                </div>
                                <div>
                                    <div className="tw-text-secondary-800 sc-text-title1">
                                        {contentData.getContent(
                                            '727aa759-3aa6-449d-b176-0552887ea2b9',
                                        )}
                                    </div>
                                    <VerticalSpacer className="tw-h-2 lg:tw-h-4" />
                                    <ul className="tw-list-disc tw-pl-8">
                                        <ItemBuilder
                                            items={requirements}
                                            itemBuilder={(item, itemIndex) => {
                                                return (
                                                    <li
                                                        key={itemIndex}
                                                        className="sc-text-title2 tw-text-secondary-600">
                                                        {contentData.getContent(
                                                            item,
                                                        )}
                                                    </li>
                                                );
                                            }}
                                        />
                                    </ul>
                                </div>
                                <div className="tw-grid tw-gap-2 lg:tw-gap-4">
                                    <div className="tw-text-secondary-800 sc-text-title1">
                                        {contentData.getContent(
                                            '05a85ae6-867c-433f-9307-f078cc2d1413',
                                        )}
                                    </div>
                                    <div>
                                        {contentData.getContent(
                                            'fd649b2e-88b4-4f35-9c23-b4a9704bd43e',
                                        )}
                                    </div>
                                </div>
                                <div className="tw-grid tw-gap-2 lg:tw-gap-4">
                                    <div className="tw-text-secondary-800 sc-text-title1">
                                        {contentData.getContent(
                                            '479fdbe6-1b71-4ddf-be46-d1eba469cdcf',
                                        )}
                                    </div>
                                    <div className="tw-flex tw-gap-4">
                                        <div className="tw-p-4 tw-rounded-full tw-bg-secondary-100">
                                            {contentData.getContent(
                                                'ceb4d07d-67a9-4e17-a34d-42b5635ad3af',
                                            )}
                                        </div>
                                        <div className="tw-p-4 tw-rounded-full tw-bg-secondary-100">
                                            {contentData.getContent(
                                                'a9a4c7a7-cc46-4e8a-828d-a071fa770feb',
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VerticalSpacer className="tw-h-10 lg:tw-h-20" />

                    <div className="">
                        {!isFormSubmitted ? (
                            <div className="sc-px-screen-edge tw-py-10 lg:tw-py-20">
                                <div className="tw-max-w-7xl tw-w-full tw-mx-auto ">
                                    <div className="sc-text-headline tw-text-center tw-text-secondary-800">
                                        {contentData.getContent(
                                            'f79da4c5-810d-4d34-9636-08035e692387',
                                        )}
                                    </div>

                                    <VerticalSpacer className="tw-h-6 lg:tw-h-8" />

                                    <Form
                                        className="tw-grid tw-gap-6"
                                        method="post">
                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                            <input
                                                name="firstName"
                                                value={formData.firstName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            firstName:
                                                                e.target.value,
                                                        };
                                                    })
                                                }
                                                placeholder="First Name"
                                            />
                                            <input
                                                name="lastName"
                                                value={formData.lastName}
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            lastName:
                                                                e.target.value,
                                                        };
                                                    })
                                                }
                                                placeholder="Last Name"
                                            />
                                        </div>

                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                            <input
                                                name="emailId"
                                                value={formData.emailId}
                                                pattern={
                                                    emailIdValidationPattern
                                                }
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            emailId:
                                                                e.target.value,
                                                        };
                                                    })
                                                }
                                                placeholder="Email ID"
                                            />
                                            <input
                                                name="phoneNo"
                                                value={formData.phoneNo}
                                                pattern={
                                                    indianPhoneNumberValidationPattern
                                                }
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            phoneNo:
                                                                e.target.value,
                                                        };
                                                    })
                                                }
                                                placeholder="Phone Number"
                                            />
                                        </div>

                                        <div className="tw-grid tw-gap-2">
                                            <div>Gender</div>
                                            <div className="tw-flex tw-gap-8">
                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-w-5 tw-aspect-square tw-h-fit tw-rounded-full tw-cursor-pointer',
                                                            formData.gender ==
                                                                'male'
                                                                ? 'tw-bg-primary-500'
                                                                : 'tw-border tw-border-secondary-800',
                                                        )}
                                                        onClick={() =>
                                                            setFormData(
                                                                prev => {
                                                                    return {
                                                                        ...prev,
                                                                        gender: 'male',
                                                                    };
                                                                },
                                                            )
                                                        }></div>
                                                    <div>Male</div>
                                                </div>
                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-w-5 tw-aspect-square tw-h-fit tw-rounded-full tw-cursor-pointer',
                                                            formData.gender ==
                                                                'female'
                                                                ? 'tw-bg-primary-500'
                                                                : 'tw-border tw-border-secondary-800',
                                                        )}
                                                        onClick={() =>
                                                            setFormData(
                                                                prev => {
                                                                    return {
                                                                        ...prev,
                                                                        gender: 'female',
                                                                    };
                                                                },
                                                            )
                                                        }></div>
                                                    <div>Female</div>
                                                </div>
                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                    <div
                                                        className={concatenateNonNullStringsWithSpaces(
                                                            'tw-w-5 tw-aspect-square tw-h-fit tw-rounded-full tw-cursor-pointer',
                                                            formData.gender ==
                                                                'LGBTQA'
                                                                ? 'tw-bg-primary-500'
                                                                : 'tw-border tw-border-secondary-800',
                                                        )}
                                                        onClick={() =>
                                                            setFormData(
                                                                prev => {
                                                                    return {
                                                                        ...prev,
                                                                        gender: 'LGBTQA',
                                                                    };
                                                                },
                                                            )
                                                        }></div>
                                                    <div>LGBTQA</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                            <SelectComponent
                                                items={states}
                                                className="tw-w-full tw-border-none"
                                                greyBg={true}
                                                itemBuilder={item => {
                                                    return item == ''
                                                        ? 'State'
                                                        : item;
                                                }}
                                                value={formData.state}
                                                setValue={item => {
                                                    if (item != '') {
                                                        setFormData(prev => {
                                                            return {
                                                                ...prev,
                                                                state: item,
                                                                city: '',
                                                            };
                                                        });
                                                        return;
                                                    }

                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            state: '',
                                                        };
                                                    });
                                                }}
                                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100 tw-px-4"
                                            />
                                            <SelectComponent
                                                items={
                                                    formData.state != ''
                                                        ? statesAndCities[
                                                              formData.state
                                                          ]
                                                        : ['']
                                                }
                                                className="tw-w-full tw-border-none"
                                                greyBg={true}
                                                // disabled={formData.state == "" || formData.state == null}
                                                itemBuilder={item => {
                                                    return item == ''
                                                        ? 'City'
                                                        : item;
                                                }}
                                                value={formData.city}
                                                setValue={item => {
                                                    if (item != '') {
                                                        setFormData(prev => {
                                                            return {
                                                                ...prev,
                                                                city: item,
                                                            };
                                                        });
                                                        return;
                                                    }

                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            city: '',
                                                        };
                                                    });
                                                }}
                                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100 tw-px-4"
                                            />
                                        </div>

                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                            <input
                                                name="dob"
                                                type="text"
                                                ref={dobInputRef}
                                                value={formData.dob}
                                                className="sc-text-input"
                                                onFocus={() => {
                                                    if (dobInputRef.current) {
                                                        dobInputRef.current.type =
                                                            'date';
                                                    }
                                                }}
                                                onBlur={() => {
                                                    if (dobInputRef.current) {
                                                        dobInputRef.current.type =
                                                            formData.dob != ''
                                                                ? 'date'
                                                                : 'text';
                                                    }
                                                }}
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            dob: e.target.value,
                                                        };
                                                    })
                                                }
                                                placeholder="DOB"
                                            />
                                            <SelectComponent
                                                items={highestQualification}
                                                className="tw-w-full tw-border-none"
                                                greyBg={true}
                                                itemBuilder={item => {
                                                    return item == ''
                                                        ? 'Highest Qualification'
                                                        : item;
                                                }}
                                                value={
                                                    formData.highestQualification
                                                }
                                                setValue={item => {
                                                    if (item != '') {
                                                        setFormData(prev => {
                                                            return {
                                                                ...prev,
                                                                highestQualification:
                                                                    item,
                                                            };
                                                        });
                                                        return;
                                                    }

                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            highestQualification:
                                                                '',
                                                        };
                                                    });
                                                }}
                                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100 tw-px-4"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="linkedInProfile"
                                                value={formData.linkedInProfile}
                                                placeholder="LinkedIn Profile Link"
                                                className="sc-text-input"
                                                onChange={e =>
                                                    setFormData(prev => {
                                                        return {
                                                            ...prev,
                                                            linkedInProfile:
                                                                e.target.value,
                                                        };
                                                    })
                                                }
                                            />
                                        </div>
                                        <input
                                            className="tw-hidden"
                                            type="file"
                                            name="resume"
                                            accept=".pdf, .doc, .docx, .txt, .rtf"
                                            style={{display: 'none'}}
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />

                                        <div className="tw-w-full tw-justify-self-center tw-h-[140px] md:tw-h-[180px] tw-rounded-lg tw-p-3 tw-bg-secondary-100 tw-text-secondary-800">
                                            <div
                                                className="tw-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-background-200 tw-w-full tw-h-full tw-cursor-pointer"
                                                onClick={handleClick}>
                                                <div className="tw-grid tw-auto-rows-max tw-gap-2 tw-h-fit tw-relative">
                                                    <Upload className="tw-justify-self-center" />
                                                    <div className="tw-text-center sc-text-body">
                                                        Upload your Resume
                                                    </div>
                                                    <div className="tw-text-center sc-footer-text tw-text-secondary-600 tw-px-5">
                                                        Max. 2 MB size in .pdf,
                                                        .doc, .docx, .txt, .rtf
                                                        format
                                                    </div>
                                                    {imageSizeError && (
                                                        <div className="tw-absolute tw-w-full tw-text-center -tw-bottom-5 sc-footer-text tw-text-[red] tw-font-bold">
                                                            File Size exceeded!
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tw-h-[1px] tw-border-b tw-border-b-secondary-800"></div>

                                        <ItemBuilder
                                            items={formData.prevCompany}
                                            itemBuilder={(item, itemIndex) => {
                                                return (
                                                    <div
                                                        key={itemIndex}
                                                        className="tw-w-full tw-grid tw-gap-6">
                                                        <div className="sc-text-title1 tw-text-secondary-800">
                                                            Work Experience{' '}
                                                            {formData
                                                                .prevCompany
                                                                .length > 1
                                                                ? itemIndex + 1
                                                                : ''}
                                                        </div>
                                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                                            <input
                                                                value={
                                                                    item.companyName
                                                                }
                                                                className="sc-text-input"
                                                                onChange={e =>
                                                                    setFormData(
                                                                        prevFormData => {
                                                                            const newPrevData =
                                                                                [
                                                                                    ...prevFormData.prevCompany,
                                                                                ];
                                                                            newPrevData[
                                                                                itemIndex
                                                                            ] =
                                                                                {
                                                                                    ...newPrevData[
                                                                                        itemIndex
                                                                                    ],
                                                                                    companyName:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                };
                                                                            return {
                                                                                ...prevFormData,
                                                                                prevCompany:
                                                                                    newPrevData,
                                                                            };
                                                                        },
                                                                    )
                                                                }
                                                                placeholder="Company Name"
                                                            />
                                                            <SelectComponent
                                                                items={
                                                                    industriesList
                                                                }
                                                                className="tw-w-full tw-border-none"
                                                                greyBg={true}
                                                                itemBuilder={item => {
                                                                    return item ==
                                                                        ''
                                                                        ? 'Industry'
                                                                        : item;
                                                                }}
                                                                value={
                                                                    item.industry
                                                                }
                                                                setValue={item => {
                                                                    if (
                                                                        item !=
                                                                        ''
                                                                    ) {
                                                                        setFormData(
                                                                            prevFormData => {
                                                                                const newPrevData =
                                                                                    [
                                                                                        ...prevFormData.prevCompany,
                                                                                    ];
                                                                                newPrevData[
                                                                                    itemIndex
                                                                                ] =
                                                                                    {
                                                                                        ...newPrevData[
                                                                                            itemIndex
                                                                                        ],
                                                                                        industry:
                                                                                            item,
                                                                                    };

                                                                                return {
                                                                                    ...prevFormData,
                                                                                    prevCompany:
                                                                                        newPrevData,
                                                                                };
                                                                            },
                                                                        );
                                                                        return;
                                                                    }

                                                                    setFormData(
                                                                        prevFormData => {
                                                                            const newPrevData =
                                                                                [
                                                                                    ...prevFormData.prevCompany,
                                                                                ];
                                                                            newPrevData[
                                                                                itemIndex
                                                                            ] =
                                                                                {
                                                                                    ...newPrevData[
                                                                                        itemIndex
                                                                                    ],
                                                                                    industry:
                                                                                        '',
                                                                                };

                                                                            return {
                                                                                ...prevFormData,
                                                                                prevCompany:
                                                                                    newPrevData,
                                                                            };
                                                                        },
                                                                    );
                                                                }}
                                                                buttonClassName="disabled:tw-bg-[#aeaeae] sc-text-input tw-rounded-lg tw-bg-secondary-100 tw-px-4"
                                                            />
                                                        </div>

                                                        <div>
                                                            <input
                                                                type="text"
                                                                name="designation"
                                                                value={
                                                                    item.designation
                                                                }
                                                                placeholder="Your Role / Designation"
                                                                className="sc-text-input"
                                                                onChange={e =>
                                                                    setFormData(
                                                                        prevFormData => {
                                                                            const newPrevData =
                                                                                [
                                                                                    ...prevFormData.prevCompany,
                                                                                ];
                                                                            newPrevData[
                                                                                itemIndex
                                                                            ] =
                                                                                {
                                                                                    ...newPrevData[
                                                                                        itemIndex
                                                                                    ],
                                                                                    designation:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                };

                                                                            return {
                                                                                ...prevFormData,
                                                                                prevCompany:
                                                                                    newPrevData,
                                                                            };
                                                                        },
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]  tw-gap-6 tw-w-full tw-justify-self-center tw-h-fit">
                                                            <input
                                                                type="text"
                                                                ref={
                                                                    startDateRef
                                                                }
                                                                value={
                                                                    item.startDate
                                                                }
                                                                className="sc-text-input"
                                                                onFocus={() => {
                                                                    if (
                                                                        startDateRef.current
                                                                    ) {
                                                                        startDateRef.current.type =
                                                                            'date';
                                                                    }
                                                                }}
                                                                onBlur={() => {
                                                                    if (
                                                                        startDateRef.current
                                                                    ) {
                                                                        startDateRef.current.type =
                                                                            formData
                                                                                .prevCompany[
                                                                                itemIndex
                                                                            ]
                                                                                .startDate !=
                                                                            ''
                                                                                ? 'date'
                                                                                : 'text';
                                                                    }
                                                                }}
                                                                onChange={e =>
                                                                    setFormData(
                                                                        prevFormData => {
                                                                            const newPrevData =
                                                                                [
                                                                                    ...prevFormData.prevCompany,
                                                                                ];
                                                                            newPrevData[
                                                                                itemIndex
                                                                            ] =
                                                                                {
                                                                                    ...newPrevData[
                                                                                        itemIndex
                                                                                    ],
                                                                                    startDate:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                };

                                                                            return {
                                                                                ...prevFormData,
                                                                                prevCompany:
                                                                                    newPrevData,
                                                                            };
                                                                        },
                                                                    )
                                                                }
                                                                placeholder="Start Date"
                                                            />
                                                            <input
                                                                type="text"
                                                                ref={endDateRef}
                                                                value={
                                                                    item.endDate
                                                                }
                                                                className="sc-text-input"
                                                                onFocus={() => {
                                                                    if (
                                                                        endDateRef.current
                                                                    ) {
                                                                        endDateRef.current.type =
                                                                            'date';
                                                                    }
                                                                }}
                                                                onBlur={() => {
                                                                    if (
                                                                        endDateRef.current
                                                                    ) {
                                                                        endDateRef.current.type =
                                                                            formData
                                                                                .prevCompany[
                                                                                itemIndex
                                                                            ]
                                                                                .endDate !=
                                                                            ''
                                                                                ? 'date'
                                                                                : 'text';
                                                                    }
                                                                }}
                                                                onChange={e =>
                                                                    setFormData(
                                                                        prevFormData => {
                                                                            const newPrevData =
                                                                                [
                                                                                    ...prevFormData.prevCompany,
                                                                                ];
                                                                            newPrevData[
                                                                                itemIndex
                                                                            ] =
                                                                                {
                                                                                    ...newPrevData[
                                                                                        itemIndex
                                                                                    ],
                                                                                    endDate:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                };

                                                                            return {
                                                                                ...prevFormData,
                                                                                prevCompany:
                                                                                    newPrevData,
                                                                            };
                                                                        },
                                                                    )
                                                                }
                                                                placeholder="End Date"
                                                            />
                                                            <div className="tw-w-fit tw-flex tw-flex-row tw-gap-x-2 tw-items-center">
                                                                <input
                                                                    ref={
                                                                        checkInputRef
                                                                    }
                                                                    type="checkbox"
                                                                    defaultChecked={
                                                                        item.current
                                                                    }
                                                                    name="current"
                                                                    className="tw-hidden"
                                                                    onChange={() =>
                                                                        setFormData(
                                                                            prevFormData => {
                                                                                const newPrevData =
                                                                                    [
                                                                                        ...prevFormData.prevCompany,
                                                                                    ];
                                                                                newPrevData[
                                                                                    itemIndex
                                                                                ] =
                                                                                    {
                                                                                        ...newPrevData[
                                                                                            itemIndex
                                                                                        ],
                                                                                        current:
                                                                                            !formData
                                                                                                .prevCompany[
                                                                                                itemIndex
                                                                                            ]
                                                                                                .current,
                                                                                    };

                                                                                return {
                                                                                    ...prevFormData,
                                                                                    prevCompany:
                                                                                        newPrevData,
                                                                                };
                                                                            },
                                                                        )
                                                                    }
                                                                />

                                                                <div
                                                                    className={concatenateNonNullStringsWithSpaces(
                                                                        'tw-w-4 tw-h-4 tw-aspect-square tw-text-secondary-200 tw-cursor-pointer tw-rounded tw-font-bold tw-flex tw-items-center tw-justify-center',
                                                                        item.current
                                                                            ? 'tw-bg-primary-500'
                                                                            : 'tw-border tw-border-secondary-800',
                                                                    )}
                                                                    onClick={() =>
                                                                        checkInputRef.current?.click()
                                                                    }>
                                                                    {item.current ? (
                                                                        <Check />
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </div>

                                                                <div className="sc-text-body">
                                                                    Current
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        />

                                        <div
                                            className="tw-text-primary-500 tw-w-fit tw-cursor-pointer"
                                            onClick={() =>
                                                setFormData(prevFormData => {
                                                    const newPrevData = [
                                                        ...prevFormData.prevCompany,
                                                        {
                                                            companyName: '',
                                                            industry: '',
                                                            designation: '',
                                                            startDate: '',
                                                            endDate: '',
                                                            current: false,
                                                        },
                                                    ];

                                                    return {
                                                        ...prevFormData,
                                                        prevCompany:
                                                            newPrevData,
                                                    };
                                                })
                                            }>
                                            {contentData.getContent(
                                                'a1a59453-80ce-4f25-be0e-62fb6fe2f8ae',
                                            )}
                                        </div>

                                        <input
                                            name="formData"
                                            className="tw-hidden"
                                            readOnly
                                            value={JSON.stringify(formData)}
                                        />

                                        <button
                                            type="submit"
                                            className="sc-cta-button tw-w-fit tw-mx-auto"
                                            disabled={
                                                formData.highestQualification ==
                                                    '' ||
                                                formData.firstName == '' ||
                                                formData.lastName == '' ||
                                                formData.phoneNo == '' ||
                                                formData.emailId == '' ||
                                                formData.resume == '' ||
                                                formData.gender == '' ||
                                                formData.state == '' ||
                                                formData.city == '' ||
                                                formData.dob == ''
                                            }>
                                            Submit Application
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        ) : (
                            <div className="tw-grid tw-pt-10 lg:tw-pt-20">
                                <div className="tw-grid tw-auto-rows-max tw-pb-10 lg:tw-pb-20 tw-gap-6 sc-px-screen-edge">
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

                                <div className="tw-grid tw-gap-6 lg:tw-gap-8 tw-bg-secondary-400 tw-py-10 lg:tw-py-20">
                                    <div className="tw-text-center sc-text-headline sc-px-screen-edge tw-text-secondary-800">
                                        {contentData.getContent(
                                            '7e4b8d1d-0794-46dd-8ffc-92472eff0d1c',
                                        )}
                                    </div>
                                    <div className="sc-px-screen-edge">
                                        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6 tw-max-w-7xl tw-w-full tw-mx-auto">
                                            <ItemBuilder
                                                items={blogs}
                                                itemBuilder={(
                                                    item,
                                                    itemIndex,
                                                ) => (
                                                    <BlogsCard
                                                        date={item.date}
                                                        title={item.title}
                                                        text={item.text}
                                                        key={itemIndex}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
