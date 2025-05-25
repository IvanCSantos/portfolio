import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ url, children, ...props }) => {
  return (
    <a href={url} {...props}>
      {children}
    </a>
  );
};
