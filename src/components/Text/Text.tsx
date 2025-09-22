import React from "react";

const textVariants = {
  default: "",
  listItem: "list-disc",
  link: "text-base cursor-pointer underline underline-offset-2 flex gap-2 items-center",
};

export const Text = ({
  as = "span",
  variant = "default",
  className,
  children,
  ...props
}: {
  as?: string;
  variant?: "default" | "listItem" | "link";
  children: string | React.ReactNode;
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
