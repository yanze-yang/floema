import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "George X";
    src: url("/fonts/george_x.woff") format("woff");
    font-display: fallback;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
