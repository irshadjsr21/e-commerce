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
  ...rest
}) => {
  return (
    <div className={`flex w-full flex-col ${className ?? ""}`}>
      <label className="mb-[7px] text-base font-normal" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="rounded-md border-[1px] border-solid border-stroke px-4 py-[14px] text-base"
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        {...rest}
      />
    </div>
  );
};
