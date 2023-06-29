import { createContext, useState } from "react";
import { Header } from "./Header";

const CurrencyContext = createContext("USD");

function Homepage () {
  const [currency, setCurrency] = useState("USD");


  return (
    <CurrencyContext.Provider
      value = {{currency, setCurrency}}
    >
      <Header />
    </CurrencyContext.Provider>
  );
}

export { Homepage, CurrencyContext }