import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { setupStore } from "@/store/store";
import { withLayout } from "@/utils/uiUtils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      {withLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
