import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./app";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./reducers/index";
import tokens from "./components/tokens";
import "./styles/index.css";

ReactDOM.render(
    <ThemeProvider theme={tokens}>
        <StoreProvider>
            <App />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
);

serviceWorker.register();
