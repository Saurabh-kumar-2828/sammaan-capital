import type {Meta, StoryObj} from '@storybook/react';
import {ImageWithText} from '~/components/componentLibrary/reusableCards/sideImageCard/imageWithText';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/ReusableCards/sideImageCard/imageWithText',
    component: ImageWithText,
    args: {
        image: '',
        imageClassName:
            'tw-row-start-2 tw-col-start-1 md:tw-row-start-1 md:tw-col-start-2',
        title: 'About Samman Capital',
        text: `Indiabulls Housing Finance Ltd. (IBHFL) is India’s third
            largest housing finance company, regulated by the Reserve
            Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating
            agencies including CRISIL, ICRA and CARE Ratings and at
            ‘AA+” by Brickwork Ratings. The company has a balance sheet
            size of ₹ 0.70 trillion as on 31 March, 2023. The company
            has serviced more than 1.4 million happy customers and
            cumulatively disbursed loans of over ₹ 3.08 trillion.`,
        textClassName: 'tw-col-start-1 tw-row-start-1',
    },
} satisfies Meta<typeof ImageWithText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        image: '',
        imageClassName:
            'tw-row-start-2 tw-col-start-1 md:tw-row-start-1 md:tw-col-start-2',
        title: 'About Samman Capital',
        text: `Indiabulls Housing Finance Ltd. (IBHFL) is India’s third
            largest housing finance company, regulated by the Reserve
            Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating
            agencies including CRISIL, ICRA and CARE Ratings and at
            ‘AA+” by Brickwork Ratings. The company has a balance sheet
            size of ₹ 0.70 trillion as on 31 March, 2023. The company
            has serviced more than 1.4 million happy customers and
            cumulatively disbursed loans of over ₹ 3.08 trillion.`,
        textClassName: 'tw-col-start-1 tw-row-start-1',
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
