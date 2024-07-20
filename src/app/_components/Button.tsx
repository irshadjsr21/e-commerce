export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={`flex w-full justify-center rounded-md border-none bg-black py-[18.5px] text-base font-light uppercase tracking-[1.12px] text-white ${className ?? ""}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
