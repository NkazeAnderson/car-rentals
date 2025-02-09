import React from "react";
import { motion } from "motion/react";

function ImageGallery({
  children,
  images,
  animate,
}: {
  images: any[];
  animate?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden ">
      {images.map((item, index) => (
        <motion.img
          className="object-cover w-full h-full"
          initial={{ scale: 1 }}
          animate={
            animate && {
              scale: 1.5,
              transition: { duration: 5 },
            }
          }
          key={index}
          src={item}
          alt=""
        />
      ))}

      <div className="absolute top-0 left-0 w-full h-full">
        {children || null}
      </div>
    </div>
  );
}

export default ImageGallery;
