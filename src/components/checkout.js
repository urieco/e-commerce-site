import uniqid from "uniqid";

function createOrder(productName, price, discount, amount, exchangeRate) {
  const totalPrice = (price * (1 - discount) * amount * exchangeRate).toFixed(2);
  const id = uniqid();

  return { productName, id, price, discount, amount, total: parseFloat(totalPrice) }
}

function checkout(customerId, ...product) {
  const transactionId = uniqid();
  const date = new Date();
  const products = [...product];

  return { customerId, transactionId, date, products }
}

export { createOrder, checkout };