import clsx from "clsx";
import type { ReactNode } from "react";

interface HeaderTitleProps {
  children: ReactNode;
  className?: string;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const { children, className = "" } = props;

  return (
    <h2
      className={clsx(
        "text-base px-4 pb-4 text-[#3A3A3A] leading-4 font-semibold font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default HeaderTitle;
