import { Container } from "./Container";
import { Img } from "./Img";
import { Text } from "./Text";

export const Card = {
  Root: (props: React.ComponentProps<typeof Container>) => (
    <Container
      {...props}
      className="rounded-md flex flex-col h-fit m-3 shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
    />
  ),
  Img: (props: React.ComponentProps<typeof Img>) => (
    <Img {...props} className="w-72 h-auto object-cover" />
  ),
  Description: (props: React.ComponentProps<typeof Text>) => (
    <Text
      {...props}
      className="flex justify-between text-center  items-center p-4"
    />
  ),
  Cost: (props: React.ComponentProps<typeof Text>) => (
    <Text {...props} className="text-white bg-black p-0.5 px-1 rounded-md" />
  ),
  Type: (props: React.ComponentProps<typeof Text>) => (
    <Text {...props} className="font-bold" />
  ),
};
