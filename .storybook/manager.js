import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-docs/register';
import '@storybook/react';
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
    theme: theme,
});
