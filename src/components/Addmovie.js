import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { MovieRef } from "./Firebase/firebase";
// import swal from "sweet-alert";
import toast, { Toaster } from "react-hot-toast";
import { Appstate } from "../App";

const AddMovie = () => {
  //  const  useAppssate = useContext(Appstate)
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rated: 0,
    rating: 0,
  });
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    try {
      setLoading(true);
      await addDoc(MovieRef, form);
      setLoading(false);
      setForm({ title: "", year: "", description: "", image: "" });
      toast("Added Success");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast(err.message);
    }
  };

  return (
    <div className="">
      <section className="relative text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col w-full mb-4 text-center">
            <h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font">
              Add movie
            </h1>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-300"
                  >
                    Year
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-300"
                  >
                    image Links
                  </label>
                  <input
                    id="message"
                    name="message"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    className="w-full h-10 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-300"
                  >
                    description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  disabled={loading}
                  onClick={addMovie}
                  className="flex px-8 py-2 mx-auto text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  {loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
