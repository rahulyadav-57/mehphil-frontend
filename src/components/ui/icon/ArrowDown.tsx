import { FC } from 'react';

interface Props {
  className?: string;
}
const ArrowDown: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.707 9.707a1 1 0 0 0-1.414-1.414l1.414 1.414ZM12 16l-.707.707a1 1 0 0 0 1.414 0L12 16ZM5.707 8.293a1 1 0 0 0-1.414 1.414l1.414-1.414Zm12.586 0-7 7 1.414 1.414 7-7-1.414-1.414Zm-5.586 7-7-7-1.414 1.414 7 7 1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDown;
