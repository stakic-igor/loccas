import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import nl from "react-intl/locale-data/nl";

// Main Component
import App from "./App";

// Redux store
import configureStore from "./store/store";

const store = configureStore();

const ROOT_ELEMENT = document.getElementById("root");

addLocaleData(en);
addLocaleData(nl);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ROOT_ELEMENT
);
