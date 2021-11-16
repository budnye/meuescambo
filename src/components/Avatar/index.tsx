import React from 'react';

import { Container, Title, ImgBox, AvatarImg } from './styles';

export interface AvatarProps {
  source: any;
}

export function Avatar({ source }: AvatarProps) {
  return (
    <Container>
      <ImgBox>
        <AvatarImg source={source} />
      </ImgBox>
    </Container>
  );
}
