import { forwardRef } from "react";
import { IconProps } from "../icon-props";

interface Props extends IconProps {
  size?: number;
}

export const Link = forwardRef<SVGSVGElement, Props>(
  ({ color = "currentColor", size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 17"
        fill="none"
        {...props}
      >
        <path
          d="M10.9686 3.66873C11.5935 3.04389 12.6065 3.04389 13.2314 3.66873C13.8562 4.29357 13.8562 5.30663 13.2314 5.93147L10.8314 8.33147C10.2065 8.95631 9.19345 8.95631 8.56861 8.33147C8.2562 8.01905 7.74966 8.01905 7.43724 8.33147C7.12482 8.64389 7.12482 9.15042 7.43724 9.46284C8.68692 10.7125 10.713 10.7125 11.9627 9.46284L14.3627 7.06284C15.6124 5.81316 15.6124 3.78703 14.3627 2.53736C13.1131 1.28768 11.0869 1.28768 9.83724 2.53736L8.63724 3.73736C8.32482 4.04978 8.32482 4.55631 8.63724 4.86873C8.94966 5.18115 9.4562 5.18115 9.76861 4.86873L10.9686 3.66873Z"
          fill={color}
        />
        <path
          d="M6.96863 7.66873C7.59347 7.04389 8.60653 7.04389 9.23137 7.66873C9.54379 7.98115 10.0503 7.98115 10.3627 7.66873C10.6752 7.35631 10.6752 6.84978 10.3627 6.53736C9.11306 5.28768 7.08694 5.28768 5.83726 6.53736L3.43726 8.93736C2.18758 10.187 2.18758 12.2132 3.43726 13.4628C4.68694 14.7125 6.71306 14.7125 7.96274 13.4628L9.16274 12.2628C9.47516 11.9504 9.47516 11.4439 9.16274 11.1315C8.85032 10.819 8.34379 10.819 8.03137 11.1315L6.83137 12.3315C6.20653 12.9563 5.19347 12.9563 4.56863 12.3315C3.94379 11.7066 3.94379 10.6936 4.56863 10.0687L6.96863 7.66873Z"
          fill={color}
        />
      </svg>
    );
  }
);
