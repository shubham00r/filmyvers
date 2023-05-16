import { useState } from "react";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { addDoc } from "firebase/firestore";
import { usersRef } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "./Firebase/firebase";

const auth = getAuth(app);

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpsent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestOtp = () => {
    setLoading(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // Toast("otp sent");
        setOtpSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = () => {
    try {
      setLoading(true);
      window.confirmationResult.confirm(OTP).then((result) => {
        uploadData();
      });
      navigate("/login");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadData = async () => {
    try {
      const salt = bcrypt.genSalt(10);
      var hash = bcrypt.hashSync(form.password, salt);
      await addDoc(usersRef, {
        name: form.name,
        password: hash,
        mobile: form.mobile,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mt-20">
        <h1 className="text-lg font-bold text-white">Sign up</h1>
        {otpsent ? (
          <>
            {" "}
            <div className="relative ">
              <label
                htmlFor="message"
                className="flex text-sm leading-7 text-gray-300"
              >
                OTP
              </label>
              <input
                id="message"
                name="message"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                className="h-10 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none w-[440px] focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button
              onClick={verifyOTP}
              disabled={loading}
              className="flex px-8 py-2 mx-auto mt-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              {loading ? <TailSpin height={25} color="white" /> : "Confirm otp"}
            </button>
          </>
        ) : (
          <>
            <div className="w-1/3 p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-300"
                >
                  Name
                </label>
                <input
                  id="message"
                  name="message"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-10 px-3 py-1 text-base leading-6  text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none w-[440px] focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-300"
                >
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
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-300"
                >
                  Password
                </label>
                <input
                  id="message"
                  name="message"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full h-10 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="w-full p-2">
                <button
                  disabled={loading}
                  onClick={requestOtp}
                  className="flex px-8 py-2 mx-auto text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  {loading ? (
                    <TailSpin height={25} color="white" />
                  ) : (
                    "Request OTP"
                  )}
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account{" "}
                  <Link to={"/login"}>
                    <span className="text-blue-600">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Signup;
