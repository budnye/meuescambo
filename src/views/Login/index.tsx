import React from 'react';

import { Container } from './styles';

import { SocialLogin } from './SocialLogin';

export function Login(){
  return(
    <Container>
      <SocialLogin />
      {/* <LoginDivider /> */}
      {/* <LoginForm /> */}
    </Container>
  );
};