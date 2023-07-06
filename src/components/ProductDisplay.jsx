import { Link } from "react-router-dom";
import PCHighTier from "../images/PC - HighTier.jpg";
import { StarRating } from "./StarRating";
import { useContext, useState } from "react";
import { CurrencyContext } from "../pages/Homepage";
import { IoLogoUsd } from "react-icons/io";
import { BsCurrencyEuro } from "react-icons/bs";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { PiCurrencyCnyBold } from "react-icons/pi";
import { BsFillCartFill } from "react-icons/bs";

function ProductDisplay () {
  const products = [
    {
      key: "1p",
      title: "CyberpowerPC Gamer Xtreme VR Gaming PC",
      type: "PC",
      imageURL: PCHighTier,
      price: 2299,
      discount: 0.49,
      date: "2023-05-20",
      totalRating: [
        { customerId: "admin", value: 5 },
        { customerId: "jack123", value: 4 },
      ],
      rating: function () {
        const avg =
          this.totalRating.reduce((prev, next) => prev + next.value, 0) /
          this.totalRating.length;
        return avg;
      },
    },
  ];
  const [amountBought, setAmountBought] = useState(0);

  const dayDifference = new Date() - new Date(products[0].date);
  const monthSinceRelease = new Date(dayDifference).getMonth();

  const { currency, exchangeRate } = useContext(CurrencyContext);

  const currencySymbol = () => {
    let result;
    switch (currency) {
      case "USD":
        result = <IoLogoUsd />;
        break;
      case "EUR":
        result = <BsCurrencyEuro />;
        break;
      case "GBP":
        result = <PiCurrencyGbpBold />;
        break;
      case "CAD":
        result = (
          <div className="flex">
            <span className="relative top-[-0.32rem]">C</span>
            <IoLogoUsd />
          </div>
        );
        break;
      case "JPY":
        result = <PiCurrencyJpyBold />;
        break;
      case "CNY":
        result = <PiCurrencyCnyBold />;
        break;
      case "VND":
        result = "đ";
        break;
      default:
        result = <IoLogoUsd />;
    }
    if (result === "đ") return <span>{result} </span>;
    return <span className="relative top-1">{result} </span>;
  };

  const oldPriceStyle = {
    color: !products[0].discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: !products[0].discount ? "1.25rem" : "1.125rem",
    fontWeight: !products[0].discount ? "700" : "400",
    textDecoration: !products[0].discount ? "" : "line-through",
  };

  const newPriceStyle = {
    color: products[0].discount ? "rgb(37, 99, 235)" : " rgb(220, 38, 38)",
    fontSize: products[0].discount ? "1.25rem" : "1.125rem",
    fontWeight: products[0].discount ? "700" : "400",
    textDecoration: products[0].discount ? "" : "line-through",
  };

  const specialVietnameseFormat = (number) => {
    if (currency === "VND")
      return number.toLocaleString("vi-VN", {
        maximumFractionDigits: 0,
      });
    else
      return number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  };

  return (
    <>
      <div className="h-[26rem] w-48 border-2 rounded-md shadow-md mx-2 ">
        <div className="text-right py-1 px-2">
          {monthSinceRelease - 1 < 1 ? (
            <span className="text-gray-200 bg-primary_1 text-xs font-bold py-[0.25em] px-[1em] border border-primary_1 ml-1">
              NEW
            </span>
          ) : (
            <span className="text-transparent">placeholder</span>
          )}
          {products[0].discount !== 0 ? (
            <span className="text-primary_1 text-xs font-bold py-[0.25em] px-[1em] border border-primary_1 ml-1">
              {parseFloat(products[0].discount * 100) + "%"}
            </span>
          ) : null}
        </div>
        <Link to={`/products/${products[0].type}/${products[0].key}`}>
          <div className="h-40 w-44 mx-auto my-4">
            <img src={products[0].imageURL} alt={products[0].title} />
          </div>
          <div className="text-center font-semibold line-clamp-2 pt-1 mx-2">
            {products[0].title}
          </div>
        </Link>
        <StarRating
          initialRating={products[0].rating()}
          totalRating={products[0].totalRating.length}
        />
        <div className="text-lg mx-3">
          <div className="flex" style={oldPriceStyle}>
            <span className="relative top-[0.08rem]">{currencySymbol()} </span>
            {specialVietnameseFormat(products[0].price * exchangeRate)}
          </div>

          {products[0].discount ? (
            <div className="flex" style={newPriceStyle}>
              <span className="relative top-[0.15rem]">
                {currencySymbol()}{" "}
              </span>
              {specialVietnameseFormat(
                products[0].price * (1 - products[0].discount) * exchangeRate
              )}
            </div>
          ) : null}
        </div>

        <div className="flex relative">
          <div className="font-semibold w-10 pl-2 border mt-2 ml-3">
            {amountBought}
          </div>
          <button
            className="font-semibold px-2 border mt-2"
            onClick={() => setAmountBought((prev) => (prev += 1))}
          >
            +
          </button>
          <button
            className="font-semibold px-2 border mt-2"
            onClick={() =>
              setAmountBought((prev) => {
                if (prev <= 0) return prev=0;
                else return prev -= 1;
              })
            }
          >
            -
          </button>
          <BsFillCartFill className="hover:fill-primary_1 w-6 h-6 absolute top-2 right-6 border rounded-lg cursor-pointer"/>
        </div>

      </div>
    </>
  );
}

export { ProductDisplay };
