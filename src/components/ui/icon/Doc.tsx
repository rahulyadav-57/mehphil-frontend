import { FC } from 'react';

interface Props {
  className?: string;
}
const Doc: FC<Props> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19 17.8h-1 1Zm0-8.146h1-1Zm-.852-2.174-.733.68.733-.68ZM14.95 4.026l-.734.68.734-.68ZM8.2 21v-1 1Zm7.6 0v1-1ZM5.218 19.908l.891-.454-.891.454Zm.874.874.454-.891-.454.891Zm0-17.564.454.891-.454-.891Zm-.874.874-.891-.454.891.454Zm8.999-.769-.546.839.546-.839Zm-.602-.262.245-.97-.245.97Zm5.335 5.678-.975.223.975-.223Zm-.217-.554.867-.5-.867.5Zm.05 11.723.89.454-.89-.454Zm-.875.874.454.891-.454-.891ZM9 16a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 1 0 0-2v2Zm-6-5a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 1 0 0-2v2Zm4-5a1 1 0 1 0 0-2v2Zm-4.4-1V8v1ZM14 3a1 1 0 1 0-2 0h2Zm-.454 5.891L14 8l-.454.891Zm-.437-.437L14 8l-.891.454ZM20 17.8V9.654h-2V17.8h2Zm-1.118-11-3.198-3.454-1.468 1.36 3.199 3.453L18.882 6.8ZM12.602 2H8.2v2h4.402V2ZM4 6.2v11.6h2V6.2H4ZM8.2 22h7.6v-2H8.2v2ZM4 17.8c0 .544 0 1.011.03 1.395.033.395.104.789.297 1.167l1.782-.908c-.025-.05-.063-.15-.085-.422C6 18.75 6 18.377 6 17.8H4ZM8.2 20c-.576 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085l-.908 1.782c.378.193.772.264 1.167.296.384.032.852.031 1.395.031v-2Zm-3.873.362a3 3 0 0 0 1.31 1.311l.909-1.782a1 1 0 0 1-.437-.437l-1.782.908ZM8.2 2c-.543 0-1.011 0-1.395.03-.395.033-.789.104-1.167.297l.908 1.782c.05-.025.15-.063.422-.085C7.25 4 7.624 4 8.2 4V2ZM6 6.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422l-1.782-.908c-.193.378-.264.772-.296 1.167C3.999 5.189 4 5.656 4 6.2h2Zm-.362-3.873a3 3 0 0 0-1.311 1.311l1.782.908a1 1 0 0 1 .437-.437l-.908-1.782Zm10.046 1.02c-.316-.342-.585-.643-.922-.862l-1.09 1.677c.08.052.16.129.544.543l1.468-1.359ZM12.602 4c.566 0 .676.007.768.03l.49-1.939C13.47 1.993 13.067 2 12.602 2v2Zm2.16-1.515a3.002 3.002 0 0 0-.902-.394l-.49 1.94a1 1 0 0 1 .302.13l1.09-1.676ZM20 9.654c0-.418.006-.782-.075-1.137l-1.95.445c.02.084.025.183.025.692h2Zm-2.585-1.495c.345.374.409.45.452.525l1.733-.998c-.182-.316-.434-.579-.718-.886l-1.467 1.36Zm2.51.358a3.001 3.001 0 0 0-.325-.831l-1.733.998c.05.086.086.18.108.278l1.95-.445ZM18 17.8c0 .577 0 .949-.024 1.232-.022.272-.06.373-.085.422l1.782.908c.193-.378.264-.772.297-1.167.03-.384.03-.852.03-1.395h-2ZM15.8 22c.544 0 1.011 0 1.395-.03.395-.033.788-.104 1.167-.297l-.908-1.782c-.05.025-.15.063-.422.085C16.75 20 16.377 20 15.8 20v2Zm2.091-2.546a1 1 0 0 1-.437.437l.908 1.782a3 3 0 0 0 1.311-1.311l-1.782-.908ZM9 18h6v-2H9v2Zm0-3h6v-2H9v2Zm10-7h-4.4v2H19V8Zm-5-.6V3h-2v4.4h2Zm.6.6c-.297 0-.46 0-.576-.01-.104-.009-.081-.02-.024.01l-.908 1.782c.271.138.54.182.77.201.216.018.474.017.738.017V8ZM12 7.4c0 .264 0 .521.017.738.019.229.063.499.201.77L14 8c.03.058.019.08.01-.025A8.205 8.205 0 0 1 14 7.4h-2Zm2 .6-1.782.908a2 2 0 0 0 .874.874L14 8Z"
    />
  </svg>
);
export default Doc;
