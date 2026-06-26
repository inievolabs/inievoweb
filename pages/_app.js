import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Favicon_vv26yk.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Favicon_vv26yk.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781267016/og_cw1nkb.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
