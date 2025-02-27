import { ReactNode } from "react";

interface ContainerImgProps {
  children: ReactNode;
}

export function ContainerImg({ children }: ContainerImgProps) {
  return (
    <>
      <div className="relative w-full h-full">{children}</div>
    </>
  );
}
