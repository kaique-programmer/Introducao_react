import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(name, email, password) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img ssrc={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input placeholder="Digite seu nome completo" />
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
