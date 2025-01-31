import React from "react";
import Logo from "./ui/Logo";
import { Link } from "react-router";
import { contactInfo } from "../constants";

function Footer() {
  return (
    <div className="py-14 bg-black text-slate-300 px-5">
      <div className="flex justify-between text-[12px] space-x-4">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1 border-slate-300 border-t p-2">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex-1 border-slate-300 border-t p-2">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex-1 border-slate-300 border-t p-2 font-semibold">
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.address}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
