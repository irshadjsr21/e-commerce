export interface SpinnerProps {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <div className={`loader ${className ?? ""}`} />;
};
