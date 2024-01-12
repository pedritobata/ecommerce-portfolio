import { BoxProperties, SeparatorEffect, SeparatorProperties } from "../theme";

export type WidgetsAndVariants = {
  tabs_container: ContainerVariants;
  tabs_tab_list: ListVariants;
  tabs_tab: TabVariants;
  tabs_panel: PanelVariants;
};

// container
export interface ContainerVariants {
  horizontal: ContainerThemeProperties;
  vertical: ContainerThemeProperties;
}

interface ContainerThemeProperties extends BoxProperties {}

// tabs list
export interface ListVariants {
  horizontal: ListThemePropertiesH;
  vertical: ListThemePropertiesV;
}

export interface ListThemePropertiesH extends BoxProperties, SeparatorProperties {
  hasSeparator: boolean;
}

interface ListThemePropertiesV extends BoxProperties {}

// tab
export interface TabVariants {
  underlined: TabThemeProperties;
  outlined: TabThemeProperties;
}

export interface TabThemeProperties
  extends BoxProperties,
    SeparatorProperties,
    SeparatorEffect {
  hasSeparator: boolean;
}

// panel
export interface PanelVariants {
  normal: PanelThemeProperties;
}

interface PanelThemeProperties extends BoxProperties {}
