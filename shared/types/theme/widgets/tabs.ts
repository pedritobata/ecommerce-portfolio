import { BoxProperties, SeparatorEffect, SeparatorProperties } from "../theme";

export type WidgetsAndVariants = {
  tabs_container: ContainerVariants;
  tabs_tab_list: ListVariants;
  tabs_tab: TabVariants;
  tabs_panel: PanelVariants;
};

// container
interface ContainerVariants {
  horizontal: ContainerThemeProperties;
  vertical: ContainerThemeProperties;
}

interface ContainerThemeProperties extends BoxProperties {}

// tabs list
interface ListVariants {
  horizontal: ListThemePropertiesH;
  vertical: ListThemePropertiesV;
}

interface ListThemePropertiesH extends BoxProperties, SeparatorProperties {
  hasSeparator: boolean;
}

interface ListThemePropertiesV extends BoxProperties {}

// tab
interface TabVariants {
  underlined: TabThemeProperties;
  outlined: TabThemeProperties;
}

interface TabThemeProperties
  extends BoxProperties,
    SeparatorProperties,
    SeparatorEffect {
  hasSeparator: boolean;
}

// panel
interface PanelVariants {
  normal: PanelThemeProperties;
}

interface PanelThemeProperties extends BoxProperties {}
