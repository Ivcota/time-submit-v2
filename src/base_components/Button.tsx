import React from "react";

interface IButtonInterface
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: any;

  text?: string;
}

const CTAButton = ({ children, icon, ...props }: IButtonInterface) => {
  return (
    <button
      className="mt-8 flex w-52 min-w-full flex-row items-center justify-center gap-2 rounded-lg bg-sky-600 py-4 text-base text-white hover:bg-sky-700 md:mt-12 md:min-w-max "
      {...props}
    >
      {children} {icon}
    </button>
  );
};

export { CTAButton };
