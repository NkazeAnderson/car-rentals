import React from "react";

function ImageGallery({
  children,
  images,
}: {
  children?: React.ReactNode;
  images: string[];
}) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img
        className="object-cover w-full h-full"
        key={images[0]}
        src={images[0]}
        alt=""
      />

      <div className="absolute w-full h-full top-0 left-0">
        {children || null}
      </div>
    </div>
  );
}

export default ImageGallery;
