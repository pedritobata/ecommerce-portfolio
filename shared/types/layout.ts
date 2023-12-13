import { FC } from "react";
import { ComponentNames } from "./components";

export type LayoutProps = WideLayoutProps | OneAsideLayoutProps;

export interface OneAsideLayoutProps {
  type: "oneAside";
  side: "left" | "right";
  asideComponent: ComponentNames;
  asideFr?: number;
  mainFr?: number;
}

export interface WideLayoutProps {
  type: "wide";
}
