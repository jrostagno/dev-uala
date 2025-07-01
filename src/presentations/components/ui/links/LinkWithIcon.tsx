import clsx from "clsx";
import type { AnchorHTMLAttributes, JSX, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkWithIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
}

const LinkWithIcon = ({
  children,
  icon,
  className,
  href,
  ...rest
}: LinkWithIconProps) => {
  return (
    <div
      className={clsx("flex items-center pt-4 justify-center gap-1", className)}
    >
      {icon}

      <Link to={href} {...rest}>
        <span className="font-sans text-sm font-normal text-primaryBrand">
          {children}
        </span>
      </Link>
    </div>
  );
};

export default LinkWithIcon;
