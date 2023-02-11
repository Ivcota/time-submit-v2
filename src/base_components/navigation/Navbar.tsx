import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
import NavLink from "./NavLink";

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Form",
    href: "/form",
  },
] as { href: string; text: string }[];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Collapsible.Root
        className="sticky top-0 z-50 bg-white shadow-lg"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="flex justify-between px-4 py-7 shadow-sm ">
          <h1 className="text-lg font-bold">Time Submit</h1>
          <Collapsible.Trigger asChild>
            <MenuIcon isOpen={isOpen} />
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content className="pb-6">
          {navItems.map((item) => (
            <NavLink key={item.text} href={item.href}>
              {item.text}
            </NavLink>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
};

export { Navbar };
