import { FC } from 'react';

interface Props {
  className?: string;
}
const Clock: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <g fill="currentColor">
      <path d="M10 1.25a8.75 8.75 0 1 0 .001 17.501A8.75 8.75 0 0 0 10 1.25Zm0 16.016a7.267 7.267 0 0 1 0-14.532 7.267 7.267 0 0 1 0 14.532Z" />
      <path d="m13.412 12.473-2.785-2.014V5.625a.157.157 0 0 0-.156-.156h-.94a.157.157 0 0 0-.156.156v5.379c0 .05.023.098.064.127l3.23 2.355c.071.051.169.035.22-.033l.558-.762a.156.156 0 0 0-.035-.218Z" />
    </g>
  </svg>
);
export default Clock;
