import { useContext, useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../App";
import { CartView } from "./CartView";

function YourCart() {
  const { itemInCart } = useContext(CartContext);
  const [openCartView, setOpenCartView] = useState(false);

  const itemStyle = {
    visibility: itemInCart.length <= 0 ? "hidden" : "visible",
  };

  useEffect(() => {
    if (!itemInCart.length) setOpenCartView(false);
  }, [itemInCart]);

  return (
    <>
      <div
        className="flex mt-2"
        onClick={() => {
          if (!itemInCart.length) return;
          setOpenCartView(true)
        }}
      >
        <BsFillCartFill className="text-gray-200 hover:text-primary_1 scale-150 cursor-pointer" />
        <div
          className="text-gray-200 bg-primary_1 text-center align-top font-semibold w-6 h-6 relative -top-4 rounded-lg"
          style={itemStyle}
        >
          {itemInCart.length}
        </div>
      </div>
      {!openCartView ? null : <CartView onClickMethod={() => setOpenCartView(false)}/>}
    </>
  );
}

export { YourCart };
