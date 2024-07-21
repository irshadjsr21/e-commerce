export interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  className,
  disabled,
}) => {
  return (
    <div className={`flex cursor-pointer items-center ${className ?? ""}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => !disabled && onChange(!checked)}
        className="hidden"
        disabled={disabled}
      />
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} mr-3 h-[24px] w-[24px] rounded`}
        style={{
          background: checked
            ? "black url('/assets/icons/check.svg') no-repeat center"
            : "#cccccc",
        }}
        onClick={() => !disabled && onChange(!checked)}
      ></div>
      <label htmlFor={id} className={disabled ? 'cursor-not-allowed' : 'cursor-pointer'}>
        {name}
      </label>
    </div>
  );
};
