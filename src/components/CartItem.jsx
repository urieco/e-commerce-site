import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext, CurrencyContext } from "../App";
import { CurrencySymbol } from "./CurrencySymbol";

import { specialVietnameseFormat } from "./specialVietnameseFormat";

function CartItem({ item }) {
  const { currency, exchangeRate } = useContext(CurrencyContext);
  const { setItemInCart } = useContext(CartContext);

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
              <CurrencySymbol />
              {specialVietnameseFormat(
                (item.price * (1 - item.discount) * exchangeRate).toFixed(2),
                currency
              )}
            </div>
            <div className="ml-2">
              x<span className="ml-2">{item.amount}</span>
            </div>
          </div>
          <div className="font-semibold flex">
            Subtotal: <CurrencySymbol />
            <span className="text-md">
              {specialVietnameseFormat(
                parseFloat(
                  (item.price * (1 - item.discount) * item.amount * exchangeRate).toFixed(2)
                ),
                currency
              )}
            </span>
          </div>
        </div>
        <button
          className="hover:text-white hover:bg-primary_1 font-extralight hover:font-normal h-fit self-center px-2 border border-primary_3 hover:border-primary_1"
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
