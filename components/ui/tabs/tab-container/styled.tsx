import { styled } from "styled-components";

interface Props {
  $maxWidth?: string;
  $maxHeight?: string;
}

export const StyledTabContainer = styled.div<Props>`
  max-width: ${(props) => props.$maxWidth || "100%"};
  max-height: ${(props) => props.$maxHeight || "none"};
  margin: ${(props) => props.theme.vertical.section};
  padding: ${(props) => props.theme.primary};
`;
