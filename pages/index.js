import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/ProjectList/ProjectList";
import "/styles/global.scss";

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
    </>
  );
}
