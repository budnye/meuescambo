import React from 'react';

import { Container, Title } from './styles';

export function SelectItem({option, onPress}) {
  return(
    <Container>
      <Title>{option}</Title>
    </Container>
  );
};