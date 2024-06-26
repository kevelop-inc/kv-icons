import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const ExclamationCircle = forwardRef<SVGSVGElement, Props>(
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
					d='M8.75 5.33333C8.75 4.91912 8.41421 4.58333 8 4.58333C7.58579 4.58333 7.25 4.91912 7.25 5.33333H8.75ZM7.25 8C7.25 8.41421 7.58579 8.75 8 8.75C8.41421 8.75 8.75 8.41421 8.75 8H7.25ZM8 9.91667C7.58579 9.91667 7.25 10.2525 7.25 10.6667C7.25 11.0809 7.58579 11.4167 8 11.4167V9.91667ZM8.00667 11.4167C8.42088 11.4167 8.75667 11.0809 8.75667 10.6667C8.75667 10.2525 8.42088 9.91667 8.00667 9.91667V11.4167ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25V14.75C11.7279 14.75 14.75 11.7279 14.75 8H13.25ZM8 13.25C5.10051 13.25 2.75 10.8995 2.75 8H1.25C1.25 11.7279 4.27208 14.75 8 14.75V13.25ZM2.75 8C2.75 5.10051 5.10051 2.75 8 2.75V1.25C4.27208 1.25 1.25 4.27208 1.25 8H2.75ZM8 2.75C10.8995 2.75 13.25 5.10051 13.25 8H14.75C14.75 4.27208 11.7279 1.25 8 1.25V2.75ZM7.25 5.33333V8H8.75V5.33333H7.25ZM8 11.4167H8.00667V9.91667H8V11.4167Z'
					fill={color}
				/>
			</svg>
		);
	}
);
