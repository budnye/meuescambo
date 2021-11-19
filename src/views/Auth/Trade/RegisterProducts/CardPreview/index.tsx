import React from 'react';

import { Container, Title, Card, Image, CameraIcon } from './styles';
interface CardProps {
  title: string;
  image?: string | null;
  onPress: () => void;
}

export function CardPreview({ title, image, onPress }: CardProps) {
  return (
    <Container onPress={() => onPress()}>
      <Card>
        {image ? (
          <Image source={{ uri: image }} />
        ) : (
          <CameraIcon name="camera" />
        )}
      </Card>
    </Container>
  );
}
