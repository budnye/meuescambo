import React, { useCallback, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ChoiceCard } from '../ChoiceCard';
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
  // id?: string;
  title: string;
  image: string;
  isFirst: boolean;
  swipe: any
  titlSign: any;
}



export function MainCard({ title, image, isFirst, swipe, titlSign, ...rest }: CardProps) {
  
  const range = 100;

  const likeOpacity = swipe.x.interpolate({
    inputRange: [ 25, range],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = swipe.x.interpolate({
    inputRange: [-range, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    console.log(likeOpacity)
  }, [likeOpacity])
    

  const renderChoice = useCallback(
    () => {
      return (
        <>
          <ChoiceCard type="like" opacity={likeOpacity}/>
          <ChoiceCard type="dislike" opacity={dislikeOpacity}/>
        </>
      )
    },
    [],
  )

  const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
    inputRange: [-range, 0, range],
    outputRange: ['8deg', '0deg', '-8deg'],
  });



  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  }
  return (
    <Container {...rest} style={[isFirst && animatedCardStyle]}>
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
      {isFirst && renderChoice()}
    </Container>
  );
}
