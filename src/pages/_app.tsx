import '@/styles/fonts.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
