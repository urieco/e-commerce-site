import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

function YourCart () {
  const [itemInCart, setItemInCart] = useState(0)

  const itemStyle = {
    visibility: itemInCart <= 0 ? "hidden" : "visible"
  }

  return (
    <>
      <div className="flex mt-2">
        <BsFillCartFill className="text-gray-200 hover:text-primary_1 scale-150 cursor-pointer"/>
          <div 
            className="text-gray-200 bg-primary_1 text-center align-top font-semibold w-6 h-6 relative -top-4 rounded-lg"
            style={itemStyle}
          >
            {itemInCart}
        </div>
      </div>
    </>
  );
}

export { YourCart }