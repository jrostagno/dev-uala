import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlusIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M14.548 6.757V8.525L0.659 8.559V6.774L14.548 6.757ZM8.53 14.577H6.745L6.728 0.687999H8.496L8.53 14.577Z"
      fill="#313643"
    />
  </svg>
);
export default SvgPlusIcon;
