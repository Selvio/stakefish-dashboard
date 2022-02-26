import { css } from "styled-components";

import mediaQueries from "./mediaQueries";

export default css`
  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: ${({ theme }) => theme.variables.fontSizeBaseMobile};

    @media ${mediaQueries.small} {
      font-size: ${({ theme }) => theme.variables.fontSizeBase};
    }
  }

  body {
    background-color: ${({ theme }) => theme.variables.bodyBg};
    background-size: 100%;
    color: ${({ theme }) => theme.variables.textColor};
    font-family: ${({ theme }) => theme.variables.fontFamilyBase};
    font-weight: ${({ theme }) => theme.variables.fontWeightBase};
    margin: 0;
    overflow: hidden;
  }

  input,
  button,
  select,
  textarea {
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    font-size: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
    text-transform: inherit;
    transition: 0.3s;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    display: block;
    font-family: ${({ theme }) => theme.variables.headingsFontFamily};
    font-weight: ${({ theme }) => theme.variables.headingsFontWeight};
    line-height: ${({ theme }) => theme.variables.headingsLineHeight};
    margin-top: 0;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3 {
    margin-bottom: ${({ theme }) => theme.variables.baseSpacingUnit};
  }

  h4,
  h5,
  h6 {
    margin-bottom: ${({ theme }) => theme.variables.halfSpacingUnit};
  }

  p {
    line-height: ${({ theme }) => theme.variables.lineHeightBase};
    margin: 0 0 ${({ theme }) => theme.variables.baseSpacingUnit};
  }
`;
