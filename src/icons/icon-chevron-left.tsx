import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M15.0045 19.2499C14.8144 19.2499 14.6242 19.1799 14.4741 19.0299L7.97008 12.5299C7.6799 12.2399 7.6799 11.7599 7.97008 11.4699L14.4741 4.96994C14.7643 4.67994 15.2446 4.67994 15.5348 4.96994C15.825 5.25994 15.825 5.73994 15.5348 6.02994L9.56107 11.9999L15.5348 17.9699C15.825 18.2599 15.825 18.7399 15.5348 19.0299C15.3847 19.1799 15.1946 19.2499 15.0045 19.2499Z"
      fill="#022A9A"
    />
  </svg>
);
export default SvgChevronLeftIcon;
