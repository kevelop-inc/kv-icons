import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const AddCircle = forwardRef<SVGSVGElement, Props>(
	({ color = 'currentColor', size = 24, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 17 16'
				fill='none'
				{...props}>
				<path
					d='M8.50065 1.33325C4.82732 1.33325 1.83398 4.32659 1.83398 7.99992C1.83398 11.6733 4.82732 14.6666 8.50065 14.6666C12.174 14.6666 15.1673 11.6733 15.1673 7.99992C15.1673 4.32659 12.174 1.33325 8.50065 1.33325ZM11.1673 8.49992H9.00065V10.6666C9.00065 10.9399 8.77398 11.1666 8.50065 11.1666C8.22732 11.1666 8.00065 10.9399 8.00065 10.6666V8.49992H5.83398C5.56065 8.49992 5.33398 8.27325 5.33398 7.99992C5.33398 7.72659 5.56065 7.49992 5.83398 7.49992H8.00065V5.33325C8.00065 5.05992 8.22732 4.83325 8.50065 4.83325C8.77398 4.83325 9.00065 5.05992 9.00065 5.33325V7.49992H11.1673C11.4407 7.49992 11.6673 7.72659 11.6673 7.99992C11.6673 8.27325 11.4407 8.49992 11.1673 8.49992Z'
					fill={color}
				/>
			</svg>
		);
	}
);