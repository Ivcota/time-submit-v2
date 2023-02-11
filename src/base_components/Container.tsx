import React from "react";

type IContainer = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Container = ({ className, ...props }: IContainer) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export { Container };
