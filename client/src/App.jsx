import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/signup" element={Signup} />
        <Route path="/login" element={Login} />
      </Routes>
    </div>
  );
}

export default App;
