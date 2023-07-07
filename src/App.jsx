import { createContext, useEffect, useState } from "react";
import "./App.css";
import { RouteSwitch } from "./RouteSwitch";
import { getExchangeRate } from "./components/getExchangeRate";

const CurrencyContext = createContext();

function App() {
  const [currency, setCurrency] = useState(getUserCurrencyPreference());
  const [exchangeRate, setExchangeRate] = useState(1);

  function getUserCurrencyPreference() {
    const preference = JSON.parse(localStorage.getItem("userPreference"));
    return preference ? preference.currencyPref : "USD";
  }

  useEffect(() => {
    localStorage.setItem(
      "userPreference",
      JSON.stringify({ currencyPref: currency })
    );

    const cachedExchangeRate = JSON.parse(
      sessionStorage.getItem("cachedExchangeRate")
    );
    if (cachedExchangeRate) {
      setExchangeRate(cachedExchangeRate[currency]);
    } else {
      const fetchedData = getExchangeRate();
      fetchedData.then((res) => {
        setExchangeRate(res[currency]);
        sessionStorage.setItem("cachedExchangeRate", JSON.stringify(res));
      });
    }
  }, [currency, exchangeRate]);

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate }}>
        <RouteSwitch />
      </CurrencyContext.Provider>
    </>
  );
}

export { App, CurrencyContext };
