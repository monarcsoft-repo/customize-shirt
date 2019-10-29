import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import AppRouter from "./routers/appRouter";
import configureStore from  "./redux/store/configureStore";

import "./styles/styles.scss";

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));