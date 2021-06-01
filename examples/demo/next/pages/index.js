import Head from 'next/head';
import React from 'react';
import Button from '@ui/Button';

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={() => console.log('Bien')}>Holaaa</Button>
      </main>
    </div>
  );
}

export default Home;
