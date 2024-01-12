import {
  type ColorsType,
  Theme,
  WidgetsStyles,
  BreakpointsType,
  OpacityType,
  MarginsType,
  PaddingsType,
  FontSizesType,
  GapsType,
  LineHeightsType,
  BordersType,
  TextAlignType,
  BoxProperties,
  Themestype,
} from "@/shared/types/theme/theme";

/********* default values  ****************/
export const themeType: Themestype = "light";
export const colors: ColorsType = {
  alert: "red",
  backgroundLighted: "rgb(246, 247, 249)",
  backgroundShadowed: "#777",
  dimmed: "#EAEAEA",
  inverse: "#1B1B1B",
  primary: "#FF6F00",
  secondary: "rgb(98, 63, 51)",
  success: "#31BD3B",
  tertiary: "#2FB5D2",
  textInverse: "white",
  textPrimary: "#000",
  textSecondary: "#8D8D8D",
  textTertiary: "#A3A3A3",
  warning: "#E800FF",
};

export const opacity: OpacityType = {
  darker: 0.8,
  normal: 0.4,
};

export const breakpoints: BreakpointsType = {
  sm: "480px",
  m: "768px",
  l: "1024px",
  xl: "1280px",
};

export const margins: MarginsType = {
  navigationPrimary: "1.875rem",
  navigationSecondary: "1.5625rem",
  primary: "1.875rem",
  secondary: "1.5625rem",
  tertiary: "0.625rem",
  textHPrimary: "0.625rem",
  textHSecondary: "0.9375rem",
  textHTertiary: "0.3125rem",
  titleVPrimary: "1.875rem",
  titleVSecondary: "1.25rem",
};

export const paddings: PaddingsType = {
  primary: "30px",
  primaryH: "20px",
  primaryV: "30px",
  secondary: "20px",
  secondaryH: "15px",
  secondaryV: "20px",
};

export const fontSizes: FontSizesType = {
  heroPrimary: "2.5334rem",
  heroSecondary: "1.875rem",
  heroTertiary: "1.1976rem",
  textPrimary: "1rem",
  textSecondary: "0.875rem",
  textTertiary: "0.75rem",
  titlePrimary: "1.25rem",
  titleSecondary: "1.125rem",
  titleTertiary: "0.875rem",
};

export const gaps: GapsType = {
  primary: "30px",
  secondary: "20px",
  tertiary: "10px",
};

export const lineHeights: LineHeightsType = {
  hero: 1.25,
  subTitle: 1.05,
  title: 1.1,
  textPrimary: 1.71,
  textSecondary: 1.3,
};

export const borders: BordersType = {
  roundedPrimary: "50%",
  roundedSecondary: "15%",
  roundedTertiary: "10%",
  widthPrimary: "2px",
  widthSecondary: "1px",
  widthTertiary: "0.65px",
};

export const textAlign: TextAlignType = {
  default: "left",
};

/********* default palette  ****************/
export const defaultPalette: Theme<WidgetsStyles>["palette"] = {
  themeType,
  colors,
  opacity,
  borders,
  breakpoints,
  fontSizes,
  gaps,
  lineHeights,
  margins,
  paddings,
  textAlign,
};

/********* preset styles  ****************/
const presetBoxProperties: BoxProperties = {
  backgroundColor: colors.backgroundLighted,
  borderRadius: "100%",
  borderWidth: borders.widthSecondary,
  borderColor: colors.dimmed,
  isOutlined: false,
  marginH: "0px",
  marginV: "0px",
  maxWidth: "100%",
  paddingH: "0px",
  paddingV: "0px",
};

/********* default widgets styles  ****************/
// Replace baseLightStyles with another BaseStyles type object to define a new theme's styles
const baseLightStyles: WidgetsStyles = {
  tabs_container: {
    variant: {
      horizontal: {
        ...presetBoxProperties,
      },
      vertical: {
        ...presetBoxProperties,
      },
    },
    sx: {},
  },
  tabs_panel: {
    variant: {
      normal: {
        ...presetBoxProperties,
      },
    },
    sx: {},
  },
  tabs_tab: {
    variant: {
      outlined: {
        ...presetBoxProperties,
        borderWidth: borders.widthSecondary,
        isOutlined: true,
        marginH: margins.navigationSecondary,
        paddingH: paddings.secondaryH,
        paddingV: paddings.secondaryV,
        borderColor: colors.dimmed,
        separatorDirection: "from-center",
        hasSeparator: false,
        separatorHasEffect: false,
        separatorIsHorizontal: true,
        separatorSize: "0px",
        separatorBorderWidth: "0px",
        separatorBorderColor: "",
        separatorWidthFr: 1, // <0, 1> e.g 0.4, means element must take 40% of parent and sibblings 60%
      },
      underlined: {
        ...presetBoxProperties,
        borderWidth: borders.widthPrimary,
        isOutlined: false,
        marginH: margins.navigationSecondary,
        paddingH: paddings.secondaryH,
        paddingV: paddings.secondaryV,
        borderColor: colors.primary,
        separatorDirection: "from-center",
        hasSeparator: true,
        separatorHasEffect: true,
        separatorIsHorizontal: true,
        separatorSize: "100%",
        separatorBorderWidth: borders.widthPrimary,
        separatorBorderColor: colors.primary,
        separatorWidthFr: 1,
      },
    },
    sx: {},
  },
  tabs_tab_list: {
    variant: {
      horizontal: {
        ...presetBoxProperties,
        hasSeparator: false,
        separatorBorderColor: "",
        separatorBorderWidth: "0px",
        separatorIsHorizontal: true,
        separatorSize: "0px",
      },
      vertical: {
        ...presetBoxProperties,
      },
    },
    sx: {},
  },
};
const baseDarkStyles: WidgetsStyles = { ...baseLightStyles };

/********* theme  ****************/
export const theme: Theme<WidgetsStyles> = {
  widgets: {
    light: baseLightStyles,
    dark: baseDarkStyles,
  },
  palette: defaultPalette,
};
