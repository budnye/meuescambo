import React from 'react';

import { Container, Title, Line } from './styles';
interface Props {
  title?: string;
}

export function LoginDivider({ title = 'ou' }: Props) {
  return (
    <Container>
      <Line />
      <Title>{title}</Title>
      <Line />
    </Container>
  );
}
