import clsx from "clsx";

import type { JSX, ReactNode } from "react";

interface LinkWithIconProps {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
  path: string;
}

const LinkWithIcon = (props: LinkWithIconProps) => {
  const { icon, children, className = "", path } = props;

  return (
    <div
      className={clsx("flex items-center pt-4 justify-center gap-1", className)}
    >
      {icon}

      <a href={path}>
        <span className="font-normal font-sans text-sm text-primaryBrand">
          {children}
        </span>
      </a>
    </div>
  );
};

export default LinkWithIcon;
