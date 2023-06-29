import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Dropdown({ dropdownTitle, id, list, getPickedCurrency }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(dropdownTitle);

  if (!list) list = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const ListDropdown = list.map((item) => {
    return (
      <li
        className="hover:text-primary_1 p-1 border border-transparent hover:border-l-primary_1 rounded-l-sm cursor-pointer"
        key={list.indexOf(item)}
        onClick={(event) => {
          const clickedElementValue = event.currentTarget.textContent;
          setCurrency(clickedElementValue);
          getPickedCurrency(clickedElementValue);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <div className="text-gray-200 relative flex flex-col items-center w-fit rounded">
        <button
          id={id}
          className="grid grid-cols-2 justify-items-center items-center pl-1 hover:text-primary_1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {currency}
          <div className="w-min justify-self-end mt-1">
            {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </div>
        </button>

        {isOpen && (
          <ul className="text-gray-200 bg-primary_2 w-full absolute top-[1.55rem] flex flex-col items-start pl-1 rounded-b">
            {ListDropdown}
          </ul>
        )}
      </div>
    </>
  );
}

Dropdown.propTypes = {
  list: PropTypes.array,
  dropdownTitle: PropTypes.string,
  id: PropTypes.string,
  getPickedCurrency: PropTypes.func,
};

export { Dropdown };
