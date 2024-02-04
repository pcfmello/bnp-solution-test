import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Alert from "@/components/Alert";
import { MessageProvider } from "@/context/message-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Front-End - BNP</title>
      </Head>

      <MessageProvider>
        <Component {...pageProps} />
        <Alert />
      </MessageProvider>
    </>
  );
}
