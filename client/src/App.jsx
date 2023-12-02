import { Routes, Route } from "react-router-dom";
import "./App.module.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import SellCar from "./components/sell-car/SellCar";
import CarDetails from "./components/car-details/CarDetails";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div id="main" className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Dashboard />} />
        <Route path="/cars/sell" element={<SellCar />} />
        <Route path="/details/:carId" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
