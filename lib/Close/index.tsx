import { FC } from "react";

interface Props {
  classes?: string;
}

export const Close: FC<Props> = (props) => {
  const { classes } = props;

  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 8 8"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_396_853)">
        <path
          d="M0.666748 7.33317L7.33342 0.666504"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33342 7.33317L0.666748 0.666504"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
