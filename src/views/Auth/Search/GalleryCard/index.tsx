import React from 'react';

import { Container, Title, Image } from './styles';

export function GalleryCard({ product, navigation }) {
  return (
    <Container
      onPress={() => navigation.navigate('ProductModal', { id: product.id })}
    >
      <Image source={{ uri: product.image_url }} />
    </Container>
  );
}
