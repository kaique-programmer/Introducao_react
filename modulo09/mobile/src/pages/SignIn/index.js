/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <Text>Signin</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />

      <Button>OK</Button>
    </Background>
  );
};

export default SignIn;
