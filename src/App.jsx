import { createContext, useEffect, useState } from "react";
import "./App.css";
import { RouteSwitch } from "./RouteSwitch";
import { getExchangeRate } from "./utils/getExchangeRate";

const CartContext = createContext();
const CurrencyContext = createContext();
const SortingContext = createContext();
const FilterContext = createContext();

function App() {
  const [itemInCart, setItemInCart] = useState([]);

  const getCurrencRef = () => {
    const preference = JSON.parse(localStorage.getItem("currencyRef"));
    return preference ? preference : "USD";
  }
  const [currency, setCurrency] = useState(getCurrencRef());
  const [exchangeRate, setExchangeRate] = useState(1);

  const [sortMethod, setSortMethod] = useState("Avg. Customer Review");
  const [allFilter, setAllFilter] = useState({ brand: [] });


  useEffect(() => {
    localStorage.setItem("currencyRef", JSON.stringify(currency));

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
      <CartContext.Provider value={{ itemInCart, setItemInCart }}>
        <CurrencyContext.Provider
          value={{ currency, setCurrency, exchangeRate }}
        >
          <SortingContext.Provider value={{ sortMethod, setSortMethod }}>
            <FilterContext.Provider value={{ allFilter, setAllFilter }}>
              <RouteSwitch />
            </FilterContext.Provider>
          </SortingContext.Provider>
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export {
  App,
  CartContext,
  CurrencyContext,
  SortingContext,
  FilterContext,
};
