import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>TIme Submit</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto mt-16 px-4 ">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="pb-16">
              <h1 className="text-4xl font-semibold">
                Seamless Time Submission
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Everything in its place. Have peace of mind with your time
              </p>
              <button className="mt-8 min-w-full rounded-lg bg-sky-600 py-4 text-base text-white hover:bg-sky-700">
                Start
              </button>
            </div>
            <div className="h-64 min-w-full rounded bg-[url('https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80')] bg-cover shadow "></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
