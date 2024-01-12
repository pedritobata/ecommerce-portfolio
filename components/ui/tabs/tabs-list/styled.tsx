import { styled } from "styled-components";
import { StyledWidgetProps } from "../../theme-provider/types";
import {
  ListThemePropertiesH,
  ListVariants,
  TabThemeProperties,
} from "@/shared/types/theme/widgets/tabs";
import {
  getCSSRulesFromBoxProperties,
  getCSSRulesFromJS,
  getCSSRulesFromSeparatorProperties,
} from "@/utils/themeUtils";

interface Props extends StyledWidgetProps<ListVariants> {
  $centered?: boolean;
}

export const StyledTabList = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) =>
    props.$variant === "horizontal" ? "row" : "column"};
  align-items: center;
  justify-content: ${(props) => (props.$centered ? "center" : "flex-start")};
  gap: ${(props) => props.theme.palette.gaps.secondary};
  ${(props) => getCSSRulesFromBoxProperties(props.$themeStyles)};
  ${(props) =>
    props.$variant === "horizontal" &&
    (props.$themeStyles as ListThemePropertiesH).hasSeparator
      ? getCSSRulesFromSeparatorProperties(
          props.$themeStyles as TabThemeProperties
        )
      : ""};
  ${(props) => getCSSRulesFromJS(props.$sx)};
`;
