import {useEffect, useState} from 'react';
import '@mantine/core/styles.css';

import {
    ChevronDown,
    ChevronUp,
    Download,
    InfoCircle,
    Share,
} from 'react-bootstrap-icons';
import {concatenateNonNullStringsWithSpaces} from '~/global-common-typescript/utilites/utilities';
import {SelectComponent} from '../componentLibrary/form/selectComponent';
import {Slider, rem} from '@mantine/core';

export function EmiCalculator({
    className,
    schedule,
}: {
    className?: string;
    schedule?: boolean;
}) {
    const amounts = [
        {id: 0, label: '10 Lacs', value: '10,00,000'},
        {id: 1, label: '20 Lacs', value: '20,00,000'},
        {id: 2, label: '50 Lacs', value: '50,00,000'},
    ];

    const [selectedAmount, setSelectedAmount] = useState(100000);
    const [years, setYears] = useState(20);
    const [selectedYear, setSelectedYear] = useState('20');
    const [selectedMonth, setSelectedMonth] = useState('00');
    const [interest, setInterest] = useState(12.52);
    const [calculatedEmi, setCalculatedEmi] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [interestPayable, setInterestPayable] = useState(0);
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

    useEffect(() => {
        const monthlyInterest = interest / (12 * 100);
        const numberOfPayments = years * 12;
        // const loanAmount = parseFloat(selectedAmount.replace(/,/g, ''));
        const emi =
            (selectedAmount *
                monthlyInterest *
                Math.pow(1 + monthlyInterest, numberOfPayments)) /
            (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        setCalculatedEmi(Math.floor(emi));
        setTotalPayment(Math.floor(emi * numberOfPayments));
        setInterestPayable(Math.floor(emi * numberOfPayments - selectedAmount));
    }, [selectedAmount, years, interest]);

    const [formattedTotalPayment, setFormattedTotalPayment] = useState('0');
    const [formattedInterestPayable, setFormattedInterestPayable] =
        useState('0');
    const [formattedCalculatedEmi, setFormattedCalculatedEmi] = useState('0');

    useEffect(() => {
        const formattedValue = totalPayment.toLocaleString('en-IN');
        const formattedInterest = interestPayable.toLocaleString('en-IN');
        const formattedEmi = calculatedEmi.toLocaleString('en-IN');

        setFormattedInterestPayable(formattedInterest);
        setFormattedCalculatedEmi(formattedEmi);
        setFormattedTotalPayment(formattedValue);
    }, [totalPayment, interestPayable, calculatedEmi]);

    const interestPercentage = (interestPayable / totalPayment) * 100;
    const processBar = `conic-gradient(from 90deg, #ccc ${interestPercentage}%, #001CA8 ${interestPercentage}%)`;

    const [amortizationSchedule, setAmortizationSchedule] = useState([]);

    const calculateAmortizationSchedule = () => {
        setShowTable(prev => !prev);
        const monthlyInterest = interest / (12 * 100);
        const numberOfPayments = years * 12;
        const loanAmount = selectedAmount;

        const emi =
            (loanAmount *
                monthlyInterest *
                Math.pow(1 + monthlyInterest, numberOfPayments)) /
            (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        const schedule = [];
        let remainingLoan = loanAmount;
        for (let year = 1; year <= years; year++) {
            const interestPayment = remainingLoan * monthlyInterest;
            const principalPayment = emi - interestPayment;
            remainingLoan -= principalPayment;

            schedule.push({
                year,
                openingBalance: remainingLoan + principalPayment,
                emi: emi.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                }),
                interestPaidYearly: interestPayment.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                }),
                principalPaidYearly: principalPayment.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                }),
                closingBalance: remainingLoan.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                }),
            });
        }

        setAmortizationSchedule(
            schedule.map(item => ({
                ...item,
                openingBalance: item.openingBalance.toLocaleString('en-IN'),
                closingBalance: item.closingBalance.toLocaleString('en-IN'),
            })),
        );
    };

    const [showTable, setShowTable] = useState(false);
    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-max-w-7xl tw-mx-auto',
                className ? className : '',
            )}>
            <div className="tw-grid tw-grid-cols-1 tw-grid-rows-2 lg:tw-grid-cols-[minmax(0,1fr)_31.8rem] lg:tw-grid-rows-1 tw-gap-6 lg:tw-gap-x-7">
                <div className="tw-grid tw-gap-8 lg:tw-gap-10">
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-flex tw-justify-between tw-items-center">
                            <div className="tw-flex tw-gap-2 tw-items-center">
                                <div className="sc-text-title2">
                                    Loan Amount (₹)
                                </div>
                                <div className="tw-relative">
                                    <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                    <div className="tw-absolute tw-left-[100%] tw-top-0 tw tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-bg-secondary-100 tw-p-2">
                                        Amount tooltip
                                    </div>
                                </div>
                            </div>

                            <div className="tw-flex tw-items-center tw-rounded-lg tw-h-12">
                                <div className="tw-bg-darker-grey-bg tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-l-lg tw-h-full">
                                    ₹
                                </div>
                                <div className="tw-bg-secondary-100 tw-px-4 sc-text-title1 tw-flex tw-items-center tw-rounded-r-lg tw-h-full">
                                    {selectedAmount}
                                </div>
                            </div>
                        </div>

                        <div>
                            <Slider
                                thumbChildren={
                                    <div className="tw-bg-primary-500 tw-w-full tw-aspect-square tw-h-full tw-rounded-full"></div>
                                }
                                color="#001CA8"
                                value={selectedAmount}
                                min={100000}
                                max={20000000}
                                label={null}
                                defaultValue={100000}
                                thumbSize={20}
                                marks={[
                                    {value: 100000, label: '1 L'},
                                    {value: 4000000, label: '40 L'},
                                    {value: 8000000, label: '80 L'},
                                    {value: 12000000, label: '1.2 Cr'},
                                    {value: 16000000, label: '1.6 Cr'},
                                    {value: 20000000, label: '2 Cr'},
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
                                onChange={setSelectedAmount}
                            />
                        </div>
                    </div>
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-flex tw-gap-2 tw-items-center">
                            <div className="sc-text-title2">Tenure (Years & Months)</div>
                            <div className="tw-relative">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <div className="tw-absolute tw-left-[100%] tw-top-0 tw tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] md:tw-w-[16rem] tw-h-[auto] tw-border tw-bg-secondary-100 tw-p-2">
                                    Tenure range tooltip
                                </div>
                            </div>
                        </div>
                        {/* <div className="tw-col-start-2 tw-row-start-1 tw-grid tw-grid-cols-[minmax(0,1fr)_8rem]  tw-justify-end sc-text-title2">
                            <div className="sc-text-input tw-col-start-2">
                                {years} Years
                            </div>
                        </div> */}

                        <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                            <SelectComponent
                                items={yearOptions}
                                itemBuilder={item => {
                                    return item == '' ? 'select year' : item;
                                }}
                                value={`${selectedYear} ${
                                    parseInt(selectedYear) > 1
                                        ? 'Years'
                                        : 'Year'
                                }`}
                                setValue={item => {
                                    if (item != '') {
                                        setSelectedYear(item);
                                        setYears(
                                            parseInt(item) +
                                                parseInt(selectedMonth) / 12,
                                        );
                                        return;
                                    }

                                    setSelectedYear('00');
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
                                value={`${selectedMonth} ${
                                    parseInt(selectedMonth) > 1
                                        ? 'Months'
                                        : 'Month'
                                }`}
                                setValue={item => {
                                    if (item != '') {
                                        setSelectedMonth(item);
                                        setYears(
                                            parseInt(selectedYear) +
                                                parseInt(item) / 12,
                                        );
                                        return;
                                    }

                                    setSelectedMonth('00');
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
                                value={years}
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
                                    setYears(e);
                                    setSelectedYear(
                                        JSON.stringify(Math.floor(e)),
                                    );
                                    setSelectedMonth(
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
                </div>
                <div className="lg:tw-grid tw-gap-4 tw-hidden">
                    <div className="sc-bg-card tw-grid tw-auto-rows-max tw-gap-4 tw-h-fit tw-items-start tw-p-8 tw-row-start-1">
                        <div className="tw-grid tw-grid-cols-[minmax(0,1.5fr)_minmax(0,4fr)] tw-gap-x-8 tw-items-start tw-border-b-2">
                            <div className="tw-w-full tw-grid tw-items-start tw-h-full">
                                <div
                                    className="tw-w-full tw-aspect-square tw-rounded-full tw-p-[1.4rem] sc-progress-bar"
                                    style={{
                                        background: processBar,
                                        transition:
                                            'background 0.5s ease-in-out',
                                    }}>
                                    {/* <div className=" tw-w-full tw-z-10 tw-h-full tw-rounded-full tw-bg-secondary-400"></div> */}
                                </div>
                            </div>
                            <div className="tw-h-full">
                                <div className="sc-text-title2">Your EMI:</div>
                                <div className="sc-text-headline tw-text-primary-500">
                                    ₹ {formattedCalculatedEmi}
                                </div>
                                {/* <div className="tw-h-4" /> */}

                                <div className="tw-grid tw-gap-2">
                                    <div className="sc-text-title2 tw-flex tw-gap-2 tw-items-center">
                                        <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-primary-500" />
                                        Total Payment: ₹ {formattedTotalPayment}
                                    </div>
                                    <div className="sc-text-title2 tw-flex tw-gap-2 tw-items-center">
                                        <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#757575]" />
                                        Interest Payable: ₹{' '}
                                        {formattedInterestPayable}
                                    </div>
                                </div>
                            </div>

                            <div className="tw-h-4 tw-col-start-1 tw-col-span-full" />
                            {schedule && (
                                <>
                                    <button
                                        className="sc-footer-text tw-col-start-2 tw-cursor-pointer tw-flex tw-items-center tw-gap-2 tw-text-primary-500"
                                        onClick={calculateAmortizationSchedule}>
                                        Amortization Schedule
                                        {!showTable ? (
                                            <ChevronDown className="tw-h-6" />
                                        ) : (
                                            <ChevronUp className="tw-h-6" />
                                        )}
                                    </button>
                                    <div className="tw-h-4" />
                                </>
                            )}
                        </div>

                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
                            <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                                %
                            </div>
                            <div className="sc-text-body">
                                Secure 10% discount on processing fees now
                            </div>
                        </div>

                        <div className="tw-grid tw-grid-cols-[minmax(0,1fr)_auto]">
                            <div className="tw-grid tw-grid-cols-2">
                                <div className="tw-flex tw-gap-2 tw-border-r-2 tw-justify-center tw-items-center">
                                    <Download />
                                    <div>Download</div>
                                </div>
                                <div className="tw-flex tw-gap-2 tw-justify-center tw-items-center">
                                    <Share />
                                    <div>Share</div>
                                </div>
                            </div>
                            <button className="sc-cta-button">Apply Now</button>
                        </div>
                        {/* <button className="sc-cta-button sc-text-body tw-col-start-1 tw-col-span-full tw-h-fit tw-text-secondary-100">
                            Apply for home Loan
                        </button> */}
                    </div>
                    {/* <div className="sc-card-shadow tw-px-4 tw-py-[0.625rem] tw-rounded-lg tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-items-center tw-gap-4 sc-xxsmall-shadow tw-border tw-bg-secondary-100">
                        <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                            %
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-800">
                            <span className="tw-text-secondary-600">
                                Calculate Home Loan EMI,
                            </span>{' '}
                            Secure 5% Interest Discount Now!
                        </div>
                    </div> */}
                </div>
                <div className="tw-grid tw-grid-cols-1 lg:tw-hidden tw-gap-6">
                    <div className="tw-grid">
                        <div className="sc-bg-card tw-grid tw-auto-rows-max tw-gap-4 tw-h-fit tw-items-start tw-p-4 tw-row-start-1">
                            <div className="tw-grid tw-grid-cols-[minmax(0,1.5fr)_minmax(0,4fr)] tw-gap-x-6 tw-items-start tw-border-b-2">
                                <div className="tw-w-full tw-grid tw-items-start tw-h-full">
                                    <div
                                        className="tw-w-full tw-aspect-square tw-rounded-full tw-p-[1.4rem] sc-progress-bar"
                                        style={{
                                            background: processBar,
                                            transition:
                                                'background 0.5s ease-in-out',
                                        }}>
                                        {/* <div className=" tw-w-full tw-z-10 tw-h-full tw-rounded-full tw-bg-secondary-400"></div> */}
                                    </div>
                                </div>
                                <div className="tw-h-full">
                                    <div className="sc-text-title2">
                                        Your EMI:
                                    </div>
                                    <div className="sc-text-headline tw-text-primary-500">
                                        ₹ {formattedCalculatedEmi}
                                    </div>
                                    {/* <div className="tw-h-4" /> */}

                                    <div className="tw-grid tw-gap-2">
                                        <div className="sc-text-title2 tw-flex tw-gap-2 tw-items-center">
                                            <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-primary-500" />
                                            Total Payment: ₹{' '}
                                            {formattedTotalPayment}
                                        </div>
                                        <div className="sc-text-title2 tw-flex tw-gap-2 tw-items-center">
                                            <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-[#757575]" />
                                            Interest Payable: ₹{' '}
                                            {formattedInterestPayable}
                                        </div>
                                    </div>
                                </div>

                                <div className="tw-h-4 tw-col-start-1 tw-col-span-full" />
                                {schedule && (
                                    <>
                                        <button
                                            className="sc-footer-text tw-col-start-2 tw-cursor-pointer tw-flex tw-items-center tw-gap-2 tw-text-primary-500"
                                            onClick={
                                                calculateAmortizationSchedule
                                            }>
                                            Amortization Schedule
                                            {!showTable ? (
                                                <ChevronDown className="tw-h-6" />
                                            ) : (
                                                <ChevronUp className="tw-h-6" />
                                            )}
                                        </button>
                                        <div className="tw-h-4" />
                                    </>
                                )}
                            </div>

                            <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
                                <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                                    %
                                </div>
                                <div className="sc-text-body">
                                    Secure 10% discount on processing fees now
                                </div>
                            </div>

                            <div className="tw-grid tw-gap-4">
                                <button className="sc-cta-button tw-w-full">
                                    Apply Now
                                </button>
                                <div className="tw-grid tw-grid-cols-2">
                                    <div className="tw-flex tw-gap-2 tw-border-r-2 tw-justify-center tw-items-center">
                                        <Download />
                                        <div>Download</div>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-justify-center tw-items-center">
                                        <Share />
                                        <div>Share</div>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="sc-cta-button sc-text-body tw-col-start-1 tw-col-span-full tw-h-fit tw-text-secondary-100">
                            Apply for home Loan
                        </button> */}
                        </div>
                    </div>

                    <div className="tw-px-4 tw-py-[0.625rem] tw-rounded-lg tw-grid tw-grid-cols-[auto_minmax(0,1fr)] tw-items-center tw-gap-4 sc-xxsmall-shadow tw-border tw-bg-secondary-100">
                        <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary-500 tw-text-secondary-100 tw-grid tw-items-center tw-justify-center">
                            %
                        </div>
                        <div className="sc-text-title2 tw-text-secondary-800">
                            <span className="tw-text-secondary-600">
                                Calculate Home Loan EMI,
                            </span>{' '}
                            Secure 5% Interest Discount Now!
                        </div>
                    </div>
                </div>
            </div>
            {showTable && (
                <div className="tw-mt-10 tw-overflow-y-auto">
                    <table className="tw-w-[max-content] lg:tw-w-full">
                        <thead>
                            <tr className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] tw-gap-6 tw-w-full sc-text-title1 tw-bg-primary-500 tw-py-4 tw-px-6 tw-text-secondary-200">
                                <td>Year</td>
                                <td>Opening Balance</td>
                                <td>EMI*12</td>
                                <td>Interest Paid Yearly</td>
                                <td>Principal Paid Yearly</td>
                                <td>Closing Balance</td>
                            </tr>
                        </thead>
                        <tbody>
                            {amortizationSchedule.map((item, index) => (
                                <tr
                                    className="tw-grid tw-grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] tw-gap-6 sc-text-title1 tw-border-b tw-border-secondary-800 tw-p-5"
                                    key={index}>
                                    <td>{item.year}</td>
                                    <td>{item.openingBalance}</td>
                                    <td>{item.emi}</td>
                                    <td>{item.interestPaidYearly}</td>
                                    <td>{item.principalPaidYearly}</td>
                                    <td>{item.closingBalance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
