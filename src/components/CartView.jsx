import PropTypes from "prop-types";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { CartContext, CurrencyContext } from "../App";
import { IoLogoUsd } from "react-icons/io";
import { BsCurrencyEuro } from "react-icons/bs";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { PiCurrencyCnyBold } from "react-icons/pi";

function CartView({ onClickMethod }) {
  const { itemInCart } = useContext(CartContext);
  const { currency } = useContext(CurrencyContext);
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

  const total = itemInCart.reduce((prev, next) => prev + next.total, 0).toFixed(2);

  return (
    <>
      <div
        className="w-full h-full fixed top-0 flex z-[100] backdrop-blur-sm"
        style={{ backgroundColor: "rgba(51, 65, 85, 0.4)" }}
        onClick={onClickMethod}
      >
        <div
          className="slideLeft text-primary_3 bg-white w-96 h-[80%] absolute top-20 right-0 p-2 shadow-lg opacity-100 z-[110]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-primary_3 hover:text-gray-200 hover:bg-primary_3 text-2xl font-semibold relative px-4 py-2 border-primary_3 border-2 outline-none cursor-pointer"
            onClick={onClickMethod}
          >
            X
          </button>
          <div className="h-[80%] overflow-y-auto">
            {itemInCart.map((item) => {
              return (
                <div key={item.id}>
                  <CartItem item={item} />
                </div>
              );
            })}
          </div>
          <div className="text-2xl px-2 py-2 border-primary_3 border-t">
            Your Total:
            <span className="flex">
              {" "}
              {currencySymbol()} {total}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

CartView.propTypes = {
  onClickMethod: PropTypes.func,
};

export { CartView };
