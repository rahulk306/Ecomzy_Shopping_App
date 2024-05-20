import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  return (
    <div> 
      <div className = "bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>  
  );
}

export default App;
