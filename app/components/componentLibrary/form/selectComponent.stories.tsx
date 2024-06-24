import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {SelectComponent} from './selectComponent';

const meta = {
    title: 'Components/Form/SelectComponent',
    component: SelectComponent,
    args: {
        items: ["Rahul", "Sunny", "Govind"],
        itemBuilder: (item)=> item == "" ? "Select Item" : "Rahul",
        value: "Rahul",
    },
} satisfies Meta<typeof SelectComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        items: ["Rahul", "Sunny", "Govind"],
        itemBuilder: (item)=> item == "" ? "Select Item" : "Rahul",
        value: "Rahul",
    },
};
export const Resizable: Story = {
    args: {
        showBackground: false,
        className: 'tw-max-w-[21rem]',
    },
    decorators: [
        withBorder,
        withBackground,
        withResizableBox('20rem', '20rem'),
    ],
};




