import { forwardRef } from "react";
import { IconProps } from "../icon-props";

interface Props extends IconProps {
  size?: number;
}

export const Home = forwardRef<SVGSVGElement, Props>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path
          d="M13.8873 5.34066L9.52063 1.84733C8.66729 1.16733 7.33396 1.16066 6.48729 1.84066L2.12063 5.34066C1.49396 5.84066 1.11396 6.84066 1.24729 7.62733L2.08729 12.654C2.28063 13.7807 3.32729 14.6673 4.46729 14.6673H11.534C12.6606 14.6673 13.7273 13.7607 13.9206 12.6473L14.7606 7.62066C14.8806 6.84066 14.5006 5.84066 13.8873 5.34066ZM8.50063 12.0007C8.50063 12.274 8.27396 12.5007 8.00063 12.5007C7.72729 12.5007 7.50063 12.274 7.50063 12.0007V10.0007C7.50063 9.72733 7.72729 9.50066 8.00063 9.50066C8.27396 9.50066 8.50063 9.72733 8.50063 10.0007V12.0007Z"
          fill={color}
        />
      </svg>
    );
  }
);
