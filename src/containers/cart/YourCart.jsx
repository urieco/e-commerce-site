import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../App";
import { CartSidePanel } from "../../components/cart/subcomponents/CartSidePanel";

import { BsFillCartFill } from "react-icons/bs";

function YourCart() {
  const { itemInCart } = useContext(CartContext);
  const [openCartSidePanel, setOpenCartSidePanel] = useState(false);

  const itemStyle = {
    visibility: itemInCart.length <= 0 ? "hidden" : "visible",
  };

  useEffect(() => {
    if (!itemInCart.length) setOpenCartSidePanel(false);
  }, [itemInCart]);

  return (
    <>
      <div
        className="flex justify-center sm:justify-normal mt-10 sm:mt-2"
        onClick={() => {
          if (!itemInCart.length) return;
          setOpenCartSidePanel(true);
        }}
      >
        <BsFillCartFill className="text-lg sm:text-md text-gray-200 hover:text-primary_1 scale-150 cursor-pointer" />
        <div
          className="text-gray-200 bg-primary_1 text-center align-top font-semibold w-6 h-6 relative -top-4 rounded-lg"
          style={itemStyle}
        >
          {itemInCart.length}
        </div>
      </div>
      {!openCartSidePanel ? null : (
        <CartSidePanel onClickMethod={() => setOpenCartSidePanel(false)} />
      )}
    </>
  );
}

export { YourCart };
