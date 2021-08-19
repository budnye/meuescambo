import React from 'react';
import { Button } from '../../../components/Button';

import { Container, Title } from './styles';

export function SocialLogin(){
  return(
    <Container>
      <Title>Acesse sua conta</Title>
      <Button icon="facebook-official" color="#4267B2" title="Entrar com Facebook"/>
    </Container>
  );
};