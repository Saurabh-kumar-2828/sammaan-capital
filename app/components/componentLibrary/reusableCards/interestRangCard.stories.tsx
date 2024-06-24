import type {Meta, StoryObj} from '@storybook/react';
import {InterestRangCard} from '~/components/componentLibrary/reusableCards/interestRangCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/interestRangCard',
    component: InterestRangCard,
    args: {
        title: 'Home Loan ranging from',
        numberString: '8.75%* onwards',
        text1: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , property type and other risk parameters.',
        text2: '# This includes the Rates being offered under the Co-origination arrangement in association with Banks.',
    },
} satisfies Meta<typeof InterestRangCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        title: 'Home Loan ranging from',
        numberString: '8.75%* onwards',
        text1: '# The final rate of Interest will depend upon Profile, Loan amount, tenor , property type and other risk parameters.',
        text2: '# This includes the Rates being offered under the Co-origination arrangement in association with Banks.',
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
