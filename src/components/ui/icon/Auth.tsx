import { FC } from 'react';

interface Props {
  className?: string;
}
const Auth: FC<Props> = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="m3.218 7.092.891.454-.891-.454Zm.874-.874.454.891-.454-.891Zm0 11.564.454-.891-.454.891Zm-.874-.874-.891.454.891-.454Zm17.564 0-.89-.454.89.454Zm-.874.874-.454-.891.454.891Zm.874-10.69-.89.454.89-.454Zm-.874-.874.454-.891-.454.891ZM11 18a1 1 0 1 0 2 0h-2Zm-6 0a1 1 0 1 0 2 0H5Zm13-3a1 1 0 1 0 0-2v2Zm-4-2a1 1 0 1 0 0 2v-2Zm4-1a1 1 0 1 0 0-2v2Zm-3-2a1 1 0 1 0 0 2v-2Zm-6 2a1 1 0 0 1-1-1H6a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V8a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm10-1.8v5.6h2V9.2h-2ZM17.8 17H6.2v2h11.6v-2ZM4 14.8V9.2H2v5.6h2ZM6.2 7h11.6V5H6.2v2ZM4 9.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422l-1.782-.908c-.193.378-.264.772-.296 1.167C1.999 8.189 2 8.656 2 9.2h2ZM6.2 5c-.543 0-1.011 0-1.395.03-.395.033-.789.104-1.167.297l.908 1.782c.05-.025.15-.063.422-.085C5.25 7 5.624 7 6.2 7V5ZM4.11 7.546a1 1 0 0 1 .437-.437l-.908-1.782a3 3 0 0 0-1.311 1.311l1.782.908ZM6.2 17c-.576 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085l-.908 1.782c.378.193.772.264 1.167.296.384.032.852.031 1.395.031v-2ZM2 14.8c0 .543 0 1.011.03 1.395.033.395.104.789.297 1.167l1.782-.908c-.025-.05-.063-.15-.085-.422C4 15.75 4 15.377 4 14.8H2Zm2.546 2.091a1 1 0 0 1-.437-.437l-1.782.908a3 3 0 0 0 1.31 1.311l.909-1.782ZM20 14.8c0 .577 0 .949-.024 1.232-.022.272-.06.373-.085.422l1.782.908c.193-.378.264-.772.297-1.167.03-.384.03-.852.03-1.395h-2ZM17.8 19c.544 0 1.011 0 1.395-.03.395-.033.788-.104 1.167-.297l-.908-1.782c-.05.025-.15.063-.422.085C18.75 17 18.377 17 17.8 17v2Zm2.091-2.546a1 1 0 0 1-.437.437l.908 1.782a3 3 0 0 0 1.311-1.311l-1.782-.908ZM22 9.2c0-.543 0-1.011-.03-1.395-.033-.395-.104-.788-.297-1.167l-1.782.908c.025.05.063.15.085.422C20 8.25 20 8.623 20 9.2h2ZM17.8 7c.577 0 .949 0 1.232.024.272.022.372.06.422.085l.908-1.782c-.378-.193-.772-.264-1.167-.296C18.811 4.999 18.344 5 17.8 5v2Zm3.873-.362a3 3 0 0 0-1.311-1.311l-.908 1.782a1 1 0 0 1 .437.437l1.782-.908ZM13 18c0-.99-.602-1.765-1.324-2.246C10.947 15.268 9.998 15 9 15v2c.659 0 1.21.18 1.567.418.364.243.433.468.433.582h2Zm-4-3c-.998 0-1.947.268-2.676.754C5.602 16.234 5 17.009 5 18h2c0-.114.07-.34.433-.582C7.79 17.18 8.341 17 9 17v-2Zm9-2h-4v2h4v-2Zm0-3h-3v2h3v-2Z"
      fill="currentColor"
    />
  </svg>
);
export default Auth;