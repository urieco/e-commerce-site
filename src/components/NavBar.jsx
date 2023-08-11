import { NavLink } from "react-router-dom";

function NavBar () {
  return (
    <>
      <nav className="text-gray-200 bg-primary_3 font-medium px-[10vw] py-1 shadow-lg">
        <NavLink to="/" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Home</NavLink>
        <NavLink to="/All" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">All</NavLink>
        <NavLink to="/PC" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">PC</NavLink>
        <NavLink to="/Laptop" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Laptop</NavLink>
        <NavLink to="/Smartphone" className=" px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Smartphone</NavLink> 
        <NavLink to="/Accessories" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Accessories</NavLink>
      </nav>
    </>
  );
}

export { NavBar }