import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'styles/theme.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
