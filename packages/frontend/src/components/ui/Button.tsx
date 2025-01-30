import React from "react";

function Button({ text, fullwidth }: { text: string; fullwidth?: boolean }) {
  return (
    <button
      className="bg-orange-600 text-white px-7 py-3 rounded-md font-medium"
      style={{ width: fullwidth ? "100%" : undefined }}
    >
      {text}
    </button>
  );
}

export default Button;
