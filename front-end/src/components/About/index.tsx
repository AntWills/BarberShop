// import { Container } from "./Container";
import { Container } from "./../Generic/Container";
import { Root } from "./Root";
import { Img } from "../Generic/Img";
import { Text } from "../Generic/Text";
import { SubTitle } from "../Generic/SubTitle";

export const About = {
  Root,
  Container,
  Containers: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex h-full justify-items-center m-2" />
  ),
  Title: (props: React.ComponentProps<typeof SubTitle>) => (
    <Container {...props} className="text-3xl text-bold" />
  ),
  Detail: (props: React.ComponentProps<typeof Text>) => (
    <Container {...props} className="text-[15] text-justify text-normal" />
  ),
  Info: (props: React.ComponentProps<typeof Text>) => (
    <Container {...props} className="text-bold text-[15]" />
  ),
  ContainerImg: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="relative w-full h-full" />
  ),
  Img,
};
