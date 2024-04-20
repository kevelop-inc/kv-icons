import { FC } from 'react';

interface Props {
  classes?: string;
}

export const ArrowDown: FC<Props> = (props) => {
  const { classes } = props;

  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 14 14"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5835 2.33333C7.5835 2.01117 7.32234 1.75 7.00016 1.75C6.67799 1.75 6.41683 2.01117 6.41683 2.33333V10.2583L3.3293 7.17086C3.1015 6.94307 2.73215 6.94307 2.50435 7.17086C2.27654 7.39865 2.27654 7.76802 2.50435 7.99581L6.58769 12.0791C6.81548 12.3069 7.18485 12.3069 7.41264 12.0791L11.496 7.99581C11.7238 7.76802 11.7238 7.39865 11.496 7.17086C11.2682 6.94307 10.8988 6.94307 10.671 7.17086L7.5835 10.2583V2.33333Z"
        fill="inherit"
      />
    </svg>
  );
};
