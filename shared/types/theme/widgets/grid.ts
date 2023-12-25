import { BoxProperties } from "../theme";

export type WidgetsAndVariants = {
  grid_container: ContainerVariants;
};

// container
interface ContainerVariants {
  flex: ContainerThemeProperties;
  grid: ContainerThemeProperties;
}

interface ContainerThemeProperties extends BoxProperties {
  direction?: string;
  cols?: number;
  rows?: number;
  itemMinWidth?: string;
  itemMinHeight?: string;
  gap?: string;
}
