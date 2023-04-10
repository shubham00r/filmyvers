import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { db } from "./Firebase/firebase";
import { MovieRef } from "./Firebase/firebase";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] =
    useState[
      {
        title: "",
        year: "",
        image: "",
        description: "",
      }
    ];
  //   window.alert(id);

  useEffect(() => {
    async function getdata() {
      const doc = doc(db, "movies", id);
      const data = await getDoc(doc);
      //   const data = await getDoc(MovieRef, id);
      setData(data.data());
    }
    getdata();
  }, []);
  return (
    <div className="flex justify-between w-full p-4 mt-4 ">
      <img
        className="pl-32 h-96"
        src="https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg"
        alt=""
      />

      <div className="w-1/2 mr-64 ">
        <h1 className="text-2xl font-bold text-gray-400">
          Star Wars <span className="text-xl">(1978)</span>{" "}
        </h1>
        <ReactStars size={20} half={true} value={5} edit={false} />
        <p className="mt-3">
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon Star Wars is an American
          epic space opera multimedia franchise created by George Lucas, which
          began with the eponymous 1977 film and quickly became a worldwide pop
          culture phenomenon
        </p>
      </div>
    </div>
  );
};

export default Detail;
