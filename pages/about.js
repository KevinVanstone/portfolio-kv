import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Kevin Vanstone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <About></About>
      <Footer></Footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
