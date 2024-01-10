import { PropsWithChildren } from "react";
import { StyledTabContainer } from "./styled";
import { CustomizableStyles } from "../../theme-provider/types";
import { TabContextProvider } from "../context/tab-context";

interface Props extends CustomizableStyles {
  maxWidth?: string;
  maxHeight?: string;
}

export function TabContainer({
  children,
  sx = {},
  ...rest
}: PropsWithChildren & Props) {
  return (
    <TabContextProvider>
      <StyledTabContainer {...(Object.keys(sx).length !== 0 && sx)} {...rest}>
        {children}
      </StyledTabContainer>
    </TabContextProvider>
  );
}
