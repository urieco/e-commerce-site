async function getExchangeRate () {
  const exchangeRateAPIKEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  try {
    const currencyData = await fetch(
      `https://v6.exchangerate-api.com/v6/${exchangeRateAPIKEY}/latest/USD`,
      { mode: "cors" }
    );
    const currencyDataJSON = await currencyData.json();
    console.log("API called");
    return currencyDataJSON.conversion_rates;
  } catch (err) {
    console.error(err);
  }
}

export { getExchangeRate }