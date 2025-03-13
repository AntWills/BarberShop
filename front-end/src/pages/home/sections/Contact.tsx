import { ReactNode } from "react";
import { Container } from "../../../components/Container";

interface ContactRootProps {
  children: ReactNode;
  id: string;
}

function Root({ children, id }: ContactRootProps) {
  return (
    <>
      <section
        id={id}
        className="bg-[url(/public/img/bg-contact.png)] bg-repeat bg-cover bg-bottom w-full h-screen flex justify-center items-center text-white"
      >
        {children}
      </section>
    </>
  );
}

export const Contact = {
  Root,
  Container: (props: React.ComponentProps<typeof Container>) => (
    <Container
      {...props}
      className="flex flex-col items-center justify-center text-center"
    />
  ),
};
