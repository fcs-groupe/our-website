import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{"Groupe-FCS | " + title}</title>
        <meta name="description" content="fcs-groupe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
