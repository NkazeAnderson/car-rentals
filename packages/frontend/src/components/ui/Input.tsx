import React from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
type textInputT = { __type: "text" };
type dateInputT = { __type: "date" };
type selectInputT = { __type: "select"; options: string[] };
type inputOptionsT = textInputT | dateInputT | selectInputT;

function Input({
  lableText,
  options,
  registory,
}: {
  options: inputOptionsT;
  registory: UseFormRegisterReturn;
  lableText?: string;
}) {
  function InputByType() {
    switch (options.__type) {
      case "text":
        return <input type="text" {...registory} />;
      case "date":
        return <input type="date" {...registory} />;
      case "select":
        return (
          <select {...registory}>
            {options.options.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        );

      default:
        return null;
    }
  }
  return (
    <div className="space-y-2">
      {lableText && (
        <label
          className=" text-slate-700 font-semibold "
          htmlFor={registory.name}
        >
          {lableText}{" "}
          {registory.required && <span className="text-red-600">*</span>}
        </label>
      )}
      <InputByType />
    </div>
  );
}

export default Input;
