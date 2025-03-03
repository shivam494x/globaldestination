import React from "react";

interface DividerProps {
  color?: string; // Optional prop for background color
}

const Divider: React.FC<DividerProps> = ({ color = "bg-blue-500" }) => {
  return (
    <div className={`h-[1px] rounded-full w-3/4 mx-auto ${color} my-3`}></div>
  );
};

export default Divider;
