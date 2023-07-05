import { createContext, useState } from "react";
import { Header } from "../components/Header";
import { Content } from "../components/Content";

const CurrencyContext = createContext();

function Homepage () {
  const [currency, setCurrency] = useState("USD");


  return (
    <CurrencyContext.Provider
      value = {{currency, setCurrency}}
    >
      {/* <Header/> */}
      <Content/>
    </CurrencyContext.Provider>
  );
}

export { Homepage, CurrencyContext }