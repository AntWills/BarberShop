import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <>
      <div className="w-full h-screen bg-[#0D121E] text-white">{children}</div>
    </>
  );
}
