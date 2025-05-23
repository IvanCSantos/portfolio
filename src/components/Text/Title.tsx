import React from "react";

export const Title = ({
  content,
  type,
  uppercase,
  className,
}: {
  content: string;
  type: "h1" | "h2" | "h3";
  uppercase?: boolean;
  className?: string;
}) => {
  const text = uppercase ? content.toUpperCase() : content;

  if (type === "h1") return <h1 className={`${className}`}>{text}</h1>;
  if (type === "h2") return <h2 className={`${className}`}>{text}</h2>;
  if (type === "h3") return <h3 className={`${className}`}>{text}</h3>;
  return <h1>{content}</h1>;
};
