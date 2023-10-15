import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import FormContextProvider from "./context/FormContext.jsx";
import { MyProfile } from "./components/others/MyProfile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <FormContextProvider>
        <App />
        <MyProfile />
      </FormContextProvider>
    </>
  </React.StrictMode>
);
