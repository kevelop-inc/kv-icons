import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
  size?: number;
}

export const ArrowLeft = forwardRef<SVGSVGElement, Props>(
  ({ color = 'currentColor', size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <path
          d="M9.31999 3.5465L7.17999 5.6865L5.86666 6.99317C5.31333 7.5465 5.31333 8.4465 5.86666 8.99983L9.31999 12.4532C9.77333 12.9065 10.5467 12.5798 10.5467 11.9465V8.2065V4.05317C10.5467 3.41317 9.77333 3.09317 9.31999 3.5465Z"
          fill={color}
        />
      </svg>
    );
  }
);
