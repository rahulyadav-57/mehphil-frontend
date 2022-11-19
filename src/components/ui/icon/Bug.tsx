import { FC } from 'react';

interface Props {
  className?: string;
}
const Bug: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 18a5 5 0 0 1 2.72 3M8 18a5 5 0 0 0-2.72 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 15v-5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5Zm-2-6H9V7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.222 3a2.82 2.82 0 0 1-1.82 2.05l-.89.31M7 3c.077.397.24.765.475 1.069.235.304.534.534.868.668L9 5M21 7.1l-.53.9A5.42 5.42 0 0 1 17 10.47v0M17 13.5a5.061 5.061 0 0 1 3.65 2.31l.35.55M7 10.47A5.419 5.419 0 0 1 3.53 8L3 7.1M3 16.36l.35-.55A5.06 5.06 0 0 1 7 13.5v0"
    />
  </svg>
);
export default Bug;
