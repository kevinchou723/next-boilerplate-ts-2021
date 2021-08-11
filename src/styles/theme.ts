import { createGlobalStyle } from 'styled-components';

import type { ZBDTheme } from '../types/styles/theme.d';

type Props = {
  theme: ZBDTheme;
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: Props) => theme.primary};
    color: ${({ theme }: Props) => theme.secondary};
  }
`;

export const lightTheme = {
  primary: '#f1f1f1',
  secondary: '#121620',
};

export const darkTheme = {
  primary: '#121620',
  secondary: '#f1f1f1',
};
