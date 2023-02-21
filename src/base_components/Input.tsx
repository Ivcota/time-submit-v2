import React from "react";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string;
  label?: string;
  helperText?: string;
  register?: any;
}

/**
 * Custom Input Element
 * @date 2/20/2023 - 8:48:58 PM
 *
 * @param {IInputProps} {
  errorMessage,
  label,
  helperText,
  className,
  placeholder,
  type,
  register,
  ...props
}
 * @returns {JSX.Element}
 */
const Input = ({
  errorMessage,
  label,
  helperText,
  className,
  placeholder,
  type,
  register,
  ...props
}: IInputProps): JSX.Element => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {!!label && <label className="text-sm text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`mt-2 rounded-lg border border-gray-300 py-2 px-3 outline-none  transition-all duration-100 placeholder:text-gray-500 focus-within:ring ${
          !!errorMessage ? "ring ring-red-400" : "ring-sky-300"
        } `}
        {...register}
        {...props}
      />
      {!!helperText && (
        <p className="mt-2 text-sm text-gray-600"> {helperText} </p>
      )}
      {!!errorMessage && (
        <p className="mt-2 text-sm text-red-600"> {errorMessage} </p>
      )}
    </div>
  );
};

export { Input };
