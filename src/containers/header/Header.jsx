import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./subcomponents/HeaderToolsSubcomponents/NavBar";
import { Dropdown } from "../misc/subcomponents/Dropdown";
import { PickCurrency } from "../../components/misc/PickCurrency";
import { HeaderTools } from "../../components/header/subcomponents/HeaderTools";

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
      <header className="sticky top-0 z-50">
        <div className="bg-primary_2 text-gray-200 font-semibold sm:flex place-content-between px-2 sm:px-[10vw]">
          <div className="sm:flex gap-x-2 hidden sm:visible">
            <div className="flex gap-x-1">
              <BsTelephone className="text-primary_1 mt-1" />
              123-456-7890
            </div>
            <div className="flex gap-x-1">
              <TfiEmail className="text-primary_1 mt-1.5" />
              microware@gmail.com
            </div>
            <div className="text-center flex gap-x-1">
              <MdLocationOn className="text-primary_1 mt-1.5" />
              1234 Sunshine Road
            </div>
          </div>
          <div className="text-center flex justify-around sm:justify-normal gap-x-2 px-2 pt-10 sm:pt-0">
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
            {isSignedIn ? null : (
              <div className="text-white bg-primary_1 h-fit hover:bg-red-500 px-2 rounded-sm">
                <Link to="/registration">Sign Up</Link>
              </div>
            )}
          </div>
        </div>

        <HeaderTools />
        <NavBar />
      </header>
    </>
  );
}

export { Header };
