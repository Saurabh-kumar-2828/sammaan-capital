import {useState} from 'react';
import {InfoCircle} from 'react-bootstrap-icons';
import {SelectComponent} from '~/components/componentLibrary/form/selectComponent';

export function PmayCalculatorCard() {
    const [selectedIncome, setSelectedIncome] = useState('Upto 3 lakhs');

    const loanAmounts = [
        {id: 0, label: '10 Lakhs', value: '10,00,000'},
        {id: 1, label: '20 Lakhs', value: '20,00,000'},
        {id: 2, label: '50 Lakhs', value: '50,00,000'},
    ];
    const [selectedAmount, setSelectedAmount] = useState(loanAmounts[0].value);
    const [years, setYears] = useState(20);
    const [area, setArea] = useState(60);

    const [isNotEligible, setIsNotEligible] = useState(false);

    return (
        <div className="tw-max-w-7xl tw-mx-auto">
            <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr)_auto] lg:tw-grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:tw-grid-rows-1 tw-gap-4 lg:tw-gap-6">
                <div className="tw-grid lg:tw-gap-10 tw-gap-4">
                    <div className="tw-grid lg:tw-gap-10 tw-gap-8">
                        <div className="tw-grid tw-gap-2 tw-relative tw-w-full">
                            <div className="sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                Annual family income (₹)
                            </div>
                            <SelectComponent
                                items={[
                                    'Upto 3 Lakhs',
                                    '3 Lakhs to 6 Lakhs',
                                    '6 Lakhs to 12 Lakhs',
                                    '12 Lakhs to 18 Lakhs',
                                    'above 18 Lakhs',
                                ]}
                                itemBuilder={item => {
                                    return item == '' ? 'No Data' : item;
                                }}
                                value={selectedIncome}
                                setValue={item => {
                                    if (item != '') {
                                        setSelectedIncome(item);
                                        return;
                                    }

                                    setSelectedIncome('');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae]"
                                className="tw-w-full tw-border-none"
                            />
                            <div className="tw-absolute md:tw-left-[14.5rem] tw-left-[10.5rem] md:tw-top-1 ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[10rem] md:tw-w-[16rem] tw-h-full tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                    Annual family income tooltip
                                </span>
                            </div>
                        </div>
                        <div className="tw-grid tw-gap-3">
                            <div className="tw-grid tw-gap-2 tw-relative">
                                <div className="sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                    Loan Amount (₹)
                                </div>
                                <div className="tw-relative tw-flex tw-gap-1 tw-items-center">
                                    <div className="tw-absolute tw-left-0 sc-text-body tw-pl-3">
                                        ₹
                                    </div>
                                    <input
                                        type="text"
                                        value={selectedAmount}
                                        className="sc-text-input tw-pl-6"
                                        onChange={e =>
                                            setSelectedAmount(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="tw-absolute md:tw-left-[10rem] tw-left-[7.5rem] md:tw-top-1 ">
                                    <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                    <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-full tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                        Loan Amount tooltip
                                    </span>
                                </div>
                            </div>
                            <div className="tw-grid tw-grid-flow-col tw-gap-4 tw-justify-start tw-w-full tw-h-full">
                                {loanAmounts.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        <button
                                            className={`tw-py-2 tw-px-4 tw-rounded-lg sc-text-body tw-h-full ${
                                                selectedAmount === item.value
                                                    ? 'sc-tab-button'
                                                    : 'tw-bg-secondary-400'
                                            }`}
                                            onClick={() =>
                                                setSelectedAmount(item.value)
                                            }>
                                            {`₹ ${item.label}`}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tw-grid tw-grid-cols-2 tw-grid-rows-[auto_0.8rem_auto_0.7rem_auto] tw-relative">
                            <div className="tw-col-start-1 tw-row-start-1 sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                Tenure (Years)
                            </div>
                            <div className="tw-col-start-2 tw-row-start-1 tw-grid tw-grid-cols-[minmax(0,1fr)_8rem]  tw-justify-end sc-text-title2">
                                <div className="sc-text-input tw-col-start-2">
                                    {years} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={years}
                                onChange={e => {
                                    const selectedYears = parseInt(
                                        e.target.value,
                                    );
                                    setYears(selectedYears);
                                }}
                                className="sc-range-input tw-col-start-1 tw-col-span-full tw-row-start-3"
                            />
                            <div className="tw-row-start-5 tw-col-start-1">
                                1 Year
                            </div>
                            <div className="tw-row-start-5 tw-col-start-2 tw-text-end">
                                30 Year
                            </div>
                            <div className="tw-absolute md:tw-left-[8.5rem] tw-left-[6.5rem] tw-top-3 md:tw-top-4 ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                    years range tooltip
                                </span>
                            </div>
                        </div>
                        <div className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-grid-rows-[auto_minmax(0,1fr)_auto] tw-gap-x-4 tw-gap-y-5 tw-relative">
                            <div className="sc-text-title2 tw-col-start-1 tw-col-span-full tw-row-start-1">
                                Is this your first pucca house?
                            </div>
                            <div className="tw-col-start-1 tw-row-start-2 tw-flex tw-gap-2">
                                <div className="tw-border-2 tw-h-6 tw-w-6 tw-rounded-full tw-border-secondary-800 tw-grid tw-justify-items-center tw-items-center">
                                    <input
                                        type="radio"
                                        name="pucca_house"
                                        defaultChecked
                                        value="YES"
                                        className="sc-radio-box tw-w-3 tw-h-3"
                                        onChange={e => setIsNotEligible(false)}
                                    />
                                </div>
                                <label htmlFor="yes">YES</label>
                            </div>
                            <div className="tw-col-start-2 tw-row-start-2 tw-flex tw-gap-2">
                                <div className="tw-border-2 tw-h-6 tw-w-6 tw-rounded-full tw-border-secondary-800 tw-grid tw-justify-items-center tw-items-center">
                                    <input
                                        type="radio"
                                        name="pucca_house"
                                        value="NO"
                                        className="sc-radio-box tw-w-3 tw-h-3"
                                        onChange={e => setIsNotEligible(true)}
                                    />
                                </div>
                                <label htmlFor="no">NO</label>
                            </div>
                            {isNotEligible && (
                                <div className="sc-text-title2 tw-text-primary-600 tw-col-start-1 tw-col-span-full tw-row-start-3">
                                    You are not eligible for this scheme as this
                                    scheme is available only for building first
                                    pucca house
                                </div>
                            )}
                            <div className="tw-absolute md:tw-left-[17rem] tw-left-[12.2rem] md:tw-top-1 ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[10rem] md:tw-w-[16rem] tw-h-full tw-border tw-relative tw-left-4 tw-bg-secondary-100 tw-p-2">
                                    Loan Amount tooltip
                                </span>
                            </div>
                        </div>
                        <div className="tw-grid tw-grid-cols-2 tw-grid-rows-[auto_0.8rem_auto_0.7rem_auto] tw-relative">
                            <div className="tw-col-start-1 tw-row-start-1 sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                Carpet Area (sq.m.)
                            </div>
                            <div className="tw-col-start-2 tw-row-start-1 tw-grid tw-grid-cols-[minmax(0,1fr)_8rem]  tw-justify-end sc-text-title2">
                                <div className="sc-text-input tw-col-start-2">
                                    {area} sq.m.
                                </div>
                            </div>
                            <input
                                type="range"
                                min="30"
                                max="500"
                                value={area}
                                onChange={e => {
                                    const selectedArea = parseInt(
                                        e.target.value,
                                    );
                                    setArea(selectedArea);
                                }}
                                className="sc-range-input tw-col-start-1 tw-col-span-full tw-row-start-3"
                            />
                            <div className="tw-row-start-5 tw-col-start-1">
                                30 sq.m.
                            </div>
                            <div className="tw-row-start-5 tw-col-start-2 tw-text-end">
                                500 sq.m.
                            </div>
                            <div className="tw-absolute md:tw-left-[11rem] tw-left-[8rem] tw-top-3 md:tw-top-4 ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                    Area (sq.m.) tooltip
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-gap-4 lg:tw-gap-6">
                    <div className="tw-grid lg:tw-grid-rows-[auto_minmax(0,1fr)] tw-grid-rows-2 sc-medium-shadow tw-rounded-lg">
                        <div className="tw-p-4 lg:tw-p-8 tw-grid lg:tw-gap-4 tw-bg-secondary-400 tw-rounded-t-lg max-lg:tw-justify-items-center">
                            <div className="sc-text-title1">
                                Subsidy amount :
                            </div>
                            {isNotEligible ? (
                                <div className="sc-text-headline tw-text-primary-600">
                                    Not Applicable
                                </div>
                            ) : (
                                <div className="sc-text-headline tw-text-primary-500">
                                    ₹ 2,67,280
                                </div>
                            )}
                        </div>
                        <div className="tw-p-4 lg:tw-p-8 tw-bg-secondary-200 tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-rounded-b-lg">
                            <div className="tw-grid tw-grid-rows-[auto_auto_minmax(0,1fr)] max-lg:tw-justify-items-center lg:tw-gap-4">
                                <div className="sc-text-title1">
                                    Subsidy Category :
                                </div>
                                {isNotEligible ? (
                                    <div className="sc-text-title1 tw-text-primary-600">
                                        Not Eligible in PMAY
                                    </div>
                                ) : (
                                    <div className="sc-text-title1 tw-text-secondary-600">
                                        LIG - Low Income Group
                                    </div>
                                )}
                            </div>
                            <button className="tw-hidden lg:tw-block sc-cta-button sc-text-body tw-col-start-1 tw-col-span-full tw-h-fit tw-text-secondary-100">
                                Apply for home Loan
                            </button>
                        </div>
                    </div>
                    <div className="tw-px-4 tw-py-[0.625rem] tw-rounded-lg tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-items-center tw-gap-4 sc-xxsmall-shadow tw-border tw-bg-secondary-100">
                        <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                            %
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-800">
                            <span className="tw-text-secondary-600">
                                Calculate Home Loan Subsidy,
                            </span>{' '}
                            Secure 5% Interest Discount Now!
                        </div>
                    </div>
                    <button className="tw-block lg:tw-hidden sc-cta-button sc-text-body tw-col-start-1 tw-col-span-full tw-h-fit tw-text-secondary-100">
                        Apply for home Loan
                    </button>
                </div>
            </div>
        </div>
    );
}
