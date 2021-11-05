import React from 'react';
import { MyProducts } from './MyProducts';

import { Container, Title } from './styles';

export function Trade({ navigation }) {
  return (
    <Container>
      <Title>Trade</Title>
      <MyProducts navigation={navigation} />
    </Container>
  );
}
