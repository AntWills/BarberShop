import { ReactNode } from "react";

interface NavegationRootProps {
  children: ReactNode;
}

export function NavegationRoot({ children }: NavegationRootProps) {
  return (
    <>
      <div className="w-full h-10 content-center fixed bg-[#070A14] opacity-90">
        {children}
      </div>
      <div className="h-9"></div>
    </>
  );
}
