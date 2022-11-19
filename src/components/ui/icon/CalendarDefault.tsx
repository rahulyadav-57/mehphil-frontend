import { FC } from 'react';

interface Props {
  className?: string;
}
const CalendarDefault: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      fill="currentColor"
      d="M17.188 3.594h-3.282v-1.25a.157.157 0 0 0-.156-.156h-1.094a.157.157 0 0 0-.156.156v1.25h-5v-1.25a.157.157 0 0 0-.156-.156H6.25a.157.157 0 0 0-.156.156v1.25H2.812a.624.624 0 0 0-.624.625v12.968c0 .346.279.625.624.625h14.376c.345 0 .625-.279.625-.625V4.22a.624.624 0 0 0-.625-.625Zm-.782 12.812H3.594V8.984h12.812v7.422ZM3.594 7.656V5h2.5v.938c0 .085.07.156.156.156h1.094c.086 0 .156-.07.156-.157V5h5v.938c0 .085.07.156.156.156h1.094c.086 0 .156-.07.156-.157V5h2.5v2.656H3.594Z"
    />
  </svg>
);
export default CalendarDefault;
