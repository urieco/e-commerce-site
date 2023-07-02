import { useState } from "react";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { PickCurrency } from "./PickCurrency";
import { Dropdown } from "./Dropdown";
import { HeaderTools } from "./HeaderTools";
import { NavBar } from "./NavBar";

function Header() {
  const [account, setAccount] = useState("Sign In");

  // Prevent redirecting to /login
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleClick = (e) => {
    if (isSignedIn) e.preventDefault();
  }

  const accountDropdown = (
    <Dropdown 
      dropdownTitle={account} 
      id="accountSetting" 
      list={["Setting", "Logout"]}
      getPickedCurrency={null} 
    />
  );

  return (
    <>
      <div>
        <div className="bg-primary_2 text-gray-200 font-semibold flex place-content-between px-[10vw]">
          <div className="flex gap-x-2">
            <div className="flex gap-x-1">
              <BsTelephone className="text-primary_1 mt-1" />
              123-456-7890
            </div>
            <div className="flex gap-x-1">
              <TfiEmail className="text-primary_1 mt-1.5" />
              microware@gmail.com
            </div>
            <div className="flex gap-x-1">
              <MdLocationOn className="text-primary_1 mt-1.5" />
              1234 Sunshine Road
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="flex gap-x-1">
              <BsCurrencyDollar className="text-primary_1 mt-1.5" />
              <PickCurrency />
            </div>
            <div className="flex gap-x-1 hover:text-primary_1 pr-2 cursor-pointer">
              <AiOutlineUser className="text-primary_1 mt-1.5" />
              <Link to="/login" onClick={handleClick}>
                {isSignedIn ? accountDropdown : account}
              </Link>
            </div>
          </div>
        </div>

        <HeaderTools/>
        <NavBar/>
      </div>
    </>
  );
}

export { Header };
