import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Fonts from "@/Fonts";
import theme from "@/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
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
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}
