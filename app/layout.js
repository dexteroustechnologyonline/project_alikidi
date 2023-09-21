import Head from "next/head";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/custom_script.js"></script>
          <script src="/assets/js/jquery-3.2.1.min.js"></script>
          <script src="/assets/js/jquery.colorbox.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/js/smoothscroll.js"></script>
        </Head>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
