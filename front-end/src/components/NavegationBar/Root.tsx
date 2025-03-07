import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <>
      <div className="w-full content-center fixed bg-[#070A14] opacity-90 z-50">
        {children}
      </div>
      {/* <div className="h-9"></div> */}
    </>
  );
}
