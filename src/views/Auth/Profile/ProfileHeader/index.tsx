import React from 'react';
import { ProfileProps } from '..';
import { Avatar } from '../../../../components/Avatar';
import { CameraIcon } from '../../../../components/CameraIcon';
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
          {user?.avatar ? (
            <Avatar loading={loading} source={{ uri: activeImage }} />
          ) : (
            <CameraIcon />
          )}
        </ImageBox>
      </HeaderBox>
      <InfoBox>
        <Title>{user.name}</Title>
        <UserInfo>{user.email}</UserInfo>
      </InfoBox>
    </Container>
  );
}
