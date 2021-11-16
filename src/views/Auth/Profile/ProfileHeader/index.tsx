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
  Title,
  InfoBox,
  UserInfo,
  HeaderBox,
} from './styles';

export function ProfileHeader({ editProfile, edit, user }: ProfileProps) {
  return (
    <Container>
      <HeaderBox>
        <TopBox>
          <ButtonsHeader>
            {/* <HeaderButton onPress={()=> editProfile(!edit)}>
          <ButtonIcon name={edit ? 'check' : 'edit'}/>
        </HeaderButton> */}
          </ButtonsHeader>
        </TopBox>
        <ImageBox onPress={() => editProfile()}>
          <Avatar
            source={
              user.avatar
                ? { uri: user.avatar }
                : require(`../../../../assets/avatar/Dog_7.png`)
            }
          />
        </ImageBox>
      </HeaderBox>
      <InfoBox>
        <Title>{user.name}</Title>
        <UserInfo>{user.email}</UserInfo>
      </InfoBox>
    </Container>
  );
}
