import { FormField } from "../components/FormField";

function SignUpForm() {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-r from-red-100 to-blue-100 grid">
      <div className="text-secondary_1 w-max items-start justify-self-center shadow-lg mt-36 mb-48">
        <div className="text-gray-200 bg-primary_1 text-center text-3xl font-bold px-16 py-4 ">
          REGISTRATION
        </div>
        <form
          className="flex flex-col px-7 border-[rgba(#676F54,0.8)] border-x-2"
          method="post"
        >
          <FormField
            title="Username"
            id="username"
          />

          <FormField
            title="Email"
            type="email"
            id="email"
          />           

          <FormField
            title="Password"
            type="password"
            id="password"
          />

          <FormField
            title="Confirm Password"
            type="password"
            id="passwordConfirm"
          />

          <label className="group absolute bottom-[17rem]">
            <input
              type="submit"
              name="registerBtn"
              id="registerBtn"
              value="REGISTER"
              className="text-gray-200 bg-primary_1 group-hover:bg-red-500 text-2xl font-semibold w-[22.75rem] relative -left-11 py-3 rounded-md mt-4 cursor-pointer active:scale-[101%] z-10 select-none"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <div className="relative bottom-[0.6rem] left-[-2.5rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] z-0"></div>

            <div className="relative bottom-[2rem] right-[-19.3rem] w-0 h-0 border-solid border-t-transparent border-b-transparent border-y-[10px] border-r-red-800 group-hover:border-r-red-600 border-r-[10px] rotate-180 z-0"></div>
          </label>
        </form>
        <div className="flex flex-col px-7 pt-24 border-x-2">
          Already Have An Account ?
          <a href="" className="text-primary_1 underline">
            {" "}
            Log into your account!
          </a>
        </div>
      </div>
    </div>
  );
}

export { SignUpForm };
