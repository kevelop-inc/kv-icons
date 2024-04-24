import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
  size?: number;
}
// if the icon has a fill then give the color to fill, if it has a stroke then give the color to stroke
// you can pass other props like strokeWidth or strokeLinecap or strokeLinejoin if the icon supports it

export const CloseCircle = forwardRef<SVGSVGElement, Props>(
  ({ color = 'currentColor', size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...props}
      >
        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
        <path d="M9.16999 15.58C8.97999 15.58 8.78999 15.51 8.63999 15.36C8.34999 15.07 8.34999 14.59 8.63999 14.3L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L9.69998 15.36C9.55998 15.51 9.35999 15.58 9.16999 15.58Z" />
        <path d="M14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L8.63999 9.69998C8.34999 9.40998 8.34999 8.92999 8.63999 8.63999C8.92999 8.34999 9.40998 8.34999 9.69998 8.63999L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58Z" />
      </svg>
    );
  }
);
