import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { setupStore } from "@/store/store";
import { withLayout } from "@/utils/uiUtils";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  const { layout } = pageProps;
  return (
    <Provider store={setupStore()}>
      {/* {withLayout(<Component {...pageProps} />)} */}
      {layout ? (
        <Layout {...layout}>{<Component {...pageProps} />}</Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}
