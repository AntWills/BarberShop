import { ReactNode } from "react";
import bgContact from "../../assets/bg-contact.png";

interface ContactRootProps {
  children: ReactNode;
}

export function Root({ children }: ContactRootProps) {
  return (
    <>
      <section
        className="bg-repeat bg-cover bg-bottom w-full h-screen flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        {children}
      </section>
    </>
  );
}
