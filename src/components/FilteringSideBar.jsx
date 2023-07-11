import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../App";
import { useLocation } from "react-router-dom";

function FilteringSideBar () {
  const { setAllFilter } = useContext(FilterContext);
  const [filterList, setFilterList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const updateBrandList = () => {
    setTimeout(() => {
      let temp = [];
      document.querySelectorAll(".product").forEach((product) => {
        const productBrand = product.getAttribute("data-brand");
        if (!temp.includes(productBrand)) temp.push(productBrand);
      });
      setBrandList(temp);
    }, 10)
  };

  const location = useLocation();

  useEffect(() => {
    updateBrandList();
    return () => {
      setAllFilter({ brand: [] })
    };
  }, [location, setAllFilter]);

  const removeFilter = (filter) => {
    let temp = filterList.filter((tag) => tag !== filter);
    setFilterList(temp);
    setAllFilter((prevState) => ({
      brand: [...prevState.brand].filter((tag) => tag !== filter),
    }));
  };

  const addFilter = (filter) => {
    setFilterList((prev) => [...prev, filter]);
    setAllFilter((prevState) => ({
      brand: [...prevState.brand, filter],
    }));
  };

  return (
    <>
      <div>
        <div className="h-fit flex flex-col p-2 border-2 mt-2 mx-2">
          <span className="text-primary_1 font-bold">Filter List</span>
          <div>
            {filterList.map((filter) => {
              return (
                <span
                  key={filter}
                  data-filter={filter}
                  className="text-gray-200 bg-primary_1 leading-8 w-fit p-1 rounded-lg"
                >
                  {filter}
                  <button
                    className="appearance-none text-primary_1 bg-white font-bold leading-tight px-[0.35rem] border rounded-full ml-1 cursor-pointer"
                    onClick={() => removeFilter(filter)}
                  >
                    -
                  </button>
                </span>
              );
            })}
          </div>
        </div>
        <div className="h-fit flex flex-col p-2 border-2 mt-2 mx-2">
          <span className="text-primary_1 font-bold">Brand</span>
          {brandList.map((brand) => {
            return (
              <label key={brand + "id"} htmlFor={brand}>
                <input
                  type="checkbox"
                  name={brand}
                  className="p-2 border-2"
                  onChange={(e) => {
                    if (!e.currentTarget.checked) {
                      return removeFilter(brand);
                    }
                    addFilter(brand);
                  }}
                />
                <span className="font-semibold ml-2">{brand}</span>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { FilteringSideBar };
