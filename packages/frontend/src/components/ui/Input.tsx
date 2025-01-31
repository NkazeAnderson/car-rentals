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
type fileInputT = { __type: "file" };
type numberInputT = { __type: "number" };
type textAreaInputT = { __type: "textArea" };
type inputOptionsT =
  | textInputT
  | dateInputT
  | selectInputT
  | fileInputT
  | numberInputT
  | textAreaInputT;

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
      case "textArea":
        return <textarea {...registory} />;
      case "date":
        return <input type="date" {...registory} />;
      case "file":
        return <input type="file" accept=".png,.jpg,.jpeg" {...registory} />;
      case "number":
        return <input type="number" {...registory} />;
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

export function SubmitButton({ text }: { text: string }) {
  return (
    <input
      className="bg-orange-600 px-6 py-2 rounded-md text-white"
      type="submit"
      value={text}
    />
  );
}

export default Input;
