import { FC } from 'react';

interface Props {
  className?: string;
}
const Twitter: FC<Props> = ({ className = '' }) => (
  <svg
    className={`app-icon ${className}`}
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.616 6.908c-.207-1.725.166-3.14 1.487-4.2a3.84 3.84 0 0 1 2.357-.905 3.849 3.849 0 0 1 2.413.748 1.689 1.689 0 0 0 1.965.218c.356-.163.727-.297 1.09-.444l.165.133-1.547 1.937 2.052-.437c-.546.559-.938 1.02-1.397 1.407a1.307 1.307 0 0 0-.515 1.055c-.23 4.739-2.263 8.467-6.66 10.619-3.502 1.715-7.08 1.46-10.544-.298-.031-.016-.035-.084-.084-.218a8.786 8.786 0 0 0 5.454-1.876c-1.78-.31-3.115-1.04-3.727-2.728l1.5-.136C1.844 10.959.74 9.766.571 7.767l1.619.353C.676 6.517.133 4.81 1.092 2.66c2.275 2.532 5.003 4.054 8.524 4.248Z"
      fill="currentColor"
    />
  </svg>
);
export default Twitter;