import React from "react";
import { Navbar } from "../base_components";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default BaseLayout;
