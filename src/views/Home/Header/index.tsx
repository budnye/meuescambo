import React from 'react';

import { Container, Title, Icon, IconButton, LogoBox, ButtonsBox } from './styles';

export function Header(){
  return(
    <Container>
      <LogoBox>
        <Icon name="refresh"/><Title>meu escambo</Title>
      </LogoBox>
      <ButtonsBox>
        <IconButton name="bell"/>
        <IconButton name="comments"/>
      </ButtonsBox>
    </Container>
  );
};