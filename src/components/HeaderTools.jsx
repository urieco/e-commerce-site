import { Link } from "react-router-dom";

import { SearchBar } from "./SearchBar";
import { YourCart } from "./YourCart";

import Logo from "/images/logo.png";

import { Products } from "../database/Products";

function HeaderTools() {
  return (
    <>
      <div
        className="bg-primary_2 grid items-center justify-items-center px-[10vw] py-6"
        style={{ gridTemplateColumns: "3fr 8fr 1fr" }}
      >
        <div>
          <Link to="/">
            <img
              className="w-[20svw] relative -top-1"
              src={Logo}
              alt="MicroWare"
            />
          </Link>
        </div>
        <SearchBar suggestions={Products}/>
        <YourCart />
      </div>
    </>
  );
}

export { HeaderTools };
