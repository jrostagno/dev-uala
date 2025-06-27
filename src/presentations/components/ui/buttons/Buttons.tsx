import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const ButtonPrimary = ({
  children,
  className,
  ...props
}: ButtonsProps) => {
  return (
    <button
      className={clsx(
        "w-full py-3 text-base font-thin text-center text-white bg-primaryBrand rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
