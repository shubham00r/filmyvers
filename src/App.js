import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Addmovie from "./components/Addmovie";
function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/addmovie" exact element={<Addmovie />} />
      </Routes>
    </div>
  );
}

export default App;
