import { FC } from "react";

export interface LayoutProps {
  type: "wide" | "oneAside";
}

export interface OneAsideLayoutProps extends LayoutProps {
  side: "left" | "right";
  AsideComponent: FC;
  asideFr?: number;
  mainFr?: number;
}
