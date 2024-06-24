import {Combobox, Transition} from "@headlessui/react";
import React, {useState} from "react";
import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function SearchableSelect<T>({
    items,
    selectedItem,
    setSelectedItem,
    filterFunction,
    renderFunction,
    placeholder,
    className,
    disabled,
    inputClassName,
    listClassName,
}: {
    items: Array<T>;
    selectedItem: T | null;
    setSelectedItem: React.Dispatch<T | null>;
    filterFunction: (items: Array<T>, query: string) => Array<T>;
    renderFunction: (item: T) => string;
    placeholder: string;
    className?: string;
    disabled?: boolean;
    inputClassName?: string;
    listClassName?: string;
}) {
    const [query, setQuery] = useState('');
    // const [isOpen, setIsOpen] = useState(false);

    const filteredItems = query == '' ? items : filterFunction(items, query);

    return (
        <div
            className={concatenateNonNullStringsWithSpaces(
                'tw-w-full',
                className,
            )}>
            <Combobox
                value={selectedItem}
                onChange={setSelectedItem}
                disabled={disabled}>
                <div className="tw-relative">
                    <div className="tw-grid tw-grid-cols-[minmax(0,1fr)_2.875rem]">
                        <Combobox.Button className="tw-row-start-1 tw-col-start-1 tw-col-span-2 tw-w-full">
                            <Combobox.Input
                                className={concatenateNonNullStringsWithSpaces(
                                    'tw-w-full lg-text-input',
                                    inputClassName,
                                )}
                                displayValue={renderFunction}
                                placeholder={placeholder}
                                onChange={event => {
                                    setQuery(event.target.value);
                                    // setIsOpen(true);
                                }}
                                // onFocus={() => {
                                //     setIsOpen(true);
                                // }}
                                // onBlur={() => {
                                //     setIsOpen(false);
                                // }}
                            />
                        </Combobox.Button>
                        {/* <Combobox.Button className="tw-row-start-1 tw-col-start-2 tw-grid tw-place-items-center">
                            <ChevronUpDownIcon className="tw-h-4 tw-w-4" />
                        </Combobox.Button> */}
                    </div>

                    <Transition
                        as={React.Fragment}
                        leave="tw-transition tw-ease-in tw-duration-100"
                        leaveFrom="tw-opacity-100"
                        leaveTo="tw-opacity-0"
                        afterLeave={() => setQuery('')}>
                        <Combobox.Options
                            // static={isOpen}
                            className={concatenateNonNullStringsWithSpaces(
                                'tw-absolute tw-z-40 tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm',
                                listClassName,
                            )}>
                            {items.length == 0 ? (
                                <div className="tw-relative tw-cursor-default tw-select-none tw-py-2 tw-px-4 tw-text-gray-700">
                                    No results
                                </div>
                            ) : filteredItems.length == 0 && query != '' ? (
                                <div className="tw-relative tw-cursor-default tw-select-none tw-py-2 tw-px-4 tw-text-gray-700">
                                    Nothing found
                                </div>
                            ) : (
                                filteredItems.map((item, itemIndex) => (
                                    <Combobox.Option
                                        key={itemIndex}
                                        className={({active}) =>
                                            `tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-10 tw-pr-4 ${
                                                active
                                                    ? 'tw-bg-primary-500 tw-text-white'
                                                    : 'tw-text-gray-900'
                                            }`
                                        }
                                        value={item}>
                                        {({selected, active}) => (
                                            <>
                                                <span
                                                    className={`tw-block tw-truncate ${
                                                        selected
                                                            ? 'tw-font-medium'
                                                            : 'tw-font-normal'
                                                    }`}>
                                                    {renderFunction(item)}
                                                </span>
                                                {/* {selected ? (
                                                    <span
                                                        className={`tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 ${
                                                            active
                                                                ? 'tw-text-white'
                                                                : 'tw-text-primary-500'
                                                        }`}>
                                                        <CheckIcon
                                                            className="tw-h-5 tw-w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null} */}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
