import { Container } from "../../../components/Container";
import { Title } from "../../../components/Title";
import { ReactNode } from "react";
import { Text } from "../../../components/Text";
import { Card } from "../../../components/Card";

interface RootProps {
  children: ReactNode;
  id?: string;
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

export const Service = {
  Root,
  Title: (props: React.ComponentProps<typeof Title>) => (
    <Title {...props} className="text-[3rem] font-bold" />
  ),
  Detail: (props: React.ComponentProps<typeof Text>) => (
    <Text {...props} className="text-[1.5rem] font-thin text-center" />
  ),
  Container,
  Card,
};
