import { render, type RenderOptions } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { type RootState, AppStore, setupStore } from "@/store/store";
import { PropsWithChildren } from "react";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithStoreProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
