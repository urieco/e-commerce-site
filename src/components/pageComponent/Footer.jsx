import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="text-center sm:text-justify text-gray-200 bg-primary_2 pt-10">
        <div className="grid sm:grid-flow-col gap-8 lg:gap-28 mx-[10vw] pb-10">
          <div>
            <div className=" text-primary_1 text-lg font-extralight sm:text-start pb-2 border-t-2 sm:border-t-transparent sm:border-b-2 border-red-600">
              CONTACT
            </div>
            <div className="grid grid-flow-row w-full gap-2 sm:justify-start mt-2">
              <span>123-456-7890</span>
              <span>microware@gmail.com</span>
              <span>1234 Sunshine Road</span>
              <span className="flex justify-center gap-2 pt-2">
                <AiOutlineTwitter className="text-primary_1 w-8 h-8 relative -top-1 cursor-pointer shadow-sm" />
                <FaFacebookF className="text-primary_1 w-6 h-6 cursor-pointer shadow-sm" />
                <AiOutlineInstagram className="text-primary_1 w-8 h-8 relative -top-1 cursor-pointer shadow-sm" />
              </span>
            </div>
          </div>
          <div>
            <div className="text-primary_1 text-lg font-extralight pb-2 border-t-2 sm:border-t-transparent sm:border-b-2 border-red-600">
              SERVICE HOURS
            </div>
            <div className="grid grid-flow-row gap-2 items-center mt-2">
              <span>
                <b>Store Hours</b>: 10 A.M - 10 P.M
              </span>
              <span>
                <b>Online Store</b>: 24-hour Support
              </span>
            </div>
          </div>
          <div>
            <div className="text-primary_1 text-lg font-extralight pb-2 border-t-2 sm:border-t-transparent sm:border-b-2 border-red-600">
              HELP
            </div>
            <div className="grid grid-flow-row gap-2 mt-2">
              <span className="text-red-600 cursor-pointer">FAQ</span>
              <span className="text-red-600 cursor-pointer">Delivery</span>
              <span className="text-red-600 cursor-pointer">Warranty</span>
              <span className="text-red-600 cursor-pointer">
                Scheddule a Repair
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="text-gray-400 flex py-1 mx-[10vw]">
            <AiOutlineCopyrightCircle className="relative top-1" />
            <span className="ml-1">
              2023 Microware, Inc. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
