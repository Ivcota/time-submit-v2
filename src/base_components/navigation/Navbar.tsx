import React, { useState } from "react";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="flex justify-between px-4 py-7 shadow-sm">
      <h1 className="text-lg font-bold">Time Submit</h1>
      <MenuIcon onClick={handleOnClick} isOpen={isOpen} />
    </div>
  );
};

export { Navbar };
