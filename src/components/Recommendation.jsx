import { useRef } from "react";
import Products from "../database/Products";
import { ProductDisplay } from "./ProductDisplay";

function Recommendation() {
  let temp = useRef([]);

  while (temp.current.length < 6) {
    const randomNumber = Math.floor(Math.random() * Products.length);
    if (!temp.current.includes(randomNumber)) {
      temp.current.push(randomNumber);
    }
  }
  console.log(temp.current);

  return (
    <>
      <div className="py-10 mx-[10vw]">
        <div className="text-gray-700 text-2xl font-bold tracking-tighter pb-2">
          RECOMMENDED FOR
          <span className="text-primary_1"> YOU</span>
        </div>
        <div className="flex border shadow-sm overflow-auto">
          {temp.current.map((index) => {
            return (
              <>
                <ProductDisplay product={Products[index]} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Recommendation };
