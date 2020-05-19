import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

const Img = (props) => {
  const { onMount, onUnmount, ...rest } = props;
  useEffect(() => {
    console.log("mount");
    onMount();
    return () => {
      console.log("unmount");
      onUnmount();
    };
  }, []);
  return <img {...rest} />;
};

const ImageExample = () => {
  const [id, setId] = useState(Math.floor(Math.random() * 100));
  const [, reRender] = useState();
  const keyLogsRef = useRef([]);
  const withoutKeyLogsRef = useRef([]);
  const keyLogs = keyLogsRef.current;
  const withoutKeyLogs = withoutKeyLogsRef.current;
  const forceReRender = () => reRender(Math.random());
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold my-4">1. Render image example</h1>
      <button
        className="outline-none bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded"
        onClick={() => setId(id + 1)}
      >
        Change image src (and key)
      </button>
      <div className="flex flex-wrap -mx-4">
        <div className="flex flex-col mx-4 my-2">
          <h2 className="text-md font-bold mb-2">Without key on img tag</h2>
          <Img
            onMount={() => {
              withoutKeyLogs.push("mount!");
              forceReRender();
            }}
            onUnmount={() => {
              withoutKeyLogs.push("unmount!");
              forceReRender();
            }}
            className="w-48 h-auto"
            src={`https://i.picsum.photos/id/${id}/1000/1500.jpg`}
          />
          <div className="p-2 rounded bg-white">
            <p className="font-bold underline">Log</p>
            {withoutKeyLogs.map((log, index) => (
              <p key={index} className="mb-1">
                {log}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col mx-4 my-2">
          <h2 className="text-md font-bold mb-2">With key on img tag</h2>
          <Img
            onMount={() => {
              keyLogs.push("mount!");
              forceReRender();
            }}
            onUnmount={() => {
              keyLogs.push("unmount!");
              forceReRender();
            }}
            key={id + 100}
            className="w-48 h-auto"
            src={`https://i.picsum.photos/id/${id + 100}/1000/1500.jpg`}
          />
          <div className="p-2 rounded bg-white">
            <p className="font-bold underline">Log</p>
            {keyLogs.map((log, index) => (
              <p key={index} className="mb-1">
                {log}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderImage = () => {
  return (
    <div className="container-fluid bg-gray-200 min-h-screen px-4 py-2">
      <Head>
        <title>Render Image Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <ImageExample />
      </div>
    </div>
  );
};

export default RenderImage;
