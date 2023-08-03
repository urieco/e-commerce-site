import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Dropdown } from "./Dropdown";
import { PickCurrency } from "./PickCurrency";
import { HeaderTools } from "./HeaderTools";

import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  const [accountDisplay, setAccountDisplay] = useState(() => {
    const preference = JSON.parse(sessionStorage.getItem("accountRef"));
    return preference ? preference : "Sign In";
  });

  // Prevent redirecting to /login
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = (e) => {
    if (isSignedIn) e.preventDefault();
  };

  const logOutBtn = (logOutConfirm) => {
    if (logOutConfirm !== "Logout") return;
    setAccountDisplay("Sign In");
    sessionStorage.removeItem("accountRef");
  };

  const accountDisplayDropdown = (
    <Dropdown
      dropdownTitle={accountDisplay}
      id="accountSetting"
      list={["Logout"]}
      activateMethod={logOutBtn}
      overallStyle="z-30"
    />
  );

  useEffect(() => {
    if (accountDisplay !== "Sign In") return setIsSignedIn(true);
    return setIsSignedIn(false);
  }, [accountDisplay]);

  return (
    <>
      <div className="sticky top-0 z-50">
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
                {isSignedIn ? accountDisplayDropdown : accountDisplay}
              </Link>
            </div>
          </div>
        </div>

        <HeaderTools />
        <NavBar />
      </div>
    </>
  );
}

export { Header };
