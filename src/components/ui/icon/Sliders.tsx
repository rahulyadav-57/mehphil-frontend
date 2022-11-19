import { FC } from 'react';

interface Props {
  className?: string;
}
const Sliders: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 17a1 1 0 1 0 0 2v-2Zm7 2a1 1 0 1 0 0-2v2ZM3 17a1 1 0 1 0 0 2v-2Zm17-6a1 1 0 1 0 0 2v-2Zm1 2a1 1 0 1 0 0-2v2ZM3 11a1 1 0 1 0 0 2v-2Zm7 2a1 1 0 1 0 0-2v2Zm11-6a1 1 0 1 0 0-2v2ZM3 5a1 1 0 0 0 0 2V5Zm1 2a1 1 0 0 0 0-2v2Zm10 12h7v-2h-7v2ZM3 19h2v-2H3v2Zm4.5.5A1.5 1.5 0 0 1 6 18H4a3.5 3.5 0 0 0 3.5 3.5v-2ZM6 18a1.5 1.5 0 0 1 1.5-1.5v-2A3.5 3.5 0 0 0 4 18h2Zm1.5-1.5A1.5 1.5 0 0 1 9 18h2a3.5 3.5 0 0 0-3.5-3.5v2ZM9 18a1.5 1.5 0 0 1-1.5 1.5v2A3.5 3.5 0 0 0 11 18H9Zm11-5h1v-2h-1v2ZM3 13h7v-2H3v2Zm13.5.5A1.5 1.5 0 0 1 15 12h-2a3.5 3.5 0 0 0 3.5 3.5v-2ZM15 12a1.5 1.5 0 0 1 1.5-1.5v-2A3.5 3.5 0 0 0 13 12h2Zm1.5-1.5A1.5 1.5 0 0 1 18 12h2a3.5 3.5 0 0 0-3.5-3.5v2ZM18 12a1.5 1.5 0 0 1-1.5 1.5v2A3.5 3.5 0 0 0 20 12h-2Zm-5-5h8V5h-8v2ZM3 7h1V5H3v2Zm7.5.5A1.5 1.5 0 0 1 9 6H7a3.5 3.5 0 0 0 3.5 3.5v-2ZM9 6a1.5 1.5 0 0 1 1.5-1.5v-2A3.5 3.5 0 0 0 7 6h2Zm1.5-1.5A1.5 1.5 0 0 1 12 6h2a3.5 3.5 0 0 0-3.5-3.5v2ZM12 6a1.5 1.5 0 0 1-1.5 1.5v2A3.5 3.5 0 0 0 14 6h-2Z"
      fill="currentColor"
    />
  </svg>
);
export default Sliders;
