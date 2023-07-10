import { useContext } from "react";
import { Dropdown } from "./Dropdown";
import {SortingContext} from "../App";

function SortingSelector () {
  const { setSortMethod } = useContext(SortingContext);

  const sortingMethod = ["A to Z", "Z to A", "Price: Low to High", "Price: High to Low", "Avg. Customer Review", "Newest Arrivals"];

  const selectSortMethod = (method) => {
    setSortMethod(method);
  }

  return (
    <>
      <Dropdown
        dropdownTitle="Sort By"
        id="sortingProductList"
        list={sortingMethod}
        selectListItemMethod={selectSortMethod}
        overallStyle="text-black self-center justify-self-end"
        buttonStyle="text-black hover:text-cyan-700 w-48 border border-black rounded-md shadow-md focus:shadow-red-500 hover:shadow-red-200"
        listStyle="text-black bg-white border"
        listItemStyle="text-black"
      />
    </>
  );
}

export { SortingSelector };