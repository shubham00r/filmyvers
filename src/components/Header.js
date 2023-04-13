import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";
const Header = () => {
  const useAppssate = useContext(Appstate);
  return (
    <div className="sticky top-0 z-10 flex justify-between p-3 text-3xl font-bold text-red-500 bg-black border-b-2 border-gray-500 header">
      <Link to={"/"}>
        <span>
          Filmy
          <span className="text-white"> verse</span>
        </span>{" "}
      </Link>
      {useAppssate.login ? (
        <Link to={"/addmovie"}>
          <h1 className="flex items-center text-lg cursor-pointer">
            <Button>
              {" "}
              <span>Add new</span>{" "}
            </Button>
          </h1>
        </Link>
      ) : (
        <Link to={"/login"}>
          <h1 className="flex items-center rounded-md text-lg bg-green-500 cursor-pointer">
            <Button>
              {" "}
              <span>Login</span>{" "}
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
