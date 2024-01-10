import type * as CSS from "csstype";

export interface Style extends /* CSS.Properties,  */ CSS.PropertiesHyphen {}

export interface CustomizableStyles {
  sx: Style;
}
