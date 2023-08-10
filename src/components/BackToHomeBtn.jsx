import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom";

function BackToHomeBtn () {
  return (
    <>
      <button className="bg-primary_2 text-gray-200 flex absolute top-6 py-2 border border-black rounded-lg -translate-x-40 hover:-translate-x-2 transition-transform duration-300">
        <Link to="/" className="flex">
          <span className="px-2">Back to Homepage</span>
          <BsArrowLeft className="text-xl mx-2 mt-1"/>
        </Link>
      </button>
    </>
  );
}

export { BackToHomeBtn };