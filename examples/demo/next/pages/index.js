import Head from 'next/head';
import React, { useState } from 'react';
import Button from '@ui/Button';
import Alert from '@ui/Alert';
import Input from '@ui/Input';
import { useForm } from 'react-hook-form';
import Chip from '@ui/Chip';
import Pagination from '@ui/Pagination';

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);

  const toggleAlert = () => setShow(!show);
  const showAlert = () => setShow(true);
  const closeAlert = () => setShow(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const goPage = (page) => {
    setPaginationPage(page);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button color="blue" size="regular" outline={true} style="round" onClick={showAlert}>
            Mostrar alerta
          </Button>
          <Alert color="red" show={show} closeAlert={closeAlert} />
          <Input leftIcon="G" rightIcon="N" {...register('example')} />
          <Chip color="red">Hola</Chip>
          <Pagination
            goPage={goPage}
            currentPage={paginationPage}
            totalPages={30}
            showFirstAndLast={true}
          />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Home;
