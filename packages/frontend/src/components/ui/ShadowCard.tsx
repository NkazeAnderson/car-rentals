import React from "react";

function ShadowCard({ children }: { children: React.ReactNode }) {
  return <div className=" shadow-xl sha rounded-md p-4">{children}</div>;
}

export default ShadowCard;
