import { Dropdown } from "./Dropdown";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../pages/Homepage";

function PickCurrency() {
  const [fetchAPI, setFetchAPI] = useState(false);
  const { setCurrency } = useContext(CurrencyContext);

  // Force fetching API only one time (due to React reloading)
  useEffect(() => {
    setFetchAPI(true);
    setTimeout(() => {
      // if (fetchAPI) getCurrencyRate();
    }, 100);
  }, [fetchAPI]);

  const getPickedCurrency = (pickedCurrency) => {
    setCurrency(pickedCurrency);
  };

  return (
    <>
      <Dropdown
        dropdownTitle="USD"
        id="currencyPicker"
        list={["USD", "EUR", "GBP", "CAD", "JPY", "CNY", "VND"]}
        getPickedCurrency={getPickedCurrency}
      />
    </>
  );
}

// async function getCurrencyRate () {
//   const exchangeRateAPIKEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

//   try {
//     const currencyData = await fetch(
//       `https://v6.exchangerate-api.com/v6/${exchangeRateAPIKEY}/latest/USD`,
//       { mode: "cors" }
//     );
//     const currencyDataJSON = await currencyData.json();

//   } catch (err) {
//     console.error(err);
//   }
// }

export { PickCurrency };
