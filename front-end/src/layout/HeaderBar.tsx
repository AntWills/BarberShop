import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="w-full fixed top-0 flex items-center justify-between bg-[#070A14] opacity-90 z-50 p-4">
      {children}
    </header>
  );
}
