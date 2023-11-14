import uniqid from "uniqid";

function checkout(customerId, ...product) {
  const transactionId = uniqid();
  const date = new Date();
  const products = [...product];

  return { customerId, transactionId, date, products }
}

export { checkout };