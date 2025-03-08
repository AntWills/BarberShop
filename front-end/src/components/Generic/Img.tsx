interface ImgProps {
  src: string;
  className?: string;
}

export function Img({ src, className }: ImgProps) {
  return <img src={src} className={className} />;
}
