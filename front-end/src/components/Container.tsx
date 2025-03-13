import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  key?: React.Key;
}

export function Container({ children, key, className = "" }: ContainerProps) {
  return (
    <>
      <div key={key} className={className}>
        {children}
      </div>
    </>
  );
}
