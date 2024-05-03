import { forwardRef } from "react";
import { IconProps } from "../icon-props";

interface Props extends IconProps {
  size?: number;
}

export const StockArrow = forwardRef<SVGSVGElement, Props>(
  ({ color = "currentColor", size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 13 12"
        fill={color}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.69995 4.2C7.36858 4.2 7.09995 3.93137 7.09995 3.6C7.09995 3.26863 7.36858 3 7.69995 3H10.7C11.0313 3 11.3 3.26863 11.3 3.6V6.6C11.3 6.93137 11.0313 7.2 10.7 7.2C10.3686 7.2 10.1 6.93137 10.1 6.6V5.04853L7.52422 7.62426C7.2899 7.85858 6.91 7.85858 6.67569 7.62426L5.29995 6.24853L2.72422 8.82426C2.4899 9.05858 2.11 9.05858 1.87569 8.82426C1.64137 8.58995 1.64137 8.21005 1.87569 7.97574L4.87569 4.97574C5.11 4.74142 5.4899 4.74142 5.72422 4.97574L7.09995 6.35147L9.25142 4.2H7.69995Z"
          fill={color}
        />
      </svg>
    );
  }
);
