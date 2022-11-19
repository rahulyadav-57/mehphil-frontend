import { FC } from 'react';

interface Props {
  className?: string;
}
const User: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 21a1 1 0 1 0 2 0h-2ZM4 21a1 1 0 1 0 2 0H4Zm16 0a8 8 0 0 0-8-8v2a6 6 0 0 1 6 6h2Zm-8-8a8 8 0 0 0-8 8h2a6 6 0 0 1 6-6v-2Zm0-3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5v-2ZM9 7a3 3 0 0 1 3-3V2a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm3 3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Z"
      fill="currentColor"
    />
  </svg>
);
export default User;
