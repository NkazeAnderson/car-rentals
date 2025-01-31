import React from "react";

function ImageGallery({
  children,
  images,
}: {
  children?: React.ReactNode;
  images: string[];
}) {
  return (
    <div className="w-full h-full relative">
      <img
        className="object-cover w-full h-full"
        key={images[0]}
        src={images[0]}
        alt=""
      />

      <div className="absolute top-0 left-0 w-full h-full  z-20">
        {children || null}
      </div>
    </div>
  );
}

export default ImageGallery;
