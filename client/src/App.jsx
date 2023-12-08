import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import SellCar from "./components/sell-car/SellCar";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import CarDetails from "./components/car-details/CarDetails";
import CarEdit from "./components/car-edit/CarEdit";

import "./App.module.css";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <AuthProvider>
      <div id="main" className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Dashboard />} />
          <Route path="/cars/sell" element={<SellCar />} />
          <Route path="/details/:carId" element={<CarDetails />} />
          <Route path="/cars/:carId/edit" element={<CarEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
