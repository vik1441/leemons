import Head from 'next/head';
import React, { useState } from 'react';
import Button from '@ui/Button';
import Alert from '@ui/Alert';
import Input from '@ui/Input';
import SelectBox from '@ui/SelectBox';

const people = [
  { label: 'Wade Cooper', value: 1 },
  { label: 'Arlene Mccoy', value: 2 },
  { label: 'Devon Webb', value: 3 },
  { label: 'Tom Cook', value: 4 },
  { label: 'Tanya Fox', value: 5 },
  { label: 'Hellen Schmidt', value: 6 },
]

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
        <SelectBox options={people} />
      </main>
    </div>
  );
}

export default Home;
