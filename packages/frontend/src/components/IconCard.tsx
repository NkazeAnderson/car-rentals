import React from "react";
import { motion } from "motion/react";

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
    <motion.div
      className={`flex flex-col space-y-2 ${
        justify === "left"
          ? "lg:items-start"
          : justify === "right"
          ? "lg:items-end"
          : "lg:items-center"
      } ${white ? "text-white" : "text-black"} items-center`}
      initial={{
        translateX: justify === "right" ? -35 : justify === "left" ? 35 : 0,
        translateY: justify === "center" ? 20 : 0,
        opacity: 0,
      }}
      whileInView={{
        translateX: 0,
        translateY: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeIn" },
      }}
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
    </motion.div>
  );
}

export default IconCard;
