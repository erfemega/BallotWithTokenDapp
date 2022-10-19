import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import type { AppProps } from 'next/app'

import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [5];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;

