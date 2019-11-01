import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

const rootElement = document.getElementById("application")
const rootTSX = <Hello compiler="TypeScript" framework="React" />

if (rootElement && rootElement.hasChildNodes()) {
    ReactDOM.hydrate(rootTSX, rootElement)
} else {
    ReactDOM.render(rootTSX, rootElement)
}

// webpack hot reloading
if (module.hot) {
    module.hot.accept();
}
