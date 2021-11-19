import React from 'react';
import { LottieMessage } from '../../../../components/LottieMessage';
import { GalleryCard } from '../GalleryCard';

import { Container, Title, Box } from './styles';

export function Gallery({ items, searchTerm, navigation }) {
  const renderItem = ({ item }) => (
    <GalleryCard product={item} navigation={navigation} />
  );
  if (items.length >= 1)
    return (
      <Container
        data={items}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  if (items.length === 0)
    return (
      <Box>
        <LottieMessage
          title="Ops!"
          message="Nenhum produto encontrado!"
          lottie={require('../../../../assets/lottie/notFound.json')}
          path="Search"
          navigation={navigation}
        />
      </Box>
    );
}
