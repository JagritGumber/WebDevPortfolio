import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>
);
