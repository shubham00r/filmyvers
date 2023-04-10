import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-between p-3 text-3xl font-bold text-red-500 bg-black border-b-2 border-gray-500 header">
      <Link to={"/"}>
        <span>
          Filmy
          <span className="text-white"> verse</span>
        </span>{" "}
      </Link>
      <Link to={"/addmovie"}>
        <h1 className="flex items-center text-lg cursor-pointer">
          <Button>
            {" "}
            <span>Add new</span>{" "}
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
