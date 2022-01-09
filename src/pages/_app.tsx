import '@/styles/fonts.css';

import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { darkTheme, Theme, theme, ThemeName } from '@/styles/theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.background}
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [current, setCurrentTheme] = useState<Theme>(theme);

  const setThemeFromName = (themeName: ThemeName) => {
    if (themeName === ThemeName.Dark) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(theme);
    }
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme: dark)`).matches
    ) {
      setThemeFromName(ThemeName.Dark);
    }

    window
      .matchMedia(`(prefers-color-scheme: dark)`)
      .addEventListener(`change`, (event) => {
        const themeName = event.matches ? `dark` : `light`;
        setThemeFromName(themeName as ThemeName);
      });
  }, []);

  return (
    <ThemeProvider theme={current}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
