import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../App";
import { CartItem } from "./CartItem";
import { CurrencySymbol } from "./CurrencySymbol";


function CartSidePanel({ onClickMethod }) {
  const { itemInCart } = useContext(CartContext);

  const total = itemInCart
    .reduce((prev, next) => prev + next.total, 0)
    .toFixed(2);

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
              <CurrencySymbol/>{total}
            </span>
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
