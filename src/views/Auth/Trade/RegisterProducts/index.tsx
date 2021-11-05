import React from 'react';
import { ProductForm } from './ProductForm';

import { Container, Title } from './styles';

export function RegisterProducts({ navigation }) {
  return (
    <Container>
      <Title>RegisterProducts</Title>
      <ProductForm navigation={navigation} />
    </Container>
  );
}
