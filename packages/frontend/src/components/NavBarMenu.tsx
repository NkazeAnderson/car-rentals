import React from "react";
import { navMenu } from "../constants";
import NavLinks from "./ui/NavLinks";
import { userT } from "common/src/zodSchemas";

function NavBarMenu({ user }: { user?: userT }) {
  return (
    <div className="flex items-center space-x-2 flex-col lg:flex-row bg-white z-50">
      {navMenu.map((item) => {
        if (item.text.toLocaleLowerCase() === "admin" && !user?.isAdmin) {
          return <></>;
        }
        return <NavLinks key={item.text} path={item.path} text={item.text} />;
      })}
      {user && (
        <p className="italic text-gray-400 text-sm block lg:hidden py-8">
          {user?.email}
        </p>
      )}
    </div>
  );
}

export default NavBarMenu;
