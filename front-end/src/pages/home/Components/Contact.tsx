import { ReactNode } from "react";
import { Container as GenContainer } from "../../../components/Container";

interface ContactProps {
  children: ReactNode;
  id: string;
}

export default function Contact({ children, id }: ContactProps) {
  return (
    <>
      <section
        id={id}
        className="bg-[url(/img/bg-contact.png)] bg-repeat bg-cover bg-bottom w-full h-screen flex justify-center items-center text-white"
      >
        {children}
      </section>
    </>
  );
}

Contact.Container = function Container(
  props: React.ComponentProps<typeof GenContainer>
) {
  return (
    <GenContainer
      {...props}
      className="flex flex-col items-center justify-center text-center"
    />
  );
};
