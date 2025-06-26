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
        "text-base px-4 pb-4 text-textPrimary leading-4 font-semibold font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default HeaderTitle;
