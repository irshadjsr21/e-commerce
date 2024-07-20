export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="w-[576px] rounded-[20px] border-[1px] border-solid border-stroke px-[60px] py-10">
      <h2 className="m-0 mb-8 text-center text-[32px] font-semibold">
        {title}
      </h2>
      {children}
    </div>
  );
};
