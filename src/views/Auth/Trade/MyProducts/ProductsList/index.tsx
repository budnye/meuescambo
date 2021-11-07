import React from 'react';
import { ProductCard } from '../../../../../components/ProductCard';

import { Container, Title } from './styles';

export function ProductsList({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
