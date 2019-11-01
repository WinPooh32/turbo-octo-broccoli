import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";

const rootElement = document.getElementById("application")
const rootTSX = <BrowserRouter><App /></BrowserRouter>

if (rootElement && rootElement.hasChildNodes()) {
    ReactDOM.hydrate(rootTSX, rootElement)
} else {
    ReactDOM.render(rootTSX, rootElement)
}

// webpack hot reloading
if (module.hot) {
    module.hot.accept();
}
