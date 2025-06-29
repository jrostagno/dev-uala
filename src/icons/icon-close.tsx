import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M9.06307 7.99994L12.0348 5.02994C12.325 4.73994 12.325 4.25994 12.0348 3.96994C11.7446 3.67994 11.2644 3.67994 10.9742 3.96994L8.00244 6.93994L5.03069 3.96994C4.74052 3.67994 4.26024 3.67994 3.97007 3.96994C3.6799 4.25994 3.6799 4.73994 3.97007 5.02994L6.94182 7.99994L3.97007 10.9699C3.6799 11.2599 3.6799 11.7399 3.97007 12.0299C4.12016 12.1799 4.31027 12.2499 4.50038 12.2499C4.69049 12.2499 4.88061 12.1799 5.03069 12.0299L8.00244 9.05994L10.9742 12.0299C11.1243 12.1799 11.3144 12.2499 11.5045 12.2499C11.6946 12.2499 11.8847 12.1799 12.0348 12.0299C12.325 11.7399 12.325 11.2599 12.0348 10.9699L9.06307 7.99994Z"
      fill="#002066"
    />
  </svg>
);
export default SvgCloseIcon;
