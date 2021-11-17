import React from 'react';

import { Container, Title, Image } from './styles';

export function GalleryCard({ product }) {
  return (
    <Container>
      <Image source={{ uri: product.image_url }} />
    </Container>
  );
}
