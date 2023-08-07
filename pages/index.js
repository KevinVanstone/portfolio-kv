import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/ProjectList/ProjectList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Vanstone - Web Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Hero></Hero>
      <ProjectList></ProjectList>
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
