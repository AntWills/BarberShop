import { ReactNode, ButtonHTMLAttributes } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function NavButton({ children, ...rest }: NavButtonProps) {
  return (
    <button className="text-white mx-1.5" {...rest}>
      {children}
    </button>
  );
}
