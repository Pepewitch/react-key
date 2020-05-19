import "../tailwind.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style global jsx>{`
          html {
            font-family: "Jost", sans-serif;
          }
        `}</style>
      </Head>
    </Component>
  );
};

export default App;
