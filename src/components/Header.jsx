import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { PickCurrency } from "./PickCurrency";

function Header() {
  return (
    <>
      <div className="bg-primary_2 text-gray-200 font-semibold flex place-content-between">
        <div className="flex gap-x-2">
          <div className="flex gap-x-1">
            <BsTelephone className="text-primary_1 mt-1" />
            123-456-7890
          </div>
          <div className="flex gap-x-1">
            <TfiEmail className="text-primary_1 mt-1.5" />
            elecstrong@gmail.com
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
            Sign In
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
