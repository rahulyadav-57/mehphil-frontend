import { FC } from 'react';

interface Props {
  className?: string;
}
const Discourse: FC<Props> = ({ className = '' }) => (
  <svg
    className={`app-icon ${className}`}
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.074 1.21c-4.808 0-8.863 3.864-8.863 8.638l.004 8.941 8.86-.008c4.816 0 8.714-4.015 8.714-8.785 0-4.77-3.898-8.785-8.715-8.785ZM10 15.024a4.933 4.933 0 0 1-2.133-.476l-3.183.789.898-2.941A5.025 5.025 0 1 1 15.023 10 5.025 5.025 0 0 1 10 15.023Z"
      fill="currentColor"
    />
  </svg>
);
export default Discourse;
