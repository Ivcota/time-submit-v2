import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface IMenuIcon extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const MenuIcon = ({ isOpen, ...props }: IMenuIcon) => {
  return (
    <div {...props}>
      {!isOpen ? <Bars3Icon width={24} /> : <XMarkIcon width={24} />}
    </div>
  );
};

export default MenuIcon;
