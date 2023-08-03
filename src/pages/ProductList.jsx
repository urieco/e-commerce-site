import PropTypes from "prop-types";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductResult } from "../components/ProductResult";
import { FilteringSideBar } from "../components/FilteringSideBar";
import { SortingSelector } from "../components/SortingSelector";

function ProductList ({ category }) {

  return (
    <>
      <Header/>
      <div
        className="grid mx-[10vw] my-[10vh]"
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

