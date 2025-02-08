import React from "react";

function ShadowCard({ children }: { children: React.ReactNode }) {
  return <div className=" customShadow rounded-md p-4">{children}</div>;
}

export default ShadowCard;
