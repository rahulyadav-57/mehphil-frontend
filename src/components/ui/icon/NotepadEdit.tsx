import { FC } from 'react';

interface Props {
  className?: string;
}
const NotepadEdit: FC<Props> = ({ className = '' }) => (
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
      d="M17 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 17h3m10.71-9.31-1.4-1.4a1 1 0 0 0-1.4 0L13 11.2V14h2.8l4.91-4.91a1 1 0 0 0 0-1.4v0Z"
    />
  </svg>
);
export default NotepadEdit;
