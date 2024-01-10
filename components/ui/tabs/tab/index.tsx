import { useContext } from "react";
import { TabContext } from "../context/tab-context";
import { StyledTab } from "./styled";
import { CustomizableStyles } from "../../theme-provider/types";

interface Props extends CustomizableStyles {
  label: string;
  value: string;
}

export function Tab({ label, value, sx = {} }: Props) {
  const { idPrefix, value: activeValue } = useContext(TabContext);
  return (
    <StyledTab
      $idPrefix={idPrefix}
      className={value === activeValue ? "tab--active" : ""}
      {...(Object.keys(sx).length !== 0 && sx)}
    >
      <span className="tab__label">{label}</span>
    </StyledTab>
  );
}
