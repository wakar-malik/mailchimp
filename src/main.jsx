import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DrawerContextProvider from "./context/DrawerContext.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DrawerContextProvider>
        <App />
      </DrawerContextProvider>
    </Provider>
  </React.StrictMode>
);
