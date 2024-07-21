import { InputHTMLAttributes } from "react";

export type InputType = "email" | "password" | "text";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: InputType;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  name,
  placeholder,
  onValueChange,
  value,
  type,
  className,
  error,
  ...rest
}) => {
  return (
    <div className={`flex w-full flex-col ${className ?? ""}`}>
      <label
        className="mb-[7px] cursor-pointer text-base font-normal"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        className={`${error ? "border-red-500" : "border-stroke"} rounded-md border-[1px] border-solid px-4 py-[14px] text-base`}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
