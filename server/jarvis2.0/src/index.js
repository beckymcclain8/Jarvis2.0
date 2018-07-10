import React from "react";
import ReactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import configureStore from "./3-store/configureStore";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
