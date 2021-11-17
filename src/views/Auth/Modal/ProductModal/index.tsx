import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { ButtonsFooter } from '../../../../components/ButtonsFooter';
import { MainCard } from '../../../../components/MainCard';
import { ProductCard } from '../../../../components/ProductCard';
import { ScreenLoader } from '../../../../components/ScreenLoader';
import {
  DISLIKE_ACTION,
  GET_PRODUCT,
  GET_PRODUCTS,
  LIKE_ACTION,
} from '../../../../graphql/requests';

import { Container, Space } from './styles';

export function ProductModal({ route, navigation }) {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  const [likeAction] = useMutation(LIKE_ACTION, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  const [dislikeAction] = useMutation(DISLIKE_ACTION);

  const handleLike = async () => {
    navigation.goBack();
    try {
      await likeAction({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiskike = () => {
    navigation.goBack();
    console.log('like');
  };

  const handleFavorite = () => {
    navigation.goBack();
    console.log('like');
  };

  if (loading) return <ScreenLoader />;

  return (
    <Container>
      <ProductCard product={data.product} />
      <Space />
      <ButtonsFooter
        likeAction={() => handleLike()}
        dislikeAction={() => console.log('DislikeAction')}
        favoriteAction={() => console.log('FavoriteAction')}
      />
    </Container>
  );
}
