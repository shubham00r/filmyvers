import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Addmovie from "./components/Addmovie";
import toast, { Toaster } from "react-hot-toast";
import Detail from "./components/Detail";
import Reviews from "./components/Reviews";
function App() {
  return (
    <div className="relative App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/addmovie" exact element={<Addmovie />} />
        <Route path="/detail/:id" exact element={<Detail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
