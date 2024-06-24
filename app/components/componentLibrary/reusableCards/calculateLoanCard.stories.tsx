import type {Meta, StoryObj} from '@storybook/react';
import {CalculateLoanCard} from '~/components/componentLibrary/reusableCards/calculateLoanCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/calculateLoanCard',
    component: CalculateLoanCard,
    args:  {
        icon: '',
        title: 'Emi Calculato',
        text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculato',
        linkText: 'Calculate Now',
        linkUrl: '/',
    },
} satisfies Meta<typeof CalculateLoanCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        icon: '',
        title: 'Emi Calculato',
        text: 'Calculate your EMIs with our easy and intuitive Home Loan EMI calculato',
        linkText: 'Calculate Now',
        linkUrl: '/',
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
