import {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
  useId,
} from "react";

interface TabState {
  value: string;
  setValue: (value: string) => void;
  idPrefix: string;
}

const initialState: TabState = {
  value: "1",
  setValue: () => {},
  idPrefix: "defaultTabIdPrefix",
};

export const TabContext = createContext(initialState);

export function TabContextProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState(initialState.value);
  const idPrefix = useId();

  const state: TabState = useMemo(
    () => ({
      value,
      setValue,
      idPrefix,
    }),
    [value, idPrefix]
  );

  return <TabContext.Provider value={state}>{children}</TabContext.Provider>;
}
