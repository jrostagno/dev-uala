import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M23.47 27.53C23.54 27.6 23.62 27.65 23.71 27.69C23.8 27.73 23.9 27.75 24 27.75C24.1 27.75 24.2 27.73 24.29 27.69C24.38 27.65 24.46 27.6 24.53 27.53L28.53 23.53C28.82 23.24 28.82 22.76 28.53 22.47C28.24 22.18 27.76 22.18 27.47 22.47L24.75 25.19V16C24.75 15.59 24.41 15.25 24 15.25C23.59 15.25 23.25 15.59 23.25 16V25.19L20.53 22.47C20.24 22.18 19.76 22.18 19.47 22.47C19.18 22.76 19.18 23.24 19.47 23.53L23.47 27.53Z"
      fill="#022A9A"
    />
    <path
      d="M33 24.25C32.59 24.25 32.25 24.59 32.25 25V28C32.25 29.79 30.79 31.25 29 31.25H19C17.21 31.25 15.75 29.79 15.75 28V25C15.75 24.59 15.41 24.25 15 24.25C14.59 24.25 14.25 24.59 14.25 25V28C14.25 30.62 16.38 32.75 19 32.75H29C31.62 32.75 33.75 30.62 33.75 28V25C33.75 24.59 33.41 24.25 33 24.25Z"
      fill="#022A9A"
    />
  </svg>
);
export default SvgDownloadIcon;
