export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`flex w-full justify-center rounded-md border-none bg-black py-[18.5px] text-base font-light uppercase tracking-[1.12px] text-white disabled:bg-grayed disabled:text-black ${className ?? ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
