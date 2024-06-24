import {useEffect, useState} from 'react';
import {InfoCircle} from 'react-bootstrap-icons';

export function AffordabilityCalculatorCard() {
    const amounts = [
        {id: 0, label: '10 Lakhs', value: '10,00,000'},
        {id: 1, label: '20 Lakhs', value: '20,00,000'},
        {id: 2, label: '50 Lakhs', value: '50,00,000'},
    ];

    const income = [
        {id: 0, label: '25k', value: '25,000'},
        {id: 1, label: '50k', value: '50,000'},
        {id: 2, label: '1 Lakhs', value: '1,00,000'},
    ];

    const [selectedIncome, setSelectedIncome] = useState(income[0].value);
    const [selectedAmount, setSelectedAmount] = useState(amounts[0].value);
    const [selectedEmi, setSelectedEmi] = useState(
        (10000).toLocaleString('en-IN'),
    );

    const [years, setYears] = useState(20);
    const [interest, setInterest] = useState(9);
    const [loanEligibility, setLoanEligibility] = useState(0);
    const [propertyCost, setPropertyCost] = useState(0);

    const [formattedLoanEligibility, setFormattedLoanEligibility] =
        useState('0');
    const [formattedPropertyCost, setFormattedPropertyCost] = useState('0');

    useEffect(() => {
        const downPayment = parseInt(selectedAmount.replace(/,/g, ''), 10);
        const monthlyGross = parseInt(selectedIncome.replace(/,/g, ''), 10);
        const otherEmis = parseInt(selectedEmi.replace(/,/g, ''), 10);

        const availableMonthlyIncome = monthlyGross - otherEmis;
        const interestRatePerMonth = interest / (12 * 100);
        const tenureInMonths = years * 12;
        const maxEmi = availableMonthlyIncome * 0.5;

        const loanAmount =
            (maxEmi *
                (1 - Math.pow(1 + interestRatePerMonth, -tenureInMonths))) /
            interestRatePerMonth;

        const calculatedLoanEligibility = Math.round(loanAmount);
        const calculatedPropertyCost = Math.round(
            calculatedLoanEligibility + downPayment,
        );

        setLoanEligibility(calculatedLoanEligibility);
        setPropertyCost(calculatedPropertyCost);

        const formattedLoan = calculatedLoanEligibility.toLocaleString('en-IN');
        const formattedProperty =
            calculatedPropertyCost.toLocaleString('en-IN');

        setFormattedLoanEligibility(formattedLoan);
        setFormattedPropertyCost(formattedProperty);
    }, [selectedAmount, selectedIncome, selectedEmi, years, interest]);

    return (
        <div className="tw-max-w-7xl tw-mx-auto">
            <div className="tw-grid tw-grid-cols-1 tw-grid-rows-[minmax(0,1fr)_auto] lg:tw-grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:tw-grid-rows-1 tw-gap-4 lg:tw-gap-6">
                <div className="tw-grid tw-gap-10">
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-grid tw-gap-2 tw-relative">
                            <div className="sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                Down payment (₹)
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
                            <div className="tw-absolute md:tw-left-[11rem] tw-left-[8rem] md:tw-top-1 ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-full tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                    Down payment tooltip
                                </span>
                            </div>
                        </div>
                        <div className="tw-grid tw-grid-flow-col tw-gap-4 tw-justify-start">
                            {amounts.map((item, itemIndex) => (
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
                    <div className="tw-grid tw-gap-3">
                        <div className="tw-grid tw-gap-2 tw-relative">
                            <div className="sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                                Monthly Gross income (₹)
                            </div>
                            <div className="tw-relative tw-flex tw-gap-1 tw-items-center">
                                <div className="tw-absolute tw-left-0 sc-text-body tw-pl-3">
                                    ₹
                                </div>
                                <input
                                    type="text"
                                    value={selectedIncome}
                                    className="sc-text-input tw-pl-6"
                                    onChange={e =>
                                        setSelectedIncome(e.target.value)
                                    }
                                />
                            </div>
                            <div className="tw-absolute tw-left-[11rem] md:tw-left-[15rem] md:tw-top-1  ">
                                <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                                <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                    Monthly Gross income tooltip
                                </span>
                            </div>
                        </div>
                        <div className="tw-grid tw-grid-flow-col tw-gap-4 tw-justify-start">
                            {income.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <button
                                        className={`tw-py-2 tw-px-4 tw-rounded-lg sc-text-body tw-h-full ${
                                            selectedIncome === item.value
                                                ? 'sc-tab-button'
                                                : 'tw-bg-secondary-400'
                                        }`}
                                        onClick={() =>
                                            setSelectedIncome(item.value)
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
                                const selectedYears = parseInt(e.target.value);
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
                            <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                years range tooltip
                            </span>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-2 tw-grid-rows-[auto_0.8rem_auto_0.7rem_auto] tw-relative">
                        <div className="tw-col-start-1 tw-row-start-1 sc-text-title2 tw-flex tw-gap-3 tw-items-center">
                            Interest Rate (%)
                        </div>
                        <div className="tw-col-start-2 tw-row-start-1 tw-grid tw-grid-cols-[minmax(0,1fr)_8rem]  tw-justify-end sc-text-title2">
                            <div className="sc-text-input tw-col-start-2">
                                {interest}%
                            </div>
                        </div>
                        <input
                            type="range"
                            min="8"
                            max="20"
                            value={interest}
                            step="0.1"
                            onChange={e => {
                                const selectedInterest = parseFloat(
                                    e.target.value,
                                );
                                setInterest(selectedInterest);
                            }}
                            className="sc-range-input tw-col-start-1 tw-col-span-full tw-row-start-3"
                        />
                        <div className="tw-row-start-5 tw-col-start-1">8%</div>
                        <div className="tw-row-start-5 tw-col-start-2 tw-text-end">
                            20%
                        </div>
                        <div className="tw-absolute md:tw-left-[10rem] tw-left-[7.5rem] tw-top-3 md:tw-top-4 ">
                            <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                            <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                Interest Rate tooltip
                            </span>
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
                                onChange={e => setSelectedEmi(e.target.value)}
                            />
                        </div>
                        <div className="tw-absolute md:tw-left-[13.5rem] tw-left-[10rem] md:tw-top-1 ">
                            <InfoCircle className="info-circle hover:tw:block tw-cursor-pointer lg:tw-h-6 lg:tw-w-6 tw-w-5 tw-h-5" />
                            <span className="tooltip-text sc-medium-shadow tw-hidden tw-z-10 sc-text-body tw-w-[12rem] lg:tw-w-[16rem] tw-h-[auto] tw-border tw-relative tw-left-5 tw-bg-secondary-100 tw-p-2">
                                Down payment tooltip
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-gap-4 lg:tw-gap-6">
                    <div className="tw-grid lg:tw-grid-rows-[auto_minmax(0,1fr)] tw-grid-rows-2 sc-medium-shadow tw-rounded-lg">
                        <div className="tw-p-4 lg:tw-p-8 tw-grid lg:tw-gap-4 tw-bg-secondary-400 tw-rounded-t-lg max-lg:tw-justify-items-center">
                            <div className="sc-text-title1">
                                Loan Eligibility :
                            </div>
                            <div className="sc-text-headline tw-text-primary-500">
                                ₹ {formattedLoanEligibility}
                            </div>
                        </div>
                        <div className="tw-p-4 lg:tw-p-8 tw-bg-secondary-200 tw-grid tw-grid-rows-[minmax(0,1fr)_auto] tw-rounded-b-lg">
                            <div className="tw-grid tw-grid-rows-[auto_auto_minmax(0,1fr)] max-lg:tw-justify-items-center lg:tw-gap-4">
                                <div className="sc-text-title1">
                                    Property Cost :
                                </div>
                                <div className="sc-text-title1 tw-text-secondary-600">
                                    ₹ {formattedPropertyCost}
                                </div>
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
