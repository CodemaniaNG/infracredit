import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Fonts from "@/Fonts";
import theme from "@/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import Head from "next/head";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/authConfig";
import { MsalProvider } from "@azure/msal-react";

export default function App({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);
  const [msalInstance, setMsalInstance] = useState<any>(null);

  useEffect(() => {
    // Initialize MSAL once the component mounts
    const instance: any = new PublicClientApplication(msalConfig);
    setMsalInstance(instance);
    setIsReady(true);
  }, []);

  if (!isReady) return <></>;
  return (
    <>
      <Head>
        <title>{"Infracredit"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favickjon.svg" />
        <meta name="title" content="Infracredit" />
      </Head>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Fonts />
        <Provider store={store}>
          <MsalProvider instance={msalInstance}>
            <Component {...pageProps} />
          </MsalProvider>
        </Provider>
      </ChakraProvider>
    </>
  );
}
