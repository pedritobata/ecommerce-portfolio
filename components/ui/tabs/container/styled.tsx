import { styled } from "styled-components";
import { StyledWidgetProps } from "../../theme-provider/types";
import { ContainerVariants } from "@/shared/types/theme/widgets/tabs";
import {
  getCSSRulesFromBoxProperties,
  getCSSRulesFromJS,
} from "@/utils/themeUtils";

interface Props extends StyledWidgetProps<ContainerVariants> {}

export const StyledTabContainer = styled.div<Props>`
  ${(props) => getCSSRulesFromBoxProperties(props.$themeStyles)}
  ${(props) => getCSSRulesFromJS(props.$sx)}
`;
