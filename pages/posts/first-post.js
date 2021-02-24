import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div className="container">
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">First Post</h1>

        <p className="description">
          This is a link to{" "}
          <Link href="https://nextjs.org/docs">Next.js Docs</Link>
        </p>

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </div>
  );
}
