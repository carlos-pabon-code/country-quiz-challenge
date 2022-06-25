import React from "react";
import ReactDOM from "react-dom/client";
import { ResultsProvider } from "./context/ResultsContext";
import { CountryQuiz } from "./CountryQuiz";
import GlobalStyles from "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <ResultsProvider>
      <CountryQuiz />
    </ResultsProvider>
  </>
  // </React.StrictMode>
);
