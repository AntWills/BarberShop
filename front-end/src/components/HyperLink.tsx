import { ReactNode } from "react";

interface HyperLinkProps {
  children: ReactNode;
  href: string;
}

export function HyperLink({ children, href }: HyperLinkProps) {
  return (
    <a className="text-white mx-2" href={href}>
      {children}
    </a>
  );
}
