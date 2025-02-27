import { ReactNode } from "react";

interface ContainersProps {
  children: ReactNode;
}

export function Containers({ children }: ContainersProps) {
  return (
    <>
      <div className="flex justify-between m-2">{children}</div>
    </>
  );
}
