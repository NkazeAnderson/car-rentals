import React from "react";

function Button({
  text,
  fullwidth,
  pending,
  action,
}: {
  text: string;
  fullwidth?: boolean;
  pending?: boolean;
  action?: VoidFunction;
}) {
  return (
    <button
      className={` text-white px-7 py-3 rounded-md font-medium ${
        !pending ? "bg-orange-600" : "bg-gray-600"
      }`}
      style={{ width: fullwidth ? "100%" : undefined }}
      disabled={pending}
      onClick={() => {
        action && action();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
