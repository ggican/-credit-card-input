import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
// import { addons } from '@storybook/addons';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withInfo } from "@storybook/addon-info";
import optionsStoryBook from "./options-story-book";
import Wrapper from "./wrapper";

// addons.setConfig({
//     theme: theme,
// });

addParameters(optionsStoryBook);
addParameters(withInfo);
addParameters({
    viewport: {
        viewports: { ...INITIAL_VIEWPORTS },
        defaultViewport: "dekstop",
    },
});
addDecorator(story => <Wrapper story={story} />);

// const loaderFn = () => {
//     const allExports = [];
//     const req = require.context("../stories", true, /\.stories\.js$/);
//     req.keys().forEach(fname => allExports.push(req(fname)));
//     return allExports;
// };

// configure(loaderFn, module);
