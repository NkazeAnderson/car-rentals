import React from "react";

function IconCard({
  image,
  title,
  body,
  justify = "left",
  white,
}: {
  image: any;
  title: string;
  body: string;
  justify?: "center" | "left" | "right";
  white?: boolean;
}) {
  return (
    <div
      className={`flex flex-col space-y-2 ${
        justify === "left"
          ? "items-start"
          : justify === "right"
          ? "items-end"
          : "items-center"
      } ${white ? "text-white" : "text-black"}`}
    >
      <img className="size-[50px]" src={image} alt="" />
      <h4 className="font-semibold text-[18px]" style={{ textAlign: justify }}>
        {title}
      </h4>
      <p
        className={`${white && "text-slate-300"}`}
        style={{ textAlign: justify }}
      >
        {body}
      </p>
    </div>
  );
}

export default IconCard;
