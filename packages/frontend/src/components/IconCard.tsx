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
          ? "lg:items-start"
          : justify === "right"
          ? "lg:items-end"
          : "lg:items-center"
      } ${white ? "text-white" : "text-black"} items-center`}
    >
      <img className="size-[50px]" src={image} alt="" />
      <h4
        className={`font-semibold text-[18px] ${
          justify === "left"
            ? "lg:text-left"
            : justify === "right"
            ? "lg:text-right"
            : "lg:text-center"
        } text-center`}
      >
        {title}
      </h4>
      <p
        className={`${white && "text-slate-300"} ${
          justify === "left"
            ? "lg:text-left"
            : justify === "right"
            ? "lg:text-right"
            : "lg:text-center"
        } text-center`}
      >
        {body}
      </p>
    </div>
  );
}

export default IconCard;
