import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <>
      <section className="w-full h-screen bg-[#0D121E] text-white flex items-center justify-center">
        {children}
      </section>
    </>
  );
}
