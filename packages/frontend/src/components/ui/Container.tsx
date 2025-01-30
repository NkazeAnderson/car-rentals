import React from "react";

function Container({
  children,
  fullHeight,
}: {
  children: React.ReactNode;
  fullHeight?: boolean;
}) {
  return <div className={`px-[10%] ${fullHeight && "h-full"}`}>{children}</div>;
}

export default Container;
