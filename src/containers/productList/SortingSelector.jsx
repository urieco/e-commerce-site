import { useContext } from "react";

import { Dropdown } from "../misc/subcomponents/Dropdown";
import { SortingContext } from "../../App";

function SortingSelector() {
  const { setSortMethod } = useContext(SortingContext);

  const sortingMethod = [
    "A to Z",
    "Z to A",
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
  ];

  const selectSortMethod = (method) => {
    setSortMethod(method);
  };

  return (
    <>
      <Dropdown
        dropdownTitle="Sort By"
        id="sortingProductList"
        list={sortingMethod}
        selectListItemMethod={selectSortMethod}
        overallStyle="w-[95vw] sm:w-auto self-center justify-self-end my-5 mx-2"
        buttonStyle="text-black hover:text-cyan-700 w-full sm:w-48 border border-black rounded-md shadow-md focus:shadow-red-500 hover:shadow-red-200"
        listStyle="bg-white border"
        listItemStyle="text-black"
      />
    </>
  );
}

export { SortingSelector };
