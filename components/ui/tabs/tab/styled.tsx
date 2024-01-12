import { styled } from "styled-components";
import { TAB_ID_SUFIX } from "../constants";
import { StyledWidgetProps } from "../../theme-provider/types";
import { TabVariants } from "@/shared/types/theme/widgets/tabs";
import {
  getCSSRulesFromBoxProperties,
  getCSSRulesFromJS,
  getCSSRulesFromSeparatorProperties,
} from "@/utils/themeUtils";

interface Props extends StyledWidgetProps<TabVariants> {
  $idPrefix: string;
  $isActive: boolean;
}

export const StyledTab = styled.div.attrs<Props>((props) => ({
  id: `${props.$idPrefix}${TAB_ID_SUFIX}`,
}))`
  ${(props) => getCSSRulesFromBoxProperties(props.$themeStyles)};
  ${(props) =>
    props.$variant === "underlined" && props.$isActive
      ? getCSSRulesFromSeparatorProperties(props.$themeStyles)
      : ""};
  ${(props) => getCSSRulesFromJS(props.$sx)};

  .tab {
    &__label {
      font-size: ${(props) => props.theme.palette.fontSizes.titleSecondary};
      text-transform: uppercase;
    }
  }
`;
