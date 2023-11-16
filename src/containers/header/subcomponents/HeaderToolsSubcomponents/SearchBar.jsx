import { useState } from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

function SearchBar({ suggestions }) {
  const [userInput, setUserInput] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState("");

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setUserInput(sanitizedValue);
    setFilteredSuggestions(() => {
      if (!sanitizedValue) return [];
      return suggestions.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().indexOf(sanitizedValue.toLowerCase()) >
          -1
      );
    });
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    // Enter
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      // Up Arrow
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion((prev) => prev - 1);
    } else if (e.keyCode === 40) {
      // Down Arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion((prev) => prev + 1);
    } else if (e.keyCode === 27) {
      // Esc
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const routingValue = document.querySelector(`.suggestionItem[data-index="${activeSuggestion}"]`).getAttribute("data-routing");
    const route = `https://microware-site.web.app${routingValue}`;
    window.location.href = route;
  };
  
  const SuggestionList = () => {
    const onSuggestionClick = (e) => {
      const routingValue = e.currentTarget.getAttribute("data-routing");
      const route = `https://microware-site.web.app${routingValue}`;
      window.location.href = route;
    };

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return (
          <ul className="absolute w-full sm:pr-14 mt-8 z-50">
            {filteredSuggestions.map((suggestion, index) => {
              let selected;
              if (index === activeSuggestion) {
                selected = "bg-red-100";
              }
              return (
                <li
                  className={`suggestionItem bg-gray-100 hover:bg-red-100 cursor-pointer pb-2 border ${selected}`}
                  key={suggestion.key}
                  data-index={index}
                  data-routing={`/${suggestion.type}/${suggestion.key}`}
                  onMouseEnter={() => setActiveSuggestion(index)}
                  onClick={onSuggestionClick}
                >
                  {suggestion.title}
                </li>
              );
            })}
          </ul>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="justify-self-start flex gap-x-1 sm:ml-5 mt-5 sm:mt-0">
        <form
          method="get"
          className="relative flex"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            className="w-[65vw] sm:w-[40vw] hover:bg-gray-200 py-1 sm:pl-2 sm:rounded-r-md focus:border-none focus:outline-none"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onClick={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            required
          />
          {SuggestionList()}
          <input
            type="submit"
            name="searchBtn"
            id="searchBtn"
            value="Search"
            className="text-gray-200 bg-primary_1 hover:bg-red-500 font-semibold sm:absolute sm:-right-2 px-2 sm:py-[0.25rem] sm:rounded-r-full cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  suggestions: PropTypes.array,
};

SearchBar.defaultProps = {
  suggestions: [],
};

export { SearchBar };
