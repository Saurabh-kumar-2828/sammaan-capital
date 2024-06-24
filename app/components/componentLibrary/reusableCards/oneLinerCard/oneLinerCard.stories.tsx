import type {Meta, StoryObj} from '@storybook/react';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
import {OneLinerCard} from './oneLinerCard';

const meta = {
    title: 'Components/ReusableCards/oneLinerCard/oneLinerCard',
    component: OneLinerCard,
    args:  {
        image: "",
        title: "Sports day at Sammaan Capital",
    },
} satisfies Meta<typeof OneLinerCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        image: "",
        title: "Sports day at Sammaan Capital",
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




