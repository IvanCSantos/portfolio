import React, { type ReactElement } from "react";

const textVariants = {
  default: "text-xl",
  title1: "text-3xl",
  title2: "text-2xl",
  title3: "text-xl",
  paragraph: "h-16",
  muted: "text-xl",
  siteTitle: "text-[4rem]",
  listItem: "text-[1rem]",
};

export const Text = ({
  as = "span",
  variant = "default",
  className,
  children,
  ...props
}: {
  as: string;
  variant:
    | "default"
    | "title1"
    | "title2"
    | "title3"
    | "paragraph"
    | "muted"
    | "siteTitle"
    | "listItem";
  children: string;
  className?: string;
}) => {
  return React.createElement(
    as,
    {
      className: `${textVariants[variant]} ${className ?? ""}`,
      ...props,
    },
    children
  );
};
