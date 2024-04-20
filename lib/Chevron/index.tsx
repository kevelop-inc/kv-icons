import { FC } from "react";

interface Props {
  classes?: string;
}

export const Chevron: FC<Props> = (props) => {
  const { classes } = props;

  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.92 9.69604L13.4 16.216C12.63 16.986 11.37 16.986 10.6 16.216L4.07996 9.69604"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
