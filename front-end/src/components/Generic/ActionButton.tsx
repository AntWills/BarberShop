import { ReactNode, ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function ActionButton({
  className = "",
  children,
  ...rest
}: ActionButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
