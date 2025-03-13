import { ReactNode, ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function ActionButton({
  className = "mx-1.5 text-black  bg-[#F0B35B] px-10 rounded-xl",
  children,
  ...rest
}: ActionButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
