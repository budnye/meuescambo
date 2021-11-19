import React from 'react';
import { ProductForm } from './ProductForm';

import { Container, Title } from './styles';

export function RegisterProducts({ navigation }) {
  return (
    <Container>
      <ProductForm navigation={navigation} />
    </Container>
  );
}
