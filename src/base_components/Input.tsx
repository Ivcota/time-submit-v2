import React from "react";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
  label?: string;
  helperText?: string;
}

const Input = ({
  isError,
  label,
  helperText,
  className,
  ...props
}: IInputProps) => {
  return (
    <div className={`flex flex-col items-start ${className}`} {...props}>
      {!!label && <label className="text-sm text-gray-700">{label}</label>}
      <input
        className={`mt-2 rounded-lg border border-gray-300 py-2 px-3 outline-none  transition-all duration-100 placeholder:text-gray-500 focus-within:ring ${
          isError ? "ring ring-red-400" : "ring-sky-300"
        } `}
        placeholder="January 2023"
      />
      {!!helperText && (
        <p className="mt-2 text-sm text-gray-600"> {helperText} </p>
      )}
    </div>
  );
};

export { Input };
