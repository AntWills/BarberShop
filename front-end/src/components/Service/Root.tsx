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
        className="bg-white text-black w-full h-screen flex justify-center items-center flex-col"
      >
        {children}
      </section>
    </>
  );
}
