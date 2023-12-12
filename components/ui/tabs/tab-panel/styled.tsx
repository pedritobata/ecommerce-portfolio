import { styled } from "styled-components";
import { TAB_PANEL_ID_SUFIX } from "../constants";

export const StyledTabPanel = styled.div.attrs<{ $idPrefix: string }>(
  (props) => ({
    id: `${props.$idPrefix}${TAB_PANEL_ID_SUFIX}`,
  })
)``;
