import { FC } from 'react';

interface Props {
  className?: string;
}
const Dashboard: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12H4V4h6v8Zm0 8H4v-4h6v4Zm10 0h-6v-8h6v8ZM14 8V4h6v4h-6Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default Dashboard;
