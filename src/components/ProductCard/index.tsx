import React, { useCallback, useEffect } from 'react';
import {
  Container,
  Image,
  ImgBox,
  InfoBox,
  ImageTitle,
  ImageInfo,
  LocationBox,
  LocationIcon,
} from './styles';

interface CardProps {
  product: any;
}

export function ProductCard({ product }: CardProps) {
  return (
    <Container>
      <ImgBox>
        <Image source={{ uri: product.image_url }} />
        <InfoBox colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}>
          <ImageTitle>{product.name}</ImageTitle>
          <LocationBox>
            <LocationIcon name="location-arrow" />
            <ImageInfo>{product.description}</ImageInfo>
          </LocationBox>
        </InfoBox>
      </ImgBox>
    </Container>
  );
}
