interface IconProps {
  src: string;
  className: string;
}

export function Icon({ src, className }: IconProps) {
  return <img src={src} className={className} />;
}
