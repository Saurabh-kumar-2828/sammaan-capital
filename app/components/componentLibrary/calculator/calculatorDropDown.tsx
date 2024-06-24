import {useState} from "react";
import {SelectComponent} from "~/components/componentLibrary/form/selectComponent";

export function CalculatorDropDown({title, text, loanOptions}: {title: string; text: string; loanOptions: Array<string>}) {
    const [selectedItem, setSelectedItem] = useState('Home Loan');

    return (
        <div className="tw-grid tw-gap-6 tw-justify-center">
            <div className="tw-text-center sc-text-headline">{title}</div>
            <div className="tw-text-center sc-text-body">{text}</div>
            <SelectComponent
                items={loanOptions}
                itemBuilder={item => {
                    return item == '' ? 'select data' : item;
                }}
                value={selectedItem}
                setValue={item => {
                    if (item != '') {
                        setSelectedItem(item);
                        return;
                    }

                    setSelectedItem('');
                }}
                buttonClassName="tw-border tw-border-secondary-800 tw-bg-secondary-200 tw-h-full tw-p-4"
                className='tw-justify-self-center'
            />
        </div>
    );
}