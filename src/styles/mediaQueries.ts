const screenSizes = {
  screenExtraSmall: 321,
  screenSmall: 620,
  screenMedium: 768,
  screenLarge: 1024,
  screenExtraLarge: 1280,
};

const mediaQueries = {
  screen: 'only screen',
  extraSmall: `only screen and (min-width: ${screenSizes.screenExtraSmall}px)`,
  small: `only screen and (min-width: ${screenSizes.screenSmall}px)`,
  medium: `only screen and (min-width: ${screenSizes.screenMedium}px)`,
  extraLarge: `only screen and (min-width: ${screenSizes.screenExtraLarge}px)`,
  large: `only screen and (min-width: ${screenSizes.screenLarge}px)`,
  smallMax: `only screen and (max-width: ${screenSizes.screenSmall - 1}px)`,
  mediumMax: `only screen and (max-width: ${screenSizes.screenMedium - 1}px)`,
  largeMax: `only screen and (max-width: ${screenSizes.screenLarge - 1}px)`,
  extraLargeMax: `only screen and (max-width: ${
    screenSizes.screenExtraLarge - 1
  }px)`,
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
};

export default mediaQueries;
