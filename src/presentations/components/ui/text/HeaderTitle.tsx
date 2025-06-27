import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

interface HeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const HeaderTitle = ({ children, className, ...props }: HeaderTitleProps) => {
  return (
    <h2
      className={clsx(
        "text-base  text-textPrimary leading-4 font-semibold font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default HeaderTitle;
