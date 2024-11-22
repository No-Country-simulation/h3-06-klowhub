import type { FC, SVGProps } from "react";

const SvgArrowDown: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.371 10.821 8 10.45l-.371.371a.525.525 0 0 0 .742 0ZM8 9.708l-4.529-4.53a.525.525 0 0 0-.742.743l4.9 4.9L8 10.45l.371.371 4.9-4.9a.525.525 0 1 0-.742-.742L8 9.708Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
