import { PropsWithChildren } from "react";
import { StyledTabList } from "./styled";
import { CustomizableStyles } from "../../theme-provider/types";

interface Props extends CustomizableStyles {
  centered?: boolean;
  divider?: boolean;
  // TODO evaluate if user needs to trigger extra actions when tab changes
  onChange?: (value: string) => void;
}

export default function TabList({
  children,
  centered = false,
  divider = false,
  sx = {},
}: PropsWithChildren & Props) {
  return (
    <StyledTabList
      $centered={centered}
      $divider={divider}
      {...(Object.keys(sx).length !== 0 && sx)}
    >
      {children}
    </StyledTabList>
  );
}
