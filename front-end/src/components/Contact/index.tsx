import { Root } from "./Root";
import { Container } from "../Generic/Container";
import { Title } from "../Generic/Title";
import { Text } from "../Generic/Text";
import { ActionButton } from "../Generic/ActionButton";

export const Contact = {
  Root,
  Title: (props: React.ComponentProps<typeof Title>) => (
    <Container {...props} className="text-3xl" />
  ),
  Details: (props: React.ComponentProps<typeof Text>) => (
    <Container {...props} className="text-2xl" />
  ),
  Container: (props: React.ComponentProps<typeof Container>) => (
    <Container
      {...props}
      className="flex flex-col items-center justify-center text-center"
    ></Container>
  ),
  ActionButton: (props: React.ComponentProps<typeof ActionButton>) => (
    <ActionButton {...props} className="mx-1.5 text-2xl" />
  ),
};
