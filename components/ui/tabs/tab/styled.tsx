import { styled } from "styled-components";
import { TAB_ID_SUFIX } from "../constants";

export const StyledTab = styled.div.attrs<{ $idPrefix: string }>((props) => ({
  id: `${props.$idPrefix}${TAB_ID_SUFIX}`,
}))`
  padding: ${(props) => props.theme.padding.priimary};
  border: none;

  .tab {
    &__label {
      font-size: ${(props) => props.theme.fontSize.secondary};
      text-transform: uppercase;
    }
  }

  &.tab--active {
    color: red;
  }
`;
