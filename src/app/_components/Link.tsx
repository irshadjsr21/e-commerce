import NextLink from "next/link";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <NextLink
      className={`text-base font-medium uppercase tracking-[1.12px] text-black no-underline ${className ?? ""}`}
      href={href}
    >
      {children}
    </NextLink>
  );
};
