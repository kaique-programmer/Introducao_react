import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Ok</button>
      </Form>
    </Container>
  );
}
