import type * as CSS from "csstype";
import { CustomizableStyles, Style } from "@/components/ui/theme-provider/types";
import { WidgetsAndVariants as GridWidgetsAndVariants } from "./widgets/grid";

export interface Theme<T, U> {
  widgets: {
    light: T;
    dark: T;
  };
  colors: {
    light: U;
    dark: U;
  };
  breakpoints: {};
  margins: {};
  paddings: {};
  fontSizes: {};
  gaps: {};
  lineHeights: {};
  borders: {};
  textAlign: {};
}

// shared properties
export interface BoxProperties {
  // TODO: at the end this must be string[] to support responsive design on breakpoints
  paddingV?: string;
  paddingH?: string;
  marginV?: string;
  marginH?: string;
  maxWidth?: string;
}

export interface SeparatorProperties {
  borderWidth?: string;
  borderColor?: string;
  size?: string;
}

/* type WidgetsSection = {
    index: 'index'
} */

/* type WidgetsGridPrefixed = {
    [Property in keyof WidgetsNamesGrid as `grid_${Property}`]: string;
}

type WidgetsSectionPrefixed = {
    [Property in keyof WidgetsSection as `section_${Property}`]: string;
} */

export type WidgetsAndVariants = GridWidgetsAndVariants; // & WidgetsSectionPrefixed;

export type WidgetsStyles = {
  [key in keyof WidgetsAndVariants]: {
    variant: WidgetsAndVariants[key];
  } & CustomizableStyles;
};

const expample = {
  widget: {
    variant: {
      normal: {
        // key or crucial characteristics
        paddingV: "",
        paddingH: "",
        gap: "",
        marginV: "",
        marginH: "",
      },
      wide: {},
    },
    //brute force
    sx: {},
  },

  /*  titlePrimary = 'titlePrimary',
    subTitlePrimary = 'subTitlePrimary',
    textPrimary = 'textPrimary',
    titleSecondary = 'titleSecondary',
    subTitleSecondary = 'subTitleSecondary',
    textSecondary = 'textSecondary',
    titleBanner = 'titleBanner',
    subTitleBanner = 'subTitleBanner',
    textBanner = 'textBanner',
    smallText = 'smallText',


    priceCard = 'priceCard',
    priceBanner = 'priceBanner',
 */
};
