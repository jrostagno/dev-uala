import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M46.55 40C51.12 35.97 54 30.07 54 23.5C54 11.35 44.15 1.5 32 1.5C28.2 1.5 24.62 2.46 21.5 4.16L14 9L39.5 46L46.55 40Z"
      fill="#B7BFD3"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M26 50.5C38.4264 50.5 48.5 40.4264 48.5 28C48.5 15.5736 38.4264 5.5 26 5.5C13.5736 5.5 3.5 15.5736 3.5 28C3.5 40.4264 13.5736 50.5 26 50.5Z"
      fill="white"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M69.287 61C71.571 63.284 71.571 66.9932 69.287 69.287C67.0029 71.571 63.2938 71.571 61 69.287L52.713 61C50.429 58.716 50.429 55.0068 52.713 52.713C54.9971 50.429 58.7062 50.429 61 52.713L69.287 61Z"
      fill="#B7BFD3"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M9.46 22.51C9.46 17.44 11.14 12.76 13.97 9C7.68 12.99 3.5 20.01 3.5 28.01C3.5 40.44 13.57 50.51 26 50.51C33.36 50.51 39.88 46.98 43.99 41.52C40.51 43.73 36.39 45.01 31.96 45.01C19.53 45.01 9.46 34.94 9.46 22.51Z"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M48 54C51.3137 54 54 51.3137 54 48C54 44.6863 51.3137 42 48 42C44.6863 42 42 44.6863 42 48C42 51.3137 44.6863 54 48 54Z"
      fill="white"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M62 10C62 7.79 63.79 6 66 6C63.79 6 62 4.21 62 2C62 4.21 60.21 6 58 6C60.21 6 62 7.79 62 10Z"
      fill="#B7BFD3"
      stroke="#B7BFD3"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgSearchIcon;
