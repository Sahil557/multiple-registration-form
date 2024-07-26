import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-custom px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-[#3b71ca] w-custom ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
