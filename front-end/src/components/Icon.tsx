interface IconProps {
  src: string;
  className?: string;
}

export function Icon({ src, className = "w-10 h-auto" }: IconProps) {
  return <img src={src} className={className} />;
}
