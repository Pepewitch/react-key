import React from "react";
import Head from "next/head";
import Link from "next/link";

// const Card = (props) => {
//   useEffect(() => {
//     console.log("mount");
//     return () => console.log("unmount");
//   }, []);
//   return (
//     <div
//       className="w-64 bg-white flex flex-col p-2 rounded-lg shadow-md m-1"
//       {...props}
//     >
//       12321
//       <input></input>
//       {props.children}
//     </div>
//   );
// };
const Home = () => {
  return (
    <div className="container-fluid bg-gray-200 min-h-screen px-4 py-2">
      <Head>
        <title>React Key Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Link href="/render-image">
          <a className="text-blue-600">Render image example</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
