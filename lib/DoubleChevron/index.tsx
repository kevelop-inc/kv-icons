import { forwardRef } from 'react';
import { IconDirection, IconProps } from '../icon-props';
import { getRotation } from '../utils';

interface Props extends IconProps {
  size?: number;
  direction?: IconDirection;
}

export const DoubleChevron = forwardRef<SVGSVGElement, Props>(
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
          transform: `rotate(${getRotation(direction) - 90}deg)`,
          ...props.style,
        }}
        viewBox="0 0 17 16"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.93427 12.5656C3.62185 12.2532 3.62185 11.7466 3.93427 11.4342L7.93427 7.43422C8.24669 7.1218 8.75322 7.1218 9.06564 7.43422L13.0656 11.4342C13.3781 11.7466 13.3781 12.2532 13.0656 12.5656C12.7532 12.878 12.2467 12.878 11.9343 12.5656L8.49995 9.13127L5.06564 12.5656C4.75322 12.878 4.24669 12.878 3.93427 12.5656ZM3.93427 7.76559C3.62185 7.45317 3.62185 6.94664 3.93427 6.63422L7.93427 2.63422C8.24669 2.3218 8.75322 2.3218 9.06564 2.63422L13.0656 6.63422C13.3781 6.94664 13.3781 7.45317 13.0656 7.76559C12.7532 8.07801 12.2467 8.07801 11.9343 7.76559L8.49995 4.33127L5.06564 7.76559C4.75322 8.07801 4.24669 8.07801 3.93427 7.76559Z"
          fill={color}
        />
      </svg>
    );
  }
);
