import React from "react";

function NumberCount({
  valueSize,
  value,
  description,
}: {
  valueSize: number;
  value: number;
  description: string;
}) {
  return (
    <div className="text-white text-center">
      <p className="font-bold" style={{ fontSize: valueSize }}>
        {value} +
      </p>
      <p className="text-center text-[14px] md:text-[16px] text-slate-300">
        {description}
      </p>
    </div>
  );
}

export default NumberCount;
