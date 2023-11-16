import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

import { CartContext, CurrencyContext } from "../../../App.jsx";
import { StarRating } from "./subcomponents/StarRating.jsx";
import { CurrencySymbol } from "../../../components/misc/CurrencySymbol.jsx";

import { BsFillCartFill } from "react-icons/bs";

import { specialVietnameseFormat } from "../../../utils/specialVietnameseFormat.js";

function ProductDisplay({ product }) {
  const { setItemInCart } = useContext(CartContext);
  const { currency, exchangeRate } = useContext(CurrencyContext);
  const [amountBought, setAmountBought] = useState(0);

  const dayDifference = new Date() - new Date(product.date);
  const monthSinceRelease = new Date(dayDifference).getMonth();

  const oldPriceStyle = {
    color: !product.discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: !product.discount ? "1.25rem" : "1.125rem",
    fontWeight: !product.discount ? "700" : "400",
    textDecoration: !product.discount ? "" : "line-through",
  };

  const newPriceStyle = {
    color: product.discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: product.discount ? "1.25rem" : "1.125rem",
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
      <div
        data-brand={product.brand}
        className="product h-[26rem] sm:w-48 border-2 rounded-md shadow-md mx-2"
      >
        <div className="text-right py-1 px-2">
          {monthSinceRelease - 1 < 1 ? (
            <span className="text-gray-200 bg-primary_1 text-xs font-bold py-[0.25em] px-[1em] border border-primary_1 ml-1">
              NEW
            </span>
          ) : (
            <span className="text-transparent">placeholder</span>
          )}
          {product.discount !== 0 ? (
            <span className="text-primary_1 text-xs font-bold py-[0.25em] px-[1em] border border-primary_1 ml-1">
              {parseFloat(product.discount * 100).toFixed(0) + "%"}
            </span>
          ) : null}
        </div>

        <Link to={`/${product.type}/${product.key}`}>
          <div className="h-40 w-[11.5rem] sm:w-44 flex justify-center items-center  my-4">
            <img
              src={product.imageURL}
              alt={product.title}
              className="w-full h-full object-contain sm:object-scale-down"
            />
          </div>
          <div className="text-center font-semibold line-clamp-2 relative pt-1 mx-2 z-10">
            {product.title}
          </div>
        </Link>

        <div>
          <StarRating
            id={product.key}
            initialRating={product.rating()}
            totalRating={product.totalRating.length}
          />

          <div className="text-lg mx-3">
            <div className="flex" style={oldPriceStyle}>
              <CurrencySymbol />
              <span className="relative bottom-[0.1rem]">
                {specialVietnameseFormat(
                  product.price * exchangeRate,
                  currency
                )}
              </span>
            </div>

            {product.discount ? (
              <div className="flex" style={newPriceStyle}>
                <CurrencySymbol />
                <span className="relative bottom-[0.15rem]">
                  {specialVietnameseFormat(
                    product.price * (1 - product.discount) * exchangeRate,
                    currency
                  )}
                </span>
              </div>
            ) : null}
          </div>

          <div className="h-full flex relative">
            <div className="text-right font-semibold w-10 px-2 border mt-2 ml-3">
              {amountBought}
            </div>
            <button
              className="hover:bg-gray-200 font-semibold px-3 border mt-2"
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
              className="hover:bg-gray-200 font-semibold px-3 border mt-2"
              onClick={() => setAmountBought((prev) => (prev += 1))}
            >
              +
            </button>
            <BsFillCartFill
              className="hover:fill-primary_1 w-7 h-7 absolute bottom-0 right-6 p-1 border rounded-lg cursor-pointer"
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
    </>
  );
}

ProductDisplay.propTypes = {
  product: PropTypes.object,
};

ProductDisplay.defaultProps = {
  product: {
    key: "test",
    title: "placeholder",
    description: "placeholder",
    type: "none",
    brand: "placeholder",
    imageURL: "/src/images/logo.png",
    price: 1,
    discount: 0,
    date: "2023/01/01",
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
};

export { ProductDisplay };
