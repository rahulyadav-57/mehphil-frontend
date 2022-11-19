import { FC } from 'react';

interface Props {
  className?: string;
}
const Bell: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="17" cy="6" r="5" fill="#13A3FD" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.047 3.304A7 7 0 0 0 5 10v3.722a.67.67 0 0 1-.196.474l-.511.511a1 1 0 0 0-.293.707V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707l-.51-.51a.67.67 0 0 1-.197-.475V10a6.92 6.92 0 0 0-.02-.524M15 17v1a3 3 0 1 1-6 0v-1h6Zm6-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default Bell;
