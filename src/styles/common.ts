import { css } from "lit";
import { palette } from "./palette";

export const commonStyles = css`
  html, body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none !important;
    color: ${palette.blue100};
  }
  a:hover {
    color: ${palette.blue60};
  }
  a:active {
    color: ${palette.blue50};
  }

  a, button {
    outline: none;
  }

  code, pre {
    font-family: var(--codeFont);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;
