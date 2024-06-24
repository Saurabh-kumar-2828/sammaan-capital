import type {Meta, StoryObj} from '@storybook/react';
import {PdfDownloadCard} from '~/components/componentLibrary/reusableCards/pdfDownloadCard';
import {
    withBackground,
    withBorder,
    withResizableBox,
} from '~/../.storybook/decorators';
const meta = {
    title: 'Components/reusableCards/pdfDownloadCard',
    component: PdfDownloadCard,
    args: {
        text: "Grievance Redressal Policy",
        link: "#",
    },
} satisfies Meta<typeof PdfDownloadCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        text: "Grievance Redressal Policy",
        link: "#",
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
