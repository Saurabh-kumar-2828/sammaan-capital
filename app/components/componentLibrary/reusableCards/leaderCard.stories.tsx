import type {Meta, StoryObj} from '@storybook/react';
import {LeaderCard} from '~/components/componentLibrary/reusableCards/leaderCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/leaderCard',
    component: LeaderCard,
    args: {
        image: '',
        title: 'Subhash Sheoratan Mundra',
        text: 'Vice-Chairman, Managing Director Know more about leader',
        linkText: 'Know more',
        linkUrl: '/',
    },
} satisfies Meta<typeof LeaderCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        title: 'Subhash Sheoratan Mundra',
        text: 'Vice-Chairman, Managing Director Know more about leader',
        linkText: 'Know more',
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
