import "./styles.module.css";
import { LayoutProps } from "@/shared/types/layout";
import { PropsWithChildren } from "react";
import WideLayout from "./wide/index";
import OneAsideLayout from "./one-aside";

function Layout(args: LayoutProps & PropsWithChildren) {
  if (args.type === "wide") {
    const { children } = args;
    return <WideLayout>{children}</WideLayout>;
  } else {
    const { children, ...rest } = args;
    return <OneAsideLayout {...rest}>{children}</OneAsideLayout>;
  }
}

export default Layout;
