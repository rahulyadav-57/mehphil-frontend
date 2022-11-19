import { FC } from 'react';

interface Props {
  className?: string;
}
const MapMarker: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    className={className}
  >
    <path
      fill="currentColor"
      d="M10 4.068a3.183 3.183 0 1 0 0 6.366 3.183 3.183 0 0 0 0-6.366Zm0 5.255a2.072 2.072 0 1 1 2.072-2.072A2.072 2.072 0 0 1 10 9.318v.005Z"
    />
    <path
      fill="currentColor"
      d="M10 1.446a6.55 6.55 0 0 0-6.544 6.516c0 2.595 1.455 4.767 2.522 6.35l.194.29a55.34 55.34 0 0 0 3.411 4.444l.423.494.422-.494a55.455 55.455 0 0 0 3.41-4.445l.195-.294c1.062-1.584 2.517-3.75 2.517-6.345A6.55 6.55 0 0 0 10 1.446Zm3.106 12.222-.2.294A45.181 45.181 0 0 1 10 17.796c-.656-.795-1.95-2.4-2.906-3.834l-.194-.294C5.917 12.2 4.567 10.196 4.567 7.94a5.433 5.433 0 0 1 10.866 0c0 2.278-1.344 4.283-2.327 5.728Z"
    />
  </svg>
);
export default MapMarker;
