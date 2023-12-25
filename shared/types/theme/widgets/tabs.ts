import { BoxProperties, SeparatorProperties } from "../theme";

export type WidgetsAndVariants = {
  tabs_container: ContainerVariants;
  tabs_list: ListVariants;
};

// container
interface ContainerVariants {
  horizontal: ContainerThemeProperties;
  vertical: ContainerThemeProperties;
}

interface ContainerThemeProperties extends BoxProperties {}

// list
interface ListVariants {
  horizontal: ListThemePropertiesH;
  vertical: ListThemePropertiesV;
}

interface ListThemePropertiesH extends BoxProperties, SeparatorProperties {}

interface ListThemePropertiesV extends BoxProperties {}

// tab

