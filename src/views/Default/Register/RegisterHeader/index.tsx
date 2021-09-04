import React from 'react';

import { Container, Title, InfoText } from './styles';

interface HeaderProps {
  name?: string;
}

export function RegisterHeader({ name }: HeaderProps) {
  return(
    <Container>
      <Title>{!name || name === '' ? 'Novo Usuário' : name}</Title>
      <InfoText>Faça seu cadastro, é gratuito.</InfoText>
    </Container>
  );
};