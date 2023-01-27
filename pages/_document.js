import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Here's the meta description" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@300&family=Bebas+Neue&family=Chivo:wght@300&family=Electrolize&family=PT+Mono&family=Poiret+One&family=Rajdhani:wght@500&family=Saira+Condensed&family=Saira:wght@200;300;400&family=Signika&family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
        <script
          async
          data-uid="93649111fd"
          src="https://lukethewebdev.ck.page/93649111fd/index.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
