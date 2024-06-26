import { FC } from 'react';

interface Props {
  className?: string;
}

export const Play: FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg
      className={`${className}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_248_138)">
        <path d="M2.55273 0.264591C1.47086 -0.355984 0.59375 0.152398 0.59375 1.39919V10.5999C0.59375 11.848 1.47086 12.3557 2.55273 11.7357L10.5946 7.12372C11.6769 6.50293 11.6769 5.49715 10.5946 4.8765L2.55273 0.264591Z" />
      </g>
    </svg>
  );
};
