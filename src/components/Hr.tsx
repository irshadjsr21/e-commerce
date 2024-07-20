export interface HrProps {
  className?: string;
}

export const Hr: React.FC<HrProps> = ({ className }) => {
  return (
    <hr
      className={`m-0 w-full border-[0.5px] border-solid border-stroke ${className ?? ""}`}
    />
  );
};
