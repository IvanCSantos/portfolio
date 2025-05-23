import React, { type ReactElement } from "react";

const textVariants = {
  default: "text-xl",
  title1: "text-3xl font-[--font-primary]",
  title2: "text-2xl font-[--font-primary]",
  title3: "text-xl font-[--font-primary]",
  paragraph: "text-xl font-[--font-secondary]",
  muted: "text-xl font-[--font-secondary] text-(--text-muted)",
};

export const Text = ({
  as = "span",
  variant = "default",
  className,
  children,
  ...props
}: {
  as: string;
  variant: "default" | "title1" | "title2" | "title3" | "paragraph" | "muted";
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
