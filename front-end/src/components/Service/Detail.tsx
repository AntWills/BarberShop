import { ReactNode } from "react";

interface DetailProps {
  children: ReactNode;
}

export function Detail({ children }: DetailProps) {
  return (
    <>
      <div className="text-2xl text-normal text-center">{children}</div>
    </>
  );
}
