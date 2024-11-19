import type { SVGProps } from "react";
const SvgArrowLeft = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.179 8.371 5.55 8l-.371-.371a.525.525 0 0 0 0 .742ZM6.292 8l4.53-4.529a.525.525 0 0 0-.743-.742l-4.9 4.9L5.55 8l-.371.371 4.9 4.9a.525.525 0 1 0 .742-.742L6.292 8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
