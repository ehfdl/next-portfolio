import Head from "next/head";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>돌이 포트폴리오</title>
          <meta name="description" content="포트폴리오 돌이" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Layout>
    </>
  );
}
