import { Routes, Route } from "react-router-dom";
import "./App.module.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div id="main" className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
