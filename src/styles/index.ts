import { createGlobalStyle } from "styled-components";

import core from "./core";
import theme from "./theme";
import fonts from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${core}
`;

export { GlobalStyles, theme };
