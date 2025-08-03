// import { Container } from "./Container";
import { Container } from "../../../components/Container";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { SubTitle } from "../../../components/SubTitle";
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

export const About = {
  Root,
  Container,
  Containers: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex h-full justify-items-center m-2" />
  ),
  Title: (props: React.ComponentProps<typeof SubTitle>) => (
    <Container {...props} className="text-3xl font-semibold my-1" />
  ),
  Text: (props: React.ComponentProps<typeof Text>) => (
    <Container {...props} className="font-light text-justify my-1" />
  ),
  Info: (props: React.ComponentProps<typeof Text>) => (
    <Container {...props} className="font-bold text-bold my-1" />
  ),
  ContainerImg: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="relative w-full h-full" />
  ),
  Img,
};
