import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const Flash = forwardRef<SVGSVGElement, Props>(
	({ color = 'currentColor', size = 24, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 14 14'
				fill='none'
				{...props}>
				<path
					d='M10.4474 6.25319H8.64488V2.05319C8.64488 1.07319 8.11405 0.874859 7.46655 1.60986L6.99988 2.14069L3.05072 6.63236C2.50822 7.24486 2.73572 7.74652 3.55238 7.74652H5.35488V11.9465C5.35488 12.9265 5.88572 13.1249 6.53322 12.3899L6.99988 11.859L10.9491 7.36736C11.4916 6.75486 11.2641 6.25319 10.4474 6.25319Z'
					fill={color}
				/>
			</svg>
		);
	}
);
