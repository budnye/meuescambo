import React from 'react';
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
        <Title>{`Nenhum produto encontrado com o termo ${searchTerm}`}</Title>
      </Box>
    );
}
