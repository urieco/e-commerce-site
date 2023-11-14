import PropTypes from "prop-types";

import { Header } from "../../containers/header/Header";
import { Footer } from "../pageComponent/Footer";
import { ProductResult } from "../../containers/productList/ProductResult";
import { FilteringSideBar } from "../../containers/productList/FilteringSideBar";
import { SortingSelector } from "../../containers/productList/SortingSelector";

function ProductList ({ category }) {

  return (
    <>
      <Header/>
      <div
        className="sm:grid sm:mx-[10vw] my-[10vh]"
        style={{ 
          gridTemplateColumns: "15rem 1fr",
          gridTemplateRows: "3rem 1fr" 
        }}
      >
        <FilteringSideBar/>
        <SortingSelector/>
        <ProductResult category={category}/>
      </div>
      <Footer/>
    </>
  );
}

ProductList.propTypes = {
  category: PropTypes.string,
}

export { ProductList };

