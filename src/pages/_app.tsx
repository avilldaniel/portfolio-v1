import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { useMyStore } from "../utils/zustand-store";

function MyApp({ Component, pageProps }: AppProps) {
  // Render fullscreen overlay if nav menu is opened
  const burger = useMyStore((state) => state.burger);
  useEffect(() => {
    document.body.style.overflow = !burger ? "hidden" : "visible";
  }, [burger]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
