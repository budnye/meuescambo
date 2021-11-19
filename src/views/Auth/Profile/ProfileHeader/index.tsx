import React from 'react';
import { ProfileProps } from '..';
import { Avatar } from '../../../../components/Avatar';
import { ScreenLoader } from '../../../../components/ScreenLoader';

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

export function ProfileHeader({
  editProfile,
  edit,
  user,
  activeImage,
  loading,
}: ProfileProps) {
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
            loading={loading}
            source={
              user.avatar
                ? { uri: activeImage }
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
