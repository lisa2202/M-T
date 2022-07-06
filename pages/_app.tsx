import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createContext, useState } from "react";
import Head from "next/head";
import { Svg } from "../components/Svg";

const theme = extendTheme({
  fonts: {
    heading: `"Balto-Book", sans-serif`,
    body: `"Balto-Book", sans-serif`,
  },
  styles: {
    global: {
      html: {
        lineHeight: 1.15,
        boxSizing: `border-box`,
        WebkitTextSizeAdjust: `100%`,
        WebkitFontSmoothing: `initial`,
      },
      body: {
        fontSize: `16px`,
        backgroundColor: `#fff`,
        color: `#555`,
        fontFamily: `"Balto-Book", sans-serif`,
      },
    },
  },
});

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState();
  return (
    <ChakraProvider theme={theme}>
      <DataContext.Provider value={{ data, setData }}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>
            Log in to M&T Online Banking or Commercial Treasury Center
          </title>
        </Head>
        <Svg />
        <Component {...pageProps} />
      </DataContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
