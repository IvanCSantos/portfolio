import React from "react";

interface CardProps {
  text: string;
}

export const Tag: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="border rounded-md  w-auto p-1 text-secondary">{text}</div>
  );
};
