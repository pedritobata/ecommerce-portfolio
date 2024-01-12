import { CustomizableStyles } from "@/components/ui/theme-provider/types";
import { WidgetsAndVariants as GridWidgetsAndVariants } from "./widgets/grid";
import { WidgetsAndVariants as TabWidgetsAndVariants } from "./widgets/tabs";

export interface Theme<T> {
  widgets: {
    [key in Themestype]: T;
  };
  palette: {
    themeType: Themestype;
    colors: ColorsType;
    opacity: OpacityType;
    breakpoints: BreakpointsType;
    margins: MarginsType;
    paddings: PaddingsType;
    fontSizes: FontSizesType;
    gaps: GapsType;
    lineHeights: LineHeightsType;
    borders: BordersType;
    textAlign: TextAlignType;
  };
}

/********* palette types  ****************/
export type Themestype = "light" | "dark";

export interface ColorsType {
  primary: string;
  secondary: string;
  tertiary: string;
  inverse: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textInverse: string;
  backgroundLighted: string;
  backgroundShadowed: string;
  alert: string;
  success: string;
  warning: string;
  dimmed: string;
}

export interface OpacityType {
  normal: number;
  darker: number;
}

export interface BreakpointsType {
  sm: string;
  m: string;
  l: string;
  xl: string;
}

export interface MarginsType {
  primary: string;
  secondary: string;
  tertiary: string;
  navigationPrimary: string;
  navigationSecondary: string;
  textHPrimary: string;
  textHSecondary: string;
  textHTertiary: string;
  titleVPrimary: string;
  titleVSecondary: string;
}

export interface PaddingsType {
  primary: string;
  secondary: string;
  primaryH: string;
  secondaryH: string;
  primaryV: string;
  secondaryV: string;
}

export interface FontSizesType {
  heroPrimary: string;
  heroSecondary: string;
  heroTertiary: string;
  titlePrimary: string;
  titleSecondary: string;
  titleTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
}

export interface GapsType {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface LineHeightsType {
  hero: number;
  title: number;
  subTitle: number;
  textPrimary: number;
  textSecondary: number;
}

export interface BordersType {
  widthPrimary: string;
  widthSecondary: string;
  widthTertiary: string;
  roundedPrimary: string;
  roundedSecondary: string;
  roundedTertiary: string;
}

export interface TextAlignType {
  default: string;
}
/********* shared widgets properties  ****************/
export interface BoxProperties {
  // TODO: at the end this must be string[] to support responsive design on breakpoints
  paddingV: string;
  paddingH: string;
  marginV: string;
  marginH: string;
  maxWidth: string;
  backgroundColor: string;
  isOutlined: boolean;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
}

export interface SeparatorProperties {
  separatorIsHorizontal: boolean;
  separatorBorderWidth: string;
  separatorBorderColor: string;
  separatorSize: string;
}

export interface SeparatorEffect {
  separatorHasEffect: boolean;
  separatorWidthFr: number;
  separatorDirection: "from-center" | "from-left" | "from-right";
}

/********* widgets styles types  ****************/
export type WidgetsAndVariants = TabWidgetsAndVariants; //& GridWidgetsAndVariants

export type WidgetsStyles = {
  [key in keyof WidgetsAndVariants]: {
    variant: WidgetsAndVariants[key];
  } & CustomizableStyles;
};
