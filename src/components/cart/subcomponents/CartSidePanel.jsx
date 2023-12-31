import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext, CurrencyContext } from "../../../App";
import { CartItem } from "./CartSidePanelSubcomponents/CartItem";
import { CurrencySymbol } from "../../misc/CurrencySymbol";

import { specialVietnameseFormat } from "../../../utils/specialVietnameseFormat";

function CartSidePanel({ onClickMethod }) {
  const { currency, exchangeRate } = useContext(CurrencyContext);
  const { itemInCart } = useContext(CartContext);

  const total = itemInCart
    .reduce((prev, next) => {
      return (
        prev +
        parseFloat(
          next.price * (1 - next.discount) * next.amount * exchangeRate
        )
      );
    }, 0)
    .toFixed(2);

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 flex z-[100] backdrop-blur-sm"
        style={{ backgroundColor: "rgba(51, 65, 85, 0.4)" }}
        onClick={onClickMethod}
      >
        <div
          className="slideLeft text-primary_3 bg-white w-full sm:w-96 h-full sm:h-[80%] absolute sm:top-20 right-0 p-2 shadow-lg opacity-100 z-[110]"
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
          <div className="text-2xl flex justify-between px-2 py-2 border-primary_3 border-t">
            <div>
              Your Total:
              <span className="flex">
                <CurrencySymbol />
                {specialVietnameseFormat(total, currency)}
              </span>
            </div>
            <button className="text-white bg-primary_2 hover:bg-gray-700 w-fit px-5 border">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CartSidePanel.propTypes = {
  onClickMethod: PropTypes.func,
};

export { CartSidePanel };
