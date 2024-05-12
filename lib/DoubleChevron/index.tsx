import { forwardRef } from "react";
import { IconDirection, IconProps } from "../icon-props";
import { getRotation } from "../utils";

interface Props extends IconProps {
  size?: number;
  direction?: IconDirection;
}

export const DoubleChevron = forwardRef<SVGSVGElement, Props>(
  (
    { color = "currentColor", direction = "right", size = 24, ...props },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        style={{
          transform: `rotate(${getRotation(direction)}deg)`,
          ...props.style,
        }}
        viewBox="0 0 11 11"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.933533 10.5656C0.621114 10.2532 0.621114 9.74664 0.933533 9.43422L4.93353 5.43422C5.24595 5.1218 5.75248 5.1218 6.0649 5.43422L10.0649 9.43422C10.3773 9.74664 10.3773 10.2532 10.0649 10.5656C9.75249 10.878 9.24595 10.878 8.93353 10.5656L5.49922 7.13127L2.0649 10.5656C1.75248 10.878 1.24595 10.878 0.933533 10.5656ZM0.933533 5.76559C0.621114 5.45317 0.621114 4.94664 0.933533 4.63422L4.93353 0.634217C5.24595 0.321797 5.75248 0.321797 6.0649 0.634217L10.0649 4.63422C10.3773 4.94664 10.3773 5.45317 10.0649 5.76559C9.75249 6.07801 9.24595 6.07801 8.93353 5.76559L5.49922 2.33127L2.0649 5.76559C1.75248 6.07801 1.24595 6.07801 0.933533 5.76559Z"
          fill={color}
        />
      </svg>
    );
  }
);
