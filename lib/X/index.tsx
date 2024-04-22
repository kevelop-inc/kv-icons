import { FC } from "react";

interface Props {
  classes?: string;
}

export const X: FC<Props> = (props) => {
  const { classes } = props;

  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.524 10.7756L19.481 4H18.0696L12.8948 9.88195L8.76466 4H4L10.2469 12.8953L4 20H5.41143L10.8728 13.787L15.2353 20H20L16.762 15.3878L13.524 10.7756ZM11.5902 12.9734L10.9563 12.0871L5.92043 5.04117H8.08867L12.154 10.7296L12.7852 11.6159L18.0689 19.0096H15.9006L11.5902 12.9734Z" />
    </svg>
  );
};
