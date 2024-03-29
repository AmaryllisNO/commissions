import '@/styles/globals.css';
import GlobalStyle from '../components/globalStyle';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { NextUIProvider } from '@nextui-org/react';
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
    transparentBackground: '#14161ab1',
    onBackground: '#242830',
    text: '#E3E3E3',
    offWhite: '#AEB0B2',
    fade: '#3B414F',
    lightFade: '#565D6B',
  },

  measurements: {
    sidebar: '250px',
    desktopMaxWidth: '1200px',
  },

  breakpoints: {
    mobile: '768px',
    desktop: '1200px',
    tablet: '1024px',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} dark`}>
      <NextUIProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </main>
  );
}
