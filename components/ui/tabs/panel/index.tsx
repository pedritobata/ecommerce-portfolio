import { PropsWithChildren, useContext } from "react";
import { CustomizableStyles } from "../../theme-provider/types";
import { StyledTabPanel } from "./styled";
import { TabContext } from "../context/tab-context";

interface Props extends CustomizableStyles {
  value: string;
}

export function TabPanel({
  children,
  value,
  sx = {},
}: Props & PropsWithChildren) {
  const { value: activeValue, idPrefix } = useContext(TabContext);
  if (value === activeValue) return null;
  return (
    <StyledTabPanel
      $idPrefix={idPrefix}
      {...(Object.keys(sx).length !== 0 && {sx})}
    >
      {children}
    </StyledTabPanel>
  );
}
