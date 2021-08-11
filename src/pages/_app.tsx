import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { lightTheme, darkTheme, GlobalStyles } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  // const toggleTheme = () => setTheme(isDarkTheme ? 'light': 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
