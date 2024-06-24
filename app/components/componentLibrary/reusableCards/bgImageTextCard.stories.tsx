import type {Meta, StoryObj} from '@storybook/react';
import {BgImageTextCard} from '~/components/componentLibrary/reusableCards/bgImageTextCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/bgImageTextCard',
    component: BgImageTextCard,
    args: {
        image: '',
        title: 'Insights for Astute Investors',
        text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
    },
} satisfies Meta<typeof BgImageTextCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        title: 'Insights for Astute Investors',
        text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Suspendisse varius...',
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
