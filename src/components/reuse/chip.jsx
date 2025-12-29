import React from "react";

const Chip = ({ 
  label, 
  icon,        // optional JSX icon or emoji
  color = "bg-gray-600",   // background color
  textColor = "text-neutral-500", // text color
  hollow = true, // hollow mode toggle
  onclick,          
                
}) => {
  // Determine classes based on hollow
  const baseClasses = `inline-flex items-center gap-2 px-2 py-1 m-1 rounded-md text-sm font-medium transition-all duration-200`;
  const bgClasses = hollow ? "bg-transparent" : color;
  const borderClasses = hollow ? `${color} border-1 border-current` : "` border-1 border-current`";
  const textClasses = textColor;

  return (
    <div className={`${baseClasses} ${bgClasses} ${borderClasses} ${textClasses} hover:opacity-90  hover:cursor-pointer hover:text-indigo-400`}>
      {icon && <span className="text-xs md:text-xl">{icon}</span>}
      <span>{label}</span>
      
    </div>
  );
};

export default Chip;
