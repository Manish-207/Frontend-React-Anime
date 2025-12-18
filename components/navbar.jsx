import React from "react";
import Desknav from "./desknav";
import Mobilenav from "./mobilenav";

const Navbar = () => {

  return (
    <div className="fixed top-0 w-full z-50 bg-[#282252] shadow-md">

      {/* Desktop Navbar */}
      <Desknav/>

      {/* Mobile Navbar */}
      
        <Mobilenav />
      
      
      
    
    </div>
  );
};

export default Navbar;
