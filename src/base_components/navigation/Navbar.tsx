import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
import NavLink from "./NavLink";
import { Container } from "../Container";

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
        className="sticky top-0 z-50 bg-white shadow"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Container className="">
          <div className="flex items-center justify-between py-7 shadow-sm md:justify-start ">
            <h1 className="text-lg font-bold">Time Submit</h1>

            <div className="ml-3 hidden md:flex ">
              {navItems.map((item) => (
                <NavLink key={item.text} isLighter href={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>

            <Collapsible.Trigger className="block pb-6 md:hidden" asChild>
              <MenuIcon isOpen={isOpen} />
            </Collapsible.Trigger>
          </div>

          <Collapsible.Content className="block md:hidden">
            <div className="pb-6">
              {navItems.map((item) => (
                <NavLink key={item.text} href={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </Collapsible.Content>
        </Container>
      </Collapsible.Root>
    </>
  );
};

export { Navbar };
