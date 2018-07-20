import React from "react";
import ReactDom from "react-dom";
import configureStore from "./3-store/configureStore";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import { unregister } from './registerServiceWorker';
import { Provider } from "react-redux";

const store = configureStore();

unregister();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
