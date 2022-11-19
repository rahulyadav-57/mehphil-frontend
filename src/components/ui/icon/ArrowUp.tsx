import { FC } from 'react';

interface Props {
  className?: string;
}
const ArrowUp: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m5 16 7-7 7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowUp;
