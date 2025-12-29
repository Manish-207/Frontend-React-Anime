import React, { createContext, useEffect, useState } from 'react'

export const SidebarContext =createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    useEffect(() => {
    if (isSidebarOpen) {
    document.body.style.overflow = "hidden md:auto";
    document.body.style.touchAction='none'
  } else {
    document.body.style.overflow = "auto"
    document.body.style.touchAction='auto'

  }
}, [isSidebarOpen]);
 
  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};