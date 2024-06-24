import type {Preview} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router';
import '~/tailwind.css';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {disable: true},
    },
};

export default preview;

export const decorators = [
    story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
];
