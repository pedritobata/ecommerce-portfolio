import { styled } from "styled-components";

interface Props {
  $centered?: boolean;
  $divider?: boolean;
}

export const StyledTabList = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$centered ? "center" : "flex-start")};
  gap: ${(props) => props.theme.gap.normal};
  margin: ${(props) => props.theme.margin.vertical.title} 0;
  border-bottom: ${(props) =>
    props.$divider ? props.theme.border.divider.normal : "none"};
`;
