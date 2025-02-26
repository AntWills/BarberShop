import { ReactNode } from "react";
import bgContact from "../../assets/bg-contact.png";

interface ContactRootProps {
  children: ReactNode;
}

export function ContactRoot({ children }: ContactRootProps) {
  return (
    <>
      <div
        className="bg-repeat bg-cover bg-bottom w-full h-screen flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <div>{children}</div>
        {/* <div className=""></div> */}
      </div>
    </>
  );
}
