import React from "react";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ url, children }) => {
  return <a href={url}>{children}</a>;
};
