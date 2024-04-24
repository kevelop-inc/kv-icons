import { FC } from 'react';

interface Props {
  className?: string;
}

export const Tick: FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg
      className={`${className}`}
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
