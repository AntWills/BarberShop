import { Root } from "./Root";
// import { Title } from "./Title";
// import { Caption } from "./Caption";
// import { Container } from "./Container";
import { Container } from "../Generic/Container";
import { ActionButton } from "./ActionButton";

export const Contact = {
  Root,
  Title: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="text-2xl" />
  ),
  Details: (props: React.ComponentProps<typeof Container>) => (
    <Container {...props} className="text-sm" />
  ),
  Container: (props: React.ComponentProps<typeof Container>) => (
    <Container
      {...props}
      className="flex flex-col items-center justify-center text-center"
    ></Container>
  ),
  ActionButton,
};
