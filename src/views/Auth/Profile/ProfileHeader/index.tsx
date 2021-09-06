import React from 'react';
import { ProfileProps } from '..';
import { Avatar } from '../../../../components/Avatar';

import {
  Container,
  TopBox,
  ImageBox,
  HeaderButton,
  ButtonsHeader,
  ButtonIcon,
} from './styles';



export function ProfileHeader({ editProfile, edit }: ProfileProps) {
  return(
    <Container>
      <TopBox >
      <ButtonsHeader >
        <HeaderButton onPress={()=> editProfile(!edit)}>
          <ButtonIcon name={edit ? 'check' : 'edit'}/>
        </HeaderButton>
      </ButtonsHeader>
      </TopBox>
      <ImageBox>
        <Avatar source={require(`../../../../assets/avatar/Dog_7.png`)} />
      </ImageBox>
    </Container>
  );
};