import { ReactNode } from "react";

interface Text {
  children: ReactNode;
  className?: string;
}

export function Text({ className = "", children }: Text) {
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
}
