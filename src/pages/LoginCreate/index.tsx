import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

import { Container } from './styles';

const LoginCreate: React.FC = () => {
  const username = useForm({});
  console.log(username);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
        return json;
      });
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          placeholder="username"
          name="username"
          {...username}
        />

        <Button disabled>Entrar</Button>
      </form>
      <Link to="/">Cadastro</Link>
    </Container>
  );
};

export default LoginCreate;
