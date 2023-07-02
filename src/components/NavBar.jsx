import { NavLink } from "react-router-dom";

function NavBar () {
  return (
    <>
      <div className="text-gray-200 bg-primary_3 font-medium px-[10vw] py-1 shadow-lg">
        <NavLink to="/" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Home</NavLink>
        <NavLink to="/products" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">All</NavLink>
        <NavLink to="/products/pc" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">PC</NavLink>
        <NavLink to="/products/laptop" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Laptop</NavLink>
        <NavLink to="/products/smartphone" className=" px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Smartphone</NavLink> 
        <NavLink to="/products/accessories" className="px-3 py-1 pr-5 border border-transparent hover:border-gray-200">Accessories</NavLink>
      </div>
    </>
  );
}

export { NavBar }