import { useContext } from "react";

import { CurrencyContext } from "../../App.jsx";
import { Dropdown } from "../../containers/misc/subcomponents/Dropdown.jsx";

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
        selectListItemMethod={getPickedCurrency}
        overallStyle="relative z-10"
      />
    </>
  );
}

export { PickCurrency };
