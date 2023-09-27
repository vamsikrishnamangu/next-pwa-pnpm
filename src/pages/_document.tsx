import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webpack" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-2048-2732.jpg"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1668-2388.jpg"
          sizes="1668x2388"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1536-2048.jpg"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1125-2436.jpg"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-1242-2208.jpg"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-750-1334.jpg"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-splash-640-1136.jpg"
          sizes="640x1136"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
          }).catch(function(error) {
            console.error('Service Worker registration failed:', error);
          });
        }
      `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
