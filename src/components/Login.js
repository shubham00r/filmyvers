import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <h1 className="text-lg font-bold text-white">Login</h1>
      <div className="w-1/3 p-2">
        <div className="relative">
          <label htmlFor="message" className="text-sm leading-7 text-gray-300">
            Mobile.no
          </label>
          <input
            type={"number"}
            id="message"
            name="message"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="h-10 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none w-[440px] focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="text-sm leading-7 text-gray-300">
            Password
          </label>
          <input
            id="message"
            name="message"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full h-10 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="w-full p-2">
          <button
            disabled={loading}
            className="flex px-8 py-2 mx-auto text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            {loading ? <TailSpin height={25} color="white" /> : "Login"}
          </button>
        </div>
        <div className="text-center">
          <p>
            Do not have account{" "}
            <Link to={"/sighup"}>
              <span className="text-blue-600">Sigh up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
