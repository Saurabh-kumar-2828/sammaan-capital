import type {Meta, StoryObj} from '@storybook/react';
import {TwoLinerCard2} from '~/components/componentLibrary/reusableCards/twoLinerCard2';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/ReusableCards/twoLinerCard2',
    component: TwoLinerCard2,
    args:  {
        image: "",
        cardNumber: "01/04",
        title: "Attractive Interest Rates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
} satisfies Meta<typeof TwoLinerCard2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        image: "",
        cardNumber: "01/04",
        title: "Attractive Interest Rates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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




