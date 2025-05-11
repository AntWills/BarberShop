import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function Text({
  className = "text-[1rem] font-light",
  children,
}: TextProps) {
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
}
