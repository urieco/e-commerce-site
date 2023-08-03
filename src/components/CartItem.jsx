import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext, CurrencyContext } from "../App";

import { IoLogoUsd } from "react-icons/io";
import { BsCurrencyEuro } from "react-icons/bs";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { PiCurrencyCnyBold } from "react-icons/pi";

function CartItem({ item }) {
  const { currency } = useContext(CurrencyContext);
  const { setItemInCart } = useContext(CartContext);

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

  return (
    <>
      <div
        data-cartitemid={item.id}
        className="w-full flex justify-between p-2 border border-primary_3 rounded-md shadow-sm my-2"
      >
        <div>
          <div className="font-semibold line-clamp-1">{item.productName}</div>
          <div className="flex">
            <div className="flex">
              {currencySymbol()}
              {(item.price * (1 - item.discount)).toFixed(2)}
            </div>
            <div className="ml-2">
              x<span className="ml-2">{item.amount}</span>
            </div>
          </div>
          <div className="font-semibold flex">
            Subtotal:{" "}
            <span className="relative top-[0.08rem]">{currencySymbol()}</span>{" "}
            <span className="text-md">{item.total}</span>
          </div>
        </div>
        <button
          className="hover:text-primary_1 font-extralight h-fit self-center px-2 border rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            const cartitemid =
              e.currentTarget.parentNode.getAttribute("data-cartitemid");
            setItemInCart((prev) => {
              if ([...prev].length === 1) return [];
              return [...prev].filter((item) => item.id !== cartitemid);
            });
          }}
        >
          X
        </button>
      </div>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export { CartItem };
