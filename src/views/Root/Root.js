import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from 'components/atoms/Button/Button';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>dasdsa</Button>
        <h1>GORCJAN</h1>
      </>
    </ThemeProvider>
  </>
);

export default Root;
