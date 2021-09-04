import React from 'react';
import {
  Container,
  Image,
  Footer,
  ImgBox,
  InfoBox,
  ImageTitle,
  ImageInfo,
  LocationBox,
  LocationIcon,
} from './styles';
import { CardButton } from '../CardButton';
import theme from '../../global/styles/theme';
interface CardProps {
  // id?: string;
  title: string;
  image: string;
}
export function MainCard({ title, image }: CardProps) {
  return (
    <Container>
      <ImgBox>
        <Image source={{ uri: image }} />
        <InfoBox colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}>
          <ImageTitle>{title}</ImageTitle>
          <LocationBox>
            <LocationIcon name="location-arrow" />
            <ImageInfo>Criciúma, 10km de distância</ImageInfo>
          </LocationBox>
        </InfoBox>
      </ImgBox>
      <Footer>
        <CardButton name="close" color={theme.colors.danger} />
        <CardButton name="star" color={theme.colors.info} type="small" />
        <CardButton name="heart" color={theme.colors.success} />
      </Footer>
    </Container>
  );
}
