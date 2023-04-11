import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { db } from "./Firebase/firebase";
import { MovieRef } from "./Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from "./Reviews";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([
    {
      title: "",
      year: "",
      image: "",
      description: "",
      rating: 0,
      rated: 0,
    },
  ]);
  //   window.alert(id);

  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);

    const docdata = doc(db, "movie", id);

    const data = await getDoc(docdata, MovieRef);
    //   const data = await getDoc(MovieRef, id);
    setData(data.data());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-between w-full p-4 mt-4 ">
      {loading ? (
        <div className="flex items-center justify-center w-full h-96">
          {" "}
          <ThreeCircles height={25} color="white" />
        </div>
      ) : (
        <>
          <img className="pl-32 h-96" src={data.image} alt="" />

          <div className="w-1/2 mr-64 ">
            <h1 className="text-2xl font-bold text-gray-400">
              {data.title} <span className="text-xl">({data.year})</span>{" "}
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />
            <p className="mt-3">{data.description}</p>
            <Reviews id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
