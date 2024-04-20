import { FC } from "react";

interface Props {
  classes?: string;
}

export const Tick: FC<Props> = (props) => {
  const { classes } = props;

  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.95825 9.99993L9.31659 12.3583L14.0416 7.6416"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
