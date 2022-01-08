import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Next App with TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello TailwindCSS!</h1>
    </div>
  );
}
