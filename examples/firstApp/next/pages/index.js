import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Counter from 'src/example/Counter';
import Button from '@ui/Button';

function Home() {
  return (
    <div>
      <Button label="Hola flipaaaar"></Button>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Persistent State</h1>

        <div>
          <Counter id={0} />
          <Counter id={1} />
        </div>

        <Link href="/index2">Go to page without persistent State</Link>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}

export default Home;
