import React from 'react';
import { Avatar } from '../../../../components/Avatar';

import {
  Container,
  TopBox,
  ImageBox,
} from './styles';


export function ProfileHeader(){

  const avatarNmme = 'Dog_7.png'
  return(
    <Container>
      <TopBox />
      <ImageBox>
        <Avatar source={require(`../../../../assets/avatar/${avatarNmme}`)} />
      </ImageBox>
    </Container>
  );
};