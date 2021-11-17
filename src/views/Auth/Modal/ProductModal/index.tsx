import { useQuery } from '@apollo/client';
import React from 'react';
import { ButtonsFooter } from '../../../../components/ButtonsFooter';
import { MainCard } from '../../../../components/MainCard';
import { ProductCard } from '../../../../components/ProductCard';
import { ScreenLoader } from '../../../../components/ScreenLoader';
import { GET_PRODUCT } from '../../../../graphql/requests';

import { Container, Title } from './styles';

export function ProductModal({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  if (error) {
    console.log(error);
  }

  if (loading) return <ScreenLoader />;

  return (
    <Container>
      <ProductCard product={data.product} />
      <ButtonsFooter
        likeAction={() => console.log('LikeAction')}
        dislikeAction={() => console.log('DislikeAction')}
        favoriteAction={() => console.log('FavoriteAction')}
      />
    </Container>
  );
}
