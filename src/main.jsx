import React from "react";
import ReactDOM from "react-dom/client";
import { CountryQuiz } from "./components/CountryQuiz";
import GlobalStyles from "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <CountryQuiz />
  </React.StrictMode>
);
