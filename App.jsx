import React from "react";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Main from "./components/main.jsx"
import Details from "./components/reuse/details.jsx";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AnimePage from "./pages/Anime.jsx";
import WatchPage from "./pages/watch.jsx";
const App = () => {
  return (
    <div className="pt-16 md:pt-20 bg-[#1d2028]">
       <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
             <Route path="/watch" element={<WatchPage />} />
         </Routes>
      
    </div>
  );
};

export default App;
