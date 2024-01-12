import { useContext } from "react";
import { useTheme } from "../../theme-provider/theme-provider";
import { TabContext } from "../context/tab-context";
import { StyledTab } from "./styled";
import { CustomizableStyles, WidgetProps } from "../../theme-provider/types";
import { TabVariants } from "@/shared/types/theme/widgets/tabs";
import { Theme, WidgetsStyles } from "@/shared/types/theme/theme";
import { getThemeStylesPrioritized } from "@/utils/themeUtils";

interface Props extends WidgetProps<TabVariants>, CustomizableStyles {
  label: string;
  value: string;
}

export function Tab({
  variant = "underlined",
  themeStyles,
  sx,
  extraProperties,
  label,
  value,
}: Props) {
  const { idPrefix, value: activeValue } = useContext(TabContext);
  const theme = useTheme() as Theme<WidgetsStyles>;
  return (
    <StyledTab
      $idPrefix={idPrefix}
      $isActive={value === activeValue}
      $variant={variant}
      $themeStyles={getThemeStylesPrioritized(
        theme.widgets[theme.palette.themeType]["tabs_tab"].variant[variant],
        themeStyles
      )}
      $sx={sx}
      $extraProperties={extraProperties}
      theme={theme}
    >
      <h3 className="tab__label">{label}</h3>
    </StyledTab>
  );
}
