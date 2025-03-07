import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <>
      <div className="rounded-md flex flex-col h-fit m-3 shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
        {children}
      </div>
    </>
  );
}
