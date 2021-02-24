import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h1 className="title">
          Learn to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />

        <p className="description">
          First blog post{" "}
          <Link href="/posts/first-post">
            <a>here</a>
          </Link>
        </p>

        <header>
          <h1>Stuff to read?</h1>
        </header>
        <div class="band">
          <div class="item-1">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1599275332750-94224515260c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3032&q=80)",
                }}
              ></div>
              <article>
                <h1>International Artist Feature: Malaysia</h1>
                <span>Mary Winkler</span>
              </article>
            </a>
          </div>
          <div class="item-2">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554286923-8a066d8ec541?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80)",
                }}
              ></div>
              <article>
                <h1>How to Roast Beef</h1>
                <span>Harry Brignull</span>
              </article>
            </a>
          </div>
          <div class="item-3">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1164&q=80)",
                }}
              ></div>
              <article>
                <h1>Created by You, July Edition</h1>
                <p>
                  Welcome to our monthly feature of fantastic tutorial results
                  created by you, the Envato Tuts+ community!{" "}
                </p>
                <span>Melody Nieves</span>
              </article>
            </a>
          </div>
          <div class="item-4">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png)",
                }}
              ></div>
              <article>
                <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                <p>
                  We’ll be putting things together so that as you scroll down
                  from the top of the page you’ll see an “Alien Lander” making
                  its way to touch down.
                </p>
                <span>Kezz Bracey</span>
              </article>
            </a>
          </div>
          <div class="item-5">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)",
                }}
              ></div>
              <article>
                <h1>
                  How to Create a “Stranger Things” Text Effect in Adobe
                  Photoshop
                </h1>
                <span>Rose</span>
              </article>
            </a>
          </div>
          <div class="item-6">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1512159986660-a677c02d43a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
                }}
              ></div>
              <article>
                <h1>
                  5 Inspirational Business Portraits and How to Make Your Own
                </h1>

                <span>Marie Gardiner</span>
              </article>
            </a>
          </div>
          <div class="item-7">
            <a href="#" class="card">
              <div
                class="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  Notes From Behind the Firewall: The State of Web Design in
                  China
                </h1>
                <span>Kendra Schaefer</span>
              </article>
            </a>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        html {
          background: #f5f7f8;
        }
        body {
          color: #111;
          position: relative;
          min-height: 100%;
          height: 100%;
          margin: 0;
          line-height: 1.65;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 400;
          min-width: 320px;
          direction: ltr;
          font-feature-settings: "kern";
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-scroll-behavior: smooth;
          -moz-scroll-behavior: smooth;
          -ms-scroll-behavior: smooth;
          scroll-behavior: smooth;
        }

        a {
          color: #ccc;
          text-decoration: none;
        }

        .container {
          border: 2rem solid #111;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        header {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .band {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 20px;
        }
        @media (min-width: 30em) {
          .band {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 60em) {
          .band {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          background: white;
          text-decoration: none;
          color: #444;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          min-height: 100%;
          position: relative;
          top: 0;
          transition: all 0.1s ease-in;
        }
        .card:hover {
          top: -2px;
          box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
        }
        .card article {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card h1 {
          font-size: 20px;
          margin: 0;
          color: #333;
        }
        .card p {
          flex: 1;
          line-height: 1.4;
        }
        .card span {
          font-size: 12px;
          font-weight: bold;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 2em 0 0 0;
        }
        .card .thumb {
          padding-bottom: 60%;
          background-size: cover;
          background-position: center center;
        }

        @media (min-width: 60em) {
          .item-1 {
            grid-column: 1 / span 2;
          }
          .item-1 h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
