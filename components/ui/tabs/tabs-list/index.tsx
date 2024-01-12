import { PropsWithChildren } from "react";
import { useTheme } from "../../theme-provider/theme-provider";
import { StyledTabList } from "./styled";
import { CustomizableStyles, WidgetProps } from "../../theme-provider/types";
import { ListVariants } from "@/shared/types/theme/widgets/tabs";
import { getThemeStylesPrioritized } from "@/utils/themeUtils";
import { Theme, WidgetsStyles } from "@/shared/types/theme/theme";

interface Props extends WidgetProps<ListVariants>, CustomizableStyles {
  centered?: boolean;
  // TODO evaluate if user needs to trigger extra actions when tab changes
  onChange?: (value: string) => void;
}

export function TabList({
  variant = "horizontal",
  themeStyles,
  sx,
  extraProperties,
  children,
  centered = false,
}: PropsWithChildren & Props) {
  const theme = useTheme() as Theme<WidgetsStyles>;
  return (
    <StyledTabList
      $centered={centered}
      $variant={variant}
      $themeStyles={getThemeStylesPrioritized(
        theme.widgets[theme.palette.themeType]["tabs_tab_list"].variant[
          variant
        ],
        themeStyles
      )}
      $sx={sx}
      $extraProperties={extraProperties}
      theme={theme}
    >
      {children}
    </StyledTabList>
  );
}
