import { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

export function Info({ children }: InfoProps) {
  return (
    <>
      <div className="text-bold">{children}</div>
    </>
  );
}
