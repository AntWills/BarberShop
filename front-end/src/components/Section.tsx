import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "h-screen w-full",
}: SectionProps) {
  return <section className={className}>{children}</section>;
}
