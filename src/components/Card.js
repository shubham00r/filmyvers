import React, { useState } from "react";
import Reactstars from "react-stars";

const Card = () => {
  const [data, setdata] = useState([
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 3,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "1945",
      Rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3  mt-2">
      {data.map((e, i) => (
        <div
          className="Card shadow-lg  hover:-translate-y-2 pl-2 cursor-pointer mt-6 transition-all duration-500"
          key={i}
        >
          <img className=" h-72 p-2 " src={e.img} alt="" />
          <h1>
            <span className="text-lime-500">Name:</span> {e.name}
          </h1>
          <h1 className="flex items-center">
            {" "}
            <span className="text-lime-500">Rating:</span>
            <Reactstars size={20} half={true} value={e.Rating} edit={false} />
          </h1>
          <h1>
            {" "}
            <span className="text-lime-500">year:</span> {e.year}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
