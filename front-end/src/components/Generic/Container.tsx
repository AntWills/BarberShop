import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}
