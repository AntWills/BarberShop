import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <div className="text-2xl text-center">{children}</div>
    </>
  );
}
