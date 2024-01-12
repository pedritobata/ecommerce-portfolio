import { styled } from "styled-components";
import { TAB_PANEL_ID_SUFIX } from "../constants";
import { StyledWidgetProps } from "../../theme-provider/types";
import { PanelVariants } from "../../../../shared/types/theme/widgets/tabs";
import {
  getCSSRulesFromBoxProperties,
  getCSSRulesFromJS,
} from "@/utils/themeUtils";

interface Props extends StyledWidgetProps<PanelVariants> {
  $idPrefix: string;
}

export const StyledTabPanel = styled.div.attrs<Props>((props) => ({
  id: `${props.$idPrefix}${TAB_PANEL_ID_SUFIX}`,
}))`
  ${(props) => getCSSRulesFromBoxProperties(props.$themeStyles)}
  ${(props) => getCSSRulesFromJS(props.$sx)}
`;
