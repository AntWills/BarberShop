import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <>
      <div className="text-6xl text-bold text-center">{children}</div>
    </>
  );
}
