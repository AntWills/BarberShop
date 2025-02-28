import { ReactNode } from "react";
import bgContact from "../../assets/bg-contact.png";

interface ContactRootProps {
  children: ReactNode;
  id: string;
}

export function Root({ children, id }: ContactRootProps) {
  return (
    <>
      <section
        id={id}
        className="bg-repeat bg-cover bg-bottom w-full h-screen flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        {children}
      </section>
    </>
  );
}
