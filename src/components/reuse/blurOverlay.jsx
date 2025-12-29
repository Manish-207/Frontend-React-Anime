import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const Overlay = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  if (!isSidebarOpen) return null;

  return (
    <div
      onClick={closeSidebar}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden "
    ></div>
  );
};

export default Overlay;
