import { Root } from "./Root";
import { Container } from "../Generic/Container";
import { ActionButton } from "../Generic/ActionButton";
import { Img } from "../Generic/Img";

export const NavegationBar = {
  Root,
  Button: (props: React.ComponentProps<typeof ActionButton>) => (
    <ActionButton {...props} className="text-white mx-1.5" />
  ),
  // Container,
  Container: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex m-2.5" />
  ),
  Containers: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex justify-between" />
  ),
  // Containers,
  Icon: Img,
};
