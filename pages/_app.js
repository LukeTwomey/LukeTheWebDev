import React, { useEffect } from "react";
import Script from "next/script";
import App from "next/app";
import { useRouter } from "next/router";
import * as gtag from "../lib/ga/gtag";
import { Titillium_Web } from "@next/font/google";
import Layout from "../components/Layout";
import "../styles/global.css";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
