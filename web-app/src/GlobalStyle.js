import { createGlobalStyle } from "styled-components";

export const INPUT_PADDING = 12;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:focus, button:active, input:active, link:active {
    outline: none;
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.mainTextColor};
  }

  body {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.mainTextColor};
    background-color: ${({ theme }) => theme.mainBackgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const darkTheme = {
  mainBackgroundColor: "#2c3338",
  asideBackgroundColor: "#1d2327",
  mainTextColor: "white",
  errorColor: "red",
};

export const lightTheme = {
  mainBackgroundColor: "#d3ccc7",
  asideBackgroundColor: "#e2dcd8",
  mainTextColor: "black",
};
