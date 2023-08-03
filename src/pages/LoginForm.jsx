import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { login } from "../api/connectToCloud";

import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

function LoginForm() {
  const [currentAccount, setCurrentAccount] = useState("")

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    if (value !== sanitizedValue) {
      return setErrorMessage(`Invalid inputs for ${name}`);
    }
    setErrorMessage("");
    setLoginFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
  };

  const isInvalid = (obj) => {
    for (const key in obj) {
      if (
        obj[key] === "" ||
        obj[key] !== document.querySelector(`input[name="${key}"]`).value
      ) {
        return `Invalid inputs for ${key}`;
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage) return;
    const invalidKey = isInvalid(loginFormData);
    setErrorMessage(invalidKey);
    if (invalidKey) return;
    login(loginFormData, setErrorMessage, setCurrentAccount);
  };

  useEffect(() => {
    sessionStorage.setItem(
      "accountRef",
      JSON.stringify(currentAccount)
    );
  }, [currentAccount]);

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-r from-red-100 to-blue-100 grid">
      <div className="popUp text-secondary_1 w-max shadow-lg m-auto backdrop-blur-lg">
        <div className="text-gray-200 bg-primary_1 text-center text-3xl font-bold px-10 py-4 ">
          LOGIN
        </div>
        <form
          action="#"
          className="px-7 border-[rgba(#676F54,0.8)] border-x-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <label className="flex gap-2 pt-7">
            <AiOutlineUser className="mt-2" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username..."
              className="appearance-none hover:bg-gray-200  w-full p-[0.2em] pl-1 rounded-lg border border-secondary_1"
              minLength="5"
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex gap-2 pt-7">
            <AiFillLock className="mt-2" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password..."
              className="appearance-none hover:bg-gray-200 w-full p-[0.2em] pl-1 rounded-lg border border-secondary_1"
              minLength="5"
              onChange={handleChange}
              required
            />
          </label>
          <label className="group absolute">
            <input
              type="submit"
              name="loginBtn"
              id="loginBtn"
              value="LOGIN"
              className="text-gray-200 bg-primary_1 group-hover:bg-red-500 text-2xl font-semibold w-[19.75rem] relative top-2 -left-10 py-3 rounded-md mt-4 cursor-pointer active:scale-[101%] z-10 select-none"
            />
            <div className="relative bottom-[0.4rem] left-[-2.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] z-0"></div>

            <div className="relative bottom-[1.5rem] right-[-16.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] rotate-180 z-0"></div>
          </label>
        </form>
        <div className="text-primary_1 relative top-[5.5rem] px-7">
          {errorMessage}
        </div>
        <div className="px-7 pt-[6.5rem] pb-4 border-x-2 border-b-2">
          A New Face?{" "}
          <Link to="/registration" className="text-primary_1 underline">
            Sign Up Now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export { LoginForm };
