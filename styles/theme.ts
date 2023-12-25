import { Theme, WidgetsStyles } from "@/shared/types/theme/theme";

// default values
export const colors = {
  light: "#EAEAEA",
};

export const breakpoints = {
  xs: "480px",
  s: "768px",
  m: "1024px",
  l: "1280px",
};

/* const baseStyles = {
  typography: {
    title : {
      primary: {
        fontSize: '2.5em',
        textTransform: "uppercase",
        lineHeight: "1.3",
        fontWeight: "500",
        textAlign: "center"
      },
      secondary: {
        fontSize: '2em',
        textTransform: "uppercase",
        lineHeight: "1.1",
        fontWeight: "400",
        textAlign: "left"
      },
      article: {
        fontSize: '1.3em',
        lineHeight: "1.1",
        fontWeight: "300",
        textAlign: "left"
      },
    }
  }
}; */

// type WidgetsStyles = typeof baseStyles;

// Replace baseStyles with another BaBaseStyles type object to define a new theme styles
// const styles: WidgetsStyles = baseStyles;

// default widgets styles
const baseLightStyles: WidgetsStyles = {
  grid_container: {
    variant: {
      flex: {},
      grid: {},
    },
    sx: {
      margin: '12px',
      background: "",
      'line-height': 1,
      // lineHeight: 1
    },
  },
}; // = styles;
const baseDarkStyles: WidgetsStyles = { ...baseLightStyles };

export const theme: Theme<WidgetsStyles, {}> = {
  widgets: {
    light: baseLightStyles,
    dark: baseDarkStyles,
  },
  colors: {
    light: {},
    dark: {},
  },
  borders: {},
  breakpoints: {},
  fontSizes: {},
  gaps: {},
  lineHeights: {},
  margins: {},
  paddings: {},
  textAlign: {},
};

// theme.widgets.light.grid_container.sx.margin;

export const themeTmp = {
  color: {
    light: colors.light,
  },
  margin: {
    vertical: {
      section: "1em",
      title: "",
    },
  },
  gap: {
    normal: "0.5em",
  },
  fontSize: {
    primary: "1.2em",
    secondary: "0.9em",
    text: "0.6em",
  },
  fontFamily: {},
  border: {
    divider: {
      normal: `2px solid ${colors.light}`,
    },
  },
  weight: {},
  size: {},
  padding: {
    primary: "0.8em",
    secondary: "0.5em",
  },
  lineHeight: {},
  background: {},
};
