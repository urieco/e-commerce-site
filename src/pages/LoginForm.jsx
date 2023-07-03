import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-r from-red-100 to-blue-100 grid">
      <div className="text-secondary_1 w-max shadow-lg m-auto backdrop-blur-lg">
        <div className="text-gray-200 bg-primary_1 text-center text-3xl font-bold px-10 py-4 ">
          LOGIN
        </div>
        <form
          className="px-7 border-[rgba(#676F54,0.8)] border-x-2"
          method="post"
        >
          <label className="flex gap-2 pt-7">
            <AiOutlineUser className="mt-2" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username..."
              className="appearance-none hover:bg-gray-200  w-full p-[0.2em] pl-1 rounded-lg border border-secondary_1"
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
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <div className="relative bottom-[0.4rem] left-[-2.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] z-0"></div>

            <div className="relative bottom-[1.5rem] right-[-16.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] rotate-180 z-0"></div>
          </label>
        </form>
        <div className="px-7 pt-24 pb-4 border-x-2 border-b-2">
          A New Face?
          <a href="" className="text-primary_1 underline">
            <Link to="/registration">
              {" "}
              Sign Up Now!
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export { LoginForm };
