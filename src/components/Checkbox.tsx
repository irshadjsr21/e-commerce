export interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={`flex cursor-pointer items-center ${className ?? ""}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(!checked)}
        className="hidden"
      />
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className="mr-3 h-[24px] w-[24px] rounded"
        style={{
          background: checked
            ? "black url('/assets/icons/check.svg') no-repeat center"
            : "#cccccc",
        }}
        onClick={() => onChange(!checked)}
      ></div>
      <label htmlFor={id} className="cursor-pointer">
        {name}
      </label>
    </div>
  );
};
