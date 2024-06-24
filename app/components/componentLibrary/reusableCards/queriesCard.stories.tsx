import type {Meta, StoryObj} from '@storybook/react';
import {QueriesCard} from '~/components/componentLibrary/reusableCards/queriesCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/queriesCard',
    component: QueriesCard,
    args: {
        image: '',
        title: 'Investor Queries',
        location:
            'Indiabulls Housing Finance Ltd., 18th floor One International Centre, Indiabulls Finance Centre, Senapati Bapat Marg, Elphinstone Road, Mumbai - 400013.',
        contact: '022-61891444',
        email: 'investor.relations@indiabulls.com',
    },
} satisfies Meta<typeof QueriesCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        title: 'Investor Queries',
        location:
            'Indiabulls Housing Finance Ltd., 18th floor One International Centre, Indiabulls Finance Centre, Senapati Bapat Marg, Elphinstone Road, Mumbai - 400013.',
        contact: '022-61891444',
        email: 'investor.relations@indiabulls.com',
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
