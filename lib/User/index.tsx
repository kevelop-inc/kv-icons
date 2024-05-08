import { forwardRef } from "react";
import { IconProps } from "../icon-props";

interface Props extends IconProps {
  size?: number;
}

export const User = forwardRef<SVGSVGElement, Props>(
  ({ color = "currentColor", size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={color}
        {...props}
      >
        <path
          d="M9.99992 10.6243C7.35825 10.6243 5.20825 8.47435 5.20825 5.83268C5.20825 3.19102 7.35825 1.04102 9.99992 1.04102C12.6416 1.04102 14.7916 3.19102 14.7916 5.83268C14.7916 8.47435 12.6416 10.6243 9.99992 10.6243ZM9.99992 2.29102C8.04992 2.29102 6.45825 3.88268 6.45825 5.83268C6.45825 7.78268 8.04992 9.37435 9.99992 9.37435C11.9499 9.37435 13.5416 7.78268 13.5416 5.83268C13.5416 3.88268 11.9499 2.29102 9.99992 2.29102Z"
          fill={color}
        />
        <path
          d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z"
          fill={color}
        />
      </svg>
    );
  }
);
