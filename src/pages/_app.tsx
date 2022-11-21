import ArcanaAuthWrapper from '@/provider/ArcanaAuthWrapper';
import type { AppProps } from 'next/app';
import 'react-phone-input-2/lib/style.css';
import { RecoilRoot } from 'recoil';

import 'styles/theme.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ArcanaAuthWrapper>
        <Component {...pageProps} />
      </ArcanaAuthWrapper>
    </RecoilRoot>
  );
}
