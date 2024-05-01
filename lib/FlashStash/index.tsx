import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const FlashStash = forwardRef<SVGSVGElement, Props>(
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
					d='M12.6993 1.30117C12.5243 1.12617 12.2384 1.12617 12.0634 1.30117L1.30093 12.0695C1.12593 12.2445 1.12593 12.5303 1.30093 12.7053C1.38843 12.787 1.49926 12.8337 1.61593 12.8337C1.73259 12.8337 1.84343 12.787 1.93093 12.6995L12.6993 1.93117C12.8801 1.75617 12.8801 1.47617 12.6993 1.30117Z'
					fill={color}
				/>
				<path
					d='M8.64488 2.05319V5.35486L5.35488 8.64486V7.74652H3.55238C2.73572 7.74652 2.50822 7.24486 3.05072 6.63236L6.99988 2.14069L7.46655 1.60986C8.11405 0.874859 8.64488 1.07319 8.64488 2.05319Z'
					fill={color}
				/>
				<path
					d='M10.9491 7.3671L6.99998 11.8588L6.53331 12.3896C5.88581 13.1246 5.35498 12.9263 5.35498 11.9463V10.3946L9.49665 6.25293H10.4475C11.2641 6.25293 11.4916 6.7546 10.9491 7.3671Z'
					fill={color}
				/>
			</svg>
		);
	}
);
