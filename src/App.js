import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="  mt-[90px] mb-auto max-w-[1030px] mx-auto sm:px-6 lg:px-8 ">
      <LandingPage></LandingPage>
      <Products></Products>
      <About></About>
      <Footer />
    </div>
  );
}

export default App;
