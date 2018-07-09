import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import configureStore from "./store/configureStore";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// const store = configureStore();

render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>
  document.getElementById("root")
);
registerServiceWorker();
