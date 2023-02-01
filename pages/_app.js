import React from "react";
import App from "next/app";
import { Titillium_Web } from "@next/font/google";
import Layout from "../components/Layout";
import "../styles/global.css";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <style jsx global>{`
          html {
            font-family: ${titillium.style.fontFamily};
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
