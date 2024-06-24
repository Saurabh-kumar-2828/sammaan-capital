import type {Meta, StoryObj} from '@storybook/react';
import {TwoLinerCard} from '~/components/componentLibrary/reusableCards/twoLinerCard/twoLinerCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/ReusableCards/twoLinerCard/twoLinerCard',
    component: TwoLinerCard,
    args:  {
        image: "",
        title: "Attractive Interest Rates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
} satisfies Meta<typeof TwoLinerCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args:  {
        image: "",
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




