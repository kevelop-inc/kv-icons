import { forwardRef } from 'react';
import { IconDirection, IconProps } from '../icon-props';
import { getRotation } from '../utils';

interface Props extends IconProps {
  size?: number;
  direction?: IconDirection;
}

export const Chevron = forwardRef<SVGSVGElement, Props>(
  (
    { color = 'currentColor', direction = 'right', size = 24, ...props },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        style={{
          transform: `rotate(${getRotation(direction)}deg)`,
          ...props.style,
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    );
  }
);
