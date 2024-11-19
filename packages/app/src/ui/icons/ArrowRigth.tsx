import type { SVGProps } from "react";

const SvgArrowRigth = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.821 7.629 10.45 8l.371.371a.525.525 0 0 0 0-.742ZM9.708 8l-4.53 4.529a.525.525 0 1 0 .743.742l4.9-4.9L10.45 8l.371-.371-4.9-4.9a.525.525 0 1 0-.742.742L9.708 8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRigth;
