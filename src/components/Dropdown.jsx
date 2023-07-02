import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Dropdown({ dropdownTitle, id, list, getPickedCurrency, overallStyle, buttonStyle, listStyle, listItemStyle}) {
  const [isOpen, setIsOpen] = useState(false);
  const [listItem, setListItem] = useState(dropdownTitle);

  if (!list) list = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const ListDropdown = list.map((item) => {
    return (
      <li
        className={`hover:text-primary_1 p-1 border border-transparent hover:border-l-primary_1 rounded-l-sm cursor-pointer ${listItemStyle}`}
        key={list.indexOf(item)}
        onClick={(event) => {
          const clickedElementValue = event.currentTarget.textContent;
          setListItem(clickedElementValue);
          getPickedCurrency(clickedElementValue);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <div className={`text-gray-200 relative flex flex-col items-center w-max rounded ${overallStyle}`}>
        <button
          id={id}
          className={`min-w-100 grid grid-cols-2 items-center justify-items-start pl-1 hover:text-primary_1 ${buttonStyle}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {listItem}
          <div className="w-min justify-self-end mt-1">
            {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </div>
        </button>

        {isOpen && (
          <ul className={`text-gray-200 bg-primary_2 w-full absolute top-[1.55rem] flex flex-col items-start pl-1 rounded-b ${listStyle}`}>
            {ListDropdown}
          </ul>
        )}
      </div>
    </>
  );
}

Dropdown.propTypes = {
  dropdownTitle: PropTypes.string,
  id: PropTypes.string,
  list: PropTypes.array,
  getPickedCurrency: PropTypes.func,
  overallStyle: PropTypes.string,
  buttonStyle: PropTypes.string,
  listStyle: PropTypes.string,
  listItemStyle: PropTypes.string,
};

export { Dropdown };
