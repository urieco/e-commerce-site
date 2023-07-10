import { createContext, useEffect, useState } from "react";
import "./App.css";
import { RouteSwitch } from "./RouteSwitch";
import { getExchangeRate } from "./components/getExchangeRate";

const CurrencyContext = createContext();
const FilterContext = createContext();
const SortingContext = createContext();

function App() {
  const [currency, setCurrency] = useState(getUserCurrencyPreference());
  const [allFilter, setAllFilter] = useState({ brand: [] });
  const [sortMethod, setSortMethod] = useState("Avg. Customer Review");
  
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
        <SortingContext.Provider value={{ sortMethod, setSortMethod }}>
          <FilterContext.Provider value={{ allFilter, setAllFilter }}>
            <RouteSwitch />
          </FilterContext.Provider>
        </SortingContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}

export { App, CurrencyContext, FilterContext, SortingContext };
