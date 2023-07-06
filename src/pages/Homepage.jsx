import { createContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { getExchangeRate } from "../components/getExchangeRate";

const CurrencyContext = createContext();

function Homepage () {
  const [currency, setCurrency] = useState(getUserCurrencyPreference());
  const [exchangeRate, setExchangeRate] = useState(1);

  function getUserCurrencyPreference() {
    const preference = JSON.parse(localStorage.getItem('userPreference'));
    return preference ? preference.currencyPref : 'USD';
  }

  useEffect(() => {
    localStorage.setItem('userPreference', JSON.stringify({ currencyPref: currency}))

    const cachedExchangeRate = JSON.parse(sessionStorage.getItem('cachedExchangeRate'));
    if (cachedExchangeRate) {
      setExchangeRate(cachedExchangeRate[currency]);
    } else {
      const fetchedData = getExchangeRate();
      fetchedData.then((res) => {
        setExchangeRate(res[currency]);
        sessionStorage.setItem('cachedExchangeRate', JSON.stringify(res));
      })
    }
  },[currency, exchangeRate]);

  return (
    <CurrencyContext.Provider
      value = {{currency, setCurrency, exchangeRate}}
    >
      <Header/>
      <Content/>
    </CurrencyContext.Provider>
  );
}

export { Homepage, CurrencyContext }