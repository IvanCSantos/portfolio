import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  url,
  children,
  newTab = false,
  ...props
}) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
