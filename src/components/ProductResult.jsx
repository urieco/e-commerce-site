import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { FilterContext, SortingContext } from "../App";
import { ProductDisplay } from "./ProductDisplay";
import { Products } from "../database/Products";

function ProductResult({ category }) {
  const { allFilter } = useContext(FilterContext);
  const { sortMethod } = useContext(SortingContext);
  const [categorizedList, setCategorizedList] = useState([]);
  const location = useLocation();

  const initialCategorization = () => {
    if (category === "All") return Products;
    else return Products.filter((product) => product.type === category);
  };

  const sortedByAlphabeticalOrder = (reverseCondition, array) => {
    let result = array.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    if (!reverseCondition) return result;
    else return result.reverse();
  };

  const sortedByPrice = (reverseCondition, array) => {
    if (!reverseCondition)
      return array.sort(
        (a, b) => a.price * (1 - a.discount) - b.price * (1 - b.discount)
      );
    else
      return array.sort(
        (a, b) => b.price * (1 - b.discount) - a.price * (1 - a.discount)
      );
  };

  const sortedByRating = (array) => {
    return array.sort((a, b) => b.rating() - a.rating());
  };

  const sortedByDate = (array) => {
    return array.sort(
      (a, b) => new Date() - new Date(a.date) - (new Date() - new Date(b.date))
    );
  };

  const sorting = (array) => {
    let sorted;
    switch (sortMethod) {
      case "A to Z":
        sorted = sortedByAlphabeticalOrder(false, array);
        break;
      case "Z to A":
        sorted = sortedByAlphabeticalOrder(true, array);
        break;
      case "Price: Low to High":
        sorted = sortedByPrice(false, array);
        break;
      case "Price: High to Low":
        sorted = sortedByPrice(true, array);
        break;
      case "Avg. Customer Review":
        sorted = sortedByRating(array);
        break;
      case "Newest Arrivals":
        sorted = sortedByDate(array);
        break;
      default:
        sorted = array;
    }
    return sorted;
  };

  useEffect(() => {
    let temp = initialCategorization().filter((product) => {
      if (allFilter.brand.length === 0) return product;
      else return allFilter.brand.includes(product.brand);
    });
    temp = sorting(temp);
    setCategorizedList(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilter, sortMethod, location]);

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
