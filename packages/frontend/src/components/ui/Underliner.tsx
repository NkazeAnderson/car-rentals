import React from "react";

function Underliner({
  thick,
  fullLength,
}: {
  thick?: boolean;
  fullLength?: boolean;
}) {
  return (
    <div className=" flex justify-center w-full">
      <div
        className={` ${fullLength ? "w-full" : "w-1/6"} ${
          thick ? "border-b-2" : "border-b"
        }  border-orange-600`}
      ></div>
    </div>
  );
}

export default Underliner;
