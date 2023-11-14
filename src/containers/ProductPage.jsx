import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import uniqid from "uniqid";

import { CartContext, CurrencyContext } from "../App";
import { Header } from "./header/Header";
import { Footer } from "../components/pageComponent/Footer";
import { Products } from "../database/Products";
import { StarRating } from "./productList/product/subcomponents/StarRating";
import { CurrencySymbol } from "../components/misc/CurrencySymbol";

import { specialVietnameseFormat } from "../utils/specialVietnameseFormat";

function ProductPage() {
  const { productId } = useParams();
  const [product] = Products.filter((product) => product.key === productId);
  const { setItemInCart } = useContext(CartContext);
  const { currency, exchangeRate } = useContext(CurrencyContext);
  const [amountBought, setAmountBought] = useState(0);

  const date = new Date(product.date);
  const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const oldPriceStyle = {
    color: !product.discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: !product.discount ? "1.5rem" : "1rem",
    fontWeight: !product.discount ? "700" : "400",
    textDecoration: !product.discount ? "" : "line-through",
  };

  const newPriceStyle = {
    color: product.discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: product.discount ? "1.5rem" : "1rem",
    fontWeight: product.discount ? "700" : "400",
    textDecoration: product.discount ? "" : "line-through",
  };

  const addToCart = () => {
    if (!amountBought) return;

    setItemInCart((prev) => [
      ...prev,
      {
        productName: product.title,
        id: uniqid(),
        price: product.price,
        discount: product.discount,
        amount: amountBought,
      },
    ]);
    setAmountBought(0);
  };

  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 py-20 border-primary_3 border-4 rounded-lg shadow-lg sm:mx-[10vw] my-2">
        <div className="w-full h-full border-r">
          <img src={product.imageURL} alt={product.title} />
        </div>
        <div className="pl-4 border-gray-600 mr-4">
          <div className="font-semibold">
            Brand: <span className="text-blue-600">{product.brand}</span>
          </div>
          <div className="text-gray-600 text-3xl py-4">{product.title}</div>
          <div className="ml-[-0.9rem]">
            <StarRating
              id={product.key}
              initialRating={product.rating()}
              totalRating={product.totalRating.length}
            />
          </div>
          <div className="font-semibold pb-2 border-b mb-2">
            Released Date:{" "}
            <span className="font-extralight italic">{formattedDate}</span>
          </div>
          <div className="text-lg flex gap-2 py-4">
            {product.discount ? (
              <div className="flex" style={newPriceStyle}>
                <CurrencySymbol />
                {specialVietnameseFormat(
                  product.price * (1 - product.discount) * exchangeRate,
                  currency
                )}
              </div>
            ) : null}
            <div className="flex" style={oldPriceStyle}>
              <CurrencySymbol />
              <span className="relative bottom-[0.15rem]">
                {specialVietnameseFormat(
                  product.price * exchangeRate,
                  currency
                )}
              </span>
            </div>
          </div>
          <div>{product.description}</div>
          <div className="ml-[-1rem] flex relative">
            <div className="text-right font-semibold w-10 px-4 border border-primary_3 mt-2 ml-3">
              {amountBought}
            </div>
            <button
              className="hover:bg-gray-200 font-semibold px-4 border-primary_3 border mt-2"
              onClick={() =>
                setAmountBought((prev) => {
                  if (prev <= 0) return (prev = 0);
                  else return (prev -= 1);
                })
              }
            >
              -
            </button>
            <button
              className="hover:bg-gray-200 font-semibold px-4 border-primary_3 border mt-2"
              onClick={() => setAmountBought((prev) => (prev += 1))}
            >
              +
            </button>
            <button
              className="text-gray-200 bg-primary_1 hover:bg-red-500 font-semibold aboslute bottom-1 px-2 border rounded-lg ml-6 mt-2 cursor-pointer"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { ProductPage };
