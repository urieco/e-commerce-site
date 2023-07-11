import uniqid from "uniqid";

function createOrder(productName, price, discount, amount) {
  const total = (price * (1 - discount) * amount).toFixed(2);
  const id = uniqid();

  return { productName, id, price, discount, amount, total: parseFloat(total) }
}

function createCheckOutOrder(customerId, ...product) {
  const transactionId = uniqid();
  const date = new Date();
  const products = [...product];

  return { customerId, transactionId, date, products }
}

export { createOrder, createCheckOutOrder };