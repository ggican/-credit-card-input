import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme, { shallow, render, mount } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { MemoryRouter } from "react-router";
import "jest-styled-components";
import tokens from "./components/tokens";

Enzyme.configure({ adapter: new Adapter() });

const mountWithThemeStyledComponent = child => {
    return mount(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={tokens}>{children}</ThemeProvider>
        ),
    });
};

const shallowWithThemeStyledComponent = child => {
    return shallow(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={tokens}>{children}</ThemeProvider>
        ),
    });
};

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};

global.IntersectionObserver = class IntersectionObserver {
    constructor() {}

    observe() {
        return null;
    }

    unobserve() {
        return null;
    }
};

global.mountWithTheme = mountWithThemeStyledComponent;
global.shallowWithTheme = shallowWithThemeStyledComponent;
global.MemoryRouter = MemoryRouter;
global.renderHook = renderHook;
global.renderer = renderer;
global.styled = styled;
global.act = act;
global.shallow = shallow;
global.toJson = toJson;
global.render = render;
global.mount = mount;
global.localStorageMock = localStorageMock;
