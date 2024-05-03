import { forwardRef } from 'react';
import { IconProps } from '../icon-props';

interface Props extends IconProps {
	size?: number;
}

export const Edit = forwardRef<SVGSVGElement, Props>(
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
					d='M10.794 1.83325H5.20732C2.78065 1.83325 1.33398 3.27992 1.33398 5.70659V11.2866C1.33398 13.7199 2.78065 15.1666 5.20732 15.1666H10.7873C13.214 15.1666 14.6607 13.7199 14.6607 11.2933V5.70659C14.6673 3.27992 13.2207 1.83325 10.794 1.83325ZM7.30065 12.1733C7.10732 12.3666 6.74065 12.5533 6.47398 12.5933L4.83398 12.8266C4.77398 12.8333 4.71398 12.8399 4.65398 12.8399C4.38065 12.8399 4.12732 12.7466 3.94732 12.5666C3.72732 12.3466 3.63398 12.0266 3.68732 11.6733L3.92065 10.0333C3.96065 9.75992 4.14065 9.39992 4.34065 9.20659L7.31398 6.23325C7.36732 6.37325 7.42065 6.51325 7.49398 6.67325C7.56065 6.81325 7.63398 6.95992 7.71398 7.09325C7.78065 7.20659 7.85398 7.31325 7.91398 7.39325C7.98732 7.50659 8.07398 7.61325 8.12732 7.67325C8.16065 7.71992 8.18732 7.75325 8.20065 7.76659C8.36732 7.96659 8.56065 8.15325 8.72732 8.29325C8.77398 8.33992 8.80065 8.36659 8.81398 8.37325C8.91398 8.45325 9.01398 8.53325 9.10065 8.59325C9.20732 8.67325 9.31398 8.74659 9.42732 8.80659C9.56065 8.88659 9.70732 8.95992 9.85398 9.03325C10.0073 9.09992 10.1473 9.15992 10.2873 9.20659L7.30065 12.1733ZM11.5807 7.89325L10.9673 8.51325C10.9273 8.55325 10.874 8.57325 10.8207 8.57325C10.8007 8.57325 10.774 8.57325 10.7607 8.56659C9.40732 8.17992 8.32732 7.09992 7.94065 5.74659C7.92065 5.67325 7.94065 5.59325 7.99398 5.54659L8.61398 4.92659C9.62732 3.91325 10.594 3.93325 11.5873 4.92659C12.094 5.43325 12.3407 5.91992 12.3407 6.42659C12.334 6.90659 12.0873 7.38659 11.5807 7.89325Z'
					fill={color}
				/>
			</svg>
		);
	}
);