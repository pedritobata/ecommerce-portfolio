import { PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { theme } from "@/styles/theme";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}

export function useTheme() {
  return theme;
}
