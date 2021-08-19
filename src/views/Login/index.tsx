import React from 'react';

import { Container } from './styles';

import { SocialLogin } from './SocialLogin';
import { LoginDivider } from './LoginDivider';

export function Login(){
  return(
    <Container>
      <SocialLogin />
      <LoginDivider />
      {/* <LoginForm /> */}
    </Container>
  );
};