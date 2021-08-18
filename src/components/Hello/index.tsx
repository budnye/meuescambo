import React from 'react';

import { 
  Container, 
  Greeting, 
  InfoText, 
  TopBox, 
  TitleBox,
  Footer,
  FooterInfo, 
} from './styles';

export function Hello(){
  return(
    <Container>
      <TopBox />
      <TitleBox>
          <Greeting>Seja bem-vindo!</Greeting>
          <InfoText>Registre seus produtos e serviços e encontre pessoas para fazer o seu escambo :)</InfoText>
        </TitleBox>
        <Footer>
          <FooterInfo>Entenda como funciona</FooterInfo>
        </Footer>
    </Container>
  );
};