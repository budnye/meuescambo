import { useQuery } from '@apollo/client';
import React from 'react';
import { MainCard } from '../../../../components/MainCard';
import { ProductCard } from '../../../../components/ProductCard';
import { ScreenLoader } from '../../../../components/ScreenLoader';
import { GET_USER_PRODUCTS } from '../../../../graphql/requests';
import { AddFab } from './AddFab';
import { ProductsList } from './ProductsList';

import { Container, Title } from './styles';

export function MyProducts({ navigation }) {
  const { data, loading } = useQuery(GET_USER_PRODUCTS);

  if (loading) return <ScreenLoader />;

  return (
    <Container>
      <AddFab navigation={navigation} />
      {data?.userProducts.length > 0 ? (
        <ProductsList products={data.userProducts} navigation={navigation} />
      ) : (
        <Title>Nenhum produto cadastrado</Title>
      )}
    </Container>
  );
}
