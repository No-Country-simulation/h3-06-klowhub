import type { FC, SVGProps } from "react";

const SvgArrowTop: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.629 5.179 8 5.55l.371-.371a.525.525 0 0 0-.742 0ZM8 6.292l4.529 4.53a.525.525 0 1 0 .742-.743l-4.9-4.9L8 5.55l-.371-.371-4.9 4.9a.525.525 0 1 0 .742.742L8 6.292Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTop;
