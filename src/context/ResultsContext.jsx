import { createContext, useState } from "react";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  //useState to store the current page, score obtained and page limit
  const [results, setResults] = useState({ page: 1, score: 0, limit: 5 });
  const data = { results, setResults };
  return (
    <ResultsContext.Provider value={data}>{children}</ResultsContext.Provider>
  );
};

export default ResultsContext;
