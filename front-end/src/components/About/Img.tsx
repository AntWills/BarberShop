interface ImgProps {
  src: string;
  style: string;
}

export function Img({ src, style }: ImgProps) {
  return <img src={src} className={style} />;
}
