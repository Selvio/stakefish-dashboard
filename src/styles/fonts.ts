import { css } from "styled-components";

import OpenSansLightWoff from "../assets/fonts/OpenSans-Light.woff";
import OpenSansLightWoff2 from "../assets/fonts/OpenSans-Light.woff2";
import OpenSansRegularWoff from "../assets/fonts/OpenSans-Regular.woff";
import OpenSansRegularWoff2 from "../assets/fonts/OpenSans-Regular.woff2";
import OpenSansBoldWoff from "../assets/fonts/OpenSans-Bold.woff";
import OpenSansBoldWoff2 from "../assets/fonts/OpenSans-Bold.woff2";

export default css`
  @font-face {
    font-family: "OpenSans";
    src: url(${OpenSansLightWoff2}) format("woff2"),
      url(${OpenSansLightWoff}) format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "OpenSans";
    src: url(${OpenSansRegularWoff2}) format("woff2"),
      url(${OpenSansRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "OpenSans";
    src: url(${OpenSansBoldWoff2}) format("woff2"),
      url(${OpenSansBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
  }
`;
