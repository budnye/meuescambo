import React from 'react';
import { GalleryCard } from '../GalleryCard';

import { Container, Title } from './styles';

export function Gallery({ items }) {
  const renderItem = ({ item }) => <GalleryCard product={item} />;
  if (items)
    return (
      <Container
        data={items}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
}
