import React from "react";
import { cn } from "../utils";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={cn("bg-normal px-5 py-1 text-white rounded-sm", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
