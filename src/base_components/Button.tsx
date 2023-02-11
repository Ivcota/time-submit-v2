import Link from "next/link";
import React from "react";

interface IButtonInterface
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: any;
  text?: string;
  isLink?: boolean;
  to?: string;
}

const CTAButton = ({
  children,
  icon,
  isLink,
  to,
  ...props
}: IButtonInterface) => {
  const css =
    "mt-8 flex w-52 min-w-full flex-row items-center justify-center gap-2 rounded-lg bg-sky-600 py-4 text-base text-white hover:bg-sky-700 md:mt-12 md:min-w-max";

  if (isLink) {
    if (!to) {
      throw new Error("Link requires to");
    }

    return (
      <Link href={to} className={css}>
        {children} {icon}
      </Link>
    );
  }

  return (
    <button className={css} {...props}>
      {children} {icon}
    </button>
  );
};

export { CTAButton };
