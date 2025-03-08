import { ReactNode } from "react";

interface Title {
  children: ReactNode;
  className?: string;
}

export function Title({ className = "", children }: Title) {
  return (
    <>
      <h1 className={className}>{children}</h1>
    </>
  );
}
