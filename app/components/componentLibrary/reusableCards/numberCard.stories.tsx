import type {Meta, StoryObj} from '@storybook/react';
import {NumberCard} from '~/components/componentLibrary/reusableCards/numberCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/ReusableCards/numberCard',
    component: NumberCard,
    args:  {
        image: "",
        title: "Attractive Interest",
        number: "2836372",
    },
} satisfies Meta<typeof NumberCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        image: "",
        title: "Attractive Interest",
        number: "2836372",
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




