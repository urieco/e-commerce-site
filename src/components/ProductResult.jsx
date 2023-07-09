import { ProductDisplay } from "./ProductDisplay";
import { SortingSideBar } from "./SortingSideBar";
import Products from "../database/Products";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../pages/AllProducts";

function ProductResult() {
  const { allFilter } = useContext(FilterContext);
  const [filteredList, setFilteredList] = useState(Products);

  useEffect(() => {
    let temp = Products.filter((product) => {
      if (allFilter.brand.length === 0) return product;
      else return allFilter.brand.includes(product.brand);
    });
    setFilteredList(temp);
  }, [allFilter]);

  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: "15rem 1fr" }}>
        <SortingSideBar />
        <div className="grid grid-cols-fluid gap-y-2">
          {filteredList.map((product) => {
            return <ProductDisplay key={product.key} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export { ProductResult };
