import { Root } from "./Root";
import { Button } from "./Button";
// import { Container } from "./Container";
import { Container } from "../Generic/Container";
// import { Containers } from "./Containers";
import { Icon } from "../Generic/Icon";

export const NavegationBar = {
  Root,
  Button,
  // Container,
  Container: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex m-2.5" />
  ),
  Containers: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="flex justify-between" />
  ),
  // Containers,
  Icon,
};
