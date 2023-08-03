async function getExchangeRate() {
  const exchangeRateAPIKEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  try {
    const currencyData = await fetch(
      `https://v6.exchangerate-api.com/v6/${exchangeRateAPIKEY}/latest/USD`,
      { mode: "cors" }
    );
    const currencyDataJSON = await currencyData.json();
    return currencyDataJSON.conversion_rates;
  } catch (err) {
    console.error(err);
    return { CAD: 1.3301, CNY: 7.2303, EUR: 0.915, GBP: 0.7807, JPY: 142.3952, VND: 23647.5177 };
  }
}

export { getExchangeRate }