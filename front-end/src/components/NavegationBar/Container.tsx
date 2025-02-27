import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="flex m-2.5">{children}</div>
    </>
  );
}
