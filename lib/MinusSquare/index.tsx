import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const MinusSquare = forwardRef<SVGSVGElement, Props>(
	({ color = 'currentColor', size = 24, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 16 16'
				fill='none'
				{...props}>
				<path
					d='M10.794 1.33334H5.20732C2.78065 1.33334 1.33398 2.78 1.33398 5.20667V10.7867C1.33398 13.22 2.78065 14.6667 5.20732 14.6667H10.7873C13.214 14.6667 14.6607 13.22 14.6607 10.7933V5.20667C14.6673 2.78 13.2207 1.33334 10.794 1.33334ZM10.6673 8.5H5.33398C5.06065 8.5 4.83398 8.27334 4.83398 8C4.83398 7.72667 5.06065 7.5 5.33398 7.5H10.6673C10.9407 7.5 11.1673 7.72667 11.1673 8C11.1673 8.27334 10.9407 8.5 10.6673 8.5Z'
					fill={color}
				/>
			</svg>
		);
	}
);
