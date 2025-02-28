import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
  id: string;
}

export function Root({ children, id }: RootProps) {
  return (
    <>
      <section
        id={id}
        className="pointer-events-none w-full h-screen bg-[#0D121E] text-white flex items-center justify-center"
      >
        {children}
      </section>
    </>
  );
}
