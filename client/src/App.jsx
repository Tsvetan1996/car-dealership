import { Routes, Route } from "react-router-dom";
import "./App.module.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import SellCar from "./components/sell-car/SellCar";

function App() {
  return (
    <div id="main" className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Dashboard />} />
        <Route path="/cars/sell" element={<SellCar />} />
      </Routes>
    </div>
  );
}

export default App;
