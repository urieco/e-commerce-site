import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])


  const collapseStyle = {
    visibility: isOpen ? "visible" : "collapse",
  };

  return (
    <>
      <nav className="text-3xl sm:text-base text-gray-200 bg-primary_3 font-medium absolute w-full px-[10vw] shadow-lg z-60">
        <button
          className="w-[95%] px-3 py-1 visible sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          =
        </button>
        {!isOpen ? null : (
          <div
            className="h-max sm:h-auto grid sm:flex gap-y-6 sm:gap-0 py-5 sm:py-0"
            style={collapseStyle}
          >
            <NavLink
              to="/"
              className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/All"
              className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              All
            </NavLink>
            <NavLink
              to="/PC"
              className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              PC
            </NavLink>
            <NavLink
              to="/Laptop"
              className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              Laptop
            </NavLink>
            <NavLink
              to="/Smartphone"
              className=" px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              Smartphone
            </NavLink>
            <NavLink
              to="/Accessories"
              className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200"
            >
              Accessories
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export { NavBar };
