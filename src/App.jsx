import { createContext, useEffect, useState } from "react";
import "./App.css";
import { RouteSwitch } from "./RouteSwitch";
import { getExchangeRate } from "./components/getExchangeRate";
import { createOrder } from "./components/createOrder";
// createOrder(productName, price, discount, amount)

const AccountContext = createContext();
const CartContext = createContext();
const CurrencyContext = createContext();
const SortingContext = createContext();
const FilterContext = createContext();

function App() {
  const [account, setAccount] = useState("unregistered");

  const [itemInCart, setItemInCart] = useState([]);

  const [currency, setCurrency] = useState(getUserCurrencyPreference());
  const [exchangeRate, setExchangeRate] = useState(1);

  const [sortMethod, setSortMethod] = useState("Avg. Customer Review");
  const [allFilter, setAllFilter] = useState({ brand: [] });

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
      <AccountContext.Provider value={{account, setAccount}}>
        <CartContext.Provider value={{itemInCart, setItemInCart}}>
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
      </AccountContext.Provider>
    </>
  );
}

export { App, CartContext, CurrencyContext, FilterContext, SortingContext };
