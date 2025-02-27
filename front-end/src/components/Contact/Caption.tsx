import { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
}

export function Caption({ children }: CaptionProps) {
  return (
    <>
      <div className="text-sm">{children}</div>
    </>
  );
}
