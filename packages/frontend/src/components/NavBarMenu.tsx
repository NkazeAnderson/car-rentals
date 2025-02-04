import React from "react";
import { navMenu } from "../constants";
import NavLinks from "./ui/NavLinks";

function NavBarMenu() {
  return (
    <div className="flex items-center space-x-2 flex-col lg:flex-row bg-white z-50">
      {navMenu.map((item) => (
        <NavLinks key={item.text} path={item.path} text={item.text} />
      ))}
    </div>
  );
}

export default NavBarMenu;
