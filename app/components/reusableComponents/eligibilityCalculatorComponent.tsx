import {Slider, rem} from '@mantine/core';
import {useEffect, useState} from 'react';
import {Download, InfoCircle, Share} from 'react-bootstrap-icons';
import {SelectComponent} from '../componentLibrary/form/selectComponent';

export function EligibilityCalculatorComponent() {
    // const amounts = [
    //     {id: 0, label: '10 Lakhs', value: '10,00,000'},
    //     {id: 1, label: '20 Lakhs', value: '20,00,000'},
    //     {id: 2, label: '50 Lakhs', value: '50,00,000'},
    // ];

    // const income = [
    //     {id: 0, label: '25k', value: '25,000'},
    //     {id: 1, label: '50k', value: '50,000'},
    //     {id: 2, label: '1 Lakhs', value: '1,00,000'},
    // ];

    const [selectedIncome, setSelectedIncome] = useState(25000);
    // const [selectedAmount, setSelectedAmount] = useState(amounts[0].value);
    const [selectedEmi, setSelectedEmi] = useState(10000);

    const [tenure, setTenure] = useState(20);
    const [year, setYear] = useState('20');
    const [month, setMonth] = useState('00');
    const [interest, setInterest] = useState(9);
    const [loanEligibility, setLoanEligibility] = useState(0);
    const [propertyCost, setPropertyCost] = useState(0);

    const [formattedLoanEligibility, setFormattedLoanEligibility] =
        useState('0');
    const [formattedPropertyCost, setFormattedPropertyCost] = useState('0');

    useEffect(() => {
        const availableMonthlyIncome = selectedIncome - selectedEmi;
        const interestRatePerMonth = interest / (12 * 100);
        const tenureInMonths = tenure * 12;
        const maxEmi = availableMonthlyIncome * 0.5;

        const loanAmount =
            (maxEmi *
                (1 - Math.pow(1 + interestRatePerMonth, -tenureInMonths))) /
            interestRatePerMonth;

        const calculatedLoanEligibility = Math.round(loanAmount);
        const calculatedPropertyCost = Math.round(calculatedLoanEligibility);

        setLoanEligibility(calculatedLoanEligibility);
        setPropertyCost(calculatedPropertyCost);

        const formattedLoan = calculatedLoanEligibility.toLocaleString('en-IN');
        const formattedProperty =
            (calculatedPropertyCost/tenure).toLocaleString('en-IN');

        setFormattedLoanEligibility(formattedLoan);
        setFormattedPropertyCost(formattedProperty);
    }, [selectedIncome, selectedEmi, tenure, interest]);

    const yearOptions = [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
    ];

    const monthOptions = [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ];

    return (
        <div className="tw-max-w-7xl tw-mx-auto">
            <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr)_auto] lg:tw-grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:tw-grid-rows-1 tw-gap-4 lg:tw-gap-6">
                <div className="tw-grid tw-gap-10">
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-grid tw-gap-2 tw-relative">
                            <div className="tw-flex tw-gap-4 tw-justify-between">
                                <div className="sc-text-title2 tw-flex tw-gap-2 tw-items-center tw-relative">
                                    Monthly Gross income (₹)
                                    <div className="tw-relative tw-flex tw-h-full tw-items-center -tw-right- sm:-tw-right-1 tw-top-  ">
                                        <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                        <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-absolute tw-left-[100%] tw-bg-secondary-100 tw-p-2">
                                            Monthly Gross income tooltip
                                        </span>
                                    </div>
                                </div>
                                <div className="tw-flex tw-items-center tw-rounded-lg tw-h-12">
                                    <div className="tw-bg-darker-grey-bg tw-px-3 sm:tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-l-lg tw-h-full">
                                        ₹
                                    </div>
                                    <div className="tw-bg-secondary-100 tw-px-3 sm:tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-r-lg tw-h-full">
                                        {selectedIncome.toLocaleString('en-IN')}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Slider
                                    thumbChildren={
                                        <div className="tw-bg-primary-500 tw-w-full tw-aspect-square tw-h-full tw-rounded-full"></div>
                                    }
                                    color="#001CA8"
                                    value={selectedIncome}
                                    defaultValue={selectedIncome}
                                    min={5000}
                                    max={120000}
                                    label={null}
                                    thumbSize={20}
                                    marks={[
                                        {value: 5000, label: '5k'},
                                        {value: 25000, label: '25k'},
                                        {value: 50000, label: '50k'},
                                        {value: 75000, label: '75k'},
                                        {value: 100000, label: '1L'},
                                        {value: 120000, label: '1.2L'},
                                    ]}
                                    styles={{
                                        thumb: {
                                            borderWidth: rem(0),
                                        },
                                        track: {
                                            height: '4px',
                                        },
                                        mark: {
                                            background: '#49454F',
                                            height: '4px',
                                            width: '4px',
                                            borderWidth: rem(0),
                                        },
                                    }}
                                    onChange={e => setSelectedIncome(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-flex tw-gap-2 tw-items-center">
                            <div className="sc-text-title2">
                                Tenure (Years & Months)
                            </div>
                            <div className="tw-relative">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <div className="tw-absolute tw-left-[100%] tw-top-0 tw tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-bg-secondary-100 tw-p-2">
                                    Tenure range tooltip
                                </div>
                            </div>
                        </div>

                        <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                            <SelectComponent
                                items={yearOptions}
                                itemBuilder={item => {
                                    return item == '' ? 'select year' : item;
                                }}
                                value={`${year} ${
                                    parseInt(year) > 1 ? 'Years' : 'Year'
                                }`}
                                setValue={item => {
                                    if (item != '') {
                                        setYear(item);
                                        setTenure(
                                            parseInt(item) +
                                                parseInt(month) / 12,
                                        );
                                        return;
                                    }

                                    setYear('00');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae]"
                                className="tw-justify-self-center tw-w-full"
                                widthFit
                            />
                            <SelectComponent
                                items={monthOptions}
                                itemBuilder={item => {
                                    return item == '' ? 'select month' : item;
                                }}
                                value={`${month} ${
                                    parseInt(month) > 1 ? 'Months' : 'Month'
                                }`}
                                setValue={item => {
                                    if (item != '') {
                                        setMonth(item);
                                        setTenure(
                                            parseInt(year) +
                                                parseInt(item) / 12,
                                        );
                                        return;
                                    }

                                    setMonth('00');
                                }}
                                buttonClassName="disabled:tw-bg-[#aeaeae]"
                                className="tw-justify-self-center tw-w-full"
                                widthFit
                            />
                        </div>

                        <div>
                            <Slider
                                thumbChildren={
                                    <div className="tw-bg-primary-500 tw-w-full tw-aspect-square tw-h-full tw-rounded-full"></div>
                                }
                                color="#001CA8"
                                value={tenure}
                                min={1}
                                max={25}
                                label={null}
                                thumbSize={20}
                                marks={[
                                    {value: 1, label: '1 Y'},
                                    {value: 5, label: '5 Y'},
                                    {value: 10, label: '10 Y'},
                                    {value: 15, label: '15 Y'},
                                    {value: 20, label: '20Y'},
                                    {value: 25, label: '25 Y'},
                                ]}
                                styles={{
                                    thumb: {
                                        borderWidth: rem(0),
                                    },
                                    track: {
                                        height: '4px',
                                    },
                                    mark: {
                                        background: '#49454F',
                                        height: '4px',
                                        width: '4px',
                                        borderWidth: rem(0),
                                    },
                                }}
                                onChange={e => {
                                    setTenure(e);
                                    setYear(JSON.stringify(Math.floor(e)));
                                    setMonth(
                                        JSON.stringify(
                                            ((Math.floor(e * 10) -
                                                Math.floor(e) * 10) /
                                                10) *
                                                12,
                                        ),
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-2 tw-gap-3">
                        <div className="tw-flex tw-gap-2 tw-items-center">
                            <div className="tw-col-start-1 tw-row-start-1 sc-text-title2">
                                Interest Rate (%)
                            </div>
                            <div className="tw-relative">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <div className="tw-absolute tw-left-[100%] tw-top-0 tw tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-bg-secondary-100 tw-p-2">
                                    Interest range tooltip
                                </div>
                            </div>
                        </div>
                        <div className="tw-col-start-2 tw-row-start-1 tw-grid tw-justify-end sc-text-title2">
                            <div className="tw-flex tw-items-center tw-rounded-lg tw-h-12">
                                <div className="tw-bg-secondary-100 tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-l-lg tw-h-full">
                                    {interest}
                                </div>
                                <div className="tw-bg-darker-grey-bg tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-r-lg tw-h-full">
                                    %
                                </div>
                            </div>
                        </div>
                        <div className="tw-col-start-1 tw-col-span-full">
                            <Slider
                                thumbChildren={
                                    <div className="tw-bg-primary-500 tw-w-full tw-aspect-square tw-h-full tw-rounded-full"></div>
                                }
                                color="#001CA8"
                                min={6}
                                max={22}
                                label={null}
                                value={interest}
                                defaultValue={12}
                                thumbSize={26}
                                marks={[
                                    {value: 6, label: '6%'},
                                    {value: 10, label: '10%'},
                                    {value: 14, label: '14%'},
                                    {value: 18, label: '18%'},
                                    {value: 22, label: '22%'},
                                ]}
                                styles={{
                                    thumb: {
                                        borderWidth: rem(0),
                                        height: '20px',
                                        width: '20px',
                                    },
                                    track: {
                                        height: '4px',
                                    },
                                    mark: {
                                        background: '#49454F',
                                        height: '4px',
                                        width: '4px',
                                        borderWidth: rem(0),
                                    },
                                }}
                                onChange={setInterest}
                            />
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-2 tw-relative">
                        <div className="sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                            Other EMIs monthly (₹)
                        </div>{' '}
                        <div className="tw-relative tw-flex tw-gap-1 tw-items-center">
                            <div className="tw-absolute tw-left-0 sc-text-body tw-pl-3">
                                ₹
                            </div>
                            <input
                                type="text"
                                value={selectedEmi}
                                className="sc-text-input tw-pl-6"
                                onChange={e =>
                                    setSelectedEmi(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="tw-absolute md:tw-left-[13.5rem] tw-left-[10rem] md:tw-top-1 ">
                            <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                            <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                Other EMIs tooltip
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tw-grid tw-gap-4 lg:tw-gap-6">
                    <div className="tw-grid lg:tw-grid-rows-[minmax(0,1fr)_auto] sc-medium-shadow tw-rounded-lg">
                        <div className="tw-grid tw-grid-rows-[auto_minmax(0,1fr)">
                            <div>
                                <div className="tw-p-4 lg:tw-p-8 tw-grid lg:tw-gap-2 tw-bg-secondary-400 tw-rounded-t-lg max-lg:tw-justify-items-center">
                                    <div className="sc-text-title2">
                                        Your Home Loan Eligibility :
                                    </div>
                                    <div className="sc-text-headline tw-text-primary-500">
                                        ₹ {formattedLoanEligibility}
                                    </div>
                                </div>
                                <div className="tw-p-4 lg:tw-p-8 tw-bg-secondary-200 tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-rounded-b-lg">
                                    <div className="tw-grid tw-grid-rows-[auto_auto_minmax(0,1fr)] max-lg:tw-justify-items-center lg:tw-gap-2">
                                        <div className="sc-text-title2">
                                            Your Home Loan EMI will be :
                                        </div>
                                        <div className="sc-text-title1 tw-font-bold">
                                            ₹ {formattedPropertyCost}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tw-mx-4 lg:tw-mx-8 tw-border-b-2 tw-h-full'></div>
                        </div>
                        <div className="tw-grid tw-auto-rows-max tw-gap-3 tw-p-4">
                            <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
                                <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                                    %
                                </div>
                                <div className="sc-text-body">
                                    Secure 10% discount on processing fees now
                                </div>
                            </div>

                            <div className="tw-grid max-sm:tw-gap-3 tw-grid-cols-[minmax(0,1fr)_auto]">
                                <div className="tw-grid tw-grid-cols-2 max-sm:tw-row-start-2">
                                    <div className="tw-flex tw-gap-2 tw-border-r-2 tw-justify-center tw-items-center">
                                        <Download />
                                        <div>Download</div>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-justify-center tw-items-center">
                                        <Share />
                                        <div>Share</div>
                                    </div>
                                </div>
                                <button className="sc-cta-button tw-self-center max-sm:tw-row-start-1">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tw-px-4 tw-py-[0.625rem] tw-rounded-lg tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-items-center tw-gap-4 sc-xxsmall-shadow tw-border tw-bg-secondary-100">
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
                    </button> */}
                </div>
            </div>
        </div>
    );
}
