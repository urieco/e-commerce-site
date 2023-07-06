import { Dropdown } from "./Dropdown";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../pages/Homepage";

function PickCurrency() {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getPickedCurrency = (pickedCurrency) => {
    setCurrency(pickedCurrency);
  };

  return (
    <>
      <Dropdown
        dropdownTitle={currency}
        id="currencyPicker"
        list={["USD", "EUR", "GBP", "CAD", "JPY", "CNY", "VND"]}
        getPickedCurrency={getPickedCurrency}
      />
    </>
  );
}

export { PickCurrency };
