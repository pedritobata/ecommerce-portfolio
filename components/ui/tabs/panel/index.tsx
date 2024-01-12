import { PropsWithChildren, useContext } from "react";
import { useTheme } from "../../theme-provider/theme-provider";
import { CustomizableStyles, WidgetProps } from "../../theme-provider/types";
import { StyledTabPanel } from "./styled";
import { TabContext } from "../context/tab-context";
import { PanelVariants } from "@/shared/types/theme/widgets/tabs";
import { Theme, WidgetsStyles } from "@/shared/types/theme/theme";
import { getThemeStylesPrioritized } from "@/utils/themeUtils";

interface Props extends WidgetProps<PanelVariants>, CustomizableStyles {
  value: string;
}

export function TabPanel({
  variant = "normal",
  themeStyles,
  children,
  sx,
  extraProperties,
  value,
}: Props & PropsWithChildren) {
  const theme = useTheme() as Theme<WidgetsStyles>;
  const { value: activeValue, idPrefix } = useContext(TabContext);
  if (value === activeValue) return null;
  return (
    <StyledTabPanel
      $idPrefix={idPrefix}
      $variant={variant}
      $themeStyles={getThemeStylesPrioritized(
        theme.widgets[theme.palette.themeType]["tabs_panel"].variant[variant],
        themeStyles
      )}
      $sx={sx}
      $extraProperties={extraProperties}
      theme={theme}
    >
      {children}
    </StyledTabPanel>
  );
}
