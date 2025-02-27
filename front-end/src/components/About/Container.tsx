import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-1/2">
        {children}
      </div>
    </>
  );
}
