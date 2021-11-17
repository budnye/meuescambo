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

  const [likeAction] = useMutation(LIKE_ACTION);
  const [dislikeAction] = useMutation(DISLIKE_ACTION);

  const handleLike = async () => {
    try {
      await likeAction({ variables: { id } });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiskike = async () => {
    try {
      await dislikeAction({ variables: { id } });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
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
        dislikeAction={() => handleDiskike()}
        favoriteAction={() => console.log('FavoriteAction')}
      />
    </Container>
  );
}
