import Head from 'next/head';
import React, { useState } from 'react';
import Button from '@ui/Button';
import Alert from '@ui/Alert';
import Input from '@ui/Input';

function Home() {
  const [show, setShow] = useState(false);
  const toggleAlert = () => setShow(!show);
  const showAlert = () => setShow(true);
  const closeAlert = () => setShow(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button onClick={showAlert}>Mostrar alerta</Button>
        <Alert color="red" show={show} closeAlert={closeAlert}></Alert>
        <Input leftIcon="G" rightIcon="N"></Input>
      </main>
    </div>
  );
}

export default Home;
