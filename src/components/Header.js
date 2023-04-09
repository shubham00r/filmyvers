import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header sticky top-0 bg-black z-10 text-3xl text-red-500 flex justify-between font-bold p-3  border-b-2 border-gray-500">
      <span>
        Filmy
        <span className="text-white"> verse</span>
      </span>{" "}
      <Link to={"/Addmovie"}>
        <h1 className="text-lg flex cursor-pointer items-center">
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
