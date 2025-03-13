import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export function Title({
  className = "text-[2rem] font-bold",
  children,
}: TitleProps) {
  return (
    <>
      <h1 className={className}>{children}</h1>
    </>
  );
}
