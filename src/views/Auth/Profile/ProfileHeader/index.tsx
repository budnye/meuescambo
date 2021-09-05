import React from 'react';
import { Avatar } from '../../../../components/Avatar';


import {
  Container,
  Title,
  TopBox,
  LocationBox,
  LocationIcon,
  LocationInfo,
  ImageBox,
  InfoBox
} from './styles';

export function ProfileHeader(){
  const avatarNmme = 'Dog_25.png'
  return(
    <Container>
      <TopBox />
      <ImageBox>
        <Avatar source={require(`../../../../assets/avatar/${avatarNmme}`)} />
      </ImageBox>
      <InfoBox>
      <Title>Eduardo Budny</Title>
      <LocationBox>
        <LocationIcon name="location-arrow"/><LocationInfo>Criciuma - SC</LocationInfo>
      </LocationBox>
      </InfoBox>
    </Container>
  );
};