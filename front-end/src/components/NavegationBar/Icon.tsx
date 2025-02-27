interface IconProps {
  src: string;
}

export function Icon({ src }: IconProps) {
  return <img src={src} className="w-10 h-auto" />;
}
