import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const PlayCircle = forwardRef<SVGSVGElement, Props>(
	({ color = 'currentColor', size = 24, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 16 17'
				fill='none'
				{...props}>
				<path
					d='M7.97917 1.83325C4.29917 1.83325 1.3125 4.81992 1.3125 8.49992C1.3125 12.1799 4.29917 15.1666 7.97917 15.1666C11.6592 15.1666 14.6458 12.1799 14.6458 8.49992C14.6458 4.81992 11.6658 1.83325 7.97917 1.83325ZM9.97917 9.98659L8.04583 11.0999C7.80583 11.2399 7.53917 11.3066 7.27917 11.3066C7.0125 11.3066 6.7525 11.2399 6.5125 11.0999C6.0325 10.8199 5.74583 10.3266 5.74583 9.76659V7.53325C5.74583 6.97992 6.0325 6.47992 6.5125 6.19992C6.9925 5.91992 7.56583 5.91992 8.0525 6.19992L9.98583 7.31325C10.4658 7.59325 10.7525 8.08659 10.7525 8.64659C10.7525 9.20659 10.4658 9.70659 9.97917 9.98659Z'
					fill={color}
				/>
			</svg>
		);
	}
);
