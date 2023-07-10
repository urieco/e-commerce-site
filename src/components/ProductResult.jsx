import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FilterContext } from "../App";
import { ProductDisplay } from "./ProductDisplay";
import Products from "../database/Products";

function ProductResult({ category }) {
  const { allFilter } = useContext(FilterContext);

  const initialCategorization = () => {
    if (category === "All") return Products;
    else return Products.filter((product) => product.type === category);
  };

  const [categorizedList, setCategorizedList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    let temp = initialCategorization().filter((product) => {
      if (allFilter.brand.length === 0) return product;
      else return allFilter.brand.includes(product.brand);
    });
    setCategorizedList(temp);
  }, [allFilter, location]);

  return (
    <>
      <div className="col-start-2 grid grid-cols-fluid gap-y-2">
        {categorizedList.map((product) => {
          return <ProductDisplay key={product.key} product={product} />;
        })}
      </div>
    </>
  );
}

ProductResult.propTypes = {
  category: PropTypes.string,
};

export { ProductResult };
