import { useRef } from "react";
import { Products } from "../database/Products";
import { ProductDisplay } from "./ProductDisplay";

function Recommendation() {
  let temp = useRef([]);

  while (temp.current.length < 8) {
    const randomNumber = Math.floor(Math.random() * Products.length);
    if (!temp.current.includes(randomNumber)) {
      temp.current.push(randomNumber);
    }
  }

  return (
    <>
      <div className="py-10 mx-2 sm:mx-[10vw]">
        <div className="text-center sm:text-justify text-gray-700 text-2xl font-bold tracking-tighter pb-2">
          RECOMMENDED FOR
          <span className="text-primary_1"> YOU</span>
        </div>
        <div className="flex border shadow-sm overflow-auto">
          {temp.current.map((index) => {
            return (
              <div key={index}>
                <ProductDisplay product={Products[index]} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { Recommendation };
