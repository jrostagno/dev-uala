import React, { JSX } from "react";

interface NavigationLinksProps {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

const NavigationLink = (props: NavigationLinksProps) => {
  const { label, icon, onClick } = props;

  return (
    <button onClick={onClick} className="text-primaryBrand">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-sm font-normal text-textPrimary">{label}</h2>
      </div>
    </button>
  );
};

export default NavigationLink;
