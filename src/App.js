import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Addmovie from "./components/Addmovie";
import toast, { Toaster } from "react-hot-toast";
import Detail from "./components/Detail";
import Reviews from "./components/Reviews";
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Appstate = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [username, setUserName] = useState("");
  return (
    <Appstate.Provider value={{ login, username, setLogin, setUserName }}>
      <div className="relative App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Card />} />
          <Route path="/addmovie" exact element={<Addmovie />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
