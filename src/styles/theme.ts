import { rem } from "polished";

import colors from "./colors";
import mediaQueries from "./mediaQueries";

const variables = {
  bodyBg: colors.white,
  textColor: colors.black,
  btnFontWeight: "400",

  baseSpacingUnit: rem("24px"),
  halfSpacingUnit: rem("12px"),

  fontFamilyBase: "OpenSans",
  fontSizeBaseMobile: "12px",
  fontSizeBase: "16px",
  lineHeightBase: "1.6",
  fontWeightBase: "400",

  headingsFontFamily: "OpenSans",
  headingsFontWeight: "300",
  headingsLineHeight: "1.2",
};

export default {
  variables,
  colors,
  mediaQueries,
};
