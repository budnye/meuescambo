import React from 'react';
import { MyProducts } from './MyProducts';
import { ProductForm } from './RegisterProducts/ProductForm';

import { Container, Title } from './styles';

export function Trade() {
  return (
    <Container>
      <Title>Trade</Title>
      {/* <ProductForm /> */}
      <MyProducts />
    </Container>
  );
}
