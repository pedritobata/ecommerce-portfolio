import { PropsWithChildren } from "react";
import { useTheme } from "../../theme-provider/theme-provider";
import { StyledTabContainer } from "./styled";
import { CustomizableStyles, WidgetProps } from "../../theme-provider/types";
import { TabContextProvider } from "../context/tab-context";
import { ContainerVariants } from "@/shared/types/theme/widgets/tabs";
import { Theme, WidgetsStyles } from "@/shared/types/theme/theme";
import { getThemeStylesPrioritized } from "@/utils/themeUtils";

interface Props extends WidgetProps<ContainerVariants>, CustomizableStyles {}

export function TabContainer({
  variant = "horizontal",
  themeStyles,
  children,
  sx,
  extraProperties,
}: PropsWithChildren & Props) {
  const theme = useTheme() as Theme<WidgetsStyles>;

  return (
    <TabContextProvider>
      <StyledTabContainer
        $variant={variant}
        $themeStyles={getThemeStylesPrioritized(
          theme.widgets[theme.palette.themeType]["tabs_container"].variant[
            variant
          ],
          themeStyles
        )}
        $sx={sx}
        $extraProperties={extraProperties}
        theme={theme}
      >
        {children}
      </StyledTabContainer>
    </TabContextProvider>
  );
}
