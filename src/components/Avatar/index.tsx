import React from 'react';

import { Container, Title, ImgBox, AvatarImg, Loader } from './styles';

export interface AvatarProps {
  source: any;
}

export function Avatar({ source, loading }: AvatarProps) {
  return (
    <Container>
      <ImgBox>{!loading ? <AvatarImg source={source} /> : <Loader />}</ImgBox>
    </Container>
  );
}
