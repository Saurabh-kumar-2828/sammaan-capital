import type {Meta, StoryObj} from '@storybook/react';
import {HomeLoanRangeCard} from '~/components/componentLibrary/reusableCards/homeLoanRangeCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/homeLoanRangeCard',
    component: HomeLoanRangeCard,
    args: {
        text: 'Home Loan Ranging From',
        boldText: '9.75% onwards',
        buttonText: 'Apply Now',
        buttonLink: '#',
    },
} satisfies Meta<typeof HomeLoanRangeCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        text: 'Home Loan Ranging From',
        boldText: '9.75% onwards',
        buttonText: 'Apply Now',
        buttonLink: '#',
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
