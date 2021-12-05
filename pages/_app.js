import React from "react";
import initAuth from "../utils/initAuth";
import "../styles/globals.css";
import { FoodProvider } from "../components/Food";

initAuth();

export default function ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <FoodProvider>
      <Component {...pageProps}></Component>
    </FoodProvider>
  );
}
