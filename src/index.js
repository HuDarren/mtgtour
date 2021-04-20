import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
