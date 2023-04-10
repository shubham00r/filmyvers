import { getDocs } from "firebase/firestore";
import { MovieRef } from "./Firebase/firebase";
import React, { useEffect, useState } from "react";
import Reactstars from "react-stars";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading ] = useState(true)

  useEffect(() => {
    async function getdata() {
      const data = await getDocs(MovieRef);
      data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      // console.log(data);
    }
    getdata();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-between p-3 mt-2">
        {data.map((e, i) => (
          <Link to={`/detail/${e.id}`}>
            <div
              className="pl-2 mt-6 transition-all duration-500 shadow-lg cursor-pointer Card hover:-translate-y-2"
              key={i}
            >
              <img className="p-2 h-60 md:h-72" src={e.image} alt="" />
              <h1>
                <span className="text-lime-500">Name:</span> {e.title}
              </h1>
              <h1 className="flex items-center">
                {" "}
                <span className="text-lime-500">Rating:</span>
                <Reactstars size={20} half={true} value={5} edit={false} />
              </h1>
              <h1>
                {" "}
                <span className="text-lime-500">year:</span> {e.year}
              </h1>
              <button className="text-zinc-50">Detail</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
