import { ReactNode } from "react";

interface ContainersProps {
  children: ReactNode;
}

export function Containers({ children }: ContainersProps) {
  return (
    <>
      <div className="flex h-full justify-items-center m-2">{children}</div>
    </>
  );
}
