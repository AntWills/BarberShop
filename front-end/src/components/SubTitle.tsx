import { ReactNode } from "react";

interface SubTitle {
  children: ReactNode;
  className?: string;
}

export function SubTitle({ className = "text-[2rem]", children }: SubTitle) {
  return (
    <>
      <h2 className={className}>{children}</h2>
    </>
  );
}
