import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
  size?: number;
}

export const LoaderCircle = forwardRef<SVGSVGElement, Props>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }
);
