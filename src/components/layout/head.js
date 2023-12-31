import Head from "next/head";
import { useEffect } from "react";

const Headers = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Head>
      <title>Pandora Web-Tool</title>
      <meta name='description' content='Powered by Qube Smart Digital Locker' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
      ></link>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
export default Headers;
