import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { MovieRef } from "./Firebase/firebase";
import swal from "sweet-alert";

const AddMovie = () => {
  const [from, setfrom] = useState({
    Title: "",
    year: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    try {
      setLoading(true);
      await addDoc(MovieRef, from);
      setLoading(false);
      //   swal({
      //     title: "Success Added",
      //     icon: "success",
      //     button: false,
      //     timer: 3000,
      //   });
    } catch (err) {
      console.log(err);
      setLoading(false);
      //   swal({
      //     title: err,
      //     icon: "error",
      //     button: false,
      //     timer: 3000,
      //   });
    }
  };
  return (
    <div className="">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Add movie
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={from.Title}
                    onChange={(e) =>
                      setfrom({ ...from, Title: e.target.value })
                    }
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Year
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={from.year}
                    onChange={(e) => setfrom({ ...from, year: e.target.value })}
                    className="w-full  bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    image Links
                  </label>
                  <input
                    id="message"
                    name="message"
                    value={from.image}
                    onChange={(e) =>
                      setfrom({ ...from, image: e.target.value })
                    }
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={from.description}
                    onChange={(e) =>
                      setfrom({ ...from, description: e.target.value })
                    }
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={loading}
                  onClick={addMovie}
                  className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
