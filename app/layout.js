import Head from "next/head";
import Script from 'next/script'
import "../styles/globals.css";
import "../styles/assets/css/animate.css";
import "../styles/assets/css/bootstrap.min.css";
import "../styles/assets/css/colorbox.css";
import "../styles/assets/css/font-awesome.min.css";
import "../styles/assets/css/owl.carousel.min.css";
import "../styles/assets/css/owl.theme.default.min.css";
import "../styles/assets/css/responsive.css";
import "../styles/assets/css/style.css";
import Layout from "../components/layout";
import { Providers } from "./provider";

export const metadata = {
  title: {
    default: "Alikidi.com",
    template: "%s | Alikidi.com",
  },
  description: "సామాన్యుని గుండె చప్పుడు..... అలికిడి",
  // icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <Script src="/assets/js/bootstrap.min.js" async></Script>
          <Script src="/assets/js/custom_script.js" async></Script>
          <Script src="/assets/js/jquery-3.2.1.min.js" async></Script>
          <Script src="/assets/js/jquery.colorbox.js" async></Script>
          <Script src="/assets/js/owl.carousel.min.js" async></Script>
          <Script src="/assets/js/popper.min.js" async></Script>
          <Script src="/assets/js/smoothscroll.js" async></Script>
        </Head>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
