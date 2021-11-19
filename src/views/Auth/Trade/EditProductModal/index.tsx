import React from 'react';
import { EditProductCard } from '../../../../components/EditProductCard';
import { ProductCard } from '../../../../components/ProductCard';
import { ProductForm } from '../RegisterProducts/ProductForm';
import { EditProductForm } from './EditProductForm';

import { Container, Title } from './styles';

export function EditProductModal({ route, navigation }) {
  const { product } = route.params;
  return (
    <Container>
      <EditProductForm product={product} navigation={navigation} />
    </Container>
  );
}
