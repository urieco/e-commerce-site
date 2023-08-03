import { useState } from "react";
import DOMPurify from "dompurify";

import { Dropdown } from "./Dropdown";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="justify-self-start flex gap-x-1 ml-5">
        <Dropdown
          dropdownTitle="Categories"
          id="categorySort"
          list={["PC", "Laptop", "Smartphone", "Accessories"]}
          overallStyle="pt-1 border border-red-600"
          buttonStyle="w-[6.5rem] truncate"
          listStyle="mt-2"
        />
        <form
          action=""
          method="get"
          className="relative"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            className="w-[25vw] hover:bg-gray-200 py-1 pl-2 rounded-r-md focus:border-none focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            name="searchBtn"
            id="searchBtn"
            value="Search"
            className="text-gray-200 bg-primary_1 hover:bg-red-500 font-semibold absolute -right-2 px-2 py-[0.25rem] rounded-r-full cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export { SearchBar };
