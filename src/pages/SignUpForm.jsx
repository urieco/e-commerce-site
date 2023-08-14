import { useState } from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

import { FormField } from "../components/FormField";

import { addUser } from "../api/connectToCloud";
import { BackToHomeBtn } from "../components/BackToHomeBtn";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    if (value !== sanitizedValue) {
      setErrorMessage(`Invalid inputs for ${name}`);
      return;
    }
    setErrorMessage("");
    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
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
    if (obj.password !== obj.passwordConfirm) {
      return "Password fields do not match";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage) return;
    const invalidKey = isInvalid(formData);
    setErrorMessage(invalidKey);
    if (invalidKey) return;
    const extractData = (obj) => {
      const { username, email, password } = obj;
      return {
        username,
        email,
        password: password.toString(),
      };
    };
    const exportData = extractData(formData);
    addUser(exportData, setErrorMessage);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-r from-red-100 to-blue-100 grid overflow-hidden">
      <BackToHomeBtn/>
      <div className="popUp text-secondary_1 w-screen sm:w-max h-screen sm:h-auto items-center justify-self-center shadow-lg mt-20 sm:mt-36 mb-48">
        <div className="text-gray-200 bg-primary_1 text-center text-3xl font-bold px-16 py-4 ">
          REGISTRATION
        </div>
        <form
          method="post"
          className="flex flex-col px-7 border-[rgba(#676F54,0.8)] border-x-2"
          onSubmit={handleSubmit}
        >
          <FormField
            title="Username"
            id="username"
            onChangeFunc={handleChange}
          />

          <FormField
            title="Email"
            type="email"
            id="email"
            onChangeFunc={handleChange}
          />

          <FormField
            title="Password"
            type="password"
            id="password"
            onChangeFunc={handleChange}
          />

          <FormField
            title="Confirm Password"
            type="password"
            id="passwordConfirm"
            onChangeFunc={handleChange}
          />

          <label className="group relative">
            <input
              type="submit"
              name="registerBtn"
              id="registerBtn"
              value="REGISTER"
              className="text-gray-200 bg-primary_1 group-hover:bg-red-500 text-2xl font-semibold w-[105vw] sm:w-[22.75rem] absolute top-3 -right-11 py-3 rounded-md mt-4 cursor-pointer z-10 select-none"
            />
            <div className="relative bottom-[-4.5rem] left-[-2.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] z-0"></div>

            <div className="relative bottom-[-3.3rem] right-10 sm:right-[-19.3rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] rotate-180 z-0"></div>
          </label>
        </form>
        <div className="text-primary_1 relative top-14 px-7">
          {errorMessage}
        </div>
        <div className="text-center flex flex-col px-7 pt-[4.5rem] pb-8 border-x-2">
          Already Have An Account ?
          <Link to="/login" className="text-primary_1 underline">
            {" "}
            Log into your account!
          </Link>
        </div>
      </div>
    </div>
  );
}

export { SignUpForm };
