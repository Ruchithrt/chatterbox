import React from "react";
import GenderCheck from "./GenderCheck.jsx";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          SignUp <span className=" text-gray-700"> ChatterBox</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-zinc-600">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-zinc-600">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-zinc-600">
                Password
              </span>
            </label>
            <input
              type="Password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-zinc-600">
                Confirm Password
              </span>
            </label>
            <input
              type="Password"
              placeholder="confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheck />

          <a
            href="#"
            className="text-sm hover:underline  text-zinc-600 hover:text-blue-500 mt-3 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
