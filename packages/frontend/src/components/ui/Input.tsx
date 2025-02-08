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
  error,
  placeholder,
}: {
  options: inputOptionsT;
  registory: UseFormRegisterReturn;
  lableText?: string;
  error?: string;
  placeholder?: string;
}) {
  function InputByType() {
    switch (options.__type) {
      case "text":
        return <input type="text" {...registory} placeholder={placeholder} />;
      case "textArea":
        return <textarea {...registory} placeholder={placeholder} />;
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
              <option key={item} value={item}>
                {item}
              </option>
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
          className={`  font-semibold ${
            !error ? "text-slate-700" : "text-red-600"
          }`}
          htmlFor={registory.name}
        >
          {lableText}{" "}
          {registory.required && <span className="text-red-600">*</span>}
        </label>
      )}
      <InputByType />
      <p className="text-red-600 font-light">{error}</p>
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
