import { ReactNode, ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <button className="mx-1.5" {...rest}>
      {children}
    </button>
  );
}
