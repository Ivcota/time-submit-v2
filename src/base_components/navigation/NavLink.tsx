import type { LinkProps } from "next/link";
import Link from "next/link";

interface INavLink extends LinkProps {
  children?: React.ReactNode;
  isLighter?: boolean;
}

const NavLink = ({ ...props }: INavLink) => {
  return (
    <Link {...props}>
      <div
        className={`py-3 px-4 text-base font-semibold ${
          props.isLighter ? "text-gray-600" : "text-gray-900"
        } hover:bg-gray-50`}
      >
        {props?.children}
      </div>
    </Link>
  );
};

export default NavLink;
