import React from "react";

const Detail = () => {
  return (
    <div className="flex justify-between w-full p-4 mt-4 ">
      <img
        className=" h-96"
        src="https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg"
        alt=""
      />

      <div className="w-1/2 ">
        <h1>
          Star Wars <span>(1978)</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Detail;
