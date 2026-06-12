import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781266798/9996_bfibqg.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781266798/9996_bfibqg.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781267016/og_cw1nkb.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
