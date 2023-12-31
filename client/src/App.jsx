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

import Contacts from "./components/contacts/Contacts";
import AuthGuard from "./components/guards/AuthGuard";
import MyListings from "./components/my-listings/MyListings";

import "./App.module.css";

function App() {
  return (
    <AuthProvider>
      <div id="main" className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:carId" element={<CarDetails />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route element={<AuthGuard />}>
            <Route path="/cars/sell" element={<SellCar />} />
            <Route path="/cars/:carId/edit" element={<CarEdit />} />
            <Route path="/my-listings" element={<MyListings />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
