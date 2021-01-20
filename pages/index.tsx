import Head from "next/head";
import ButtonHover from "../components/ButtonHover";
import styles from "../styles/home.styles";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <ButtonHover />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Home;
