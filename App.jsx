import React from "react";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Main from "./components/main.jsx"
import Details from "./components/reuse/details.jsx";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AnimePage from "./pages/Anime.jsx";
import WatchPage from "./pages/watch.jsx";
import IntroPage from "./pages/Intro.jsx";
import Construction from "./pages/cunstruction.jsx";
const App = () => {
  return (
    <div className="pt-16 md:pt-20 bg-[#0e0a27]">
       <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Construction />} />
            <Route path="/anime/:malid" element={<AnimePage />} />
            <Route path="/watch/:malid" element={<WatchPage />} />
         </Routes>
      
    </div>
  );
};

export default App;
