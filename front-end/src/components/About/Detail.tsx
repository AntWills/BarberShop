import { ReactNode } from "react";

interface DetailProps {
  children: ReactNode;
}

export function Detail({ children }: DetailProps) {
  return (
    <>
      <div className="text-sm text-justify text-normal">{children}</div>
    </>
  );
}
