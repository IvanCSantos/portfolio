import React from "react";
export const Button = ({ onClick, children }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
};
