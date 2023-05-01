import '@/styles/globals.css';
import GlobalStyle from '../components/globalStyle';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const theme: DefaultTheme = {
  fonts: {
    inter: 'Inter, sans-serif',
    karla: 'Karla, sans-serif',
  },
  colors: {
    primary: '#FF3968',
    background: '#14161A',
    onBackground: '#242830',
    text: '#E3E3E3',
    offWhite: '#AEB0B2',
    fade: '#3B414F',
    lightFade: '#565D6B',
  },

  measurements: {
    sidebar: '250px',
  },

  breakpoints: {
    mobile: '768px',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
